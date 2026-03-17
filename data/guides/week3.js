export const week3Guide = {
  intro:
    "This guide covers all the Week 3 material: the lecture on Time & Coordination in Distributed Systems (clock synchronization, Cristian's algorithm, Berkeley algorithm, NTP, Lamport clocks, vector clocks) and the seminar on mutual exclusion in centralized and decentralized distributed systems.",

  sections: [
    // ===== SECTION 1 =====
    {
      title: "Why Time Matters in Distributed Systems",
      subtitle: "The fundamental challenge of keeping time across nodes",
      blocks: [
        {
          type: "text",
          content:
            "In a distributed system there is no single global clock. Each node has its own local clock, and these clocks inevitably drift apart. Accurate timekeeping is essential for measuring delays, ordering events, synchronizing streams, timestamping transactions, and enforcing security protocols.",
        },
        {
          type: "list",
          title: "Key reasons we care about time:",
          items: [
            "Measuring delays between distributed components",
            "Ordering events to achieve a consistent global state",
            "Synchronizing real-time streams (e.g. audio and video)",
            "Accurately timestamping business transactions",
            "Security protocols that depend on time (e.g. token expiry, certificate validity)",
          ],
        },
        {
          type: "keypoint",
          content:
            "Without synchronized clocks, an event that occurred after another may be assigned an earlier time — leading to incorrect ordering and inconsistent state.",
        },
      ],
    },

    // ===== SECTION 2 =====
    {
      title: "Clock Skew and Clock Drift",
      subtitle: "Understanding why clocks disagree",
      blocks: [
        {
          type: "definition",
          term: "Clock Skew",
          content:
            "The instantaneous difference between the values of two clocks at any given moment. If clock A reads 10:00:00 and clock B reads 10:00:03, the skew is 3 seconds.",
        },
        {
          type: "definition",
          term: "Clock Drift",
          content:
            "The rate at which a clock deviates from a reference clock over time. Drift rate is expressed as the difference per unit of time from an ideal reference clock.",
        },
        {
          type: "definition",
          term: "Coordinated Universal Time (UTC)",
          content:
            "The international time standard used as the reference for clock synchronization. UTC signals are broadcast by atomic clocks run by government agencies.",
        },
        {
          type: "keypoint",
          content:
            "Even high-quality clocks drift. The goal of synchronization algorithms is to keep skew within acceptable bounds, not to eliminate it entirely.",
        },
      ],
    },

    // ===== SECTION 3 =====
    {
      title: "Types of Clock Synchronization",
      subtitle: "External vs internal synchronization",
      blocks: [
        {
          type: "definition",
          term: "External Synchronization",
          content:
            "Each clock Ci is synchronized to an authoritative external source S (e.g. UTC) such that |S(t) − Ci(t)| < D for all clocks over an interval I.",
        },
        {
          type: "definition",
          term: "Internal Synchronization",
          content:
            "Clocks are synchronized with each other (no external reference required) such that |Ci(t) − Cj(t)| < D for every pair of clocks over an interval I.",
        },
        {
          type: "keypoint",
          content:
            "External synchronization implies internal synchronization (if all clocks are within D of UTC, they are within 2D of each other), but the reverse is not true.",
        },
      ],
    },

    // ===== SECTION 4 =====
    {
      title: "Synchronous vs Asynchronous Systems",
      subtitle: "Known bounds vs unbounded delays",
      blocks: [
        {
          type: "definition",
          term: "Synchronous System",
          content:
            "A system with known upper bounds on: clock drift rate, maximum message transmission delay, and time to execute each processing step.",
        },
        {
          type: "text",
          content:
            "In a synchronous system, process p1 can send its local time t to p2, and p2 can set its clock to t + Ttrans. Since max delay is known, uncertainty u = max − min, and setting the clock to t + (max + min)/2 gives a maximum skew of u/2.",
        },
        {
          type: "keypoint",
          content:
            "Most real distributed systems (e.g. the Internet) are asynchronous — message delays have no known upper bound, making synchronization harder.",
        },
      ],
    },

    // ===== SECTION 5 =====
    {
      title: "Cristian's Algorithm",
      subtitle: "External synchronization using round-trip time",
      blocks: [
        {
          type: "text",
          content:
            "Cristian's algorithm synchronizes a client's clock with a time server that has access to a UTC source. It uses the round-trip time of the request to estimate network delay.",
        },
        {
          type: "list",
          title: "How it works:",
          items: [
            "Client records t0 (time request sent) and t1 (time reply received)",
            "Server returns its current time in the reply",
            "Client estimates one-way delay as (t1 − t0) / 2",
            "Client sets its clock to server_time + (t1 − t0) / 2",
            "Accuracy: ±((t1 − t0)/2 − min) where min is the known minimum transit time",
          ],
        },
        {
          type: "list",
          title: "Limitations:",
          items: [
            "Single time server is a single point of failure",
            "Does not deal with faulty servers",
            "Assumes symmetric network delays (may not hold in practice)",
          ],
        },
      ],
    },

    // ===== SECTION 6 =====
    {
      title: "The Berkeley Algorithm",
      subtitle: "Internal synchronization by averaging",
      blocks: [
        {
          type: "text",
          content:
            "The Berkeley algorithm is an internal synchronization method where a master node polls all other nodes (slaves), estimates their clock values using round-trip times, computes an average, and sends adjustments.",
        },
        {
          type: "list",
          title: "Steps:",
          items: [
            "Master polls all slaves for their clock values",
            "Master estimates each slave's actual time using round-trip measurements",
            "Master computes the average time across all nodes",
            "Master sends each node the adjustment needed (+ or −) to reach the average",
          ],
        },
        {
          type: "list",
          title: "Key features:",
          items: [
            "Faulty clock readings can be eliminated using a fault-tolerant average",
            "If the master fails, a new master can be elected to take over",
            "No external time source is required",
          ],
        },
        {
          type: "comparison",
          items: [
            {
              title: "Cristian's",
              points: [
                "External synchronization (uses UTC)",
                "Client-server model",
                "Single point of failure",
              ],
            },
            {
              title: "Berkeley",
              points: [
                "Internal synchronization (average of peers)",
                "Master-slave model with election",
                "Fault-tolerant average eliminates bad clocks",
              ],
            },
          ],
        },
      ],
    },

    // ===== SECTION 7 =====
    {
      title: "Network Time Protocol (NTP)",
      subtitle: "Internet-scale time synchronization",
      blocks: [
        {
          type: "text",
          content:
            "NTP is the standard protocol for time synchronization across the Internet. It uses a hierarchical system of time sources organized into strata, where stratum 1 servers connect directly to reference clocks (UTC/atomic clocks).",
        },
        {
          type: "list",
          title: "Stratum hierarchy:",
          items: [
            "Stratum 1: Primary servers connected directly to UTC reference clocks",
            "Stratum 2: Synchronized to stratum 1 servers",
            "Stratum 3: Synchronized to stratum 2 servers, and so on",
            "Higher stratum numbers are generally less accurate",
          ],
        },
        {
          type: "list",
          title: "Three modes of synchronization:",
          items: [
            "Multicast — suitable for high-speed LANs",
            "Procedure-call — similar to Cristian's algorithm",
            "Symmetric — between pairs of servers for highest accuracy",
          ],
        },
        {
          type: "list",
          title: "Key properties:",
          items: [
            "All modes use UDP messages",
            "Reconfigurable, fault-tolerant logical hierarchy",
            "Scalable for both clients and servers",
            "Supports authentication of trusted servers",
            "Accuracy: ~10ms over Internet, ~1ms on LANs",
          ],
        },
      ],
    },

    // ===== SECTION 8 =====
    {
      title: "Logical Time and the Happened-Before Relation",
      subtitle: "Ordering events without physical clocks",
      blocks: [
        {
          type: "text",
          content:
            "Since physical clocks cannot be perfectly synchronized, Lamport (1978) introduced the concept of logical time. Instead of asking 'what time did this happen?', we ask 'did this happen before that?' — focusing on causal ordering of events.",
        },
        {
          type: "definition",
          term: "Happened-Before Relation (→)",
          content:
            "A partial order on events. e → e' means e causally precedes e'. This holds if: (1) e and e' are at the same process and e occurs first, or (2) e is a send and e' is the corresponding receive, or (3) transitivity: e → e'' and e'' → e'.",
        },
        {
          type: "definition",
          term: "Concurrent Events (||)",
          content:
            "Two events a and b are concurrent (a || b) if neither a → b nor b → a. There is no causal relationship between them.",
        },
        {
          type: "keypoint",
          content:
            "The happened-before relation is a partial order — not all events can be ordered. Events at different processes with no message chain connecting them are concurrent.",
        },
      ],
    },

    // ===== SECTION 9 =====
    {
      title: "Lamport's Logical Clocks",
      subtitle: "Simple counters that respect causal order",
      blocks: [
        {
          type: "text",
          content:
            "A Lamport clock is a monotonically increasing counter maintained by each process. It provides a way to assign timestamps that are consistent with the happened-before relation.",
        },
        {
          type: "list",
          title: "Rules:",
          items: [
            "LC1: Before each event at process pi, increment Li by 1",
            "LC2a: When pi sends a message m, piggyback t = Li onto the message",
            "LC2b: When pj receives (m, t), set Lj := max(Lj, t) then apply LC1 (increment before timestamping the receive event)",
          ],
        },
        {
          type: "keypoint",
          content:
            "If e → e' then L(e) < L(e'). However, the converse is NOT true: L(e) < L(e') does not imply e → e'. Lamport clocks cannot detect concurrency.",
        },
      ],
    },

    // ===== SECTION 10 =====
    {
      title: "Vector Clocks",
      subtitle: "Detecting concurrency with arrays of counters",
      blocks: [
        {
          type: "text",
          content:
            "Vector clocks overcome Lamport clocks' limitation by maintaining an array of N integers (one per process) at each process. This allows detection of both causal ordering and concurrency.",
        },
        {
          type: "list",
          title: "Rules:",
          items: [
            "VC1: Initially Vi[j] = 0 for all i, j",
            "VC2: Before pi timestamps an event, set Vi[i] := Vi[i] + 1",
            "VC3: pi includes t = Vi on every message it sends",
            "VC4: When pi receives (m, t), set Vi[j] := max(Vi[j], t[j]) for all j, then apply VC2",
          ],
        },
        {
          type: "list",
          title: "Comparing vector timestamps:",
          items: [
            "V(a) ≤ V(b) if V(a)[i] ≤ V(b)[i] for all i",
            "V(a) < V(b) if V(a) ≤ V(b) and V(a) ≠ V(b) — meaning a → b",
            "If neither V(a) ≤ V(b) nor V(b) ≤ V(a), then a || b (concurrent)",
          ],
        },
        {
          type: "comparison",
          items: [
            {
              title: "Lamport Clocks",
              points: [
                "Single integer counter per process",
                "e → e' implies L(e) < L(e')",
                "L(e) < L(e') does NOT imply e → e'",
                "Cannot detect concurrency",
              ],
            },
            {
              title: "Vector Clocks",
              points: [
                "Array of N integers per process",
                "e → e' if and only if V(e) < V(e')",
                "Can detect concurrency by comparing arrays",
                "Higher overhead (O(N) per message)",
              ],
            },
          ],
        },
      ],
    },

    // ===== SECTION 11 =====
    {
      title: "Mutual Exclusion in Distributed Systems",
      subtitle: "Ensuring only one process accesses a shared resource at a time",
      blocks: [
        {
          type: "text",
          content:
            "Mutual exclusion ensures that only one process can access a shared resource (e.g. a file, database, or printer) at a time, preventing conflicts. In distributed systems, this is harder than in single-machine systems because there is no shared memory or single kernel to coordinate access.",
        },
        {
          type: "keypoint",
          content:
            "Synchronization is a necessary part of cooperation: sharing resources, ordering events, and reaching distributed agreement all require some form of mutual exclusion.",
        },
      ],
    },

    // ===== SECTION 12 =====
    {
      title: "Centralized Mutual Exclusion",
      subtitle: "A coordinator controls access to resources",
      blocks: [
        {
          type: "list",
          title: "How it works:",
          items: [
            "A central coordinator (server) manages access to the resource",
            "A process sends a request to the coordinator",
            "If the resource is free, the coordinator grants access; otherwise it queues the request",
            "Once the process finishes, it notifies the coordinator, which grants access to the next in line",
          ],
        },
        {
          type: "comparison",
          items: [
            {
              title: "Pros",
              points: [
                "Simple to implement",
                "Fair — requests are served in order",
                "Avoids conflicts reliably",
              ],
            },
            {
              title: "Cons",
              points: [
                "Single point of failure — if the coordinator crashes, the whole system stops",
                "Bottleneck under high load",
              ],
            },
          ],
        },
      ],
    },

    // ===== SECTION 13 =====
    {
      title: "Decentralized Mutual Exclusion",
      subtitle: "No single coordinator — nodes cooperate",
      blocks: [
        {
          type: "text",
          content:
            "In decentralized systems there is no single coordinator. Instead, multiple nodes work together using distributed algorithms to enforce mutual exclusion.",
        },
        {
          type: "list",
          title: "Two main approaches:",
          items: [
            "Voting-Based: A process sends requests to multiple nodes and must receive a majority vote before accessing the resource",
            "Token-Based: A unique token is circulated among processes; only the holder can access the resource",
          ],
        },
        {
          type: "comparison",
          items: [
            {
              title: "Voting-Based",
              points: [
                "No single point of failure",
                "Requires majority agreement",
                "Slower due to multiple message rounds",
              ],
            },
            {
              title: "Token-Based",
              points: [
                "Only one message needed to transfer access",
                "Faster than voting",
                "Risk of token loss — needs recovery mechanism",
              ],
            },
          ],
        },
      ],
    },

    // ===== SECTION 14 =====
    {
      title: "Summary: Time and Coordination",
      subtitle: "Key takeaways from Week 3",
      blocks: [
        {
          type: "list",
          title: "Core concepts:",
          items: [
            "Accurate timekeeping is important but inherently imperfect in distributed systems",
            "Synchronization algorithms (Cristian's, Berkeley, NTP) keep clocks approximately in sync",
            "The happened-before relation is a partial order that captures causal relationships",
            "Lamport clocks provide causal ordering but cannot detect concurrency",
            "Vector clocks extend Lamport clocks to detect both ordering and concurrency",
            "Mutual exclusion can be centralized (simple but fragile) or decentralized (robust but complex)",
          ],
        },
      ],
    },
  ],
};

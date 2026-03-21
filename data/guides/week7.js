export const week7Guide = {
  intro:
    "This guide covers all the Week 7 material: Fault Tolerance in Distributed Systems — types of failures, replication and redundancy techniques, checkpointing and recovery, consensus algorithms (Paxos, Raft, BFT), failure detection mechanisms, and an introduction to Edge and Fog Computing.",

  sections: [
    // ===== SECTION 1 =====
    {
      title: "What Is Fault Tolerance?",
      subtitle: "Handling failures to maintain system reliability",
      blocks: [
        {
          type: "definition",
          term: "Fault Tolerance",
          content:
            "The system's ability to continue operating correctly despite failures. Fault tolerance isn't about eliminating failures — it's about handling them efficiently to maintain system reliability.",
        },
        {
          type: "text",
          content:
            "Distributed systems consist of multiple nodes and networks, where failures are inevitable due to hardware issues, software bugs, or network disruptions. Because no individual component can be guaranteed to be perfectly reliable, the system as a whole must be designed to tolerate partial failures.",
        },
        {
          type: "list",
          title: "Real-world examples of fault tolerance:",
          items: [
            "Google Cloud & AWS — use replication to handle hardware failures transparently",
            "Bitcoin & Blockchain — use decentralised consensus to prevent fraudulent transactions despite malicious nodes",
            "Airline Reservation Systems — use transactional checkpoints to avoid data loss during failures",
            "Amazon EC2 Auto-Scaling — detects failing servers and launches replacements automatically",
          ],
        },
        {
          type: "keypoint",
          content:
            "Fault tolerance is what separates a production-grade distributed system from a fragile one. The goal is not to prevent every failure but to ensure the system keeps working correctly when failures inevitably occur.",
        },
      ],
    },

    // ===== SECTION 2 =====
    {
      title: "Types of Failures in Distributed Systems",
      subtitle: "Five failure modes you must know",
      blocks: [
        {
          type: "definition",
          term: "Crash Failure",
          content:
            "A node completely stops responding — it halts and produces no further output. Example: a database server crashing mid-transaction due to a power failure.",
        },
        {
          type: "definition",
          term: "Omission Failure",
          content:
            "Messages are lost or dropped in transmission — the sender sends but the receiver never receives (or vice versa). Example: network congestion causing a lost request to an API.",
        },
        {
          type: "definition",
          term: "Timing Failure",
          content:
            "A system responds, but too late or too early — outside the expected time bounds. Example: a banking system failing to process transactions in real time, causing timeouts.",
        },
        {
          type: "definition",
          term: "Byzantine Failure",
          content:
            "The most severe failure type — a node behaves incorrectly or maliciously, sending inconsistent or false data to different nodes. Example: a hacked node in a blockchain network broadcasting fake transactions.",
        },
        {
          type: "definition",
          term: "Network Partition",
          content:
            "Some nodes become isolated from others due to network issues — the network splits into groups that cannot communicate. Example: a cloud region disconnecting from a global system.",
        },
        {
          type: "keypoint",
          content:
            "Byzantine failures are the hardest to handle because the faulty node is actively producing incorrect output — it is not simply silent. Standard crash-fault-tolerant algorithms (like Paxos and Raft) do NOT handle Byzantine failures.",
        },
      ],
    },

    // ===== SECTION 3 =====
    {
      title: "Replication and Redundancy",
      subtitle: "Keeping copies so the system survives individual failures",
      blocks: [
        {
          type: "text",
          content:
            "Replication and redundancy are the primary techniques for building fault-tolerant systems. The idea is simple: if one copy fails, other copies can take over.",
        },
        {
          type: "definition",
          term: "Primary-Backup Model (Passive Replication)",
          content:
            "One primary node handles all requests; multiple backup nodes are kept in sync. If the primary fails, a backup takes over. Simple and efficient, but there is a brief period of unavailability during failover.",
        },
        {
          type: "definition",
          term: "Quorum-Based Replication",
          content:
            "A majority agreement (quorum) is required before an update is committed. For example, in a 5-node system, at least 3 nodes must agree before a write is accepted. Ensures consistency even if some nodes fail.",
        },
        {
          type: "comparison",
          leftTitle: "Active Replication",
          rightTitle: "Passive Replication",
          leftItems: [
            "All nodes run in parallel and process every request",
            "No failover delay — any node can immediately take over",
            "Higher resource usage (all nodes working)",
            "Better for very high availability requirements",
          ],
          rightItems: [
            "One primary node; others act as warm backups",
            "Brief unavailability during failover",
            "More efficient (only one node processing at a time)",
            "Used by Google Drive, Dropbox",
          ],
        },
        {
          type: "definition",
          term: "Voting Mechanisms",
          content:
            "Used in databases to ensure consensus before committing transactions. Multiple replicas vote on whether to accept an update; the transaction only proceeds if a majority agrees.",
        },
        {
          type: "keypoint",
          content:
            "Google Drive and Dropbox use passive replication — multiple copies of data are stored in different locations. If one data centre fails, another copy is instantly accessible.",
        },
      ],
    },

    // ===== SECTION 4 =====
    {
      title: "Checkpointing and Recovery",
      subtitle: "Saving state so the system can recover after failures",
      blocks: [
        {
          type: "definition",
          term: "Checkpointing",
          content:
            "Saving the system's state periodically so it can be restored after a failure. A checkpoint captures a consistent snapshot of the system at a particular point in time.",
        },
        {
          type: "definition",
          term: "Rollback Recovery",
          content:
            "Restoring system state from a previous checkpoint after a failure. The system rolls back to the last known-good state and replays operations from that point.",
        },
        {
          type: "definition",
          term: "Message Logging",
          content:
            "Storing records of all messages sent/received so they can be replayed after a crash. Combined with checkpointing, allows recovery without losing work done since the last checkpoint.",
        },
        {
          type: "definition",
          term: "Self-Healing Systems",
          content:
            "Using Machine Learning to monitor key system variables and predict failures before they occur — resolving issues proactively rather than reactively. The system learns what 'healthy' looks like and intervenes when patterns indicate risk.",
        },
        {
          type: "keypoint",
          content:
            "Airline Reservation Systems use transactional checkpoints to avoid data loss — if a booking transaction fails mid-way, the system rolls back to the last checkpoint rather than leaving the database in an inconsistent state.",
        },
      ],
    },

    // ===== SECTION 5 =====
    {
      title: "The Consensus Problem",
      subtitle: "How distributed nodes agree despite failures",
      blocks: [
        {
          type: "text",
          content:
            "The consensus problem asks: how do distributed nodes agree on a single value, even when some nodes fail? This is fundamental to replicated systems — all replicas must agree on the same sequence of operations to stay consistent.",
        },
        {
          type: "keypoint",
          content:
            "Consensus is harder than it looks. The FLP impossibility result (Fischer, Lynch, Paterson, 1985) proved that in a purely asynchronous system, no deterministic consensus algorithm can guarantee termination if even one node can crash. Real algorithms work around this by using timeouts and leader election.",
        },
        {
          type: "list",
          title: "Requirements for a consensus algorithm:",
          items: [
            "Agreement — all non-faulty nodes decide on the same value",
            "Validity — the decided value must have been proposed by some node",
            "Termination — all non-faulty nodes eventually decide",
          ],
        },
      ],
    },

    // ===== SECTION 6 =====
    {
      title: "Consensus Algorithms: Paxos and Raft",
      subtitle: "Crash-fault-tolerant consensus",
      blocks: [
        {
          type: "definition",
          term: "Paxos (Leslie Lamport, 1998)",
          content:
            "Ensures agreement in unreliable networks where nodes can crash. Uses a leader (proposer) to drive agreement through two phases: Prepare/Promise and Accept/Accepted. Handles crash failures but does NOT handle Byzantine failures. Known for being correct but notoriously difficult to understand and implement.",
        },
        {
          type: "definition",
          term: "Raft (Diego Ongaro & John Ousterhout, 2013)",
          content:
            "Designed to be more understandable than Paxos while providing equivalent guarantees. Uses a leader election mechanism — one node is elected leader and coordinates all log replication. Used in Kubernetes for leader election. Does NOT handle Byzantine failures.",
        },
        {
          type: "comparison",
          leftTitle: "Paxos",
          rightTitle: "Raft",
          leftItems: [
            "Proposed by Leslie Lamport, 1998",
            "Correct but complex to understand",
            "Leader-based (proposer role)",
            "Does not handle Byzantine failures",
          ],
          rightItems: [
            "Proposed by Ongaro & Ousterhout, 2013",
            "Designed for understandability",
            "Explicit leader election + log replication",
            "Used in Kubernetes; does not handle Byzantine failures",
          ],
        },
        {
          type: "keypoint",
          content:
            "Neither Paxos nor Raft can handle Byzantine failures — they assume nodes can crash but not act maliciously. For Byzantine fault tolerance, a different class of algorithm is required.",
        },
      ],
    },

    // ===== SECTION 7 =====
    {
      title: "Byzantine Fault Tolerance (BFT)",
      subtitle: "Handling malicious or arbitrarily faulty nodes",
      blocks: [
        {
          type: "definition",
          term: "Byzantine Fault Tolerance (BFT)",
          content:
            "A class of consensus algorithms that can handle nodes behaving arbitrarily incorrectly — including sending contradictory messages to different nodes or acting maliciously. Proposed by Barbara Liskov and Miguel Castro (Practical BFT, 1999).",
        },
        {
          type: "text",
          content:
            "BFT requires a minimum of 3f + 1 nodes to tolerate f Byzantine failures. For example, to tolerate 1 Byzantine node, you need at least 4 nodes total. This is more expensive than crash-fault-tolerant systems (which only need 2f + 1 nodes for f crash failures).",
        },
        {
          type: "keypoint",
          content:
            "Bitcoin's blockchain uses Byzantine Fault Tolerance to prevent double-spending. Even if some nodes in the network are controlled by attackers, the honest majority can still agree on the correct transaction history.",
        },
        {
          type: "list",
          title: "When BFT is needed vs not needed:",
          items: [
            "BFT needed: blockchain networks (untrusted nodes), safety-critical systems, any system where nodes may be compromised",
            "Paxos/Raft sufficient: data centres where all nodes are trusted (crash failures only)",
            "Cost of BFT: requires more nodes, more message rounds, and more computational overhead",
          ],
        },
      ],
    },

    // ===== SECTION 8 =====
    {
      title: "Failure Detection Mechanisms",
      subtitle: "How systems know when a node has failed",
      blocks: [
        {
          type: "definition",
          term: "Heartbeat Mechanisms",
          content:
            "Nodes send periodic 'alive' signals (heartbeats) to other nodes or a monitor. If a heartbeat is not received within a timeout, the node is suspected to have failed.",
        },
        {
          type: "definition",
          term: "Timeout-Based Detection",
          content:
            "If no response is received from a node within a defined time limit, that node is marked as failed. Simple but imprecise — a slow response due to network congestion may be misinterpreted as a crash.",
        },
        {
          type: "definition",
          term: "Gossip Protocols",
          content:
            "Nodes spread failure information throughout the system by 'gossiping' — each node periodically shares its view of which nodes are alive/dead with a random selection of peers. Information propagates exponentially. Used in large-scale systems where centralised monitoring is impractical.",
        },
        {
          type: "keypoint",
          content:
            "Amazon EC2 Auto-Scaling uses timeout-based failure detection — it detects failing servers and automatically launches replacements. This demonstrates self-stabilization: the system heals itself without human intervention.",
        },
        {
          type: "definition",
          term: "Self-Stabilization",
          content:
            "The ability of a distributed system to recover from any transient fault or incorrect state and eventually return to a correct state — without external intervention.",
        },
      ],
    },

    // ===== SECTION 9 =====
    {
      title: "Edge Computing",
      subtitle: "Processing data directly at the source",
      blocks: [
        {
          type: "definition",
          term: "Edge Computing",
          content:
            "Processing happens directly on edge devices — IoT sensors, cameras, phones, microcontrollers. It is the closest tier to the data source, enabling ultra-low latency and immediate reaction without sending data to the network.",
        },
        {
          type: "list",
          title: "Examples of edge actions:",
          items: [
            "A traffic sensor detects a pedestrian and immediately triggers a flashing warning",
            "A camera identifies a car running a red light and logs the event locally",
            "A pollution sensor measures air quality and alerts immediately if levels spike",
          ],
        },
        {
          type: "list",
          title: "Why use edge computing?",
          items: [
            "Ultra-low latency — immediate reaction, no round-trip to the network",
            "Bandwidth saving — only results, not raw data, are transmitted",
            "Privacy — sensitive data can be processed locally without leaving the device",
          ],
        },
        {
          type: "keypoint",
          content:
            "Edge computing is most appropriate when decisions must be made in milliseconds — autonomous vehicles, industrial robotics, and real-time safety systems cannot afford the latency of a round-trip to the cloud.",
        },
      ],
    },

    // ===== SECTION 10 =====
    {
      title: "Fog Computing",
      subtitle: "Regional coordination between edge and cloud",
      blocks: [
        {
          type: "definition",
          term: "Fog Computing",
          content:
            "Computing resources placed closer to the network edge, often in local gateways or routers. Fog sits between edge devices and the cloud — it collects data from multiple sensors across a neighbourhood, junction, or district and performs localised analytics.",
        },
        {
          type: "list",
          title: "Examples of fog actions:",
          items: [
            "A fog node monitors all nearby intersections and adjusts their light timings dynamically",
            "Aggregates high-volume camera data to detect congestion patterns",
            "Filters and cleans sensor data before sending only useful information to the cloud",
          ],
        },
        {
          type: "list",
          title: "Why use fog computing?",
          items: [
            "More computing power than edge devices — can handle complex analytics",
            "Localised decision-making — faster than sending data to the cloud",
            "Reduced cloud load — only relevant, filtered data reaches the cloud",
          ],
        },
      ],
    },

    // ===== SECTION 11 =====
    {
      title: "Edge vs Fog vs Cloud",
      subtitle: "The three-tier processing hierarchy",
      blocks: [
        {
          type: "comparison",
          leftTitle: "Edge Computing",
          rightTitle: "Fog Computing",
          leftItems: [
            "Where: directly on the device or sensor",
            "Latency: ultra-low",
            "Scalability: limited (device-level)",
            "Use cases: autonomous cars, sensors, robotics",
          ],
          rightItems: [
            "Where: close to edge, in a local network layer (gateway/router)",
            "Latency: very low",
            "Scalability: higher (multiple nodes)",
            "Use cases: smart cities, industrial networks",
          ],
        },
        {
          type: "list",
          title: "The three-tier hierarchy — Speed → Scale → Intelligence:",
          items: [
            "Edge → Immediate, local decisions (milliseconds, device-level)",
            "Fog → Regional coordination (seconds, neighbourhood/district level)",
            "Cloud → Long-term strategy and storage (minutes/hours, global scale)",
          ],
        },
        {
          type: "text",
          content:
            "Example workflow: A roadside camera detects heavy traffic (edge) → sends 'traffic density high' to a nearby fog node → fog node analyses data from all junctions in the district and adjusts traffic light cycles → summaries are sent to the cloud for long-term planning.",
        },
        {
          type: "keypoint",
          content:
            "Edge, fog, and cloud are complementary — not alternatives. Real systems use all three tiers together. Edge handles instant reactions, fog handles local coordination, and cloud handles analysis and long-term storage.",
        },
      ],
    },

    // ===== SECTION 12 =====
    {
      title: "Putting It All Together",
      subtitle: "Key connections across Week 7 topics",
      blocks: [
        {
          type: "list",
          title: "Core connections to remember:",
          items: [
            "Byzantine failures require BFT algorithms; crash failures only need Paxos/Raft — know which algorithm handles which failure type",
            "Checkpointing + message logging = the foundation of rollback recovery — you need both to replay work done since the last checkpoint",
            "Gossip protocols for failure detection connect to Week 6 (volatile systems) — decentralised, self-organising failure awareness",
            "Edge + fog computing connects to Week 6 smart cities — edge devices are the sensors, fog nodes are the coordinators",
            "Quorum-based replication connects to Week 4 DSM consistency — majority agreement before commit is a form of sequential consistency",
          ],
        },
        {
          type: "list",
          title: "Summary from the lecture:",
          items: [
            "Fault tolerance ensures system reliability despite failures",
            "Common failures: crash, omission, timing, Byzantine, network partition",
            "Replication and redundancy improve resilience",
            "Checkpointing and rollback aid recovery",
            "Consensus algorithms (Paxos, Raft, BFT) ensure agreement among nodes",
            "Failure detection mechanisms (heartbeats, timeouts, gossip) monitor system health",
          ],
        },
        {
          type: "keypoint",
          content:
            "Fault tolerance is the thread that connects all distributed systems topics: time synchronisation (Week 3), DSM consistency (Week 4), web service QoS (Week 5), volatile ubiquitous systems (Week 6) — all require fault tolerance to work reliably.",
        },
      ],
    },
  ],
};

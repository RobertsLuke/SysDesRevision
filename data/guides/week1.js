export const week1Guide = {
  intro:
    "This guide covers all the Week 1 material: the lecture on Introduction to Distributed Systems, the seminar on Goals & Challenges, and the Question of the Week on P2P networks. Read through each section before moving on to the practice questions.",

  sections: [
    // ===== SECTION 1 =====
    {
      title: "What Is a Distributed System?",
      subtitle: "Two key definitions from the literature",
      blocks: [
        {
          type: "text",
          content:
            "A distributed system is not just 'computers connected to a network'. There are two widely-used definitions that capture what makes a system truly distributed, and they emphasise different things.",
        },
        {
          type: "definition",
          term: "Tanenbaum's Definition",
          content:
            "A collection of independent computers that appears to the users of the system as a single computer.",
        },
        {
          type: "definition",
          term: "Coulouris' Definition",
          content:
            "Hardware or software components at networked computers that communicate and coordinate their actions only by message passing.",
        },
        {
          type: "keypoint",
          content:
            "Tanenbaum focuses on the user's perspective — the distribution should be invisible. Coulouris focuses on the mechanism — coordination happens only through message passing (no shared memory, no central controller).",
        },
        {
          type: "text",
          content:
            "When we talk about distributed systems, there are two primary issues: how do the devices communicate (networking), and how do they interact (distributed software). The rest of this module explores both.",
        },
      ],
    },

    // ===== SECTION 2 =====
    {
      title: "Why Distributed Systems? The Three Ways to Go Faster",
      subtitle: "Work Harder, Work Smarter, Get Help",
      blocks: [
        {
          type: "text",
          content:
            "The lecture uses a helpful analogy: there are three ways to do things faster, and each maps to a computing concept.",
        },
        {
          type: "comparison",
          items: [
            {
              label: "Work Harder",
              content:
                "Improve hardware performance — faster CPUs, more RAM. Like running faster to get somewhere sooner.",
            },
            {
              label: "Work Smarter",
              content:
                "Use better algorithms to reduce the work needed. Like Henry Ford's assembly line — same resources, more efficient process.",
            },
          ],
        },
        {
          type: "definition",
          term: "Get Help — Distributed/Parallel Processing",
          content:
            "Divide the work across multiple machines. This is the core idea behind distributed systems — instead of one powerful machine, use many machines working together.",
        },
        {
          type: "text",
          content:
            "Real-world examples of 'Working Smarter' include Henry Ford's assembly line, McDonald's restaurant processes, and racing lines in F1 or athletics — all reduce the amount of work needed through more efficient methods.",
        },
        {
          type: "keypoint",
          content:
            "'Getting Help' (distributed computing) comes with risks: coordination overhead, communication failures, security vulnerabilities, and increased software complexity. These trade-offs define the challenges of the module.",
        },
      ],
    },

    // ===== SECTION 3 =====
    {
      title: "Examples of Distributed Systems",
      subtitle: "Real systems you should know",
      blocks: [
        {
          type: "text",
          content:
            "The lecture gives many concrete examples. You should be able to recognise these as distributed systems and explain why they qualify.",
        },
        {
          type: "list",
          title: "Examples from the lecture:",
          items: [
            "Network File System (NFS) — files accessed transparently across machines",
            "ATM / cash machines — banking transactions across a network",
            "The Web — page retrieval, CGI scripts running on remote servers",
            "Network printers — shared across multiple users/machines",
            "Distributed Shared Memory (DSM) — memory abstraction across machines",
            "CORBA and Java RMI — distributed object systems",
            "NIS (Network Information Service) — directory service",
            "ssh / telnet — remote access to machines",
            "Network audio/video — streaming across a network",
            "Condor — distributed computing for batch jobs",
          ],
        },
        {
          type: "keypoint",
          content:
            "A standalone desktop application (e.g. a calculator, a single-player game) is NOT a distributed system — it runs on one machine with no network coordination.",
        },
      ],
    },

    // ===== SECTION 4 =====
    {
      title: "Four Key Issues in Distributed Systems",
      subtitle: "What goes wrong when you connect computers together",
      blocks: [
        {
          type: "text",
          content:
            "Connecting computers over a network introduces four fundamental issues that don't exist (or are much simpler) in a single-machine system.",
        },
        {
          type: "definition",
          term: "1. Costly Communications",
          content:
            "Bandwidth and latencies are expensive when trying to match the performance available to localised (single-box) processors. Sending data over a network is always slower than accessing local memory.",
        },
        {
          type: "definition",
          term: "2. Unreliable Communications",
          content:
            "Network connections may be unavailable, messages may be lost or corrupted, and remote computers may be down. You can't assume the network is reliable.",
        },
        {
          type: "definition",
          term: "3. Independent Failure",
          content:
            "The system must continue working after the failure of a network link or a remote computer. Unlike a single machine where everything fails together, in a distributed system parts can fail independently.",
        },
        {
          type: "definition",
          term: "4. Insecure Communications",
          content:
            "Network connections are exposed to unauthorised access that may be malicious. Data in transit can be intercepted, modified, or fabricated.",
        },
        {
          type: "keypoint",
          content:
            "These four issues — cost, reliability, independent failure, and security — are the recurring themes throughout the entire module. Every design decision in distributed systems is shaped by them.",
        },
      ],
    },

    // ===== SECTION 5 =====
    {
      title: "Building Blocks: The Communications Model",
      subtitle: "Layered structure and why DS is 'not so layered'",
      blocks: [
        {
          type: "text",
          content:
            "Distributed systems communication builds on the familiar layered networking model (OSI / TCP-IP), but with an important caveat.",
        },
        {
          type: "table",
          title: "The five layers of the building blocks model:",
          headers: ["Layer", "What It Does"],
          rows: [
            ["Data link layer", "Bits on a wire — the physical transmission of data"],
            ["Packet switching", "Breaking data into packets for transmission"],
            ["Addressing and routing", "Getting packets to the right destination"],
            ["Reliable data streams", "Ensuring complete, ordered delivery (e.g. TCP)"],
            ["Higher-level protocols", "RPC, HTTP, SNMP — application-level communication"],
          ],
        },
        {
          type: "keypoint",
          content:
            "Distributed systems are described as 'NOT so layered' — they mix and match protocols, APIs, and services as required rather than strictly following a layered hierarchy. This is a key difference from traditional networking.",
        },
      ],
    },

    // ===== SECTION 6 =====
    {
      title: "The DS Road Map: Three Levels",
      subtitle: "Fundamentals → Middleware → Application",
      blocks: [
        {
          type: "text",
          content:
            "The module follows a road map with three levels, from low-level building blocks up to complete applications.",
        },
        {
          type: "table",
          title: null,
          headers: ["Level", "What It Covers"],
          rows: [
            ["Fundamentals (low-level)", "Processes, threads, concurrency control, synchronisation, RPC, naming, caching, network protocols"],
            ["Middleware (OS-level)", "Scheduling, transactions, replication, fault-tolerance, persistence, high availability"],
            ["Application (high-level)", "Distributed Shared Memory, distributed objects, security, protected environments"],
          ],
        },
        {
          type: "keypoint",
          content:
            "Know which level each concept belongs to — e.g. RPC is a fundamental, replication is middleware, DSM is application level. This is a common exam question.",
        },
      ],
    },

    // ===== SECTION 7 =====
    {
      title: "Design Issues",
      subtitle: "Naming, Access, Communication, Software Structure, Resource Management, Consistency, Security",
      blocks: [
        {
          type: "heading",
          content: "Naming",
        },
        {
          type: "text",
          content:
            "Resource names must have global meanings — the same name works everywhere, independent of the object's physical location. This must be supported by a scalable name translation system. Think of DNS: the domain name doesn't change when a website moves to a different server.",
        },
        {
          type: "heading",
          content: "Access",
        },
        {
          type: "text",
          content:
            "The same functions must be usable everywhere with reasonable performance. This includes data coherence — users should see a consistent view of the data regardless of where they access the system from.",
        },
        {
          type: "heading",
          content: "Communication",
        },
        {
          type: "text",
          content:
            "The performance and reliability of communication techniques are critical — the entire system's performance depends directly on how well machines can exchange messages.",
        },
        {
          type: "heading",
          content: "Software Structure / Openness",
        },
        {
          type: "text",
          content:
            "Software components should be designed with well-defined interfaces (APIs) that allow them to interwork with existing and new services. Data abstraction is important. The challenge is to design a framework that doesn't duplicate what already exists.",
        },
        {
          type: "heading",
          content: "Resource Management",
        },
        {
          type: "text",
          content:
            "Deploying processing and communication resources to optimum effect for a changing workload. The key concept here is load balancing — distributing work evenly across available resources so no machine is overwhelmed while others sit idle.",
        },
        {
          type: "heading",
          content: "Consistency Maintenance",
        },
        {
          type: "list",
          title: "Consistency must be maintained across multiple areas:",
          items: [
            "Data — managing concurrent access to the same data",
            "Replication — keeping replicated copies consistent for fault tolerance",
            "Cache — keeping cached data consistent with the original",
            "Failure handling — maintaining consistent behaviour during failures (e.g. master/slave in DNS)",
            "Time — synchronising clocks across distributed nodes",
            "User interface — maintaining a consistent, usable interface",
          ],
        },
        {
          type: "heading",
          content: "Security",
        },
        {
          type: "list",
          title: "Three components of security design:",
          items: [
            "Authentication — ensuring users have the right to access resources ('Who are you?')",
            "Access Control — providing different levels of access for different users ('What can you do?')",
            "Auditing — logging every access to a resource as evidence ('What did you do?')",
          ],
        },
      ],
    },

    // ===== SECTION 8 =====
    {
      title: "Advantages and Disadvantages of Distributed Systems",
      subtitle: "Why build them — and why they're hard",
      blocks: [
        {
          type: "comparison",
          items: [
            {
              label: "Advantages",
              content:
                "Better price-to-performance ratio (many cheap machines vs one expensive one). Lower application turnaround time. Reliability through redundancy. Incremental growth as workload increases.",
            },
            {
              label: "Disadvantages",
              content:
                "Software complexity (both system and application level). Communication bottlenecks. Weaker security (more attack surface). Reliability is also harder (complex failure modes).",
            },
          ],
        },
        {
          type: "keypoint",
          content:
            "Reliability appears on BOTH lists. It's an advantage because redundancy means surviving individual failures. It's a disadvantage because failure modes are more complex — partial failures, network partitions, and inconsistent states are harder to handle than a single machine simply crashing.",
        },
      ],
    },

    // ===== SECTION 9 =====
    {
      title: "Goals of a Distributed System",
      subtitle: "From the Seminar — what we want the system to achieve",
      blocks: [
        {
          type: "text",
          content:
            "The seminar introduces eleven goals that a well-designed distributed system should aim for. These overlap with the design issues from the lecture but frame them as desired properties.",
        },
        {
          type: "table",
          headers: ["Goal", "What It Means"],
          rows: [
            ["Scalability", "Handle growth in size (users/resources), geography (distance), and administration (organisations)"],
            ["Fault Tolerance", "Continue operating correctly even when components fail"],
            ["Efficiency", "Make optimal use of resources without unnecessary waste"],
            ["Performance", "Measured via latency, throughput, and resource allocation"],
            ["Data Integrity", "Data remains accurate, consistent, and unaltered during storage/transmission"],
            ["Concurrency", "Multiple processes/users accessing shared resources simultaneously without conflict"],
            ["Transparency", "Hide the distributed nature — covers location, replication, and failure transparency"],
            ["Replication", "Maintain multiple copies of data/services to improve availability and fault tolerance"],
            ["Availability", "System and resources are accessible when needed"],
            ["Security", "Authentication, authorisation, encryption, and auditing"],
            ["Maintainability", "Ease of monitoring, updating, repairing, and evolving the system"],
          ],
        },
        {
          type: "keypoint",
          content:
            "Scalability has three specific dimensions you must know: size scalability (more users/resources), geographic scalability (greater physical distances), and administrative scalability (more organisations involved).",
        },
      ],
    },

    // ===== SECTION 10 =====
    {
      title: "Challenges of a Distributed System",
      subtitle: "From the Seminar — what makes it hard",
      blocks: [
        {
          type: "text",
          content:
            "Many of the goals also appear as challenges — the difference is that a goal is what you want, and a challenge is the practical difficulty of achieving it.",
        },
        {
          type: "definition",
          term: "Heterogeneity",
          content:
            "The variety and differences across a DS — different networks/protocols, computer hardware, operating systems, programming languages, and implementations by different developers. Everything is different, and it all needs to work together.",
        },
        {
          type: "definition",
          term: "Openness",
          content:
            "Designing the system so it can be extended and integrated with other systems through well-defined, published interfaces. Not the same as 'open source' — it means extensibility.",
        },
        {
          type: "heading",
          content: "The Six Types of Transparency",
        },
        {
          type: "text",
          content:
            "Transparency as a challenge is broken down into six specific types — each hides a different aspect of the distributed nature from users.",
        },
        {
          type: "table",
          headers: ["Type", "What It Hides"],
          rows: [
            ["Access", "Differences in how data is accessed"],
            ["Location", "Where resources physically reside"],
            ["Concurrency", "That resources are being shared by multiple users"],
            ["Replication", "That data has been copied across nodes"],
            ["Failure", "That a component has failed"],
            ["Scaling", "That the system has been resized"],
          ],
        },
        {
          type: "heading",
          content: "Other Challenges",
        },
        {
          type: "list",
          items: [
            "Security challenges — bottlenecks in decentralised systems and uncontrolled metadata growth",
            "Scalability — maintaining performance as the system grows",
            "Fault tolerance — handling node crashes gracefully",
            "Concurrency & synchronisation — managing simultaneous access and keeping processes coordinated",
            "Consistency & replication — keeping all copies of data identical and up to date after updates",
            "Resource management — efficiently allocating processing, storage, and network resources",
            "Scheduling — load balancing, synchronisation, and handling clock drift between machines",
            "Maintenance — monitoring and debugging across multiple distributed nodes",
          ],
        },
        {
          type: "definition",
          term: "Clock Drift",
          content:
            "The gradual divergence of clocks on different nodes. If node A thinks it's 10:00:00 and node B thinks it's 10:00:03, event ordering becomes unreliable. This is a fundamental problem in distributed systems.",
        },
      ],
    },

    // ===== SECTION 11 =====
    {
      title: "P2P Networks: Availability Problems",
      subtitle: "From the Question of the Week",
      blocks: [
        {
          type: "text",
          content:
            "Peer-to-peer networks use traditional desktop computers as hosts rather than dedicated servers. This creates specific availability and security problems.",
        },
        {
          type: "heading",
          content: "Why availability is a problem",
        },
        {
          type: "list",
          items: [
            "Users turn off their computers when not in use — any shared data on that machine becomes unavailable",
            "Extended absences (holidays, travel) cause prolonged unavailability",
            "Unlike dedicated servers, desktop machines have no guaranteed uptime",
            "There is no obligation or incentive for hosts to stay online",
          ],
        },
        {
          type: "keypoint",
          content:
            "The original driver of P2P was music downloads (e.g. Napster). Users could tolerate waiting for hosts to come back online. But for conventional applications like file storage, availability is critical and P2P weaknesses become much more significant.",
        },
      ],
    },

    // ===== SECTION 12 =====
    {
      title: "P2P Networks: Security and Trust Problems",
      subtitle: "Unknown participants and data control",
      blocks: [
        {
          type: "list",
          title: "Three key security/trust risks:",
          items: [
            "Unknown trustworthiness — the owner of a participating computer is likely unknown to other participants, so their intentions cannot be verified",
            "Owner data control — with current hardware and operating systems, the owner has full control over the data on their machine and may change or delete shared objects",
            "Network attack exposure — connections between peers are exposed to attacks, including Denial of Service (DoS) attacks that can disrupt availability",
          ],
        },
        {
          type: "text",
          content:
            "Desktop machines in homes and offices typically lack enterprise-grade security measures like firewalls, intrusion detection, and physical security. This makes shared data vulnerable to unauthorised access, malware, and tampering.",
        },
        {
          type: "keypoint",
          content:
            "The severity of these problems depends on the application. Music sharing can tolerate them. File storage or financial data cannot.",
        },
      ],
    },

    // ===== SECTION 13 =====
    {
      title: "P2P Networks: Replication as a Solution",
      subtitle: "How replication helps — and its limitations",
      blocks: [
        {
          type: "heading",
          content: "Replication for Availability",
        },
        {
          type: "text",
          content:
            "By distributing copies of data across multiple peers, the system ensures data remains accessible even if some hosts are offline. If replicas are sufficiently widespread and numerous, the probability that ALL copies are simultaneously unavailable drops to a negligible level.",
        },
        {
          type: "heading",
          content: "Ensuring Data Integrity: Consensus Algorithms",
        },
        {
          type: "text",
          content:
            "Replication alone doesn't guarantee the data is correct. Peers can exchange hashes of a data object's value and compare them — this consensus algorithm detects both accidental corruption and deliberate tampering by establishing agreement on the correct version.",
        },
        {
          type: "heading",
          content: "Ensuring Data Integrity: Secure Hash Identifiers",
        },
        {
          type: "text",
          content:
            "In this scheme, the object's ID is derived from a hash of its content. When a client receives the object, it recomputes the hash and checks it matches the ID. If the data was tampered with or corrupted, the hash won't match — the data's fingerprint IS its name.",
        },
        {
          type: "heading",
          content: "Limitations of Replication",
        },
        {
          type: "list",
          items: [
            "Replication improves availability but increases the number of machines holding data — widening the attack surface for security threats",
            "Keeping all replicas synchronised after updates requires coordination and is technically difficult",
            "Conflicting versions may arise if peers modify data independently",
            "Replication alone is NOT enough for integrity/trust — you need additional mechanisms like consensus algorithms and hash-based verification",
          ],
        },
        {
          type: "keypoint",
          content:
            "Replication addresses availability very well (enough copies = near-constant access). But for integrity and trust, it needs additional mechanisms. This trade-off — availability vs consistency vs security — is a theme that runs through the entire module.",
        },
      ],
    },
  ],
};

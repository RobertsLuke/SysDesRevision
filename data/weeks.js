import { week1Guide } from "./guides/week1";
import { week2Guide } from "./guides/week2";

export const weeks = {
  1: {
    id: 1,
    title: "Introduction to Distributed Systems",
    subtitle: "Definitions, Design Issues, Goals, Challenges & P2P Networks",
    emoji: "🌐",
    guide: week1Guide,

    mcqs: [
      // ===== LECTURE 1 =====
      {
        id: 1,
        question:
          "Which of the following best describes a distributed system?",
        options: [
          "A single high-performance computer running multiple applications simultaneously",
          "A collection of independent computers that appears to users as a single system",
          "A network of computers that each operate completely independently with no coordination",
          "A mainframe computer connected to multiple display terminals",
        ],
        correct: 1,
        explanation:
          "A distributed system is a collection of independent computers that appears to users as a single system (Tanenbaum's definition).",
      },
      {
        id: 2,
        question:
          "According to the Coulouris definition, components in a distributed system coordinate their actions by:",
        options: [
          "Shared memory access",
          "A centralised controller",
          "Message passing",
          "Direct hardware interrupts",
        ],
        correct: 2,
        explanation:
          "Coulouris defines a distributed system as hardware or software components at networked computers that communicate and coordinate their actions only by message passing.",
      },
      {
        id: 3,
        question:
          "In the analogy of doing things faster, 'Get Help' in computing corresponds to:",
        options: [
          "Improving hardware clock speeds",
          "Using more efficient algorithms",
          "Distributed or parallel processing",
          "Upgrading to a larger single processor",
        ],
        correct: 2,
        explanation:
          "Work Harder = hardware performance, Work Smarter = better algorithms, Get Help = distributed/parallel processing.",
      },
      {
        id: 4,
        question:
          "Which of the following is NOT listed as an issue to be addressed in distributed systems?",
        options: [
          "Costly communications",
          "Unreliable communications",
          "Programming language compatibility",
          "Insecure communications",
        ],
        correct: 2,
        explanation:
          "The four key issues are: costly communications, unreliable communications, independent failure, and insecure communications. Programming language compatibility is not listed.",
      },
      {
        id: 5,
        question:
          "In the context of distributed systems, what does 'independent failure' mean?",
        options: [
          "All components fail at the same time",
          "The system must continue working after failure of a network link or remote computer",
          "Failures are always detected immediately",
          "Only the master node can fail independently",
        ],
        correct: 1,
        explanation:
          "Independent failure means the distributed system must continue working after the failure of a network connection or individual computer.",
      },
      {
        id: 6,
        question:
          "The design issue of 'Naming' in distributed systems requires that names assigned to resources must:",
        options: [
          "Be unique to each physical machine",
          "Change when a resource is moved to a different location",
          "Have global meanings independent of the location of the object",
          "Use numeric IP addresses only",
        ],
        correct: 2,
        explanation:
          "Names must have global meaning, be independent of resource location, and be supported by an efficient name translation system.",
      },
      {
        id: 7,
        question:
          "Which of the following is an example of a distributed system?",
        options: [
          "A standalone word processor running on a single PC",
          "A Network File System (NFS)",
          "A single-threaded application on a laptop",
          "A USB flash drive storing files",
        ],
        correct: 1,
        explanation:
          "NFS is a distributed system. The lecture also lists ATM machines, CORBA, Java RMI, network printers, the web, and others.",
      },
      {
        id: 8,
        question:
          "In the layered communications model for distributed systems, Remote Procedure Call (RPC) belongs to which part of the stack?",
        options: [
          "The data link layer",
          "The packet switching layer",
          "A higher-level protocol above reliable data streams",
          "The physical layer",
        ],
        correct: 2,
        explanation:
          "RPC is a higher-level protocol that sits above reliable data streams in the layered communications model.",
      },
      {
        id: 9,
        question:
          "Which of the following is listed as a DISADVANTAGE of distributed systems?",
        options: [
          "Incremental growth as workload increases",
          "Better price-to-performance ratio",
          "Complexity of software",
          "Lower application turnaround time",
        ],
        correct: 2,
        explanation:
          "Software complexity is a disadvantage. The advantages include incremental growth, better price-to-performance, and lower turnaround.",
      },
      {
        id: 10,
        question:
          "The three security design issues identified for distributed systems are:",
        options: [
          "Encryption, firewalls, and antivirus",
          "Authentication, access control, and auditing",
          "Hashing, certificates, and tokens",
          "Intrusion detection, prevention, and recovery",
        ],
        correct: 1,
        explanation:
          "The three security components are: Authentication (right to access), Access Control (different levels for different users), and Auditing (logging every access).",
      },
      {
        id: 11,
        question:
          "In the DS road map, which of the following is a fundamental low-level element?",
        options: [
          "High availability",
          "Distributed Shared Memory",
          "Remote Procedure Call (RPC)",
          "Transactions",
        ],
        correct: 2,
        explanation:
          "RPC is a fundamental low-level element. High availability and transactions are middleware level. DSM is application level.",
      },
      {
        id: 12,
        question:
          "Which design issue is concerned with deploying processing and communications resources to handle a changing workload?",
        options: [
          "Naming",
          "Consistency Maintenance",
          "Resource Management",
          "Software Structure",
        ],
        correct: 2,
        explanation:
          "Resource management is about deploying resources to optimum effect for a changing workload — the key concept is load balancing.",
      },
      {
        id: 13,
        question:
          "Consistency maintenance in a distributed system does NOT directly concern:",
        options: [
          "Concurrent access to the same data",
          "Replication of data for fault tolerance",
          "Choosing the programming language for applications",
          "Maintaining consistent time across nodes",
        ],
        correct: 2,
        explanation:
          "Consistency maintenance covers data, replication, cache, failure handling, time, and user interface — not programming language choice.",
      },
      {
        id: 14,
        question:
          "The concept of 'openness' in distributed system software structure is achieved through:",
        options: [
          "Proprietary, closed-source components",
          "Well-defined interfaces and APIs",
          "Using a single vendor for all components",
          "Avoiding data abstraction",
        ],
        correct: 1,
        explanation:
          "Openness is achieved through well-defined interfaces (APIs) that allow interworking with existing and new services.",
      },
      {
        id: 15,
        question:
          "Which of the following is categorised under 'Distributed Operating Systems (middleware)' in the DS road map?",
        options: [
          "Threads and concurrency control",
          "Network protocols",
          "Scheduling and transactions",
          "Distributed objects and security",
        ],
        correct: 2,
        explanation:
          "Scheduling and transactions sit at the middleware level. Threads and concurrency control are fundamentals. Distributed objects and security are application level.",
      },
      {
        id: 16,
        question:
          "The 'Access' design issue in distributed systems requires that:",
        options: [
          "Only administrators can use system functions remotely",
          "The same functions are usable everywhere with reasonable performance and data coherence",
          "Access is restricted to local network users only",
          "Each node maintains its own independent copy of all functions",
        ],
        correct: 1,
        explanation:
          "Access means the same functions are usable everywhere with reasonable performance, including an idea of data coherence.",
      },
      {
        id: 17,
        question:
          "Why is the performance and reliability of communication techniques considered a critical design issue in distributed systems?",
        options: [
          "Because communication is optional in most distributed systems",
          "Because the performance of the entire distributed system depends directly on its communication infrastructure",
          "Because all distributed systems use the same communication protocol",
          "Because communication only affects the user interface layer",
        ],
        correct: 1,
        explanation:
          "The performance and reliability of communication techniques directly determine the overall performance of the distributed system.",
      },
      {
        id: 18,
        question:
          "Which real-world example is used in the lecture to illustrate the concept of 'Working Smarter'?",
        options: [
          "Michelangelo carrying his lunch up the scaffolding",
          "Henry Ford's automobile assembly line",
          "Road gangs building a highway",
          "Multicore CPUs sharing workload",
        ],
        correct: 1,
        explanation:
          "Henry Ford's assembly line is used to illustrate 'Working Smarter' — reducing the amount of work needed through more efficient processes.",
      },
      {
        id: 19,
        question:
          "Which of the following is NOT an example of a distributed system given in the lecture?",
        options: [
          "CORBA and Java RMI",
          "Network File System (NFS)",
          "A standalone desktop calculator application",
          "An ATM (cash machine)",
        ],
        correct: 2,
        explanation:
          "A standalone desktop calculator is not a distributed system. NFS, CORBA, Java RMI, and ATMs are all examples given in the lecture.",
      },
      {
        id: 20,
        question:
          "In the building blocks of DS communications, which layer deals with 'bits on a wire'?",
        options: [
          "Packet switching layer",
          "Data link layer",
          "Addressing and routing layer",
          "Remote Procedure Call layer",
        ],
        correct: 1,
        explanation:
          "The data link layer deals with 'bits on a wire' — the lowest level of the communications model.",
      },

      // ===== SEMINAR 1 =====
      {
        id: 21,
        question:
          "Which of the following is NOT listed as a key goal of a distributed system?",
        options: [
          "Scalability",
          "Fault tolerance",
          "Centralisation",
          "Transparency",
        ],
        correct: 2,
        explanation:
          "Centralisation is the opposite of what distributed systems aim for. The goals include scalability, fault tolerance, transparency, and others.",
      },
      {
        id: 22,
        question:
          "The goal of 'Scalability' in a distributed system encompasses which three dimensions?",
        options: [
          "Speed, cost, and reliability",
          "Size, geography, and administration",
          "Hardware, software, and networking",
          "Latency, throughput, and bandwidth",
        ],
        correct: 1,
        explanation:
          "Scalability covers: size (number of users/resources), geography (physical distance between nodes), and administration (number of organisations involved).",
      },
      {
        id: 23,
        question:
          "Which sub-aspects fall under the goal of 'Performance' in a distributed system?",
        options: [
          "Authentication, authorisation, and encryption",
          "Location, replication, and failure",
          "Latency, throughput, and resource allocation",
          "Monitoring, debugging, and logging",
        ],
        correct: 2,
        explanation:
          "Performance is measured via latency (response time), throughput (data processed per unit time), and resource allocation.",
      },
      {
        id: 24,
        question:
          "The goal of 'Transparency' in a distributed system includes hiding which of the following from the user?",
        options: [
          "Location, replication, and failure",
          "Cost, licensing, and vendor",
          "Programming language, compiler, and IDE",
          "Hardware brand, CPU model, and RAM size",
        ],
        correct: 0,
        explanation:
          "Transparency means hiding the distributed nature — covering location transparency, replication transparency, and failure transparency.",
      },
      {
        id: 25,
        question:
          "Which of the following is a sub-aspect of the Security goal in a distributed system?",
        options: [
          "Load balancing",
          "Clock drift",
          "Auditing",
          "Data replication",
        ],
        correct: 2,
        explanation:
          "Security covers authentication, authorisation, encryption, and auditing. Load balancing is resource management, clock drift is scheduling.",
      },
      {
        id: 26,
        question:
          "'Heterogeneity' as a challenge in distributed systems refers to:",
        options: [
          "All nodes running the same operating system and software",
          "The variety and differences in networks, hardware, operating systems, programming languages, and developer implementations",
          "The geographic spread of system nodes",
          "The number of simultaneous users",
        ],
        correct: 1,
        explanation:
          "Heterogeneity refers to the variety and differences across a distributed system — different networks, hardware, OSes, languages, and implementations.",
      },
      {
        id: 27,
        question:
          "Which of the following is NOT an example of heterogeneity in distributed systems?",
        options: [
          "Different network protocols",
          "Different operating systems",
          "Different levels of user authentication",
          "Different programming languages",
        ],
        correct: 2,
        explanation:
          "Different levels of user authentication relates to security, not heterogeneity. Heterogeneity covers networks, OS, hardware, languages, and implementations.",
      },
      {
        id: 28,
        question:
          "In the context of DS challenges, 'Openness' refers to:",
        options: [
          "Making all source code publicly available",
          "The ability of a system to be extended and re-implemented through well-defined interfaces",
          "Allowing unrestricted access to all users",
          "Using only open-source software components",
        ],
        correct: 1,
        explanation:
          "Openness is the challenge of designing a DS so it can be extended and integrated with other systems through well-defined, published interfaces.",
      },
      {
        id: 29,
        question:
          "The challenge of 'Scheduling' in distributed systems involves which of the following concerns?",
        options: [
          "Authentication, authorisation, and encryption",
          "Load balancing, synchronisation, and clock drift",
          "Location, replication, and failure transparency",
          "Size, geography, and administration",
        ],
        correct: 1,
        explanation:
          "Scheduling involves load balancing, synchronisation, and clock drift (the gradual divergence of clocks on different machines).",
      },
      {
        id: 30,
        question:
          "Which types of transparency are specifically listed as challenges in distributed systems?",
        options: [
          "Cost, performance, and security transparency",
          "Access, location, concurrency, replication, failure, and scaling transparency",
          "Hardware, software, and network transparency",
          "User, administrator, and developer transparency",
        ],
        correct: 1,
        explanation:
          "The six types are: access, location, concurrency, replication, failure, and scaling transparency.",
      },
      {
        id: 31,
        question:
          "Which of the following is a challenge related to security in distributed systems?",
        options: [
          "Clock drift between nodes",
          "Bottlenecks in decentralised systems and metadata growth",
          "Geographic distribution of users",
          "Differences in programming languages",
        ],
        correct: 1,
        explanation:
          "Security challenges include bottlenecks in decentralised systems and uncontrolled metadata growth.",
      },
      {
        id: 32,
        question:
          "The 'Maintenance' challenge in distributed systems is primarily concerned with:",
        options: [
          "Upgrading hardware components",
          "Monitoring and debugging",
          "Replacing network cables",
          "Training new users",
        ],
        correct: 1,
        explanation:
          "Maintenance is about monitoring system health and debugging problems across multiple distributed nodes.",
      },
      {
        id: 33,
        question:
          "'Availability' as a goal of a distributed system is closely linked to which other concepts?",
        options: [
          "Heterogeneity and openness",
          "Accessibility, replication, and fault tolerance",
          "Latency, throughput, and resource allocation",
          "Scheduling and load balancing",
        ],
        correct: 1,
        explanation:
          "Availability is closely linked to accessibility, replication, and fault tolerance — ensuring the system is accessible when needed.",
      },
      {
        id: 34,
        question:
          "In a peer-to-peer (P2P) network using traditional desktop machines, what is a key concern for shared data availability?",
        options: [
          "Desktops always have faster processors than servers",
          "Host machines may be powered off or disconnected at any time",
          "P2P networks cannot transfer large files",
          "Desktop machines cannot run network software",
        ],
        correct: 1,
        explanation:
          "Desktop machines may be powered off or disconnected at any time, making shared data unavailable — unlike dedicated always-on servers.",
      },
      {
        id: 35,
        question:
          "How can data replication help address availability weaknesses in a P2P network?",
        options: [
          "By ensuring only one copy of data exists to avoid conflicts",
          "By storing copies of data across multiple nodes so it remains accessible even if some hosts go offline",
          "By encrypting all data so it cannot be lost",
          "By routing all traffic through a central server",
        ],
        correct: 1,
        explanation:
          "Replication stores copies across multiple peers so data remains accessible even when some hosts go offline, though this introduces consistency challenges.",
      },
      {
        id: 36,
        question:
          "Which of the following best describes 'Data Integrity' as a goal of a distributed system?",
        options: [
          "Ensuring data is transmitted as fast as possible",
          "Ensuring data remains accurate, consistent, and unaltered during storage and transmission",
          "Ensuring data is available to all users at all times",
          "Ensuring data is stored in a single location for safety",
        ],
        correct: 1,
        explanation:
          "Data integrity ensures data remains accurate, consistent, and unaltered during storage, processing, and transmission.",
      },
      {
        id: 37,
        question:
          "'Concurrency' as a goal of a distributed system is concerned with:",
        options: [
          "Ensuring only one process runs at a time",
          "Multiple processes or users accessing shared resources simultaneously without conflict",
          "Running all tasks sequentially for reliability",
          "Limiting the number of users who can connect",
        ],
        correct: 1,
        explanation:
          "Concurrency supports multiple processes or users accessing shared resources simultaneously without conflict or inconsistency.",
      },
      {
        id: 38,
        question:
          "Which challenge involves ensuring that replicated data remains consistent across all nodes?",
        options: [
          "Heterogeneity",
          "Scheduling",
          "Consistency and replication",
          "Openness",
        ],
        correct: 2,
        explanation:
          "Consistency and replication is the challenge of ensuring all copies of data across nodes remain identical and up to date.",
      },

      // ===== QUESTION OF THE WEEK =====
      {
        id: 39,
        question:
          "In a P2P network using desktop computers, which of the following is a key reason shared data may become unavailable?",
        options: [
          "Desktop computers cannot store large files",
          "Users often turn their computers off when not using them or are away for extended periods",
          "P2P protocols do not support file sharing",
          "Desktop computers lack network interfaces",
        ],
        correct: 1,
        explanation:
          "Users frequently turn off their computers when not using them and during extended absences, making any data stored on them unavailable to the network.",
      },
      {
        id: 40,
        question:
          "Why is the trustworthiness of participants a concern in a P2P network?",
        options: [
          "All participants must pass a background check before joining",
          "Participants are typically known and verified by a central authority",
          "The owner of a participating computer is likely unknown to other participants, so their trustworthiness cannot be established",
          "P2P networks only allow trusted corporate users",
        ],
        correct: 2,
        explanation:
          "In a P2P network, the owner of a participating computer is likely unknown to other participants, so their trustworthiness and intentions cannot be verified.",
      },
      {
        id: 41,
        question:
          "What control does the owner of a participating desktop have over shared data in a P2P network?",
        options: [
          "No control — the data is locked by the P2P protocol",
          "Read-only access to shared objects",
          "Full control — they may change or delete the data on their machine",
          "Control is managed remotely by other peers",
        ],
        correct: 2,
        explanation:
          "With current hardware and operating systems, the owner of a peer machine has full control over the data on it and may change or delete shared objects.",
      },
      {
        id: 42,
        question:
          "Which type of attack is specifically mentioned as a threat to network connections between peers?",
        options: [
          "SQL injection",
          "Denial of Service (DoS) attacks",
          "Phishing attacks",
          "Cross-site scripting",
        ],
        correct: 1,
        explanation:
          "Network connections between peers are exposed to attack, including Denial of Service (DoS) attacks that can disrupt availability.",
      },
      {
        id: 43,
        question:
          "The severity of availability and security problems in a P2P network depends primarily on:",
        options: [
          "The number of peers in the network",
          "The physical distance between peers",
          "The application — some use cases tolerate delays better than others",
          "The brand of hardware used",
        ],
        correct: 2,
        explanation:
          "The importance varies by application — music downloads can tolerate delays, while file storage requires higher availability and integrity.",
      },
      {
        id: 44,
        question:
          "How does widespread replication reduce the risk of data unavailability in a P2P network?",
        options: [
          "By compressing data so it transfers faster",
          "By ensuring only one authoritative copy exists",
          "By distributing enough copies that the probability of all being unavailable simultaneously becomes negligible",
          "By storing all replicas on a single reliable server",
        ],
        correct: 2,
        explanation:
          "If data replicas are sufficiently widespread and numerous, the probability that all copies are unavailable simultaneously can be reduced to a negligible level.",
      },
      {
        id: 45,
        question:
          "To ensure data integrity across multiple hosts in a P2P network, which technique is suggested?",
        options: [
          "Encrypting all data with a single shared password",
          "A consensus algorithm that exchanges and compares hashes of the data object's value",
          "Allowing each peer to maintain its own independent version",
          "Restricting write access to the original uploader only",
        ],
        correct: 1,
        explanation:
          "Peers exchange hashes of a data object's value and compare them to establish agreement on the correct version, detecting tampering or accidental errors.",
      },
      {
        id: 46,
        question:
          "In a Secure Hash identifier scheme, the object's ID is derived from:",
        options: [
          "The file name and creation date",
          "The IP address of the host storing it",
          "The hash code of the object's content",
          "A random number assigned at upload",
        ],
        correct: 2,
        explanation:
          "A Secure Hash identifier derives the object's ID from a hash of its content — when received, the client recomputes the hash to verify integrity.",
      },
      {
        id: 47,
        question:
          "When a client receives a data object in a hash-based P2P system, how is integrity verified?",
        options: [
          "The client checks the file size matches the expected value",
          "The client recomputes the hash and checks it corresponds with the object's ID",
          "The client asks the original uploader to confirm the data",
          "The client compares the file name to a central directory",
        ],
        correct: 1,
        explanation:
          "The client recomputes the hash and checks it matches the object's ID. If they match, the data has not been altered.",
      },
      {
        id: 48,
        question:
          "For which type of application are availability and data integrity concerns MORE important in a P2P network?",
        options: [
          "Casual music downloading where users can wait",
          "Conventional applications such as file storage",
          "Streaming background music playlists",
          "Sharing publicly available news articles",
        ],
        correct: 1,
        explanation:
          "For conventional applications like file storage, where data integrity and immediate access are essential, these weaknesses become much more significant.",
      },
    ],

    flashcards: [
      // ===== LECTURE 1 =====
      {
        id: 1,
        front: "What is a distributed system according to Tanenbaum?",
        back: "A collection of independent computers that appear to the users of the system as a single computer.",
      },
      {
        id: 2,
        front: "What is a distributed system according to Coulouris?",
        back: "Hardware or software components at networked computers that communicate and coordinate their actions only by message passing.",
      },
      {
        id: 3,
        front: "What are the two primary issues in distributed systems?",
        back: "How do devices communicate (networking) and how do they interact (distributed software).",
      },
      {
        id: 4,
        front: "What does 'Work Harder' correspond to in computing?",
        back: "Improving hardware performance, e.g. increasing processor clock speed.",
      },
      {
        id: 5,
        front: "What does 'Work Smarter' correspond to in computing?",
        back: "Using more efficient algorithms to reduce the amount of work needed.",
      },
      {
        id: 6,
        front: "Give real-world examples of 'Working Smarter'.",
        back: "Henry Ford's assembly line, McDonald's restaurants, racing lines in F1/athletics — all reduce the amount of work needed to accomplish a goal.",
      },
      {
        id: 7,
        front: "What does 'Get Help' correspond to in computing?",
        back: "Using distributed or parallel processing to divide work across multiple systems.",
      },
      {
        id: 8,
        front: "Give examples of distributed systems.",
        back: "NFS, ATM machines, CORBA, Java RMI, DSM, Condor, NIS, ssh/telnet, network printers, web (page retrieval, CGI), network audio/video.",
      },
      {
        id: 9,
        front: "Describe the layered communications model.",
        back: "OSI/TCP-IP layers: data link (bits on wire), packet switching, addressing/routing, reliable data streams, RPC and higher protocols (SNMP, HTTP).",
      },
      {
        id: 10,
        front: "What is 'Independent Failure' in distributed systems?",
        back: "The requirement that a distributed system continues working after failure of a network link or a remote computer.",
      },
      {
        id: 11,
        front: "What are 'Costly Communications' in distributed systems?",
        back: "Bandwidth and latencies are expensive when trying to match performance available to localised (single-box) processors.",
      },
      {
        id: 12,
        front: "What is a Remote Procedure Call (RPC)?",
        back: "A higher-level communication protocol that allows a program to call a procedure on a remote machine as if it were local.",
      },
      {
        id: 13,
        front: "What are the fundamental DS elements?",
        back: "Processes, threads, concurrency control, synchronisation, RPC, naming, caching, network protocols.",
      },
      {
        id: 14,
        front: "What does the middleware layer include?",
        back: "Scheduling, transactions, replication, fault-tolerance, persistence, high availability.",
      },
      {
        id: 15,
        front: "What does the application layer include in DS?",
        back: "Distributed Shared Memory, distributed objects, security, protected environments.",
      },
      {
        id: 16,
        front: "What does the Naming design issue require?",
        back: "Resource names must have global meaning, be independent of location, and be supported by an efficient name translation system.",
      },
      {
        id: 17,
        front: "What does the Access design issue require?",
        back: "The same functions must be usable everywhere with reasonable performance, including an idea of data coherence across the system.",
      },
      {
        id: 18,
        front: "What does the Communication design issue require?",
        back: "The performance and reliability of communication techniques are critical to the overall performance of the distributed system.",
      },
      {
        id: 19,
        front: "What is 'Software Structure / Openness' in DS?",
        back: "Designing software components with well-defined interfaces (APIs) that can inter-work with existing and new services.",
      },
      {
        id: 20,
        front: "What is 'Resource Management' in DS?",
        back: "Deploying processing and communications resources optimally to handle a changing workload (load balancing).",
      },
      {
        id: 21,
        front: "What does 'Consistency Maintenance' cover?",
        back: "Ensuring coherent data, replication, caching, failure handling, consistent time, and user interface across a distributed system.",
      },
      {
        id: 22,
        front: "What is 'Authentication' in DS security?",
        back: "Ensuring that users have the right to access resources in the distributed system.",
      },
      {
        id: 23,
        front: "What is 'Access Control' in DS security?",
        back: "Providing different levels of access for different users.",
      },
      {
        id: 24,
        front: "What is 'Auditing' in DS security?",
        back: "Logging every access to a resource to create an audit trail for evidence and accountability.",
      },
      {
        id: 25,
        front: "What are the advantages of distributed systems?",
        back: "Better price-to-performance ratio, lower application turnaround, reliability, incremental growth.",
      },
      {
        id: 26,
        front: "What are the disadvantages of distributed systems?",
        back: "Software complexity, communication bottlenecks, weaker security, reliability concerns.",
      },

      // ===== SEMINAR 1 =====
      {
        id: 27,
        front: "What is Scalability as a goal of DS?",
        back: "The ability of a DS to handle growth in three dimensions: size (number of users/resources), geography (physical distance between nodes), and administration (number of organisations involved).",
      },
      {
        id: 28,
        front: "What is Fault Tolerance as a goal of DS?",
        back: "The ability of a DS to continue operating correctly even when components fail — encompasses reliability and tolerance of partial failures.",
      },
      {
        id: 29,
        front: "What is Efficiency as a goal of DS?",
        back: "The ability of a DS to make optimal use of system resources without unnecessary waste.",
      },
      {
        id: 30,
        front: "How is Performance measured in DS?",
        back: "Measured via latency (response time), throughput (data processed per unit time), and resource allocation (how well resources are distributed across tasks).",
      },
      {
        id: 31,
        front: "What is Data Integrity as a goal of DS?",
        back: "Ensuring data remains accurate, consistent, and unaltered during storage, processing, and transmission across the distributed system.",
      },
      {
        id: 32,
        front: "What is Concurrency as a goal of DS?",
        back: "Supporting multiple processes or users accessing shared resources simultaneously without conflict or inconsistency.",
      },
      {
        id: 33,
        front: "What is Transparency as a goal of DS?",
        back: "Hiding the distributed nature of the system from users and applications — covers location transparency, replication transparency, and failure transparency.",
      },
      {
        id: 34,
        front: "What is Replication as a goal of DS?",
        back: "Maintaining multiple copies of data or services across different nodes to improve availability, fault tolerance, and performance.",
      },
      {
        id: 35,
        front: "What is Availability as a goal of DS?",
        back: "Ensuring the system and its resources are accessible when needed — closely linked to replication and fault tolerance.",
      },
      {
        id: 36,
        front: "What is the Security goal of DS?",
        back: "Protecting the system through authentication (verifying identity), authorisation (granting permissions), encryption (protecting data in transit/at rest), and auditing (logging access).",
      },
      {
        id: 37,
        front: "What is Maintainability as a goal of DS?",
        back: "The ease with which a DS can be monitored, updated, repaired, and evolved over time.",
      },
      {
        id: 38,
        front: "What is Heterogeneity as a challenge?",
        back: "The variety and differences across a DS — includes different networks/protocols, computer hardware, operating systems, programming languages, and implementations by different developers.",
      },
      {
        id: 39,
        front: "What is Openness as a challenge?",
        back: "The challenge of designing a DS so it can be extended and integrated with other systems through well-defined, published interfaces.",
      },
      {
        id: 40,
        front: "What specific security challenges exist in DS?",
        back: "Specific challenges include bottlenecks in decentralised systems and uncontrolled metadata growth.",
      },
      {
        id: 41,
        front: "What is Scalability as a challenge?",
        back: "The difficulty of maintaining performance and manageability as the system grows in users, resources, or geographic spread.",
      },
      {
        id: 42,
        front: "What is Fault Tolerance as a challenge?",
        back: "Handling failures such as node crashes gracefully so the overall system continues to function.",
      },
      {
        id: 43,
        front: "What is Concurrency & Synchronisation as a challenge?",
        back: "Managing simultaneous access to shared resources and keeping distributed processes coordinated.",
      },
      {
        id: 44,
        front: "Name the six types of transparency.",
        back: "Access (hide differences in data access), Location (hide where resources are), Concurrency (hide that resources are shared), Replication (hide that data is copied), Failure (hide component failures), Scaling (hide system resizing).",
      },
      {
        id: 45,
        front: "What is Consistency & Replication as a challenge?",
        back: "Ensuring that all copies of data across nodes remain identical and up to date, especially after updates.",
      },
      {
        id: 46,
        front: "What is Resource Management as a challenge?",
        back: "Efficiently allocating and coordinating processing, storage, and network resources across distributed nodes.",
      },
      {
        id: 47,
        front: "What is the Scheduling challenge?",
        back: "Coordinating task execution across nodes — involves load balancing, synchronisation, and handling clock drift between machines.",
      },
      {
        id: 48,
        front: "What is the Maintenance challenge?",
        back: "The difficulty of monitoring system health and debugging problems across multiple distributed nodes.",
      },
      {
        id: 49,
        front: "What is Clock Drift?",
        back: "The gradual divergence of clocks on different nodes in a DS, making synchronisation and event ordering difficult.",
      },
      {
        id: 50,
        front: "What is the P2P Availability Concern?",
        back: "In peer-to-peer networks using desktop machines, hosts may be powered off or disconnected at any time, making shared data unavailable.",
      },
      {
        id: 51,
        front: "What is the P2P Security Concern?",
        back: "Desktop machines in homes/offices typically lack enterprise-grade security, making shared data vulnerable to unauthorised access or tampering.",
      },
      {
        id: 52,
        front: "How does Data Replication mitigate P2P issues?",
        back: "Storing copies of data across multiple peers so that data remains accessible even when some hosts go offline, though this introduces consistency challenges.",
      },

      // ===== QUESTION OF THE WEEK =====
      {
        id: 53,
        front: "What is the P2P Availability Problem?",
        back: "Users turn off desktop computers when not in use or away for extended periods, making any shared data stored on them unavailable to the network.",
      },
      {
        id: 54,
        front: "What is the Unknown Trustworthiness problem in P2P?",
        back: "In a P2P network, the owner of a participating computer is likely unknown to other participants, so their trustworthiness and intentions cannot be verified.",
      },
      {
        id: 55,
        front: "What is the Owner Data Control Risk in P2P?",
        back: "With current hardware and operating systems, the owner of a peer machine has full control over the data on it and may change or delete shared objects.",
      },
      {
        id: 56,
        front: "What is the DoS Attack Exposure in P2P?",
        back: "Network connections between peers are exposed to attack, including Denial of Service (DoS) attacks that can disrupt availability.",
      },
      {
        id: 57,
        front: "Why is P2P severity application-dependent?",
        back: "The importance of availability and security problems varies by application — music downloads can tolerate delays, while file storage requires higher availability and integrity.",
      },
      {
        id: 58,
        front: "How does replication address availability in P2P?",
        back: "If data replicas are sufficiently widespread and numerous, the probability that all copies are unavailable simultaneously can be reduced to a negligible level.",
      },
      {
        id: 59,
        front: "What is a Consensus Algorithm for Integrity?",
        back: "Peers exchange hashes of a data object's value and compare them to establish agreement on the correct version, detecting tampering or accidental errors.",
      },
      {
        id: 60,
        front: "What is a Secure Hash Identifier?",
        back: "A scheme where an object's ID is derived from its hash code — when the object is received, the client recomputes the hash and checks it matches the ID to verify integrity.",
      },
      {
        id: 61,
        front: "What is the Replication Trade-off?",
        back: "Replication addresses availability and integrity but increases the number of machines holding data (widening the attack surface) and introduces consistency challenges.",
      },
    ],

    shortAnswers: [
      // ===== LECTURE 1 =====
      {
        id: 1,
        question:
          "What are the two primary issues when computer-based devices interact in a distributed system?",
        marks: 2,
        markingGuide: [
          "How the devices communicate (networking)",
          "How they interact (distributed software)",
        ],
        hint: "Think about the difference between the physical connection and the software coordination.",
      },
      {
        id: 2,
        question:
          "State the Tanenbaum definition of a distributed system.",
        marks: 2,
        markingGuide: [
          "A collection of independent computers",
          "That appear to the users of the system as a single computer",
        ],
        hint: "This definition focuses on the user's perspective.",
      },
      {
        id: 3,
        question:
          "Explain how 'Work Harder', 'Work Smarter', and 'Get Help' map to computing concepts.",
        marks: 3,
        markingGuide: [
          "Work Harder = improving hardware performance",
          "Work Smarter = using better algorithms",
          "Get Help = distributed/parallel processing",
        ],
        hint: "Think about three different strategies for making something faster.",
      },
      {
        id: 4,
        question:
          "Give three examples of distributed systems mentioned in the lecture.",
        marks: 3,
        markingGuide: [
          "Any three from: NFS, ATM machines, web page retrieval, network printers, ssh/telnet, Java RMI, CORBA, NIS, DSM, network audio/video, Condor",
        ],
        hint: "Think about systems where multiple computers work together to provide a service.",
      },
      {
        id: 5,
        question:
          "What are the four key issues that must be addressed in distributed systems?",
        marks: 4,
        markingGuide: [
          "Costly communications — bandwidth and latency vs local processing",
          "Unreliable communications — messages lost, corrupted, machines unavailable",
          "Independent failure — system must keep working after partial failure",
          "Insecure communications — exposed to unauthorised/malicious access",
        ],
        hint: "Think about what could go wrong when connecting computers over a network.",
      },
      {
        id: 6,
        question:
          "What does the Naming design issue require for resource names in a distributed system?",
        marks: 3,
        markingGuide: [
          "Names must have global meaning",
          "Be independent of resource location",
          "Be supported by an efficient name translation system that scales well",
        ],
        hint: "Think about what happens when a resource moves to a different server.",
      },
      {
        id: 7,
        question:
          "Why is distributed systems communication described as 'not so layered' compared to the OSI/TCP-IP model?",
        marks: 2,
        markingGuide: [
          "Because distributed systems mix and match protocols, APIs, and services as required",
          "Rather than strictly following a layered hierarchy",
        ],
        hint: "Think about the difference between strict network layers and practical DS communication.",
      },
      {
        id: 8,
        question:
          "List the three elements of security design in distributed systems and briefly describe each.",
        marks: 3,
        markingGuide: [
          "Authentication — verifying users have the right to access resources",
          "Access Control — assigning different levels of access to different users",
          "Auditing — logging all resource access as an audit trail",
        ],
        hint: "Think: Who are you? What can you do? What did you do?",
      },
      {
        id: 9,
        question:
          "Name two advantages and two disadvantages of distributed systems.",
        marks: 4,
        markingGuide: [
          "Advantages: better price-to-performance, lower turnaround, reliability, incremental growth",
          "Disadvantages: software complexity, communication bottlenecks, weaker security, reliability concerns",
        ],
        hint: "Think about both the benefits of spreading work across machines and the complications it introduces.",
      },
      {
        id: 10,
        question:
          "What is meant by 'consistency maintenance' in distributed systems? Give three specific concerns.",
        marks: 4,
        markingGuide: [
          "Ensuring coherence across the system",
          "Concerns include: concurrent data access, data replication for fault tolerance, cache management, failure handling, consistent time, and user interface consistency",
        ],
        hint: "Think about all the different things that could get 'out of sync'.",
      },
      {
        id: 11,
        question:
          "What does 'resource management' refer to in the context of distributed systems design?",
        marks: 2,
        markingGuide: [
          "Deploying processing and communications resources to optimum effect for handling a changing workload",
          "Commonly known as load balancing",
        ],
        hint: "Think about distributing work evenly across available machines.",
      },
      {
        id: 12,
        question:
          "Describe the three layers of the DS road map.",
        marks: 3,
        markingGuide: [
          "Fundamentals: processes, threads, RPC, naming, caching, protocols",
          "Middleware: scheduling, transactions, replication, fault-tolerance",
          "Application: DSM, distributed objects, security",
        ],
        hint: "Think about low-level building blocks, middle-layer services, and high-level applications.",
      },
      {
        id: 13,
        question:
          "What does 'openness' mean in the context of distributed system software structure?",
        marks: 2,
        markingGuide: [
          "Software components are designed with well-defined interfaces (APIs)",
          "So they can interwork with both existing and new services without duplicating functionality",
        ],
        hint: "Think about how different software components can work together through standard interfaces.",
      },
      {
        id: 14,
        question:
          "Why does 'getting help' in distributed computing come with risks?",
        marks: 3,
        markingGuide: [
          "Adding more components introduces coordination overhead",
          "Potential communication failures",
          "Security vulnerabilities and increased software complexity",
        ],
        hint: "Think about what happens when you add more people to a project.",
      },
      {
        id: 15,
        question:
          "What role does message passing play in the Coulouris definition of a distributed system?",
        marks: 2,
        markingGuide: [
          "It is the sole mechanism by which hardware or software components at networked computers communicate and coordinate their actions",
        ],
        hint: "Focus on the word 'only' in Coulouris's definition.",
      },
      {
        id: 16,
        question:
          "What does the 'Access' design issue require in a distributed system?",
        marks: 2,
        markingGuide: [
          "The same functions must be usable everywhere with reasonable performance",
          "The system must provide some idea of data coherence so that users see consistent data regardless of where they access it",
        ],
        hint: "Think about using the same service from different locations.",
      },
      {
        id: 17,
        question:
          "Why is the Communication design issue considered critical in distributed systems?",
        marks: 2,
        markingGuide: [
          "Because the performance and reliability of the communication techniques used directly determine the overall performance of the distributed system",
        ],
        hint: "Everything in a DS depends on how well machines can talk to each other.",
      },
      {
        id: 18,
        question:
          "List the five layers of the building blocks communications model mentioned in the lecture.",
        marks: 5,
        markingGuide: [
          "Data link layer (bits on a wire)",
          "Packet switching",
          "Addressing and routing",
          "Reliable data streams",
          "Higher-level protocols such as RPC, SNMP, and HTTP",
        ],
        hint: "Start from the lowest physical level and work up to application-level protocols.",
      },
      {
        id: 19,
        question:
          "Give two real-world examples used in the lecture to illustrate the concept of 'Working Smarter'.",
        marks: 2,
        markingGuide: [
          "Henry Ford's automobile assembly line",
          "McDonald's restaurants — both reduce the work needed through more efficient processes",
          "Racing lines in F1/athletics were also mentioned",
        ],
        hint: "Think about famous examples of efficiency improvements.",
      },

      // ===== SEMINAR 1 =====
      {
        id: 20,
        question:
          "List the key goals of a distributed system as presented in the seminar.",
        marks: 4,
        markingGuide: [
          "The key goals are: scalability, fault tolerance, efficiency, performance, data integrity, concurrency, transparency, replication, availability, security, and maintainability",
        ],
        hint: "There are eleven goals — think about what you'd want from a system that uses multiple computers.",
      },
      {
        id: 21,
        question:
          "Explain the three dimensions of scalability in a distributed system.",
        marks: 3,
        markingGuide: [
          "Size scalability means handling more users and resources",
          "Geographic scalability means operating across large physical distances",
          "Administrative scalability means functioning across multiple organisational boundaries",
        ],
        hint: "Think about three different ways a system might need to grow.",
      },
      {
        id: 22,
        question:
          "What is meant by 'transparency' as a goal of a distributed system, and what three aspects does it cover?",
        marks: 4,
        markingGuide: [
          "Transparency means hiding the distributed nature of the system so it appears as a single coherent system",
          "Location transparency — hiding where resources are",
          "Replication transparency — hiding that data is copied",
          "Failure transparency — hiding component failures from users",
        ],
        hint: "The user shouldn't know or care that the system is distributed.",
      },
      {
        id: 23,
        question:
          "Describe the four sub-aspects of the Security goal in a distributed system.",
        marks: 4,
        markingGuide: [
          "Authentication verifies user identity",
          "Authorisation determines what permissions a user has",
          "Encryption protects data in transit and at rest",
          "Auditing logs all access to resources for accountability and evidence",
        ],
        hint: "Think: Who are you? What can you do? Is it protected? Is it logged?",
      },
      {
        id: 24,
        question:
          "What does 'heterogeneity' mean as a challenge in distributed systems? Give three specific examples.",
        marks: 4,
        markingGuide: [
          "Heterogeneity refers to the variety and differences that exist across a distributed system",
          "Examples include different network protocols, different operating systems (e.g. Windows, Linux, macOS), different programming languages, different computer hardware, and implementations by different developers",
        ],
        hint: "Think about all the ways computers in a distributed system might be different from each other.",
      },
      {
        id: 25,
        question:
          "List the six types of transparency identified as challenges in distributed systems and briefly explain each.",
        marks: 6,
        markingGuide: [
          "Access transparency hides differences in how data is accessed",
          "Location transparency hides where resources physically reside",
          "Concurrency transparency hides that resources are being shared by multiple users",
          "Replication transparency hides that data has been copied across nodes",
          "Failure transparency hides that a component has failed",
          "Scaling transparency hides that the system has been resized",
        ],
        hint: "Six things the system should hide from users — think about access, location, sharing, copies, failures, and growth.",
      },
      {
        id: 26,
        question:
          "What specific security challenges are mentioned for distributed systems beyond the general security goal?",
        marks: 2,
        markingGuide: [
          "Bottlenecks that arise in decentralised security systems",
          "The uncontrolled growth of metadata",
        ],
        hint: "These are practical challenges, not the high-level security goals.",
      },
      {
        id: 27,
        question:
          "What three concerns does the 'Scheduling' challenge in distributed systems involve?",
        marks: 3,
        markingGuide: [
          "Load balancing — distributing work evenly across nodes",
          "Synchronisation — coordinating processes",
          "Clock drift — the gradual divergence of clocks on different machines, which makes event ordering difficult",
        ],
        hint: "Think about coordinating work, keeping things in sync, and the problem of time.",
      },
      {
        id: 28,
        question:
          "Explain the difference between 'fault tolerance' as a goal and 'fault tolerance' as a challenge.",
        marks: 3,
        markingGuide: [
          "As a goal, fault tolerance is the desired property that a system continues operating correctly despite component failures",
          "As a challenge, it refers to the practical difficulty of implementing failure handling — detecting node crashes, rerouting work, and maintaining service continuity",
        ],
        hint: "One is what you want to achieve, the other is how hard it is to actually do it.",
      },
      {
        id: 29,
        question:
          "How does 'replication' serve as both a goal and a source of challenges?",
        marks: 4,
        markingGuide: [
          "As a goal, replication improves availability, fault tolerance, and performance by maintaining multiple copies of data",
          "As a challenge, keeping all copies synchronised and consistent — especially after updates — is technically difficult and can introduce conflicts",
        ],
        hint: "Having copies is good for reliability, but keeping them all the same is hard.",
      },
      {
        id: 30,
        question:
          "In a P2P network using traditional desktop machines, what are the implications for the availability of shared data?",
        marks: 3,
        markingGuide: [
          "Desktop machines may be powered off, disconnected, or restarted at any time",
          "Unlike dedicated servers, these hosts have no guaranteed uptime",
          "So the availability of shared data objects is inherently unreliable",
        ],
        hint: "Think about what happens when you leave work and turn off your PC.",
      },
      {
        id: 31,
        question:
          "In a P2P network using traditional desktop machines, what are the implications for the security of shared data?",
        marks: 3,
        markingGuide: [
          "Desktop machines typically lack enterprise-grade security measures such as firewalls, intrusion detection, and physical security",
          "This makes shared data vulnerable to unauthorised access, malware, and tampering",
        ],
        hint: "Compare a home PC to a professionally managed server in a data centre.",
      },
      {
        id: 32,
        question:
          "How can data replication address the availability and security weaknesses in a P2P network, and what limitations does it introduce?",
        marks: 4,
        markingGuide: [
          "Replication stores copies across multiple peers so data remains accessible even when some hosts go offline",
          "It can improve resilience to data loss from individual machine failures",
          "However, replication introduces consistency challenges — keeping all copies synchronised",
          "It can worsen security concerns by increasing the number of machines that hold sensitive data",
        ],
        hint: "More copies help with availability but create new problems.",
      },
      {
        id: 33,
        question:
          "Explain the relationship between 'availability' and 'fault tolerance' as goals of a distributed system.",
        marks: 3,
        markingGuide: [
          "They are closely linked — availability ensures the system is accessible when needed",
          "Fault tolerance ensures it keeps working when components fail",
          "Fault tolerance directly supports availability: if the system tolerates a node failure without downtime, it remains available to users",
        ],
        hint: "If the system handles failures well, it stays available.",
      },
      {
        id: 34,
        question:
          "What is meant by 'consistency and replication' as a challenge, and why is it difficult to achieve?",
        marks: 3,
        markingGuide: [
          "It refers to ensuring that all replicated copies of data across different nodes remain identical and up to date",
          "This is difficult because updates must be propagated to all replicas, and if nodes are temporarily unreachable or updates arrive in different orders, copies can diverge",
        ],
        hint: "Think about what happens when multiple copies of data are updated at the same time.",
      },
      {
        id: 35,
        question:
          "Why is 'resource management' listed as a challenge in distributed systems?",
        marks: 3,
        markingGuide: [
          "Processing, storage, and network resources are spread across multiple nodes with different capacities and workloads",
          "Allocating and coordinating these resources efficiently — without bottlenecks or waste — requires complex decision-making",
          "This complexity does not exist in a single-machine system",
        ],
        hint: "Managing resources across many machines is harder than managing one machine.",
      },

      // ===== QUESTION OF THE WEEK =====
      {
        id: 36,
        question:
          "Explain why shared data availability is a problem in P2P networks that use traditional desktop computers.",
        marks: 3,
        markingGuide: [
          "Users frequently turn off their computers when not using them and during extended absences or transit",
          "Since there is no dedicated always-on server, any data stored exclusively on that machine becomes completely unavailable to the network whenever it is offline",
        ],
        hint: "What happens to the data when the only computer storing it is turned off?",
      },
      {
        id: 37,
        question:
          "Describe two security risks associated with shared data in a P2P network of desktop machines.",
        marks: 4,
        markingGuide: [
          "The trustworthiness of participants is unknown — owners may tamper with or delete shared data since they have full control over their machines",
          "Network connections between peers are exposed to attacks including DoS attacks, which can disrupt both availability and data transfer",
        ],
        hint: "Think about who controls the data and what can happen to the network connection.",
      },
      {
        id: 38,
        question:
          "Why does the severity of P2P availability and security weaknesses depend on the application?",
        marks: 3,
        markingGuide: [
          "For applications like music downloads, users can tolerate waiting for a host to come back online, so availability is less critical",
          "For conventional applications like file storage, where data integrity and immediate access are essential, these weaknesses become much more significant",
        ],
        hint: "Compare waiting for a song versus waiting for an important document.",
      },
      {
        id: 39,
        question:
          "Explain how replication reduces the probability of data being unavailable in a P2P network.",
        marks: 3,
        markingGuide: [
          "By distributing copies of data across multiple peers, the system ensures that data remains accessible even if some hosts are offline",
          "If replicas are sufficiently widespread and numerous, the probability that all copies are simultaneously unavailable drops to a negligible level",
        ],
        hint: "What are the chances that ALL copies are offline at the same time?",
      },
      {
        id: 40,
        question:
          "Describe the consensus algorithm approach used to ensure data integrity across multiple hosts.",
        marks: 3,
        markingGuide: [
          "Peers exchange hashes of a data object's value and compare them",
          "If the hashes match, the data is considered consistent and untampered",
          "This allows the network to detect both accidental corruption and deliberate tampering by establishing a consensus on the correct version",
        ],
        hint: "Think about how multiple people can verify they all have the same version of something.",
      },
      {
        id: 41,
        question:
          "How does a Secure Hash identifier scheme work to verify data integrity in a P2P system?",
        marks: 3,
        markingGuide: [
          "The object's ID is derived from a hash of its content",
          "When a client receives the object, it recomputes the hash and checks that it corresponds with the ID",
          "If they match, the data has not been altered; if they differ, the data has been tampered with or corrupted during transfer",
        ],
        hint: "The data's fingerprint IS its name — so you can always check if the name matches the data.",
      },
      {
        id: 42,
        question:
          "What are the limitations of using replication to solve P2P security and availability problems?",
        marks: 3,
        markingGuide: [
          "While replication improves availability, it increases the number of machines holding copies of data, which widens the attack surface for security threats",
          "It also introduces consistency challenges — keeping all replicas synchronised after updates requires coordination, and conflicting versions may arise if peers modify data independently",
        ],
        hint: "More copies help availability but make security and consistency harder.",
      },
    ],
  },

  2: {
    id: 2,
    title: "Communication Models in Distributed Systems",
    subtitle: "Message Passing, RPC, Pub-Sub, P2P, Streaming & Synchronous vs Asynchronous",
    emoji: "📡",
    guide: week2Guide,

    mcqs: [
      // ===== LECTURE 2 =====
      {
        id: 1,
        question:
          "In distributed systems, communication models define how:",
        options: [
          "Hardware components are physically connected",
          "Different processes and nodes interact with each other",
          "Programming languages are chosen for development",
          "Users authenticate with the system",
        ],
        correct: 1,
        explanation:
          "Communication models define how different processes and nodes interact with each other, influencing system design, efficiency, and reliability.",
      },
      {
        id: 2,
        question:
          "Which of the following is NOT one of the seven key communication models covered?",
        options: [
          "Message Passing",
          "Tuple Space Model",
          "Client-Server Model",
          "Data Streaming Model",
        ],
        correct: 2,
        explanation:
          "The seven models are: Message Passing, Shared Memory, RPC, Publish-Subscribe, Data Streaming, P2P, and Tuple Space. Client-Server is a system architecture, not one of the seven communication models listed.",
      },
      {
        id: 3,
        question:
          "In the Message Passing model, what is required to transmit data between processes?",
        options: [
          "Shared memory access",
          "A central coordinator",
          "Message serialization and deserialization",
          "A tuple space",
        ],
        correct: 2,
        explanation:
          "Message Passing requires message serialization (converting data to a transmittable format) and deserialization (converting it back) to send data over a network.",
      },
      {
        id: 4,
        question:
          "Which of the following is an example of the Message Passing model?",
        options: [
          "Hadoop HDFS",
          "JavaSpaces",
          "RabbitMQ",
          "Apache ZooKeeper",
        ],
        correct: 2,
        explanation:
          "RabbitMQ is a message queue system — an example of Message Passing. HDFS is Shared Memory, JavaSpaces and ZooKeeper are Tuple Space examples.",
      },
      {
        id: 5,
        question:
          "The Shared Memory model requires which mechanism to prevent conflicts?",
        options: [
          "Message brokers",
          "Synchronization mechanisms (locks, semaphores)",
          "Hash-based verification",
          "Event-driven callbacks",
        ],
        correct: 1,
        explanation:
          "The Shared Memory model requires synchronization mechanisms like locks and semaphores to prevent conflicts when multiple processes read/write to the same shared space.",
      },
      {
        id: 6,
        question:
          "Which distributed system technology is an example of the Shared Memory model?",
        options: [
          "Apache Kafka",
          "gRPC",
          "Distributed Shared Memory (DSM)",
          "BitTorrent",
        ],
        correct: 2,
        explanation:
          "DSM and Distributed File Systems (Google File System, Hadoop HDFS) are examples of the Shared Memory model.",
      },
      {
        id: 7,
        question:
          "What does RPC abstract away from the developer?",
        options: [
          "Data storage details",
          "Network communication details",
          "User interface design",
          "Database query optimization",
        ],
        correct: 1,
        explanation:
          "RPC abstracts network communication details, allowing a developer to invoke a function on a remote system as if it were a local function call.",
      },
      {
        id: 8,
        question:
          "The RPC model follows which sequence?",
        options: [
          "Server sends request → Client processes → Client responds",
          "Client sends request → Server processes → Server sends response",
          "Publisher sends event → Broker distributes → Subscriber receives",
          "Both peers exchange data simultaneously",
        ],
        correct: 1,
        explanation:
          "RPC follows: Client sends request → Server processes request → Server sends response.",
      },
      {
        id: 9,
        question:
          "Which of the following is an example of RPC?",
        options: [
          "Apache Kafka",
          "BitTorrent",
          "Java RMI (Remote Method Invocation)",
          "MQTT",
        ],
        correct: 2,
        explanation:
          "Java RMI, gRPC, and Apache Thrift are examples of the RPC model.",
      },
      {
        id: 10,
        question:
          "In the Publish-Subscribe model, publishers send messages:",
        options: [
          "Directly to specific subscribers",
          "Without knowing who the subscribers are",
          "Only to authenticated receivers",
          "Through shared memory",
        ],
        correct: 1,
        explanation:
          "In Publish-Subscribe, publishers send messages without knowing who the subscribers are — a message broker handles distribution. This is what makes it a decoupled architecture.",
      },
      {
        id: 11,
        question:
          "Which is a key advantage of the Publish-Subscribe model?",
        options: [
          "Low infrastructure requirements",
          "Synchronous communication",
          "Decoupled architecture — publishers and subscribers evolve independently",
          "Direct connection between sender and receiver",
        ],
        correct: 2,
        explanation:
          "The key advantage is decoupled architecture — publishers and subscribers don't need to know about each other and can evolve independently.",
      },
      {
        id: 12,
        question:
          "Which of the following is an example of the Publish-Subscribe model?",
        options: [
          "Java RMI",
          "Hadoop HDFS",
          "Google Cloud Pub/Sub",
          "Skype",
        ],
        correct: 2,
        explanation:
          "Apache Kafka, MQTT, and Google Cloud Pub/Sub are examples of the Publish-Subscribe model.",
      },
      {
        id: 13,
        question:
          "The Data Streaming model is characterised by:",
        options: [
          "Request-response patterns",
          "Continuous data flow using a push model",
          "Shared tuple spaces",
          "Blocking synchronous calls",
        ],
        correct: 1,
        explanation:
          "Data Streaming uses continuous data flow (push model) where data is sent as it becomes available, suitable for real-time analytics and monitoring.",
      },
      {
        id: 14,
        question:
          "In a Peer-to-Peer (P2P) model, nodes act as:",
        options: [
          "Only clients",
          "Only servers",
          "Both clients and servers",
          "Message brokers",
        ],
        correct: 2,
        explanation:
          "In P2P, all nodes act as both clients and servers, sharing resources and data without a central authority.",
      },
      {
        id: 15,
        question:
          "Which is a disadvantage of the P2P communication model?",
        options: [
          "Single point of failure",
          "Difficult to maintain consistency",
          "Cannot scale with more nodes",
          "Requires a central server",
        ],
        correct: 1,
        explanation:
          "P2P has no single point of failure (that's an advantage), but it is difficult to maintain consistency across all nodes and has security risks.",
      },
      {
        id: 16,
        question:
          "The Tuple Space model is based on which coordination approach?",
        options: [
          "The Observer Pattern",
          "The Linda Coordination Model",
          "The Actor Model",
          "The MapReduce framework",
        ],
        correct: 1,
        explanation:
          "The Tuple Space model is based on the Linda Coordination Model, where processes write, read, and take data tuples from a shared space.",
      },
      {
        id: 17,
        question:
          "What makes the Tuple Space model unique compared to Message Passing?",
        options: [
          "It requires faster network connections",
          "Processes are decoupled in time and space — they don't need to be online simultaneously",
          "It only works with synchronous communication",
          "It requires a central server",
        ],
        correct: 1,
        explanation:
          "The Tuple Space model is decoupled in time and space — a producer can write a tuple and disconnect, and a consumer can read it later.",
      },

      // ===== SEMINAR 2 =====
      {
        id: 18,
        question:
          "In a synchronous distributed system, which of the following is true?",
        options: [
          "There are no bounds on process execution speeds",
          "Messages may take unlimited time to arrive",
          "Each message is received within a known bounded time",
          "Clock drift rates are unknown",
        ],
        correct: 2,
        explanation:
          "In a synchronous DS: execution time has known bounds, messages are received within known bounded time, and clock drift has known bounds.",
      },
      {
        id: 19,
        question:
          "In an asynchronous distributed system, there are no bounds on:",
        options: [
          "Only process execution speeds",
          "Only message transmission delays",
          "Process execution speeds, message transmission delays, and clock drift rates",
          "Only clock drift rates",
        ],
        correct: 2,
        explanation:
          "In an asynchronous DS, there are no bounds on any of: process execution speeds, message transmission delays, or clock drift rates.",
      },
      {
        id: 20,
        question:
          "Synchronous communication provides simpler coordination but introduces:",
        options: [
          "Security vulnerabilities",
          "Increased latency",
          "Data corruption",
          "Memory leaks",
        ],
        correct: 1,
        explanation:
          "Synchronous communication means the sender waits for the receiver to respond, which gives simpler coordination but increases latency.",
      },
      {
        id: 21,
        question:
          "Which of the following is NOT a valid reason why communication is critical in distributed systems?",
        options: [
          "Data sharing between processes",
          "Synchronization and coordination",
          "Fault tolerance and consistency",
          "To increase CPU performance",
        ],
        correct: 3,
        explanation:
          "Communication is critical for data sharing, synchronization, and fault tolerance — NOT for increasing CPU performance. CPU performance is a hardware concern.",
      },
      {
        id: 22,
        question:
          "What are the two advantages of RPC identified in the seminar?",
        options: [
          "Encryption and authentication",
          "Makes remote calls look local and simplifies distributed programming",
          "Load balancing and caching",
          "Decoupled architecture and event-driven design",
        ],
        correct: 1,
        explanation:
          "RPC advantages: (1) makes remote calls look local, and (2) simplifies distributed programming. Serialization is a requirement, not an advantage.",
      },
      {
        id: 23,
        question:
          "Which three challenges in distributed communication are paired with their solutions?",
        options: [
          "Latency → More hardware, Fault Tolerance → Faster CPUs, Security → Load balancing",
          "Latency → Efficient protocols and caching, Fault Tolerance → Replication and retries, Security → Encryption and authentication",
          "Latency → Encryption, Fault Tolerance → Caching, Security → Replication",
          "Latency → Tuple spaces, Fault Tolerance → Shared memory, Security → Message passing",
        ],
        correct: 1,
        explanation:
          "Latency → efficient protocols/caching, Fault Tolerance → replication/retries, Security → encryption/authentication.",
      },
      {
        id: 24,
        question:
          "WhatsApp uses which communication model for group messages?",
        options: [
          "Message Passing (TCP)",
          "P2P Model",
          "Publish-Subscribe",
          "Shared Memory",
        ],
        correct: 2,
        explanation:
          "WhatsApp uses Message Passing (TCP) for text messages, Publish-Subscribe for group messages, and P2P for voice/video calls.",
      },
      {
        id: 25,
        question:
          "Google Drive uses which model as its primary model for file access?",
        options: [
          "P2P Model",
          "Tuple Space Model",
          "Client-Server Model",
          "Data Streaming Model",
        ],
        correct: 2,
        explanation:
          "Google Drive's primary model for file access and synchronization is the Client-Server Model.",
      },

      // ===== QUESTION OF THE WEEK =====
      {
        id: 26,
        question:
          "For uploading and downloading lecture materials in a cloud-based LMS, which model is most suitable?",
        options: [
          "Peer-to-Peer Model",
          "Client-Server Model",
          "Tuple Space Model",
          "Data Streaming Model",
        ],
        correct: 1,
        explanation:
          "Client-Server Model is most suitable — the LMS needs centralised cloud storage where students/professors upload/download files using HTTP(S) REST APIs.",
      },
      {
        id: 27,
        question:
          "For receiving real-time notifications when a professor posts a new assignment, which model is most suitable?",
        options: [
          "Shared Memory Model",
          "RPC Model",
          "Publish-Subscribe Model",
          "Tuple Space Model",
        ],
        correct: 2,
        explanation:
          "Publish-Subscribe — the LMS publishes an event when a new assignment is uploaded, and all subscribed students get notified asynchronously.",
      },
      {
        id: 28,
        question:
          "For collaborating on shared documents in real time, which model is suggested?",
        options: [
          "Client-Server Model",
          "Data Streaming Model",
          "Peer-to-Peer (P2P) Model",
          "Message Passing with TCP sockets",
        ],
        correct: 2,
        explanation:
          "P2P Model — direct peer-to-peer communication is more efficient than constantly requesting updates from a central server. Uses WebRTC or Operational Transformation (OT) algorithms.",
      },
      {
        id: 29,
        question:
          "For streaming live lectures with interactive participation, which model is identified?",
        options: [
          "Shared Memory Model",
          "Tuple Space Model",
          "Message Passing Model",
          "Client-Server Model only",
        ],
        correct: 2,
        explanation:
          "Message Passing Model — live streaming requires continuous data exchange using protocols like WebRTC, RTP, and MQTT. In practice, live lectures combine Client-Server, Publish-Subscribe, and Message Passing.",
      },
      {
        id: 30,
        question:
          "The LMS live lecture scenario demonstrates that real-world features often require:",
        options: [
          "Exactly one communication model per feature",
          "Only the Client-Server model",
          "A combination of multiple communication models",
          "No specific communication model",
        ],
        correct: 2,
        explanation:
          "Live lectures combine Client-Server (hosting/distributing video), Publish-Subscribe (notifications), and Message Passing (real-time chat/Q&A).",
      },
    ],

    flashcards: [
      // ===== LECTURE 2 =====
      {
        id: 1,
        front: "What do communication models define in distributed systems?",
        back: "How different processes and nodes interact with each other. They influence system design, efficiency, and reliability.",
      },
      {
        id: 2,
        front: "Name the seven key communication models.",
        back: "Message Passing, Shared Memory, RPC, Publish-Subscribe, Data Streaming, Peer-to-Peer (P2P), and Tuple Space.",
      },
      {
        id: 3,
        front: "What is Message Passing?",
        back: "Processes communicate by sending and receiving messages over a network. Requires serialization/deserialization. Can be synchronous or asynchronous.",
      },
      {
        id: 4,
        front: "Give examples of Message Passing.",
        back: "Sockets (TCP, UDP), RPC, Message Queue Systems (RabbitMQ, Kafka), REST APIs, gRPC.",
      },
      {
        id: 5,
        front: "What is the Shared Memory Model?",
        back: "Processes communicate by reading and writing to a shared memory space. Provides global memory abstraction. Requires synchronization mechanisms (locks, semaphores).",
      },
      {
        id: 6,
        front: "Give examples of the Shared Memory Model.",
        back: "Distributed Shared Memory (DSM), Distributed File Systems (Google File System, Hadoop HDFS).",
      },
      {
        id: 7,
        front: "What is Remote Procedure Call (RPC)?",
        back: "Allows a process to invoke a function on a remote system as if it were a local function call. Abstracts network communication details.",
      },
      {
        id: 8,
        front: "What is the RPC sequence?",
        back: "Client sends request → Server processes request → Server sends response. Can be blocking (synchronous) or non-blocking (asynchronous).",
      },
      {
        id: 9,
        front: "Give examples of RPC.",
        back: "gRPC (Google), Apache Thrift, Java RMI (Remote Method Invocation).",
      },
      {
        id: 10,
        front: "What is the Publish-Subscribe Model?",
        back: "Event-based messaging where publishers send messages without knowing who subscribers are. A message broker handles distribution. Decoupled and asynchronous.",
      },
      {
        id: 11,
        front: "Give examples of Publish-Subscribe.",
        back: "Apache Kafka, MQTT (Message Queuing Telemetry Transport), Google Cloud Pub/Sub.",
      },
      {
        id: 12,
        front: "What is the Data Streaming Model?",
        back: "Processes continuously send and receive data in real time using a push model. Suitable for real-time analytics and monitoring.",
      },
      {
        id: 13,
        front: "Give examples of Data Streaming.",
        back: "Apache Kafka, Apache Flink, Spark Streaming.",
      },
      {
        id: 14,
        front: "What is the Peer-to-Peer (P2P) Model?",
        back: "All nodes act as both clients and servers, sharing resources without a central authority. Decentralized, highly scalable, but consistency and security are challenges.",
      },
      {
        id: 15,
        front: "Give examples of P2P.",
        back: "BitTorrent, Blockchain (Bitcoin, Ethereum), Skype (older versions).",
      },
      {
        id: 16,
        front: "What is the Tuple Space Model?",
        back: "Processes interact through a shared tuple space — writing, reading, and taking data tuples. Based on the Linda Coordination Model. Decoupled in time and space.",
      },
      {
        id: 17,
        front: "Give examples of Tuple Space.",
        back: "JavaSpaces, Apache ZooKeeper, TIBCO Rendezvous.",
      },
      {
        id: 18,
        front: "What does 'decoupled in time and space' mean for Tuple Space?",
        back: "Processes don't need to be online simultaneously — a producer can write a tuple and disconnect, and a consumer can read it later.",
      },

      // ===== SEMINAR 2 =====
      {
        id: 19,
        front: "What defines a Synchronous Distributed System?",
        back: "Known bounds on: execution time per step, message transmission time, and clock drift rate from real time.",
      },
      {
        id: 20,
        front: "What defines an Asynchronous Distributed System?",
        back: "No bounds on: process execution speeds, message transmission delays, or clock drift rates.",
      },
      {
        id: 21,
        front: "Synchronous vs Asynchronous communication trade-off?",
        back: "Synchronous: sender waits for response — simpler coordination but increased latency. Asynchronous: sender proceeds without waiting — more efficient but harder to handle failures.",
      },
      {
        id: 22,
        front: "Why is communication critical in distributed systems? (3 reasons)",
        back: "1) Data sharing between processes, 2) Synchronization and coordination, 3) Fault tolerance and consistency. NOT 'to increase CPU performance'.",
      },
      {
        id: 23,
        front: "What are the two advantages of RPC?",
        back: "1) Makes remote calls look local, 2) Simplifies distributed programming.",
      },
      {
        id: 24,
        front: "Name the three challenges in distributed communication and their solutions.",
        back: "Latency → efficient protocols/caching. Fault Tolerance → replication/retries. Security → encryption/authentication.",
      },
      {
        id: 25,
        front: "What communication models does WhatsApp use?",
        back: "Message Passing (TCP) for text messages, Publish-Subscribe for group messages, P2P for voice/video calls.",
      },
      {
        id: 26,
        front: "What communication models does Google Drive use?",
        back: "Client-Server (file access), Message Passing (file sync), Publish-Subscribe (real-time updates), P2P (Docs collaboration), RPC (service-to-service).",
      },

      // ===== QUESTION OF THE WEEK =====
      {
        id: 27,
        front: "LMS: Uploading/downloading materials → which model?",
        back: "Client-Server Model — centralised cloud storage, HTTP(S) REST APIs for file transfers.",
      },
      {
        id: 28,
        front: "LMS: Real-time notifications → which model?",
        back: "Publish-Subscribe — LMS publishes events, subscribed students get notified. Uses Pub/Sub or WebSockets.",
      },
      {
        id: 29,
        front: "LMS: Real-time document collaboration → which model?",
        back: "Peer-to-Peer (P2P) — direct P2P is more efficient than polling a central server. Uses WebRTC or Operational Transformation (OT).",
      },
      {
        id: 30,
        front: "LMS: Live lecture streaming → which model?",
        back: "Message Passing — continuous data exchange using WebRTC, RTP, MQTT. In practice combines Client-Server, Pub-Sub, and Message Passing.",
      },
      {
        id: 31,
        front: "Why do live lectures need multiple communication models?",
        back: "Client-Server hosts/distributes video. Publish-Subscribe notifies when lecture starts. Message Passing handles real-time chat, reactions, Q&A.",
      },
    ],

    shortAnswers: [
      // ===== LECTURE 2 =====
      {
        id: 1,
        question:
          "What are communication models in distributed systems, and why are they important?",
        marks: 2,
        markingGuide: [
          "Communication models define how different processes and nodes interact with each other",
          "They influence system design, efficiency, and reliability",
        ],
        hint: "Think about what communication models actually determine in the system.",
      },
      {
        id: 2,
        question:
          "List the seven key communication models covered in the lecture.",
        marks: 3,
        markingGuide: [
          "Message Passing, Shared Memory Model, Remote Procedure Call (RPC), Publish-Subscribe, Data Streaming, Peer-to-Peer (P2P), Tuple Space Model",
        ],
        hint: "There are exactly seven models — think about different ways processes can exchange information.",
      },
      {
        id: 3,
        question:
          "Describe the Message Passing model and give two examples.",
        marks: 3,
        markingGuide: [
          "Processes communicate by sending and receiving messages over a network",
          "Can be synchronous or asynchronous, requires serialization/deserialization",
          "Examples: Sockets (TCP/UDP), RabbitMQ, Kafka, REST APIs, gRPC",
        ],
        hint: "Think about explicitly sending data from one process to another.",
      },
      {
        id: 4,
        question:
          "How does the Shared Memory model differ from Message Passing? What synchronization mechanisms does it require?",
        marks: 3,
        markingGuide: [
          "Shared Memory: processes read/write to a shared memory space rather than exchanging messages",
          "Provides a global memory abstraction — no explicit message exchange needed",
          "Requires synchronization mechanisms like locks and semaphores to prevent conflicts",
        ],
        hint: "One model sends messages, the other reads/writes to a shared space.",
      },
      {
        id: 5,
        question:
          "Explain how RPC works and why it is useful for distributed programming.",
        marks: 3,
        markingGuide: [
          "RPC allows a process to invoke a function on a remote system as if it were local",
          "Sequence: client sends request → server processes → server sends response",
          "Useful because it abstracts network communication details, simplifying distributed programming",
        ],
        hint: "The key benefit is making remote calls 'look local'.",
      },
      {
        id: 6,
        question:
          "What distinguishes the Publish-Subscribe model from direct Message Passing?",
        marks: 3,
        markingGuide: [
          "In Publish-Subscribe, publishers send messages without knowing who the subscribers are — it's decoupled",
          "A message broker sits between publishers and subscribers",
          "In Message Passing, the sender typically knows the receiver and communicates directly",
        ],
        hint: "Think about who knows about whom in each model.",
      },
      {
        id: 7,
        question:
          "Describe the Tuple Space model and explain what 'decoupled in time and space' means.",
        marks: 3,
        markingGuide: [
          "Processes interact through a shared tuple space by writing, reading, and taking data tuples",
          "Based on the Linda Coordination Model",
          "Decoupled in time and space means processes don't need to be online simultaneously — a producer can write a tuple and disconnect, a consumer can read it later",
        ],
        hint: "Think about a shared noticeboard where people can leave and collect messages at different times.",
      },
      {
        id: 8,
        question:
          "Compare the advantages and disadvantages of the P2P communication model.",
        marks: 4,
        markingGuide: [
          "Advantages: no single point of failure, scales well with more nodes",
          "Disadvantages: difficult to maintain consistency across all nodes, security risks due to lack of central control",
        ],
        hint: "Think about what happens when there's no central authority.",
      },

      // ===== SEMINAR 2 =====
      {
        id: 9,
        question:
          "Compare synchronous and asynchronous distributed systems.",
        marks: 4,
        markingGuide: [
          "Synchronous: known bounds on execution time, message transmission time, and clock drift",
          "Asynchronous: no bounds on process speeds, message delays, or clock drift",
          "Synchronous gives simpler coordination but increased latency",
          "Asynchronous is more efficient but harder to handle failures",
        ],
        hint: "Think about what you can and cannot guarantee about timing.",
      },
      {
        id: 10,
        question:
          "Give three valid reasons why communication is critical in distributed systems. What is a commonly given incorrect reason?",
        marks: 3,
        markingGuide: [
          "Valid: data sharing between processes, synchronization and coordination, fault tolerance and consistency",
          "Incorrect: 'to increase CPU performance' — communication is about coordination, not CPU speed",
        ],
        hint: "Think about what communication enables between machines, not within a single machine.",
      },
      {
        id: 11,
        question:
          "Name the three key challenges in distributed communication and the solution approach for each.",
        marks: 3,
        markingGuide: [
          "Latency → efficient protocols and caching",
          "Fault Tolerance → replication and retries",
          "Security → encryption and authentication",
        ],
        hint: "Each challenge has a specific category of solution.",
      },
      {
        id: 12,
        question:
          "Analyse the communication models used by WhatsApp.",
        marks: 3,
        markingGuide: [
          "Message Passing (TCP) for text messages",
          "Publish-Subscribe for group messages",
          "P2P Model for voice/video calls",
        ],
        hint: "Think about three different features of WhatsApp and which model suits each.",
      },
      {
        id: 13,
        question:
          "Analyse the communication models used by Google Drive.",
        marks: 5,
        markingGuide: [
          "Client-Server Model for primary file access and synchronization",
          "Message Passing for file synchronization across devices",
          "Publish-Subscribe for real-time collaboration updates",
          "P2P for Google Docs collaboration",
          "RPC for efficient communication between services",
        ],
        hint: "Google Drive uses five different models — think about each feature separately.",
      },

      // ===== QUESTION OF THE WEEK =====
      {
        id: 14,
        question:
          "For a cloud-based LMS, explain which communication model is most suitable for uploading and downloading lecture materials, and justify your choice.",
        marks: 3,
        markingGuide: [
          "Client-Server Model is most suitable",
          "The LMS needs centralised cloud storage for files",
          "Uses HTTP(S) REST APIs for file transfers between client devices and the server",
        ],
        hint: "Think about where the files are stored and how they're accessed.",
      },
      {
        id: 15,
        question:
          "For a cloud-based LMS, explain which communication model is most suitable for real-time assignment notifications, and justify your choice.",
        marks: 3,
        markingGuide: [
          "Publish-Subscribe Model is most suitable",
          "The LMS publishes an event when a new assignment is uploaded",
          "All subscribed students receive notifications asynchronously without the publisher needing to know who they are",
        ],
        hint: "Think about one publisher and many receivers who need instant updates.",
      },
      {
        id: 16,
        question:
          "For a cloud-based LMS, explain which communication model is most suitable for real-time document collaboration, and justify your choice.",
        marks: 3,
        markingGuide: [
          "Peer-to-Peer (P2P) Model is suggested",
          "Direct P2P communication is more efficient than constantly polling a central server",
          "Uses WebRTC or Operational Transformation (OT) algorithms for low-latency updates",
        ],
        hint: "Think about multiple users editing the same document simultaneously.",
      },
      {
        id: 17,
        question:
          "For a cloud-based LMS, explain which communication model is most suitable for streaming live lectures with interactive participation, and justify your choice.",
        marks: 4,
        markingGuide: [
          "Message Passing Model is the primary model for real-time data exchange",
          "Uses protocols like WebRTC, RTP, and MQTT for live data transmission",
          "In practice, live lectures combine multiple models: Client-Server for hosting/distributing video, Publish-Subscribe for start notifications, Message Passing for chat/Q&A",
        ],
        hint: "This feature needs continuous data flow AND interactive communication — consider if one model is enough.",
      },
      {
        id: 18,
        question:
          "Why do real-world distributed systems typically use a combination of communication models rather than a single model?",
        marks: 3,
        markingGuide: [
          "Different features have different requirements — e.g. file storage needs client-server but notifications need pub-sub",
          "Each model has specific strengths and trade-offs that suit different use cases",
          "A single model cannot optimally handle all types of interaction (e.g. real-time streaming, file uploads, notifications all have different needs)",
        ],
        hint: "Think about why WhatsApp and Google Drive both use multiple models.",
      },
    ],
  },
};

export const moduleInfo = {
  name: "Distributed Systems",
  code: "Y3",
  totalWeeks: 12,
};

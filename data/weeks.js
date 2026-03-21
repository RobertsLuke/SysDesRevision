import { week1Guide } from "./guides/week1";
import { week2Guide } from "./guides/week2";
import { week3Guide } from "./guides/week3";
import { week4Guide } from "./guides/week4";
import { week5Guide } from "./guides/week5";
import { week6Guide } from "./guides/week6";
import { week7Guide } from "./guides/week7";

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

  3: {
    id: 3,
    title: "Time & Coordination in Distributed Systems",
    subtitle: "Clock Synchronization, Logical Clocks, Vector Clocks & Mutual Exclusion",
    emoji: "⏰",
    guide: week3Guide,

    mcqs: [
      // ===== LECTURE 3 =====
      {
        id: 1,
        question:
          "Why is clock synchronization important in distributed systems?",
        options: [
          "To ensure all nodes use the same programming language",
          "To measure delays, order events, and maintain consistent state",
          "To reduce the number of nodes in the network",
          "To eliminate the need for message passing",
        ],
        correct: 1,
        explanation:
          "Clock synchronization is needed to measure delays between components, order events consistently, synchronize streams, timestamp transactions, and support security protocols.",
      },
      {
        id: 2,
        question: "Clock skew refers to:",
        options: [
          "The rate at which a clock deviates from a reference over time",
          "The instantaneous difference between two clock values",
          "The maximum message transmission delay",
          "The time taken to execute a process step",
        ],
        correct: 1,
        explanation:
          "Clock skew is the instantaneous difference between the values of two clocks at any given moment. Clock drift is the rate of deviation over time.",
      },
      {
        id: 3,
        question: "Clock drift rate measures:",
        options: [
          "The difference between two clocks at a single moment",
          "The difference per unit of time from an ideal reference clock",
          "The total number of clock ticks per second",
          "The latency of network messages",
        ],
        correct: 1,
        explanation:
          "Drift rate is the difference per unit of time from some ideal reference clock — it describes how quickly a clock gains or loses time.",
      },
      {
        id: 4,
        question:
          "External synchronization means synchronizing clocks to:",
        options: [
          "Each other (no external source)",
          "An authoritative external time source like UTC",
          "The fastest clock in the network",
          "The slowest clock in the network",
        ],
        correct: 1,
        explanation:
          "External synchronization means each clock is synchronized to an authoritative external source such as UTC, within a bound D.",
      },
      {
        id: 5,
        question:
          "If all clocks are externally synchronized within bound D of UTC, the maximum skew between any two clocks is:",
        options: ["D", "2D", "D/2", "D²"],
        correct: 1,
        explanation:
          "If each clock is within D of UTC, in the worst case one is +D and another is −D from UTC, giving a maximum inter-clock skew of 2D.",
      },
      {
        id: 6,
        question: "A synchronous distributed system has known bounds for:",
        options: [
          "Clock drift rate, message delay, and process execution time",
          "Number of processes, memory size, and disk speed",
          "Programming language, operating system, and hardware",
          "Network bandwidth, CPU cores, and RAM",
        ],
        correct: 0,
        explanation:
          "A synchronous system has known upper bounds on clock drift rate, maximum message transmission delay, and time to execute each step.",
      },
      {
        id: 7,
        question: "In Cristian's algorithm, the client estimates the one-way network delay as:",
        options: [
          "t1 − t0",
          "(t1 − t0) / 2",
          "t0 + t1",
          "min × 2",
        ],
        correct: 1,
        explanation:
          "Cristian's algorithm estimates one-way delay as half the round-trip time: (t1 − t0) / 2, where t0 is the send time and t1 is the receive time.",
      },
      {
        id: 8,
        question: "A key limitation of Cristian's algorithm is:",
        options: [
          "It requires all nodes to participate",
          "The time server is a single point of failure",
          "It only works on LANs",
          "It cannot handle UTC time",
        ],
        correct: 1,
        explanation:
          "Cristian's algorithm relies on a single time server — if it fails, synchronization stops. It also does not deal with faulty servers.",
      },
      {
        id: 9,
        question: "The Berkeley algorithm is an example of:",
        options: [
          "External synchronization",
          "Internal synchronization",
          "Logical time ordering",
          "Vector clock synchronization",
        ],
        correct: 1,
        explanation:
          "Berkeley is an internal synchronization algorithm — it averages clock values among participating nodes without requiring an external UTC source.",
      },
      {
        id: 10,
        question: "In the Berkeley algorithm, the master node:",
        options: [
          "Sets all clocks to its own time",
          "Polls slaves, computes an average, and sends adjustments",
          "Forwards UTC signals to all slaves",
          "Increments a logical counter on each slave",
        ],
        correct: 1,
        explanation:
          "The master polls all slaves for their clock values, estimates their actual times using round-trip measurements, computes an average, and sends each node the required adjustment.",
      },
      {
        id: 11,
        question: "What happens if the master in the Berkeley algorithm fails?",
        options: [
          "All clocks stop immediately",
          "A new master can be elected to take over",
          "The system switches to external synchronization",
          "All slaves reset their clocks to zero",
        ],
        correct: 1,
        explanation:
          "If the master fails, a new master can be elected from the remaining nodes to continue the synchronization process.",
      },
      {
        id: 12,
        question: "NTP organizes time servers into a hierarchy called:",
        options: ["Layers", "Tiers", "Strata", "Levels"],
        correct: 2,
        explanation:
          "NTP uses a stratum hierarchy. Stratum 1 servers connect directly to reference clocks; higher stratum numbers are further from the source and generally less accurate.",
      },
      {
        id: 13,
        question: "Which NTP synchronization mode is best suited for high-speed LANs?",
        options: [
          "Symmetric",
          "Procedure-call",
          "Multicast",
          "Broadcast",
        ],
        correct: 2,
        explanation:
          "Multicast mode is designed for high-speed LANs where a server multicasts time to all clients on the network.",
      },
      {
        id: 14,
        question: "NTP achieves accuracy of approximately:",
        options: [
          "1 second over the Internet",
          "10ms over the Internet, ~1ms on LANs",
          "1 microsecond everywhere",
          "100ms on LANs only",
        ],
        correct: 1,
        explanation:
          "NTP achieves synchronisation accuracy of tens of milliseconds over Internet paths and approximately 1 millisecond on LANs.",
      },
      {
        id: 15,
        question: "Lamport introduced logical time because:",
        options: [
          "Physical clocks are too expensive",
          "Physical clocks cannot be perfectly synchronized in distributed systems",
          "Logical time is faster to compute",
          "UTC was not yet invented",
        ],
        correct: 1,
        explanation:
          "Lamport (1978) introduced logical time because clocks cannot be perfectly synchronized across distributed systems, so he proposed abandoning physical time in favour of causal event ordering.",
      },
      {
        id: 16,
        question: "The happened-before relation (→) is:",
        options: [
          "A total order on all events",
          "A partial order on events reflecting causal flow",
          "An equivalence relation",
          "Only applicable to events at the same process",
        ],
        correct: 1,
        explanation:
          "The happened-before relation is a partial order — it captures causal relationships but not all events are comparable (some are concurrent).",
      },
      {
        id: 17,
        question:
          "Two events a and b are concurrent (a || b) when:",
        options: [
          "a → b",
          "b → a",
          "Neither a → b nor b → a",
          "They happen at the same physical time",
        ],
        correct: 2,
        explanation:
          "Events are concurrent when there is no causal chain connecting them — neither happened before the other.",
      },
      {
        id: 18,
        question: "In Lamport clocks, rule LC1 states:",
        options: [
          "Set the clock to the received timestamp",
          "Increment Li by 1 before each event at process pi",
          "Take the maximum of all clock values",
          "Reset the clock after each message send",
        ],
        correct: 1,
        explanation:
          "LC1: Li is incremented by 1 before each event at process pi, ensuring a monotonically increasing counter.",
      },
      {
        id: 19,
        question:
          "When process pj receives message (m, t) with Lamport clocks, it sets Lj to:",
        options: [
          "t",
          "Lj + 1",
          "max(Lj, t) + 1",
          "t + Lj",
        ],
        correct: 2,
        explanation:
          "On receiving (m, t), pj sets Lj := max(Lj, t) and then increments by 1 (applying LC1) before timestamping the receive event.",
      },
      {
        id: 20,
        question:
          "The key limitation of Lamport clocks is:",
        options: [
          "They are too slow to compute",
          "L(e) < L(e') does NOT imply e → e'",
          "They require physical clock access",
          "They only work with two processes",
        ],
        correct: 1,
        explanation:
          "While e → e' implies L(e) < L(e'), the converse is not true. Lamport clocks cannot determine whether two events are causally related or concurrent just from their timestamps.",
      },
      {
        id: 21,
        question: "Vector clocks overcome Lamport clocks by:",
        options: [
          "Using physical time alongside logical time",
          "Maintaining an array of N integers to detect concurrency",
          "Using a single global counter",
          "Eliminating the need for message passing",
        ],
        correct: 1,
        explanation:
          "Vector clocks maintain an array of N integers (one per process), which allows them to determine both causal ordering and concurrency between events.",
      },
      {
        id: 22,
        question:
          "In vector clocks, events a and b are concurrent if:",
        options: [
          "V(a) < V(b)",
          "V(b) < V(a)",
          "V(a) = V(b)",
          "Neither V(a) ≤ V(b) nor V(b) ≤ V(a)",
        ],
        correct: 3,
        explanation:
          "Two events are concurrent when their vector timestamps are incomparable — neither is element-wise less than or equal to the other.",
      },
      {
        id: 23,
        question:
          "With vector clocks, V(a) < V(b) means:",
        options: [
          "a and b are concurrent",
          "b happened before a",
          "a happened before b",
          "a and b are at the same process",
        ],
        correct: 2,
        explanation:
          "V(a) < V(b) (all elements of V(a) ≤ corresponding elements of V(b), with at least one strict inequality) means a → b.",
      },
      {
        id: 24,
        question:
          "What is mutual exclusion in distributed systems?",
        options: [
          "Allowing multiple processes to access a resource simultaneously",
          "Ensuring only one process can access a shared resource at a time",
          "Preventing all communication between processes",
          "Replicating resources across all nodes",
        ],
        correct: 1,
        explanation:
          "Mutual exclusion ensures that only one process can access a shared resource at a time, preventing conflicts.",
      },
      {
        id: 25,
        question:
          "The main disadvantage of centralized mutual exclusion is:",
        options: [
          "It is too complex to implement",
          "It requires voting from all nodes",
          "The coordinator is a single point of failure",
          "It uses token passing",
        ],
        correct: 2,
        explanation:
          "Centralized mutual exclusion relies on a single coordinator — if it fails, the entire system loses the ability to manage resource access.",
      },
      {
        id: 26,
        question:
          "In voting-based decentralized mutual exclusion, a process can access the resource when it receives:",
        options: [
          "Permission from any single node",
          "A majority vote from multiple nodes",
          "A token from the coordinator",
          "A broadcast acknowledgement",
        ],
        correct: 1,
        explanation:
          "In the voting-based approach, a process must receive permission from a majority of nodes before it can access the shared resource.",
      },
      {
        id: 27,
        question:
          "In token-based mutual exclusion, the main risk is:",
        options: [
          "Too many tokens being created",
          "The token being lost",
          "Deadlock from voting",
          "Clock drift affecting the token",
        ],
        correct: 1,
        explanation:
          "If the unique token is lost (e.g. the holding process crashes), recovery mechanisms are needed to regenerate it.",
      },
    ],

    flashcards: [
      {
        front: "What is clock skew?",
        back: "The instantaneous difference between the values of two clocks at any given moment.",
      },
      {
        front: "What is clock drift?",
        back: "The rate at which a clock deviates from a reference clock over time, measured as drift rate (difference per unit of time from an ideal clock).",
      },
      {
        front: "What is UTC?",
        back: "Coordinated Universal Time — the international time standard used as the reference for clock synchronization, maintained by atomic clocks.",
      },
      {
        front: "What is external synchronization?",
        back: "Synchronizing each clock to an authoritative external source (e.g. UTC) such that |S(t) − Ci(t)| < D.",
      },
      {
        front: "What is internal synchronization?",
        back: "Synchronizing clocks with each other (no external source) such that |Ci(t) − Cj(t)| < D for every pair.",
      },
      {
        front: "Does external synchronization imply internal synchronization?",
        back: "Yes. If all clocks are within D of UTC, they are within 2D of each other. But internal synchronization does NOT imply external.",
      },
      {
        front: "What defines a synchronous distributed system?",
        back: "Known upper bounds on: (1) clock drift rate, (2) maximum message transmission delay, (3) time to execute each step.",
      },
      {
        front: "How does Cristian's algorithm estimate network delay?",
        back: "It records t0 (request sent) and t1 (reply received), and estimates one-way delay as (t1 − t0) / 2.",
      },
      {
        front: "What is the accuracy bound of Cristian's algorithm?",
        back: "±((t1 − t0)/2 − min), where min is the minimum known transit time.",
      },
      {
        front: "What are the limitations of Cristian's algorithm?",
        back: "Single point of failure (one time server), does not handle faulty servers, assumes symmetric network delays.",
      },
      {
        front: "How does the Berkeley algorithm work?",
        back: "A master polls slaves for clock values, estimates their times using round-trip, computes the average, and sends adjustments to each node.",
      },
      {
        front: "What happens if the Berkeley master fails?",
        back: "A new master can be elected from the remaining nodes to take over the synchronization role.",
      },
      {
        front: "Cristian's vs Berkeley: key difference?",
        back: "Cristian's = external synchronization (uses UTC server). Berkeley = internal synchronization (averages peer clocks, no external source needed).",
      },
      {
        front: "What is the NTP stratum hierarchy?",
        back: "Stratum 1: directly connected to UTC/atomic clocks. Stratum 2: synced to stratum 1. Stratum 3: synced to stratum 2. Higher = less accurate.",
      },
      {
        front: "What are NTP's three synchronization modes?",
        back: "Multicast (high-speed LAN), Procedure-call (like Cristian's), Symmetric (between server pairs for highest accuracy). All use UDP.",
      },
      {
        front: "What accuracy does NTP achieve?",
        back: "~10 milliseconds over Internet paths, ~1 millisecond on LANs.",
      },
      {
        front: "Why did Lamport introduce logical time?",
        back: "Because physical clocks cannot be perfectly synchronized, so he proposed using causal event ordering instead of physical timestamps.",
      },
      {
        front: "What is the happened-before relation (→)?",
        back: "A partial order on events: e → e' if (1) same process and e is first, (2) e is a send and e' is the receive, or (3) transitivity.",
      },
      {
        front: "What does it mean for events to be concurrent (a || b)?",
        back: "Neither a → b nor b → a — there is no causal chain connecting them.",
      },
      {
        front: "What are the two rules for Lamport clocks?",
        back: "LC1: Increment Li by 1 before each event. LC2: On send, piggyback t = Li; on receive (m,t), set Lj := max(Lj, t) then increment.",
      },
      {
        front: "Key property of Lamport clocks?",
        back: "e → e' implies L(e) < L(e'). But the converse is NOT true: L(e) < L(e') does not imply e → e'. Cannot detect concurrency.",
      },
      {
        front: "How do vector clocks improve on Lamport clocks?",
        back: "They use an array of N integers instead of a single counter, which allows detection of both causal ordering AND concurrency.",
      },
      {
        front: "What are the vector clock rules?",
        back: "VC1: All zeros initially. VC2: Increment own element before each event. VC3: Include full vector on messages. VC4: On receive, take element-wise max then increment own.",
      },
      {
        front: "How do you compare vector timestamps?",
        back: "V(a) ≤ V(b) if all elements of V(a) ≤ V(b). If V(a) < V(b), then a → b. If neither V(a) ≤ V(b) nor V(b) ≤ V(a), then a || b.",
      },
      {
        front: "What is mutual exclusion?",
        back: "Ensuring only one process can access a shared resource at a time, preventing conflicts from concurrent access.",
      },
      {
        front: "How does centralized mutual exclusion work?",
        back: "A coordinator manages access: processes request access, coordinator grants or queues, process releases when done, next in queue is granted.",
      },
      {
        front: "Pros and cons of centralized mutual exclusion?",
        back: "Pros: simple, fair, avoids conflicts. Cons: single point of failure — if coordinator crashes, system stops.",
      },
      {
        front: "What is voting-based decentralized mutual exclusion?",
        back: "A process requests permission from multiple nodes and must receive a majority vote before accessing the resource. No single point of failure but slower.",
      },
      {
        front: "What is token-based mutual exclusion?",
        back: "A unique token circulates among processes; only the holder can access the resource. Fast (one message to transfer) but token loss requires recovery.",
      },
    ],

    shortAnswers: [
      {
        id: 1,
        question:
          "Explain why clock synchronization is important in distributed systems. Give three specific examples.",
        marks: 3,
        markingGuide: [
          "Measuring delays between distributed components requires synchronized clocks",
          "Ordering events consistently to maintain a correct global state",
          "Business transactions, security protocols, and real-time stream synchronization all depend on accurate time",
        ],
        hint: "Think about what goes wrong if clocks disagree.",
      },
      {
        id: 2,
        question:
          "Define clock skew and clock drift. Explain the difference between them.",
        marks: 3,
        markingGuide: [
          "Clock skew: instantaneous difference between two clock values at a given moment",
          "Clock drift: rate at which a clock deviates from a reference over time (drift rate)",
          "Skew is a snapshot difference; drift is the ongoing rate of divergence",
        ],
        hint: "One is a measurement at a point in time, the other is a rate.",
      },
      {
        id: 3,
        question:
          "Compare external and internal clock synchronization. Does one imply the other?",
        marks: 4,
        markingGuide: [
          "External: each clock synced to an authoritative source (UTC) within bound D",
          "Internal: clocks synced with each other within bound D",
          "External implies internal (within 2D), but internal does NOT imply external",
          "Clear explanation of why the implication is one-directional",
        ],
        hint: "If all clocks are within D of UTC, what's the worst-case difference between two clocks?",
      },
      {
        id: 4,
        question:
          "Describe Cristian's algorithm. Include the formula for estimating the time and its accuracy bound.",
        marks: 4,
        markingGuide: [
          "Client sends request, records t0 (send time) and t1 (receive time)",
          "Server returns its current time in the reply",
          "Client sets clock to server_time + (t1 − t0)/2",
          "Accuracy: ±((t1 − t0)/2 − min) where min is minimum transit time",
        ],
        hint: "Think about what t0, t1, and min represent.",
      },
      {
        id: 5,
        question:
          "Describe the Berkeley algorithm and explain how it differs from Cristian's method.",
        marks: 4,
        markingGuide: [
          "Master polls slaves for clock values, estimates their times using round-trip",
          "Master computes average and sends adjustments (not absolute times)",
          "Cristian's is external (uses UTC server); Berkeley is internal (averages peers)",
          "Berkeley can elect a new master if the current one fails",
        ],
        hint: "Focus on where the 'reference time' comes from in each algorithm.",
      },
      {
        id: 6,
        question:
          "Explain the NTP stratum hierarchy and its three synchronization modes.",
        marks: 4,
        markingGuide: [
          "Stratum 1 = primary servers connected to UTC/atomic clocks; higher strata = less accurate",
          "Multicast mode for high-speed LANs",
          "Procedure-call mode similar to Cristian's algorithm",
          "Symmetric mode between server pairs for highest accuracy; all use UDP",
        ],
        hint: "Think about the trade-off between accuracy and scalability at each stratum level.",
      },
      {
        id: 7,
        question:
          "Define the happened-before relation (→). Give an example of concurrent events.",
        marks: 3,
        markingGuide: [
          "Partial order: e → e' if same-process ordering, send→receive, or transitivity",
          "Concurrent events: neither a → b nor b → a (no causal chain connects them)",
          "Example: events at different processes with no message chain between them",
        ],
        hint: "Consider two processes that never exchange messages.",
      },
      {
        id: 8,
        question:
          "State the two rules for Lamport logical clocks (LC1 and LC2). What is the key limitation?",
        marks: 4,
        markingGuide: [
          "LC1: Increment Li by 1 before each event at process pi",
          "LC2a: On send, piggyback t = Li; LC2b: On receive (m,t), set Lj := max(Lj, t) then increment",
          "e → e' implies L(e) < L(e')",
          "Limitation: L(e) < L(e') does NOT imply e → e' — cannot detect concurrency",
        ],
        hint: "Think about what you can and cannot infer from comparing two Lamport timestamps.",
      },
      {
        id: 9,
        question:
          "Explain how vector clocks improve on Lamport clocks. State the rules (VC1–VC4).",
        marks: 5,
        markingGuide: [
          "Use an array of N integers instead of a single counter",
          "VC1: Initially all zeros; VC2: Increment own element before each event",
          "VC3: Include full vector on every message; VC4: On receive, take element-wise max then increment",
          "Can determine both causal ordering and concurrency from timestamps",
          "V(a) < V(b) ↔ a → b; incomparable timestamps mean concurrent events",
        ],
        hint: "Focus on what information is preserved that Lamport clocks lose.",
      },
      {
        id: 10,
        question:
          "Compare centralized and decentralized approaches to mutual exclusion in distributed systems.",
        marks: 4,
        markingGuide: [
          "Centralized: single coordinator manages a queue — simple but single point of failure",
          "Decentralized voting: majority agreement needed — no single point of failure but slower",
          "Decentralized token: circulate a unique token — fast but risk of token loss",
          "Trade-off between simplicity/performance and fault tolerance",
        ],
        hint: "Think about what happens when a node crashes in each approach.",
      },
      {
        id: 11,
        question:
          "A system has three processes. Using Lamport clocks (all starting at 0): p1 has event a then sends m1 to p2, p2 receives m1 (event c) then has event d, p3 has event e then receives m2 from p2 after d. What are the Lamport timestamps for events a, c, d, and f (receive of m2)?",
        marks: 4,
        markingGuide: [
          "a at p1: L = 1 (increment before event)",
          "p1 sends m1 after b at L=2, piggybacking t=2",
          "c at p2: max(0, 2) + 1 = 3",
          "d at p2: L = 4; f at p3 receiving m2 with t=4: max(L_p3, 4) + 1",
        ],
        hint: "Apply LC1 and LC2 step by step. Remember to take the max before incrementing on receive.",
      },
    ],
  },

  4: {
    id: 4,
    title: "Distributed Shared Memory",
    subtitle: "DSM Models, Consistency, Cache Coherence & NUMA",
    emoji: "🧠",
    guide: week4Guide,

    mcqs: [
      // ===== LECTURE 4 =====
      {
        id: 1,
        question:
          "Which of the following best describes Distributed Shared Memory (DSM)?",
        options: [
          "A single high-performance server that stores all data centrally",
          "An abstraction that allows computers without shared physical memory to share a unified address space",
          "A hardware component that links multiple CPUs to one RAM module",
          "A protocol for passing messages between distributed processes",
        ],
        correct: 1,
        explanation:
          "DSM is an abstraction used for sharing data between computers that do not share physical memory, allowing them to share memory as if it were a single, unified address space.",
      },
      {
        id: 2,
        question:
          "Which of the following is the primary motivation for using DSM?",
        options: [
          "To increase the number of physical CPUs in a system",
          "To eliminate the programmer's need to manage explicit message passing",
          "To provide persistent storage across distributed nodes",
          "To improve hardware clock synchronization",
        ],
        correct: 1,
        explanation:
          "The key aim of DSM is to eliminate the programmer's need to manage explicit message passing when writing distributed applications, simplifying the programming model.",
      },
      {
        id: 3,
        question:
          "Which DSM key feature ensures that users do not need to know memory is distributed?",
        options: ["Scalability", "Consistency", "Transparency", "Synchronisation"],
        correct: 2,
        explanation:
          "Transparency means users and programmers don't need to know the memory is distributed — remote memory access looks identical to local access.",
      },
      {
        id: 4,
        question:
          "What is the main advantage of centralised DSM over distributed DSM?",
        options: [
          "Better fault tolerance",
          "No bottleneck on memory access",
          "Simpler to manage and easier consistency control",
          "Memory is spread across multiple nodes",
        ],
        correct: 2,
        explanation:
          "Centralised DSM keeps all data in one place managed by a single server, making it simpler to manage and easier to control consistency.",
      },
      {
        id: 5,
        question: "What is the main disadvantage of centralised DSM?",
        options: [
          "Too complex to implement",
          "Single point of failure",
          "Memory is spread across many nodes",
          "Incompatible with page-based sharing",
        ],
        correct: 1,
        explanation:
          "Centralised DSM has a single point of failure — if the central server fails, the entire system loses access to shared memory.",
      },
      {
        id: 6,
        question:
          "In page-based DSM, what happens when a process attempts to access a non-local page?",
        options: [
          "The process is terminated immediately",
          "A message is broadcast to all nodes",
          "A hardware page fault is triggered and the OS fetches the page from the remote machine",
          "The page is created locally with default values",
        ],
        correct: 2,
        explanation:
          "An attempt to reference a non-local page causes a hardware page fault, which traps to the OS. The OS sends a message to the remote machine, which finds the page and sends it back.",
      },
      {
        id: 7,
        question:
          "Which of the following is a disadvantage of page-based DSM?",
        options: [
          "It cannot work with large datasets",
          "Pages cannot be shared between more than two nodes",
          "High overhead due to entire pages being sent across the network, and susceptibility to false sharing",
          "It requires object serialisation for every access",
        ],
        correct: 2,
        explanation:
          "Page-based DSM has high overhead because entire fixed-size pages are transferred over the network, and unrelated variables on the same page cause false sharing.",
      },
      {
        id: 8,
        question: "False sharing in page-based DSM occurs when:",
        options: [
          "Two processes share a global lock incorrectly",
          "Two processes repeatedly transfer a page because they access different variables that happen to be on the same page",
          "A page is duplicated on more than three nodes simultaneously",
          "The OS fails to handle a page fault correctly",
        ],
        correct: 1,
        explanation:
          "False sharing occurs when two unrelated variables reside on the same page. Processors accessing these unrelated variables cause the page to travel back and forth — generating network traffic with no actual data dependency.",
      },
      {
        id: 9,
        question:
          "Which of the following correctly describes object-based DSM?",
        options: [
          "Memory is divided into fixed-size pages mapped across nodes",
          "Memory is divided into language-level objects stored on different nodes, with access via method interfaces",
          "All shared variables are replicated on every node",
          "Sharing is implemented by communication between compiler-inserted library calls",
        ],
        correct: 1,
        explanation:
          "In object-based DSM, memory is divided into user-defined objects. Objects are stored on different nodes and processes request them as needed. Interaction is limited to the object interface.",
      },
      {
        id: 10,
        question:
          "Compared to page-based DSM, object-based DSM is generally:",
        options: [
          "Less efficient due to larger transfer sizes",
          "More efficient because it transfers only the needed object rather than an entire page",
          "More susceptible to false sharing",
          "Simpler to implement consistency for",
        ],
        correct: 1,
        explanation:
          "Object-based DSM reduces unnecessary data transfers because only the relevant object is transferred, not an entire memory page — reducing both false sharing and network overhead.",
      },
      {
        id: 11,
        question:
          "In shared variable DSM, which type of variable is accessible by more than one process?",
        options: [
          "Ordinary variables",
          "Synchronisation variables",
          "Shared variables",
          "Local variables",
        ],
        correct: 2,
        explanation:
          "Shared variable DSM has three types: ordinary, shared, and synchronisation. Shared variables are annotated by the programmer and replicated/distributed across nodes.",
      },
      {
        id: 12,
        question: "Library-based DSM implements sharing through:",
        options: [
          "Hardware page fault mechanisms",
          "Communication between language runtime instances via compiler-inserted library calls",
          "Object serialisation and remote method invocation",
          "Broadcasting all writes to all nodes immediately",
        ],
        correct: 1,
        explanation:
          "In library-based DSM, processes make library calls (inserted by a compiler) when they access DSM data items. The libraries handle local access and inter-node communication at runtime.",
      },
      {
        id: 13,
        question: "Which DSM model is matched to the IVY system?",
        options: [
          "Object-based",
          "Shared variable",
          "Library-based",
          "Page-based",
        ],
        correct: 3,
        explanation:
          "IVY (Kai Li, 1986) is the first page-based software DSM system, built on top of NORMA systems to emulate shared memory using the OS's virtual memory management.",
      },
      {
        id: 14,
        question:
          "Which DSM model is most closely associated with Java RMI and CORBA?",
        options: [
          "Page-based",
          "Object-based",
          "Shared variable",
          "Library-based",
        ],
        correct: 1,
        explanation:
          "Object-based DSM uses Remote Method Invocations (RMI) — programs share data by invoking methods on remote objects. Java RMI and CORBA are key examples.",
      },
      {
        id: 15,
        question:
          "Which consistency model guarantees that all processes see memory updates immediately, in real-time global clock order?",
        options: [
          "Sequential consistency",
          "Causal consistency",
          "Eventual consistency",
          "Strict consistency",
        ],
        correct: 3,
        explanation:
          "Strict consistency guarantees that all processes see memory updates immediately and in real-time order — every read returns the value of the most recent write. It is the strongest model but impractical in real distributed systems.",
      },
      {
        id: 16,
        question:
          "Sequential consistency guarantees that:",
        options: [
          "All reads return the most recent write immediately",
          "All processes see operations in the same logical order, though not necessarily real-time order",
          "Causally related writes are seen in order",
          "All nodes converge to the same state eventually",
        ],
        correct: 1,
        explanation:
          "Sequential consistency guarantees a consistent logical order of operations across all processes, but does not require real-time ordering — making it more practical than strict consistency.",
      },
      {
        id: 17,
        question:
          "Causal consistency guarantees that:",
        options: [
          "All processes see all writes immediately",
          "All processes see all operations in the same total order",
          "Causally related writes are seen in order, but concurrent writes may appear in different orders",
          "All replicas converge once updates stop",
        ],
        correct: 2,
        explanation:
          "Causal consistency requires that if A → B (A causally precedes B), all processes must see A before B. However, causally independent (concurrent) writes may be seen in different orders.",
      },
      {
        id: 18,
        question:
          "Which consistency model is best suited to highly scalable distributed systems where temporary inconsistencies are acceptable?",
        options: [
          "Strict",
          "Sequential",
          "Causal",
          "Eventual",
        ],
        correct: 3,
        explanation:
          "Eventual consistency allows temporary inconsistencies but guarantees all nodes will converge to the same state once updates stop. It is preferred by large-scale systems like AWS S3, Google Drive, and Dropbox.",
      },
      {
        id: 19,
        question:
          "In weak consistency, when is consistency enforced?",
        options: [
          "After every write operation",
          "After every read operation",
          "Only at explicit synchronisation points",
          "Continuously in real-time",
        ],
        correct: 2,
        explanation:
          "Weak consistency only enforces consistency at explicit synchronisation points — when a process explicitly requests the latest data. This improves performance at the cost of allowing stale reads between sync points.",
      },
      {
        id: 20,
        question:
          "Which consistency model is used by AWS S3, Google Drive, Dropbox, and Azure for their global storage services?",
        options: [
          "Strict consistency",
          "Sequential consistency",
          "Causal consistency",
          "Eventual consistency",
        ],
        correct: 3,
        explanation:
          "These major cloud storage services use eventual consistency because it provides high scalability, availability, and performance while tolerating temporary inconsistencies.",
      },
      {
        id: 21,
        question:
          "Why is strict consistency generally impractical for wide-area distributed systems?",
        options: [
          "It requires all nodes to use the same operating system",
          "It requires globally synchronised clocks and instantaneous propagation, which are impossible over a network",
          "It does not support concurrent reads",
          "It is incompatible with page-based DSM",
        ],
        correct: 1,
        explanation:
          "Strict consistency requires globally synchronised clocks and instantaneous propagation of writes — neither of which is achievable in real distributed systems with network latency.",
      },
      {
        id: 22,
        question:
          "In write-invalidate cache coherence, when a node writes to a shared block it:",
        options: [
          "Broadcasts the new value to all nodes holding a copy",
          "Sends an invalidation message to all nodes holding a copy",
          "Requests permission from the page manager before writing",
          "Copies the block to every node immediately",
        ],
        correct: 1,
        explanation:
          "Write-invalidate sends an invalidation message to all nodes holding a copy. They discard their copies, and future reads will trigger a fetch of the updated data. This is more efficient than write-update as it avoids pushing data that may not be needed.",
      },
      {
        id: 23,
        question:
          "Which approach to cache coherence consumes more network bandwidth per write?",
        options: [
          "Write-invalidate",
          "Write-update",
          "Write-back",
          "Write-through",
        ],
        correct: 1,
        explanation:
          "Write-update broadcasts the new value to all nodes with a copy, consuming more bandwidth per write. Write-invalidate only sends a small invalidation message, making it more bandwidth-efficient.",
      },
      {
        id: 24,
        question:
          "NUMA (Non-Uniform Memory Access) differs from UMA (Uniform Memory Access) in that:",
        options: [
          "NUMA has no shared virtual address space",
          "Remote memory access in NUMA is significantly slower than local memory access",
          "NUMA caches all remote accesses transparently",
          "NUMA requires a central memory server",
        ],
        correct: 1,
        explanation:
          "In NUMA, all CPUs share a single virtual address space but remote memory access is much slower than local — typically a 10:1 ratio. NUMA makes no attempt to hide this performance difference, unlike hardware-cached shared memory systems.",
      },
      {
        id: 25,
        question:
          "In a NORMA (No Remote Memory Access) system, how does page-based DSM enable shared memory?",
        options: [
          "By broadcasting all memory writes to every node",
          "By emulating a multiprocessor using the MMU and OS to handle page migration on page fault",
          "By maintaining a centralised memory server that all nodes query",
          "By requiring all data to be replicated on every node",
        ],
        correct: 1,
        explanation:
          "IVY implemented software DSM on NORMA systems by using the OS and MMU — on a page fault for a non-local page, the OS migrates the page from the owning node, transparently emulating shared memory.",
      },
      {
        id: 26,
        question:
          "Which of the following is an advantage of DSM over explicit message passing?",
        options: [
          "DSM always provides stronger consistency guarantees",
          "DSM eliminates the need for locks and barriers",
          "DSM requires no marshalling/unmarshalling and pointers remain valid",
          "DSM is always faster than message passing",
        ],
        correct: 2,
        explanation:
          "A key advantage of DSM over message passing is that data does not need to be marshalled/unmarshalled for transmission, and pointers remain valid since processes share an address space.",
      },
    ],

    flashcards: [
      {
        front: "What is Distributed Shared Memory (DSM)?",
        back: "An abstraction used for sharing data between computers that do not share physical memory. Multiple computers share memory as if it were a single unified address space.",
      },
      {
        front: "What is the main aim of DSM?",
        back: "To eliminate the programmer's need to manage explicit message passing, simplifying distributed application development.",
      },
      {
        front: "What are the four key features of DSM?",
        back: "1. Transparency — users don't know memory is distributed. 2. Scalability — more nodes can be added. 3. Consistency Control — key challenge, ensures correct views. 4. Synchronisation — locks, semaphores, barriers.",
      },
      {
        front: "What are the two DSM architectures?",
        back: "Centralised: single server manages all memory — simple but single point of failure. Distributed: memory spread across nodes — no bottleneck but harder consistency.",
      },
      {
        front: "What are the four DSM models?",
        back: "1. Page-based (e.g. IVY). 2. Object-based (e.g. Java RMI, CORBA). 3. Shared Variable. 4. Library-based (e.g. OpenMP, MPI, Linda).",
      },
      {
        front: "How does page-based DSM work?",
        back: "Pages are mapped across nodes. Local page access is hardware-speed. Non-local access causes a page fault → OS fetches the page from the remote machine → instruction restarts.",
      },
      {
        front: "What was IVY?",
        back: "The first page-based software DSM system (Kai Li, 1986), built on NORMA systems. It used the OS's MMU to handle page migration on page fault to emulate shared memory.",
      },
      {
        front: "What is false sharing in page-based DSM?",
        back: "When two processes repeatedly transfer a page because they access different, unrelated variables on the same page — causing unnecessary network traffic with no real data dependency.",
      },
      {
        front: "How can false sharing be reduced?",
        back: "Use smaller page sizes, use finer-grained DSM (object/variable-based), or restructure data so unrelated variables are on different pages.",
      },
      {
        front: "How does object-based DSM work?",
        back: "Memory is divided into language-level objects stored on different nodes. Processes request objects via method interfaces. The system ensures only one copy of an object is updated at a time.",
      },
      {
        front: "Object-based vs page-based DSM: key difference?",
        back: "Object-based is more efficient — transfers only the needed object, not a whole page. Less false sharing. Cons: complex consistency management, serialisation overhead.",
      },
      {
        front: "What are the three variable types in shared variable DSM?",
        back: "1. Ordinary — private. 2. Shared — replicated across nodes; annotated as read-only, migratory, write-shared, or conventional. 3. Synchronisation — coordinates access.",
      },
      {
        front: "How does library-based DSM work?",
        back: "A compiler inserts library calls when processes access DSM data. The libraries handle local access and inter-node communication at runtime to maintain consistency. Examples: Orca, Linda, OpenMP, MPI.",
      },
      {
        front: "What does strict consistency guarantee?",
        back: "All processes see memory updates immediately, in real-time global clock order. Every read returns the most recent write. The strongest model but impractical (requires globally synchronised clocks).",
      },
      {
        front: "What does sequential consistency guarantee?",
        back: "All processes see all operations in the same logical order (not necessarily real-time). Does not require global clocks. Expensive synchronisation — not ideal for performance-sensitive apps.",
      },
      {
        front: "What does causal consistency guarantee?",
        back: "If A causally precedes B (A → B), all processes must see A before B. Concurrent (independent) writes may appear in any order. Balances ordering and efficiency.",
      },
      {
        front: "What does eventual consistency guarantee?",
        back: "If no new updates occur, all nodes will eventually converge to the same state. Temporary inconsistencies are allowed. Best for highly scalable systems. Used by AWS S3, Google Drive, Dropbox, Azure.",
      },
      {
        front: "What does weak consistency guarantee?",
        back: "Consistency is only enforced at explicit synchronisation points. High performance — no overhead per write. Cons: data may be out of date between sync points.",
      },
      {
        front: "Which consistency model is preferred for global cloud storage?",
        back: "Eventual consistency — highly scalable, high availability, optimises performance. Tolerable temporary inconsistencies for most cloud storage use cases.",
      },
      {
        front: "Why is strict consistency impractical in wide-area systems?",
        back: "It requires globally synchronised clocks and instantaneous write propagation — impossible over real networks with latency. The overhead would make the system unusable.",
      },
      {
        front: "What is write-invalidate cache coherence?",
        back: "When a node writes to a shared block, it sends an invalidation message to all nodes holding a copy. They discard their copies. Future reads re-fetch the updated data.",
      },
      {
        front: "What is write-update cache coherence?",
        back: "When a node writes to a shared block, it broadcasts the new value to all nodes holding a copy. They update their caches immediately — reduces future read latency but uses more bandwidth.",
      },
      {
        front: "Write-invalidate vs write-update: which is preferred?",
        back: "Write-invalidate is generally preferred — only a small invalidation message is sent, avoiding unnecessary bandwidth consumption for data that may not be re-read.",
      },
      {
        front: "What is NUMA?",
        back: "Non-Uniform Memory Access — a multiprocessor architecture with a single virtual address space, but remote memory access is much slower than local (typically 10:1 ratio). No attempt to hide poor non-local performance.",
      },
      {
        front: "How does NUMA manage pages for performance?",
        back: "Read-only pages can be replicated locally. Read-write pages can be migrated to the most active node. A page scanner daemon monitors access patterns and freezes pages that migrate too frequently.",
      },
      {
        front: "What are the two cache coherence strategies in DSM?",
        back: "Write-invalidate (send invalidation on write — efficient) and write-update (broadcast new value on write — lower read latency but higher bandwidth).",
      },
      {
        front: "What are three advantages of DSM over message passing?",
        back: "1. No marshalling/unmarshalling needed. 2. Pointers remain valid. 3. Familiar synchronisation primitives (locks, barriers) instead of custom protocols.",
      },
      {
        front: "What is the 'owner' concept in page-based DSM?",
        back: "The owner of a page is the processor that most recently wrote it. To read: get from owner (owner goes read-only). To write: acquire ownership and invalidate all other copies.",
      },
      {
        front: "What are three future trends in DSM?",
        back: "1. AI optimisation — predicting memory access patterns. 2. Edge/fog computing — local memory sharing reduces centralised cloud dependency. 3. Blockchain-based DSM — tamper-proof, secure memory sharing.",
      },
      {
        front: "What are the three main challenges in DSM?",
        back: "1. Network delays — remote access latency. 2. False sharing — page-level granularity causes unnecessary transfers. 3. Consistency overhead — stronger models require more synchronisation traffic.",
      },
    ],

    shortAnswers: [
      {
        id: 1,
        question:
          "Define Distributed Shared Memory (DSM) and explain the abstraction it provides.",
        marks: 3,
        markingGuide: [
          "DSM is an abstraction for sharing data between computers that do not share physical memory",
          "Allows multiple computers to share memory as a single unified address space",
          "Processes on different machines can read and write shared memory transparently as if on a single machine",
        ],
        hint: "Focus on what the programmer sees vs what is actually happening physically.",
      },
      {
        id: 2,
        question:
          "Compare centralised and distributed DSM architectures. Identify one advantage and one disadvantage of each.",
        marks: 4,
        markingGuide: [
          "Centralised: single server manages all shared memory — advantage: simple to manage and easier consistency control",
          "Centralised disadvantage: single point of failure (if server fails, system stops)",
          "Distributed: memory spread across nodes — advantage: no bottleneck, better fault tolerance",
          "Distributed disadvantage: harder to manage consistency across nodes",
        ],
        hint: "Think about what happens when a node fails in each architecture.",
      },
      {
        id: 3,
        question:
          "Describe how page-based DSM works. Include how non-local page accesses are handled.",
        marks: 4,
        markingGuide: [
          "Pages are mapped across different nodes; each page is present on exactly one machine",
          "Local page access is handled in hardware at full memory speed",
          "Non-local access causes a hardware page fault which traps to the OS",
          "OS sends a message to the remote machine; remote machine sends the page; faulting instruction restarts",
        ],
        hint: "Trace the steps from a program accessing a non-local page to completion.",
      },
      {
        id: 4,
        question:
          "Explain false sharing in page-based DSM. Why does it occur and how does it affect performance?",
        marks: 3,
        markingGuide: [
          "False sharing: two processes access different variables on the same page, causing the page to be transferred repeatedly",
          "It occurs because page granularity is coarser than the data actually needed — unrelated variables share a page",
          "Performance impact: the page travels back and forth between machines generating unnecessary network traffic",
        ],
        hint: "Consider what happens when two independent processes each use one variable stored on the same page.",
      },
      {
        id: 5,
        question:
          "Compare object-based DSM and page-based DSM. Why is object-based generally more efficient?",
        marks: 4,
        markingGuide: [
          "Page-based transfers entire fixed-size pages; object-based transfers only the needed object",
          "Object-based reduces false sharing (access is limited to the specific object)",
          "Object-based provides access control through method interfaces; page-based does not",
          "Object-based cons: complex consistency management and serialisation overhead (e.g. Java RMI)",
        ],
        hint: "Think about what gets transferred over the network in each model.",
      },
      {
        id: 6,
        question:
          "Describe the five consistency models covered in Week 4: strict, sequential, causal, eventual, and weak.",
        marks: 5,
        markingGuide: [
          "Strict: all processes see updates immediately in real-time global order — highest overhead, impractical in real systems",
          "Sequential: all processes see operations in same logical order — doesn't require physical time, expensive synchronisation",
          "Causal: causally related writes seen in order; concurrent writes can appear in any order — balances order and efficiency",
          "Eventual: temporary inconsistencies allowed; all nodes converge once updates stop — highly scalable",
          "Weak: consistency only at synchronisation points — high performance, data may be stale between syncs",
        ],
        hint: "For each model, think about: what is guaranteed, and what is the performance cost?",
      },
      {
        id: 7,
        question:
          "Why is sequential consistency problematic for page-based DSM systems in wide-area networks?",
        marks: 3,
        markingGuide: [
          "Sequential consistency requires every write to be globally ordered, forcing synchronisation across all nodes",
          "In page-based DSM, every write may invalidate entire pages across all nodes holding copies",
          "Wide-area network latency amplifies the problem — each invalidation round-trip takes significant time, causing page thrashing",
        ],
        hint: "Consider what sequential consistency forces the system to do on each write, and how page granularity makes this worse.",
      },
      {
        id: 8,
        question:
          "Explain write-invalidate and write-update cache coherence strategies in DSM. Which is generally preferred and why?",
        marks: 4,
        markingGuide: [
          "Write-invalidate: on write, send invalidation to all nodes holding a copy — they discard their copies",
          "Write-update: on write, broadcast the new value to all nodes holding a copy — they update immediately",
          "Write-invalidate is generally preferred because it sends only a small invalidation message, saving bandwidth",
          "Write-update consumes more bandwidth per write by pushing data that may not be needed again",
        ],
        hint: "Consider what travels over the network in each strategy.",
      },
      {
        id: 9,
        question:
          "Explain what NUMA is and how it differs from a uniform memory access (UMA) system.",
        marks: 3,
        markingGuide: [
          "NUMA: Non-Uniform Memory Access — single virtual address space visible to all CPUs, but remote memory access is much slower than local (typically 10:1 ratio)",
          "UMA: all memory accesses take the same time regardless of which CPU makes them",
          "NUMA makes no attempt to hide poor non-local performance (unlike hardware-cached systems), but allows page migration/replication to improve locality",
        ],
        hint: "Focus on what 'non-uniform' means in terms of access times.",
      },
      {
        id: 10,
        question:
          "What consistency model would you recommend for each of the following use cases, and why: (a) a shared financial audit log, (b) a 'who is online' presence indicator, (c) a collaborative document editor?",
        marks: 4,
        markingGuide: [
          "(a) Financial audit log: Sequential or Strict consistency — all nodes must see writes in the same order; misordering could corrupt audit records",
          "(b) Who is online: Eventual consistency — temporary inconsistencies tolerable; scalability and availability are more important than perfect accuracy",
          "(c) Collaborative editing: Causal consistency — edits that depend on previous edits must appear in order; concurrent edits can diverge temporarily",
          "Clear justification connecting the use case requirements to the consistency model's guarantees",
        ],
        hint: "For each use case, ask: how bad is a temporary inconsistency? How important is ordering?",
      },
      {
        id: 11,
        question:
          "A distributed analytics platform uses page-based DSM with sequential consistency and experiences severe performance degradation. Explain why this combination causes problems, and suggest a better consistency model with justification.",
        marks: 5,
        markingGuide: [
          "Page-based DSM transfers entire pages — even a one-byte change invalidates the whole page across all nodes",
          "Sequential consistency forces global write ordering — every write triggers network-wide synchronisation",
          "Combined: frequent fine-grained analytics writes cause continuous page invalidations and re-fetches across nodes (page thrashing)",
          "Better model: eventual or weak consistency — analytics workloads tolerate slightly stale data",
          "Justification: reduces synchronisation traffic; pages are only transferred when explicitly needed at sync points or eventually, not after every write",
        ],
        hint: "Think about what sequential consistency forces to happen after every write, and how page-based granularity amplifies the problem.",
      },
    ],
  },

  5: {
    id: 5,
    title: "Web Services & Naming",
    subtitle: "SOAP, REST, WSDL, Naming Systems, QoS & Grid Computing",
    emoji: "🌐",
    guide: week5Guide,

    mcqs: [
      {
        id: 1,
        question: "Which of the following best describes a web service?",
        options: [
          "A website that displays HTML pages to users",
          "A standardised way for applications to communicate over a network, independent of platform or language",
          "A desktop application that connects to the internet",
          "A database that stores web pages",
        ],
        correct: 1,
        explanation:
          "A web service allows different systems to exchange data independently of OS or programming language — it is not a website and not a desktop app.",
      },
      {
        id: 2,
        question: "Which of the following is NOT an example of a web service?",
        options: [
          "Google Maps API",
          "A desktop calculator app",
          "A stock market tracking API",
          "An online payment system",
        ],
        correct: 1,
        explanation:
          "A desktop calculator has no network communication — it is not a web service.",
      },
      {
        id: 3,
        question: "The correct interaction pattern in web service architecture is:",
        options: [
          "Find → Bind → Publish",
          "Bind → Find → Publish",
          "Publish → Find → Bind",
          "Publish → Bind → Find",
        ],
        correct: 2,
        explanation:
          "Provider publishes (to registry), consumer finds (in registry), then consumer binds (to provider).",
      },
      {
        id: 4,
        question: "The Service Registry contains:",
        options: [
          "The source code of the web service",
          "Data about the service provider including address, contact, and technical details",
          "The consumer's authentication credentials",
          "Copies of all data exchanged between provider and consumer",
        ],
        correct: 1,
        explanation:
          "The registry stores provider data: address, contact information, and technical details of the service.",
      },
      {
        id: 5,
        question: "What does WSDL tell a client application?",
        options: [
          "The programming language the service is written in",
          "What the web service does and all information required to connect and use it",
          "The internal database schema of the provider",
          "How many users are currently connected",
        ],
        correct: 1,
        explanation:
          "WSDL provides everything a client needs: what the service does, its location, its methods, and its message types.",
      },
      {
        id: 6,
        question: "WSDL defines web services as a collection of:",
        options: [
          "Database tables",
          "Network end points or ports",
          "Server IP addresses",
          "Programming functions",
        ],
        correct: 1,
        explanation:
          "WSDL defines web services as collections of network end points or ports.",
      },
      {
        id: 7,
        question: "SOAP is described as a lightweight protocol based on:",
        options: [
          "JSON over TCP",
          "XML over HTTP",
          "HTML over FTP",
          "Binary over UDP",
        ],
        correct: 1,
        explanation:
          "SOAP is XML-based and operates over HTTP (and also SMTP and TCP).",
      },
      {
        id: 8,
        question: "The root element of a SOAP message is the:",
        options: ["Header", "Body", "Envelope", "Payload"],
        correct: 2,
        explanation:
          "The Envelope is the root element that encapsulates all details in the SOAP message.",
      },
      {
        id: 9,
        question: "The SOAP Header typically contains:",
        options: [
          "The actual data being exchanged",
          "Authentication credentials and complex type definitions",
          "The service location URL",
          "Error codes and stack traces",
        ],
        correct: 1,
        explanation:
          "The Header contains authentication credentials and can define complex types used in the message.",
      },
      {
        id: 10,
        question: "Which is NOT listed as a SOAP advantage?",
        options: [
          "Platform independent",
          "Works on HTTP",
          "Recommended by W3C",
          "Faster than REST",
        ],
        correct: 3,
        explanation:
          "SOAP is actually slower than REST. Its advantages are platform independence, HTTP compatibility, and W3C recommendation.",
      },
      {
        id: 11,
        question: "REST uses which standard methods for communication?",
        options: [
          "PUBLISH, FIND, BIND",
          "SEND, RECEIVE, ACKNOWLEDGE",
          "GET, POST, PUT, DELETE",
          "READ, WRITE, EXECUTE, MODIFY",
        ],
        correct: 2,
        explanation:
          "REST uses standard HTTP methods: GET, POST, PUT, DELETE.",
      },
      {
        id: 12,
        question: "Which web service approach is better suited for a banking system?",
        options: [
          "REST — because it is faster",
          "SOAP — because it is more secure",
          "Neither — banking doesn't use web services",
          "Both are equally suitable",
        ],
        correct: 1,
        explanation:
          "SOAP is more secure, making it better suited for financial transactions where security is paramount.",
      },
      {
        id: 13,
        question: "Which web service approach is better suited for a social media app?",
        options: [
          "SOAP — because it supports XML",
          "REST — because it is lightweight, fast, and scalable",
          "Neither — social media doesn't use web services",
          "SOAP — because social media needs complex transactions",
        ],
        correct: 1,
        explanation:
          "REST is preferred for social media: lightweight JSON, scalable, easy integration with web/mobile, supports multiple platforms (Facebook, Twitter, Instagram).",
      },
      {
        id: 14,
        question: "A URL (e.g. www.port.ac.uk) is an example of:",
        options: [
          "An identifier",
          "A human-readable name",
          "A memory address",
          "An attribute-based name",
        ],
        correct: 1,
        explanation:
          "URLs are human-readable names — meaningful to people.",
      },
      {
        id: 15,
        question: "A MAC address (00:1A:2B:3C:4D:5E) is an example of:",
        options: [
          "A human-readable name",
          "An identifier",
          "An address",
          "An attribute-based name",
        ],
        correct: 1,
        explanation:
          "A MAC address is an identifier — it uniquely identifies a network interface.",
      },
      {
        id: 16,
        question: "A memory address (e.g. 0x7FFF5A1B3C) is an example of:",
        options: [
          "A human-readable name",
          "An identifier",
          "An address",
          "An attribute-based name",
        ],
        correct: 2,
        explanation:
          "Memory addresses point to specific locations — they are addresses.",
      },
      {
        id: 17,
        question: "Database table names and cloud storage tags are examples of:",
        options: [
          "Human-readable names",
          "Identifiers",
          "Addresses",
          "Attribute-based names",
        ],
        correct: 3,
        explanation:
          "Database table names and cloud tags are attribute-based names — based on resource properties.",
      },
      {
        id: 18,
        question: "DNS is an example of which naming scheme?",
        options: [
          "Flat naming",
          "Hierarchical naming",
          "Attribute-based naming",
          "Random naming",
        ],
        correct: 1,
        explanation:
          "DNS uses a tree-structured hierarchy — the classic example of hierarchical naming.",
      },
      {
        id: 19,
        question: "Which naming scheme has no structure and is used in P2P networks?",
        options: [
          "Hierarchical naming",
          "Flat naming",
          "Attribute-based naming",
          "Sequential naming",
        ],
        correct: 1,
        explanation:
          "Flat naming has no structure — used in P2P networks like BitTorrent.",
      },
      {
        id: 20,
        question: "Name resolution is the process of:",
        options: [
          "Creating new names for resources",
          "Mapping a name to an address or identifier",
          "Deleting unused names from the system",
          "Encrypting names for security",
        ],
        correct: 1,
        explanation:
          "Name resolution maps a name to an address or identifier (e.g. DNS resolving a domain name to an IP address).",
      },
      {
        id: 21,
        question: "Caching in name resolution introduces challenges with:",
        options: ["Security", "Consistency", "Scalability", "Naming structure"],
        correct: 1,
        explanation:
          "Caching improves efficiency but introduces consistency challenges — cached data may become stale.",
      },
      {
        id: 22,
        question: "Which is NOT a sub-aspect of QoS Security?",
        options: [
          "Non-repudiation",
          "Authentication",
          "Load balancing",
          "Encryption",
        ],
        correct: 2,
        explanation:
          "QoS Security includes non-repudiation, authentication, authorisation, encryption, traceability, and access control — not load balancing.",
      },
      {
        id: 23,
        question: "Which QoS metric measures the ability to function with different languages and platforms?",
        options: [
          "Availability",
          "Scalability",
          "Interoperability",
          "Accessibility",
        ],
        correct: 2,
        explanation:
          "Interoperability = the ability to function across different languages and platforms.",
      },
      {
        id: 24,
        question: "Grid computing is best described as:",
        options: [
          "A replacement for distributed computing",
          "A specialised form of distributed computing connecting heterogeneous systems",
          "A type of cloud storage",
          "A single-machine parallel processing technique",
        ],
        correct: 1,
        explanation:
          "Grid computing is a specialised form of distributed computing that connects heterogeneous systems for large-scale tasks.",
      },
      {
        id: 25,
        question: "A key difference between distributed and grid computing is resource ownership:",
        options: [
          "Both are always owned by a single entity",
          "Distributed resources are often owned by one entity; grid resources can be owned by multiple entities",
          "Grid resources are always owned by one entity",
          "Neither has defined resource ownership",
        ],
        correct: 1,
        explanation:
          "Distributed computing resources are often owned by one entity; grid computing resources can span multiple organisations.",
      },
      {
        id: 26,
        question: "Which is NOT listed as a benefit of distributed systems?",
        options: [
          "Scalability",
          "Fault tolerance",
          "Guaranteed zero downtime",
          "Cost-effectiveness",
        ],
        correct: 2,
        explanation:
          "Distributed systems improve fault tolerance but do not guarantee zero downtime — failures still happen, they are just more contained.",
      },
    ],

    flashcards: [
      {
        front: "What is a web service?",
        back: "A standardised way for applications to communicate over a network, independent of OS or programming language.",
      },
      {
        front: "What does 'platform and language agnostic' mean for web services?",
        back: "A client in any language on any platform can consume a web service written in a different language on a different platform.",
      },
      {
        front: "What are the three roles in web service architecture?",
        back: "Service Provider (offers and publishes), Service Registry (lists), Service Consumer/Requester (finds and calls).",
      },
      {
        front: "What is the interaction pattern in web service architecture?",
        back: "Publish → Find → Bind. Provider publishes to registry, consumer finds in registry, consumer binds to provider.",
      },
      {
        front: "What does the Service Provider do?",
        back: "Creates web services, describes them in WSDL, and publishes descriptions to the service registry.",
      },
      {
        front: "What are the three core web service standards?",
        back: "SOAP (communication), XML (data representation), WSDL (service description).",
      },
      {
        front: "What does WSDL stand for and what does it do?",
        back: "Web Services Description Language — tells the client what the service does, its location, its methods, and the SOAP message types it sends and accepts.",
      },
      {
        front: "What is the WSDL 'postcard' analogy?",
        back: "WSDL is like a postcard with the address of the web service — it tells the client where the service is and what it can deliver.",
      },
      {
        front: "What does SOAP stand for?",
        back: "Simple Object Access Protocol.",
      },
      {
        front: "What is SOAP?",
        back: "A lightweight XML-based protocol for exchanging information in a decentralised distributed environment over HTTP. Also works over SMTP and TCP.",
      },
      {
        front: "What are the three parts of a SOAP message?",
        back: "Envelope (root element — encapsulates all), Header (authentication, complex types — optional), Body (actual data — call/response).",
      },
      {
        front: "List four SOAP advantages.",
        back: "Ideal for web service communication, W3C recommended, platform/OS independent, works on HTTP (passes through firewalls).",
      },
      {
        front: "SOAP vs REST: format difference?",
        back: "SOAP uses XML. REST uses JSON or XML (JSON preferred — lighter weight).",
      },
      {
        front: "SOAP vs REST: when to use each?",
        back: "SOAP: security-critical apps (e.g. banking). REST: modern web/mobile apps needing speed and scalability (e.g. social media).",
      },
      {
        front: "Why is REST preferred for social media?",
        back: "Lightweight (JSON smaller than XML), scalable, easy integration with web/mobile apps, supports multiple platforms. Used by Facebook, Twitter, Instagram.",
      },
      {
        front: "Why is naming fundamental in distributed systems?",
        back: "Enables resource sharing, simplifies system management, supports user-friendly interaction using meaningful names.",
      },
      {
        front: "What are the four types of names?",
        back: "Human-readable (URLs, emails), Identifiers (IP/MAC/UUID), Addresses (memory/file paths), Attribute-based (DB tags, hashtags).",
      },
      {
        front: "Is a MAC address an identifier or an address?",
        back: "An identifier — it uniquely identifies a network interface. Not an address (addresses point to locations).",
      },
      {
        front: "What is flat naming?",
        back: "No structure — unstructured identifiers used in P2P networks (e.g. BitTorrent). Harder to scale.",
      },
      {
        front: "What is hierarchical naming?",
        back: "Organised like a tree — the classic example is DNS (e.g. www.port.ac.uk). Scales well due to distributed structure.",
      },
      {
        front: "What is name resolution?",
        back: "The process of mapping a name to an address or identifier (e.g. DNS resolving a domain name to an IP address).",
      },
      {
        front: "What trade-off does caching introduce in name resolution?",
        back: "Caching improves performance (stores recent resolutions locally) but introduces consistency challenges — cached data may become stale.",
      },
      {
        front: "What are the three challenges in naming systems?",
        back: "Scalability (large numbers of names), Consistency (correct mappings), Security (name spoofing prevention).",
      },
      {
        front: "What are the six QoS Security sub-aspects?",
        back: "Non-repudiation, authentication, authorisation, encryption, traceability, access control.",
      },
      {
        front: "What is QoS Interoperability?",
        back: "The ability of a service to function with different languages and/or platforms. Challenge: conformance of web services to the protocols.",
      },
      {
        front: "What are the four benefits of distributed systems?",
        back: "Scalability, fault tolerance, resource sharing, cost-effectiveness.",
      },
      {
        front: "What is grid computing?",
        back: "A specialised form of distributed computing connecting heterogeneous systems to work on large-scale tasks across multiple organisations.",
      },
      {
        front: "Distributed vs grid: resource ownership?",
        back: "Distributed: often owned by a single entity. Grid: resources can be owned by multiple entities across organisations.",
      },
      {
        front: "Distributed vs grid: performance optimisation?",
        back: "Distributed: optimises local resources. Grid: optimises global resources across the network.",
      },
      {
        front: "Grid computing applications vs distributed computing applications?",
        back: "Grid: biomedical research, weather forecasting, financial modelling. Distributed: online gaming, cloud computing, web services, big data (Hadoop).",
      },
    ],

    shortAnswers: [
      {
        id: 1,
        question:
          "Define what a web service is and explain what makes it different from a website.",
        marks: 3,
        markingGuide: [
          "A standardised way for applications to communicate over a network",
          "Independent of the underlying OS or programming language (platform/language agnostic)",
          "A website serves HTML to humans; a web service provides data and functionality to other applications via standardised protocols",
        ],
        hint: "Think about who (or what) the consumer of the service is.",
      },
      {
        id: 2,
        question:
          "Name and describe the three components of web service architecture. What is the interaction pattern?",
        marks: 4,
        markingGuide: [
          "Service Provider — creates and offers web services, describes them in WSDL, publishes to registry",
          "Service Registry — stores provider data: address, contact info, and technical details",
          "Service Consumer — retrieves info from registry, uses description to bind to and invoke the service",
          "Interaction pattern: Publish → Find → Bind",
        ],
        hint: "Who offers it, who lists it, who uses it — and in what order?",
      },
      {
        id: 3,
        question:
          "What are the three core standards/protocols for web services? Briefly describe each.",
        marks: 3,
        markingGuide: [
          "SOAP — a standard way for communication between services and clients (XML-based protocol over HTTP)",
          "XML — a uniform data representation and exchange format",
          "WSDL — a standard meta-language to describe the services offered",
        ],
        hint: "Communication, data format, service description.",
      },
      {
        id: 4,
        question:
          "Describe the three elements of a SOAP message.",
        marks: 3,
        markingGuide: [
          "Envelope — root element; identifies the XML document as a SOAP message and encapsulates all details",
          "Header — contains authentication credentials and can define complex types (optional)",
          "Body — contains the actual data: call and response information",
        ],
        hint: "Container, metadata, payload.",
      },
      {
        id: 5,
        question:
          "Compare SOAP and REST on four dimensions.",
        marks: 4,
        markingGuide: [
          "Format: SOAP uses XML; REST uses JSON or XML",
          "Speed: SOAP is slower; REST is faster and simpler",
          "Security: SOAP is more secure; REST is lighter weight",
          "Protocols: SOAP works over HTTP/SMTP/TCP; REST uses standard HTTP methods (GET, POST, PUT, DELETE)",
        ],
        hint: "Format, speed, security, and protocol.",
      },
      {
        id: 6,
        question:
          "Describe the four types of names used in computing. Give an example of each and classify: is a MAC address an identifier or an address?",
        marks: 4,
        markingGuide: [
          "Human-readable: meaningful to people — URLs, email addresses, file names",
          "Identifiers: uniquely identify resources — IP addresses, MAC addresses, UUIDs",
          "Addresses: point to specific locations — memory addresses, device paths, network file paths",
          "Attribute-based: based on resource properties — database table names, cloud storage tags",
        ],
        hint: "A MAC address uniquely identifies — it is an identifier, not an address.",
      },
      {
        id: 7,
        question:
          "Describe the three naming schemes and give an example of each.",
        marks: 3,
        markingGuide: [
          "Flat naming — no structure, unstructured identifiers, used in P2P networks (e.g. BitTorrent)",
          "Hierarchical naming — tree structure (e.g. DNS, www.port.ac.uk)",
          "Attribute-based naming — based on resource properties (e.g. database queries, cloud storage tags)",
        ],
        hint: "No structure, tree structure, property-based.",
      },
      {
        id: 8,
        question:
          "What is name resolution? What trade-off does caching introduce?",
        marks: 3,
        markingGuide: [
          "Name resolution is the process of mapping a name to an address or identifier (e.g. DNS resolving domain → IP)",
          "Caching stores recent resolutions locally, improving performance and reducing repeated lookups",
          "Caching introduces consistency challenges — cached data may become stale, pointing to outdated addresses",
        ],
        hint: "The classic performance vs consistency trade-off.",
      },
      {
        id: 9,
        question:
          "List the six sub-aspects of QoS Security and explain why security is listed as a QoS metric for web services.",
        marks: 4,
        markingGuide: [
          "Six sub-aspects: non-repudiation, authentication, authorisation, encryption, traceability, access control",
          "Security is a QoS metric because web services are exposed over the network and must verify who calls them",
          "The challenge is the ability of the protocols to support these security requirements",
          "This extends the three Week 1 security elements (authentication, access control, auditing)",
        ],
        hint: "Think about what needs to be verified when a remote system calls your service.",
      },
      {
        id: 10,
        question:
          "What is grid computing? Give two ways it differs from standard distributed computing.",
        marks: 3,
        markingGuide: [
          "Grid computing is a specialised form of distributed computing connecting heterogeneous systems for large-scale tasks",
          "Difference 1: resource ownership — distributed often one entity; grid can span multiple organisations",
          "Difference 2: grid optimises global resources and is highly network-dependent; distributed optimises local resources",
        ],
        hint: "Grid is about pooling resources across organisational boundaries.",
      },
      {
        id: 11,
        question:
          "A team is building a new API for a global social media platform. They must choose between SOAP and REST. Recommend one and justify your choice with reference to at least three factors.",
        marks: 5,
        markingGuide: [
          "Recommendation: REST",
          "Factor 1: Lightweight — REST uses JSON which is smaller than SOAP's XML, reducing bandwidth",
          "Factor 2: Scalability — REST handles millions of concurrent users more efficiently",
          "Factor 3: Integration — REST integrates easily with web and mobile apps and supports multiple platforms",
          "Factor 4: Speed — REST is faster and simpler; social media prioritises responsiveness",
        ],
        hint: "Consider what social media needs most: speed, scale, and easy integration.",
      },
    ],
  },

  6: {
    id: 6,
    title: "Mobile & Ubiquitous Computing",
    subtitle: "Volatile Systems, Discovery Services, Interoperability & Smart Cities",
    emoji: "📡",
    guide: week6Guide,

    mcqs: [
      {
        id: 1,
        question: "Who coined the term 'Ubiquitous Computing' and when?",
        options: [
          "Tim Berners-Lee in 1991",
          "Mark Weiser in 1988 at PARC",
          "Alan Turing in 1950",
          "Vint Cerf in 1995",
        ],
        correct: 1,
        explanation:
          "Mark Weiser coined 'Ubiquitous Computing' in 1988 at Palo Alto Research Centre (PARC).",
      },
      {
        id: 2,
        question:
          "Which is NOT a key characteristic of ubiquitous computing?",
        options: [
          "Mobility",
          "Scalability",
          "High power consumption",
          "Context-awareness",
        ],
        correct: 2,
        explanation:
          "High power consumption is a challenge, not a characteristic. Ubiquitous devices are designed to be low-power. The four key characteristics are mobility, scalability, context-awareness, and seamless integration.",
      },
      {
        id: 3,
        question:
          "In the active badge example, the room responds by:",
        options: [
          "Asking the user to log in manually",
          "Detecting the user's ID via infrared and displaying a personalised response",
          "Scanning the user's fingerprint",
          "Requiring the user to press a button",
        ],
        correct: 1,
        explanation:
          "The infrared sensor detects the badge ID automatically and the display responds personally — no explicit user interaction needed, demonstrating ubiquitous computing.",
      },
      {
        id: 4,
        question:
          "Which is the scarcest resource for ubiquitous devices?",
        options: [
          "Storage",
          "Processing power",
          "Energy (battery)",
          "Network bandwidth",
        ],
        correct: 2,
        explanation:
          "Energy is the most critical constraint — battery dependency, charging inconvenience, and wireless connectivity is energy intensive. All other constraints also increase energy consumption.",
      },
      {
        id: 5,
        question:
          "'Volatile systems' in ubiquitous computing means:",
        options: [
          "Systems that are always stable and predictable",
          "Highly dynamic and unpredictable systems where devices appear and disappear",
          "Systems that only work indoors",
          "Systems that require constant user input",
        ],
        correct: 1,
        explanation:
          "Volatile = highly dynamic, using spontaneous (ad hoc) networking, with devices constantly joining, leaving, and failing.",
      },
      {
        id: 6,
        question: "Actuators are:",
        options: [
          "Devices that measure temperature",
          "Software-controllable devices that act on the environment",
          "Network routers",
          "User interface screens",
        ],
        correct: 1,
        explanation:
          "Actuators are software-controllable devices that act on the environment: air conditioning, motors, smart home devices.",
      },
      {
        id: 7,
        question:
          "Devices with sensing capabilities are often distrusted because of:",
        options: [
          "Slow processing speed",
          "Privacy concerns — tracking, discovery routines, shopping monitoring",
          "High cost",
          "Poor battery life",
        ],
        correct: 1,
        explanation:
          "Privacy concerns include: tracking (location/movement), discovery routines (auto-detecting people nearby), and commercial behaviour monitoring.",
      },
      {
        id: 8,
        question: "A pre-configured association example is:",
        options: [
          "A web browser connecting to various websites",
          "An email client configured to connect to its server",
          "P2P file sharing",
          "A mobile phone connecting to a new smart space",
        ],
        correct: 1,
        explanation:
          "An email client and its specific server is a pre-configured, service-driven association — the relationship is set up in advance.",
      },
      {
        id: 9,
        question: "The Push Model for service discovery:",
        options: [
          "Is more efficient than Pull",
          "Has services advertise themselves via multicast regularly",
          "Requires clients to send repeated requests",
          "Uses no bandwidth",
        ],
        correct: 1,
        explanation:
          "Push = services advertise via multicast (regularly); clients query cached advertisements. Wasteful of bandwidth.",
      },
      {
        id: 10,
        question:
          "The lease-based approach to volatile service management means:",
        options: [
          "Services are permanently registered",
          "Clients lease a service for a time period; must renew or it is automatically released",
          "Services can never be removed",
          "Only administrators can register services",
        ],
        correct: 1,
        explanation:
          "Leasing is time-limited: must be renewed; automatically released if not renewed. This handles volatility without manual cleanup.",
      },
      {
        id: 11,
        question:
          "In the discovery service interface, which method returns a set of matching services?",
        options: ["register", "refresh", "deregister", "query"],
        correct: 3,
        explanation:
          "query(attributeSpecification) returns a set of registered services matching the given specification.",
      },
      {
        id: 12,
        question:
          "In serverless (decentralised) discovery:",
        options: [
          "A central server manages all service records",
          "Each device maintains its own directory in its cache",
          "No services can be discovered",
          "Only one device can register services",
        ],
        correct: 1,
        explanation:
          "Serverless = no central directory; each device maintains its own local cache of known services.",
      },
      {
        id: 13,
        question:
          "The 'lost opportunity problem' in interoperability is when:",
        options: [
          "A device loses its battery",
          "A device cannot use a service because their interfaces are incompatible",
          "A network cable is disconnected",
          "A server runs out of storage",
        ],
        correct: 1,
        explanation:
          "Lost opportunity = a device and service are in the same smart space but can't communicate due to incompatible interfaces.",
      },
      {
        id: 14,
        question: "For N interfaces, the number of adaptors needed is:",
        options: ["N", "N + 1", "N²", "2N"],
        correct: 2,
        explanation:
          "For every N interfaces, N² adaptors are needed — determined at runtime. For 10 interfaces, 100 adaptors are required.",
      },
      {
        id: 15,
        question: "Which is a solution to the N² adaptor problem?",
        options: [
          "Adding more adaptors",
          "Constraining to universal interfaces like HTTP GET/POST or Unix pipes",
          "Removing all interfaces",
          "Using only wired connections",
        ],
        correct: 1,
        explanation:
          "Constrain to a few universal interfaces (HTTP GET/POST, Unix pipes) or use self-describing data (XML/JSON) so devices understand each other without pre-configured adaptors.",
      },
      {
        id: 16,
        question: "In tuple spaces, a consuming device uses:",
        options: [
          "Exact addresses to find data",
          "Pattern matching with wildcards to find matching data",
          "A central database query",
          "Direct memory access",
        ],
        correct: 1,
        explanation:
          "Tuple spaces use pattern matching: <*, 'image/jpeg', *> matches any JPEG image tuple regardless of source.",
      },
      {
        id: 17,
        question: "In event systems, who produces events and who consumes them?",
        options: [
          "Servers produce; clients consume",
          "Publishers publish; subscribers consume",
          "Consumers produce; publishers consume",
          "Routers produce; switches consume",
        ],
        correct: 1,
        explanation:
          "Event systems follow a publish-subscribe model: publishers publish events, subscribers consume them.",
      },
      {
        id: 18,
        question: "'Sensor fusion' means:",
        options: [
          "Replacing multiple sensors with one",
          "Combining and interpreting data from multiple sensors for complex sensing tasks",
          "Destroying sensors after use",
          "Using only one type of sensor",
        ],
        correct: 1,
        explanation:
          "Sensor fusion combines data from multiple sensors to perform complex tasks such as detecting human presence.",
      },
      {
        id: 19,
        question: "Which location technology has the best accuracy?",
        options: [
          "GPS (1–10m)",
          "Radio beaconing (10m–1km)",
          "Active Bat (10cm)",
          "Active Badge (room size)",
        ],
        correct: 2,
        explanation:
          "Active Bat achieves 10cm accuracy using radio and ultrasound multilateration — the most accurate of all listed technologies.",
      },
      {
        id: 20,
        question:
          "Which location technology has the WORST privacy because no user-mounted device is required?",
        options: ["GPS", "Active Badge", "EasyLiving (vision-based)", "RFID"],
        correct: 2,
        explanation:
          "EasyLiving uses cameras — no device is needed on the user, so tracking happens without consent or awareness.",
      },
      {
        id: 21,
        question: "GPS is limited to:",
        options: [
          "Indoor use only",
          "Outdoor use only (requires satellite visibility)",
          "Underground use only",
          "Use within 1km of a base station",
        ],
        correct: 1,
        explanation:
          "GPS requires satellite visibility — it only works outdoors.",
      },
      {
        id: 22,
        question: "The best communication model for smart city networks is:",
        options: [
          "Pure P2P",
          "Pure client-server",
          "Hybrid (combination of P2P and client-server)",
          "Manual messaging",
        ],
        correct: 2,
        explanation:
          "A hybrid model combines P2P scalability with client-server management — best suited for smart city networks.",
      },
      {
        id: 23,
        question:
          "Which communication model best supports real-time traffic monitoring?",
        options: [
          "Event-driven asynchronous communication",
          "Batch processing",
          "Synchronous messaging only",
          "Traditional phone reporting",
        ],
        correct: 0,
        explanation:
          "Event-driven asynchronous communication is ideal for real-time monitoring — events trigger immediate responses without blocking.",
      },
      {
        id: 24,
        question: "Service-Oriented Architecture (SOA) is:",
        options: [
          "A hardware specification",
          "A system where web services are discovered dynamically and coordinate to provide enhanced services",
          "A programming language",
          "A type of database",
        ],
        correct: 1,
        explanation:
          "SOA = web services discovered dynamically, coordinating with each other to provide enhanced composite services.",
      },
      {
        id: 25,
        question: "'In-network processing' in sensor networks means:",
        options: [
          "All data is sent to a central server for processing",
          "Processing happens on the sensor nodes themselves and aggregates from nearby nodes",
          "Processing is done by the user's smartphone",
          "No processing occurs in the network",
        ],
        correct: 1,
        explanation:
          "In-network processing = processing and aggregating data on sensor nodes themselves, reducing the data transmitted across the network.",
      },
      {
        id: 26,
        question:
          "If smart spaces each have their own proprietary programming interface, this:",
        options: [
          "Improves interoperability",
          "Inhibits mobility between smart spaces",
          "Reduces complexity",
          "Eliminates the need for adaptors",
        ],
        correct: 1,
        explanation:
          "Proprietary interfaces inhibit mobility — devices moving between smart spaces cannot communicate without complex adaptation at runtime.",
      },
    ],

    flashcards: [
      {
        front: "Who coined 'Ubiquitous Computing' and when?",
        back: "Mark Weiser in 1988 at Palo Alto Research Centre (PARC).",
      },
      {
        front: "What is ubiquitous computing?",
        back: "Integrating computing into everyday objects/environments — seamlessly available anytime, anywhere, without explicit user interaction. Also called pervasive computing.",
      },
      {
        front: "What are the four key characteristics of ubiquitous computing?",
        back: "Mobility, scalability, context-awareness, seamless integration. (NOT high power consumption — that is a challenge.)",
      },
      {
        front: "What does the active badge example demonstrate?",
        back: "User enters room → infrared sensor detects badge ID → display responds personally. No explicit interaction — automatic identification and context-aware response.",
      },
      {
        front: "What are five resource constraints for ubiquitous devices?",
        back: "Computation, memory, storage, energy (battery), wireless connectivity (energy intensive). Energy is the scarcest resource.",
      },
      {
        front: "What is the fundamental design challenge for ubiquitous devices?",
        back: "Design algorithms that execute in reasonable time using minimal resources.",
      },
      {
        front: "What are volatile systems?",
        back: "Highly dynamic, unpredictable systems using spontaneous (ad hoc) networking. Devices join, leave, fail, and reconnect constantly — unlike traditional servers which are always on.",
      },
      {
        front: "Sensors vs Actuators — what is the difference?",
        back: "Sensors measure physical parameters from the environment (orientation, light, sound). Actuators are software-controllable devices that act on the environment (air conditioning, motors).",
      },
      {
        front: "Why are sensing devices often distrusted?",
        back: "Privacy concerns: tracking (location/movement), discovery routines (auto-detecting people), shopping/commercial monitoring of behaviour.",
      },
      {
        front: "Pre-configured vs spontaneous association?",
        back: "Pre-configured: set up in advance (email client + server). Spontaneous: formed dynamically at runtime — human-driven (browsing), data-driven (P2P), physically-driven (mobile/ubiquitous).",
      },
      {
        front: "What is the Push Model for discovery?",
        back: "Services advertise themselves via multicast regularly; clients query cached advertisements. Wasteful of bandwidth.",
      },
      {
        front: "What is the Pull Model for discovery?",
        back: "Clients multicast requests; services providing those services respond. More efficient but may need repeated requests.",
      },
      {
        front: "What is the lease mechanism?",
        back: "Client leases a service for a fixed time period; must renew for continued use; automatically released if not renewed. Handles volatility without manual cleanup.",
      },
      {
        front: "What are the four discovery service interface methods?",
        back: "register(address, attributes) → lease, refresh(lease), deregister(lease), query(attributeSpec) → serviceSet.",
      },
      {
        front: "What are the four discovery service challenges?",
        back: "Bandwidth use, management of volatile services (solved by leasing), scale, smart space boundary definition.",
      },
      {
        front: "Server-based vs serverless discovery?",
        back: "Server-based: centralised directory (single point of failure). Serverless: no central directory — each device maintains its own cache.",
      },
      {
        front: "What is the 'lost opportunity problem'?",
        back: "A device cannot use a nearby service because their interfaces are incompatible.",
      },
      {
        front: "What is the N² adaptor problem?",
        back: "For N different interfaces, N² adaptors are needed at runtime. For 10 interfaces = 100 adaptors. Does not scale.",
      },
      {
        front: "What are the solutions to the N² adaptor problem?",
        back: "Constrain to universal interfaces (HTTP GET/POST, Unix pipes) OR use self-describing data formats (XML/JSON).",
      },
      {
        front: "What are the three data-oriented programming approaches?",
        back: "Unvarying service interface (Unix pipes), event systems (publish-subscribe), tuple spaces (pattern matching with wildcards).",
      },
      {
        front: "How do tuple spaces work?",
        back: "Producers put structured data tuples; consumers use pattern matching with wildcards to retrieve matching tuples. Decouples producers from consumers.",
      },
      {
        front: "What are the four context-awareness challenges?",
        back: "Sensor integration, abstraction from raw data, sensor fusion, dynamic context.",
      },
      {
        front: "What is sensor fusion?",
        back: "Combining and interpreting data from multiple sensors to perform complex sensing tasks (e.g. detecting human presence).",
      },
      {
        front: "What is directed diffusion in sensor networks?",
        back: "Interests (tasks) are injected at sink nodes; the runtime system diffuses these interests throughout the sensor network.",
      },
      {
        front: "GPS: mechanism, accuracy, limitation?",
        back: "Satellite multilateration; 1–10m accuracy; outdoors only (requires satellite visibility).",
      },
      {
        front: "Active Bat: mechanism, accuracy?",
        back: "Radio + ultrasound multilateration; 10cm accuracy — the most precise. Needs ceiling sensors installed.",
      },
      {
        front: "EasyLiving: why is it the worst for privacy?",
        back: "Uses cameras — no device is needed on the user, so tracking happens without the user's knowledge or consent.",
      },
      {
        front: "Best communication model for smart cities?",
        back: "Hybrid (P2P + client-server) — combines P2P scalability with client-server management.",
      },
      {
        front: "What is SOA?",
        back: "Service-Oriented Architecture — web services discovered dynamically and coordinating with each other to provide enhanced services.",
      },
      {
        front: "What is in-network processing?",
        back: "Processing and aggregating data on sensor nodes themselves rather than sending all raw data to a central server — reduces network bandwidth consumption.",
      },
    ],

    shortAnswers: [
      {
        id: 1,
        question:
          "Define ubiquitous computing and state who coined the term. What is its defining characteristic?",
        marks: 3,
        markingGuide: [
          "Integrating computing capabilities into everyday objects and environments — seamlessly available anytime, anywhere, without requiring explicit user interaction",
          "Coined by Mark Weiser in 1988 at PARC",
          "Defining characteristic: invisibility — technology disappears into the background of everyday life",
        ],
        hint: "Invisible computing everywhere — who, when, and what makes it unique.",
      },
      {
        id: 2,
        question:
          "List the five resource constraints for ubiquitous devices. Which is most critical and why?",
        marks: 3,
        markingGuide: [
          "Five constraints: computation, memory, storage, energy (battery), network bandwidth",
          "Energy is the most critical — battery dependency, charging inconvenience, wireless communication is energy intensive",
          "All other constraints also increase energy consumption — energy is the ultimate bottleneck",
        ],
        hint: "Everything uses energy — energy is the bottleneck for all other constraints.",
      },
      {
        id: 3,
        question:
          "What does 'volatile' mean in the context of ubiquitous systems? Give three reasons why volatility occurs.",
        marks: 3,
        markingGuide: [
          "Volatile = highly dynamic and unpredictable; uses spontaneous (ad hoc) networking",
          "Reason 1: devices are power dependent — can fail or disconnect at any time",
          "Reason 2: communications suffer from changing network connectivity and bandwidth",
          "Reason 3: associations of software components are created and destroyed dynamically",
        ],
        hint: "Nothing is permanent — devices come and go unpredictably.",
      },
      {
        id: 4,
        question:
          "Compare the Push and Pull models for service discovery. What is the lease mechanism and why is it important?",
        marks: 4,
        markingGuide: [
          "Push: services advertise via multicast regularly; clients query cached ads; wasteful of bandwidth",
          "Pull: clients multicast requests; providers respond; more efficient but needs repeated requests",
          "Lease: client gets a time-limited lease on a service; must renew for continued use; auto-released if not renewed",
          "Importance: handles volatile services automatically — no manual cleanup needed when devices disappear",
        ],
        hint: "Services shout (push) vs clients ask (pull). What happens when a service disappears?",
      },
      {
        id: 5,
        question:
          "List and describe the four methods in the discovery service interface.",
        marks: 4,
        markingGuide: [
          "register(address, attributes) → lease: register a service with attributes; a lease is returned",
          "refresh(lease): renew the lease to continue using the service",
          "deregister(lease): remove the service registered under the given lease",
          "query(attributeSpecification) → serviceSet: return registered services matching the specification",
        ],
        hint: "How do you add, maintain, remove, and find services?",
      },
      {
        id: 6,
        question:
          "Explain the 'lost opportunity problem' and the N² adaptor problem in ubiquitous computing interoperability. What is the key solution?",
        marks: 4,
        markingGuide: [
          "Lost opportunity: a device cannot use a nearby service because their interfaces are incompatible",
          "N² problem: for N different interfaces, N² adaptors are required at runtime — does not scale (10 interfaces = 100 adaptors)",
          "Solution 1: constrain to a few universal interfaces (HTTP GET/POST, Unix pipes)",
          "Solution 2: use self-describing data formats (XML/JSON) so devices understand each other without pre-configured adaptors",
        ],
        hint: "Think about how many relationships exist between N things — and how to avoid them.",
      },
      {
        id: 7,
        question:
          "Describe the three data-oriented programming approaches for volatile systems.",
        marks: 3,
        markingGuide: [
          "Unvarying service interface: all services use the same universal interface (e.g. Unix read/write) — limited expressiveness",
          "Event systems: publishers publish events; subscribers consume them — challenge is agreeing on event service scope",
          "Tuple spaces: producers put structured tuples; consumers use pattern matching with wildcards — decouples producers from consumers",
        ],
        hint: "Universal interface, publish-subscribe, and pattern-matched data bags.",
      },
      {
        id: 8,
        question:
          "Compare GPS, Active Bat, and EasyLiving as location-sensing technologies. What are the key trade-offs?",
        marks: 4,
        markingGuide: [
          "GPS: satellite multilateration; 1–10m; outdoors only (satellite visibility required); good privacy (user-controlled)",
          "Active Bat: radio + ultrasound; 10cm (most accurate); needs ceiling sensors; bat identity disclosed",
          "EasyLiving: vision/cameras; variable accuracy; worst privacy — no user device needed, so tracking without consent",
          "Trade-offs: accuracy vs infrastructure cost; indoor/outdoor capability; privacy exposure",
        ],
        hint: "Consider accuracy, where it works, what infrastructure is needed, and privacy.",
      },
      {
        id: 9,
        question:
          "What is sensor fusion? Why is 'abstraction from sensor data' a challenge in context-aware systems?",
        marks: 3,
        markingGuide: [
          "Sensor fusion: combining and interpreting data from multiple sensors to perform complex sensing tasks (e.g. detecting human presence from motion, sound, and heat sensors)",
          "Abstraction challenge: applications receive raw sensor data (e.g. GPS coordinates) and must convert it to meaningful context (e.g. 'user is in the kitchen')",
          "This requires domain knowledge and processing — the raw data alone is not useful",
        ],
        hint: "Raw numbers vs meaningful information — the gap between them.",
      },
      {
        id: 10,
        question:
          "Describe three smart city applications of ubiquitous computing. What is the main implementation challenge and the major privacy concern?",
        marks: 4,
        markingGuide: [
          "Application 1: smart traffic — real-time updates and dynamic signal adjustment",
          "Application 2: smart parking — sensors detect spaces, notify drivers via app",
          "Application 3: AI-based emergency response or gamification (rewards for civic actions)",
          "Main challenge: high implementation costs",
          "Privacy concern: excessive data collection and surveillance risks from pervasive sensors",
        ],
        hint: "Three applications from the seminar, then costs and privacy.",
      },
      {
        id: 11,
        question:
          "A smart building system must allow devices from multiple vendors to interoperate. Devices join and leave at random (some are battery-powered and may drop off without warning). Design the key mechanisms needed, referencing: discovery, association, interoperability, and volatility management.",
        marks: 5,
        markingGuide: [
          "Discovery: use a hybrid push/pull discovery service with register/query/deregister/refresh interface",
          "Volatility: implement leasing — devices lease services for a time period; auto-released if not renewed",
          "Association: support spontaneous (physically-driven) association since devices join without pre-configuration",
          "Interoperability: constrain to universal interfaces (HTTP GET/POST) and self-describing data (JSON/XML) to avoid N² adaptor problem",
          "Overall: these mechanisms together create a resilient, self-managing smart space that handles device churn without manual administration",
        ],
        hint: "Think through each challenge: how does a new device find services, how does it connect, what happens when it dies?",
      },
    ],
  },

  7: {
    id: 7,
    title: "Fault Tolerance",
    subtitle: "Failures, Replication, Consensus, Detection & Edge/Fog Computing",
    emoji: "🛡️",
    guide: week7Guide,

    mcqs: [
      {
        id: 1,
        question: "Fault tolerance in distributed systems is best defined as:",
        options: [
          "Eliminating all possible failures in a system",
          "The system's ability to continue operating correctly despite failures",
          "Ensuring every node is always available",
          "Preventing network partitions from occurring",
        ],
        correct: 1,
        explanation:
          "Fault tolerance is the system's ability to continue operating correctly despite failures — not about eliminating failures, but about handling them so the system keeps working.",
      },
      {
        id: 2,
        question:
          "A database server crashes mid-transaction due to a power failure. This is an example of:",
        options: [
          "Omission failure",
          "Timing failure",
          "Crash failure",
          "Byzantine failure",
        ],
        correct: 2,
        explanation:
          "A crash failure occurs when a node completely stops responding. A database server halting due to power failure is the classic example.",
      },
      {
        id: 3,
        question:
          "Network congestion causes a request to an API to be lost in transit. This is an example of:",
        options: [
          "Crash failure",
          "Omission failure",
          "Timing failure",
          "Byzantine failure",
        ],
        correct: 1,
        explanation:
          "An omission failure occurs when messages are lost or dropped in transmission — the sender sends but the receiver never receives.",
      },
      {
        id: 4,
        question:
          "A banking system fails to process transactions within the required time window. This is an example of:",
        options: [
          "Crash failure",
          "Omission failure",
          "Timing failure",
          "Network partition",
        ],
        correct: 2,
        explanation:
          "A timing failure occurs when a system responds too late or too early — outside the expected time bounds.",
      },
      {
        id: 5,
        question:
          "A hacked node in a blockchain network sends different false transaction data to different nodes. This is an example of:",
        options: [
          "Crash failure",
          "Omission failure",
          "Timing failure",
          "Byzantine failure",
        ],
        correct: 3,
        explanation:
          "Byzantine failure is the most severe type — a node behaves incorrectly or maliciously, sending inconsistent or false data to different nodes.",
      },
      {
        id: 6,
        question:
          "A cloud region becomes isolated from the rest of a global system due to a network fault. This is an example of:",
        options: [
          "Crash failure",
          "Byzantine failure",
          "Timing failure",
          "Network partition",
        ],
        correct: 3,
        explanation:
          "Network partitioning occurs when some nodes become isolated from others due to network issues — the network splits into groups that cannot communicate.",
      },
      {
        id: 7,
        question:
          "In the Primary-Backup replication model:",
        options: [
          "All nodes process every request in parallel",
          "One primary node handles requests; backups take over on failure",
          "Requests are distributed round-robin across all nodes",
          "A quorum of nodes must agree before each request is processed",
        ],
        correct: 1,
        explanation:
          "In Primary-Backup (passive replication), one primary node handles all requests. Backups are kept in sync and take over if the primary fails.",
      },
      {
        id: 8,
        question:
          "Quorum-based replication requires:",
        options: [
          "All nodes to agree before an update is committed",
          "A majority of nodes to agree before an update is committed",
          "Only the primary node to approve an update",
          "A single backup to confirm an update",
        ],
        correct: 1,
        explanation:
          "Quorum-based replication requires majority agreement (a quorum) before an update is committed — ensuring consistency even if some nodes fail.",
      },
      {
        id: 9,
        question:
          "In active replication, all nodes:",
        options: [
          "Act as backups until the primary fails",
          "Run in parallel and process every request",
          "Only process read requests",
          "Wait for a quorum before responding",
        ],
        correct: 1,
        explanation:
          "In active replication, all nodes run in parallel and process every request — any node can instantly take over with no failover delay.",
      },
      {
        id: 10,
        question: "Checkpointing in fault-tolerant systems means:",
        options: [
          "Monitoring node heartbeats at regular intervals",
          "Saving the system state periodically so it can be restored after failure",
          "Distributing data across multiple nodes",
          "Logging all network traffic",
        ],
        correct: 1,
        explanation:
          "Checkpointing saves a consistent snapshot of the system state periodically so it can be restored after a failure — the foundation of rollback recovery.",
      },
      {
        id: 11,
        question: "Rollback recovery means:",
        options: [
          "Deleting data after a failure to start fresh",
          "Restoring system state from a previous checkpoint after a failure",
          "Sending all nodes back to their initial state",
          "Redirecting requests to a backup system",
        ],
        correct: 1,
        explanation:
          "Rollback recovery restores the system to the last known-good checkpoint after a failure, then replays subsequent operations.",
      },
      {
        id: 12,
        question: "Message logging in fault tolerance is used to:",
        options: [
          "Monitor network traffic for security threats",
          "Store records of messages so they can be replayed after a crash",
          "Compress messages for faster transmission",
          "Authenticate nodes before they send messages",
        ],
        correct: 1,
        explanation:
          "Message logging stores records of messages sent/received so they can be replayed after a crash — allowing recovery of work done since the last checkpoint.",
      },
      {
        id: 13,
        question:
          "The consensus problem in distributed systems asks:",
        options: [
          "How to minimise network latency between nodes",
          "How distributed nodes can agree on a single value despite failures",
          "How to maximise throughput across replicated nodes",
          "How to detect Byzantine failures in real time",
        ],
        correct: 1,
        explanation:
          "The consensus problem: how do distributed nodes agree on a single value, even when some nodes fail? This is fundamental to maintaining consistency across replicas.",
      },
      {
        id: 14,
        question: "The Paxos algorithm was proposed by:",
        options: [
          "Diego Ongaro & John Ousterhout, 2013",
          "Barbara Liskov & Miguel Castro, 1999",
          "Leslie Lamport, 1998",
          "Mark Weiser, 1988",
        ],
        correct: 2,
        explanation:
          "Paxos was proposed by Leslie Lamport in 1998. It ensures agreement in unreliable networks.",
      },
      {
        id: 15,
        question: "Which consensus algorithm is used in Kubernetes for leader election?",
        options: ["Paxos", "Raft", "BFT", "Gossip"],
        correct: 1,
        explanation:
          "Raft is used in Kubernetes for leader election. It was designed to be more understandable than Paxos while providing equivalent guarantees.",
      },
      {
        id: 16,
        question:
          "Which of the following is TRUE about both Paxos and Raft?",
        options: [
          "Both handle Byzantine failures",
          "Both are used in blockchain systems",
          "Neither handles Byzantine failures",
          "Both require all nodes to agree before committing",
        ],
        correct: 2,
        explanation:
          "Both Paxos and Raft are crash-fault-tolerant but do NOT handle Byzantine failures — they assume nodes can crash but not act maliciously.",
      },
      {
        id: 17,
        question:
          "Byzantine Fault Tolerance (BFT) is needed when:",
        options: [
          "Nodes may crash but not misbehave",
          "Network latency is very high",
          "Nodes may behave maliciously or send inconsistent data",
          "There are more than 10 nodes in the system",
        ],
        correct: 2,
        explanation:
          "BFT is needed when nodes may behave arbitrarily incorrectly or maliciously — for example, in blockchain networks where some nodes may be controlled by attackers.",
      },
      {
        id: 18,
        question:
          "Bitcoin's blockchain uses Byzantine Fault Tolerance primarily to:",
        options: [
          "Improve transaction speed",
          "Prevent double-spending despite malicious nodes",
          "Reduce storage requirements",
          "Eliminate the need for consensus",
        ],
        correct: 1,
        explanation:
          "Bitcoin uses BFT to prevent double-spending — even if some nodes in the network are controlled by attackers, the honest majority can still agree on the correct transaction history.",
      },
      {
        id: 19,
        question: "Heartbeat mechanisms detect failures by:",
        options: [
          "Sending all data to a backup when a failure is detected",
          "Nodes sending periodic 'alive' signals; absence indicates failure",
          "Continuously polling all nodes for their current state",
          "Broadcasting failure messages across the network",
        ],
        correct: 1,
        explanation:
          "Heartbeats are periodic 'alive' signals. If a heartbeat is not received within a timeout, the node is suspected to have failed.",
      },
      {
        id: 20,
        question:
          "A limitation of timeout-based failure detection is:",
        options: [
          "It cannot detect crash failures",
          "It requires all nodes to communicate with all others",
          "A slow response due to network congestion may be misinterpreted as a crash",
          "It only works in synchronous systems",
        ],
        correct: 2,
        explanation:
          "Timeout-based detection is imprecise — a node that is slow due to congestion may be incorrectly marked as failed, causing unnecessary failover.",
      },
      {
        id: 21,
        question: "Gossip protocols for failure detection work by:",
        options: [
          "Sending failure alerts to a central monitor",
          "Each node periodically sharing its view of which nodes are alive with random peers",
          "Broadcasting failure information to all nodes simultaneously",
          "Polling each node individually for its status",
        ],
        correct: 1,
        explanation:
          "Gossip protocols spread failure information in a decentralised way — each node shares its knowledge with a random selection of peers, and information propagates exponentially.",
      },
      {
        id: 22,
        question: "In edge computing, processing occurs:",
        options: [
          "In a centralised cloud data centre",
          "In local gateways or routers",
          "Directly on edge devices such as IoT sensors and cameras",
          "On dedicated fog nodes between edge and cloud",
        ],
        correct: 2,
        explanation:
          "Edge computing processes data directly on edge devices (IoT sensors, cameras, phones, microcontrollers) — closest to the data source for ultra-low latency.",
      },
      {
        id: 23,
        question: "In fog computing, processing occurs:",
        options: [
          "Directly on IoT sensors",
          "In centralised cloud data centres",
          "In local gateways or routers close to the network edge",
          "On the end user's device",
        ],
        correct: 2,
        explanation:
          "Fog computing places computing resources in local gateways or routers — between edge devices and the cloud — for regional coordination.",
      },
      {
        id: 24,
        question:
          "In the edge-fog-cloud hierarchy, which tier handles long-term strategy and storage?",
        options: ["Edge", "Fog", "Cloud", "Gateway"],
        correct: 2,
        explanation:
          "The cloud handles long-term strategy and storage. Edge = immediate local decisions, Fog = regional coordination, Cloud = long-term strategy.",
      },
      {
        id: 25,
        question:
          "Which tier of the edge-fog-cloud hierarchy has the lowest latency?",
        options: ["Cloud", "Fog", "Edge", "All are equal"],
        correct: 2,
        explanation:
          "Edge computing has ultra-low latency because processing happens directly on the device — no data needs to travel across a network.",
      },
      {
        id: 26,
        question:
          "In the smart traffic example from the lecture, which tier detects a pedestrian and triggers an immediate warning?",
        options: ["Cloud", "Fog", "Edge", "Gateway"],
        correct: 2,
        explanation:
          "Edge — a traffic sensor (edge device) detects a pedestrian and immediately triggers a flashing warning. This requires ultra-low latency that only edge processing can provide.",
      },
    ],

    flashcards: [
      {
        front: "What is fault tolerance?",
        back: "The system's ability to continue operating correctly despite failures. Not about eliminating failures — about handling them efficiently.",
      },
      {
        front: "What is a crash failure?",
        back: "A node completely stops responding and produces no further output. Example: a database server crashing mid-transaction due to power failure.",
      },
      {
        front: "What is an omission failure?",
        back: "Messages are lost or dropped in transmission. Example: network congestion causing a lost request to an API.",
      },
      {
        front: "What is a timing failure?",
        back: "A system responds too late or too early — outside expected time bounds. Example: a banking system failing to process transactions in real time.",
      },
      {
        front: "What is a Byzantine failure?",
        back: "The most severe failure — a node behaves incorrectly or maliciously, sending false or inconsistent data. Example: a hacked blockchain node broadcasting fake transactions.",
      },
      {
        front: "What is a network partition?",
        back: "Some nodes become isolated from others due to network issues. Example: a cloud region disconnecting from a global system.",
      },
      {
        front: "What is the Primary-Backup replication model?",
        back: "One primary node handles all requests; backups are kept in sync. If the primary fails, a backup takes over. Also called passive replication.",
      },
      {
        front: "What is quorum-based replication?",
        back: "A majority of nodes (a quorum) must agree before an update is committed. Ensures consistency even if some nodes fail. Example: in a 5-node system, 3 must agree.",
      },
      {
        front: "Active vs passive replication?",
        back: "Active: all nodes run in parallel, process every request — no failover delay. Passive: one primary, others are backups — brief unavailability during failover.",
      },
      {
        front: "What is checkpointing?",
        back: "Saving the system's state periodically so it can be restored after a failure. A checkpoint is a consistent snapshot of the system at a point in time.",
      },
      {
        front: "What is rollback recovery?",
        back: "Restoring system state from the last checkpoint after a failure, then replaying operations from that point.",
      },
      {
        front: "What is message logging?",
        back: "Storing records of messages sent/received so they can be replayed after a crash — allows recovery of work done since the last checkpoint.",
      },
      {
        front: "What are self-healing systems?",
        back: "Systems that use ML to monitor key variables, predict failures before they occur, and resolve issues proactively rather than reactively.",
      },
      {
        front: "What is the consensus problem?",
        back: "How do distributed nodes agree on a single value, even when some nodes fail? Required for maintaining consistency across replicas.",
      },
      {
        front: "What is Paxos?",
        back: "Consensus algorithm by Leslie Lamport (1998). Ensures agreement in unreliable networks. Handles crash failures but NOT Byzantine failures. Correct but complex.",
      },
      {
        front: "What is Raft?",
        back: "Consensus algorithm by Ongaro & Ousterhout (2013). Designed to be more understandable than Paxos. Uses leader election + log replication. Used in Kubernetes. NOT Byzantine fault tolerant.",
      },
      {
        front: "What do Paxos and Raft have in common?",
        back: "Both handle crash failures (nodes stopping) but neither handles Byzantine failures (nodes acting maliciously). Both require a majority of nodes to function.",
      },
      {
        front: "What is Byzantine Fault Tolerance (BFT)?",
        back: "Consensus algorithm (Liskov & Castro, 1999) that handles nodes behaving maliciously or arbitrarily. Requires 3f+1 nodes to tolerate f Byzantine failures. Used in blockchains.",
      },
      {
        front: "Why does Bitcoin use BFT?",
        back: "To prevent double-spending — even if some nodes are controlled by attackers, the honest majority can still agree on the correct transaction history.",
      },
      {
        front: "How many nodes does BFT require to tolerate f Byzantine failures?",
        back: "3f + 1 nodes minimum. To tolerate 1 Byzantine failure: 4 nodes needed. More expensive than crash-fault-tolerant algorithms (which need only 2f+1).",
      },
      {
        front: "What are heartbeat mechanisms?",
        back: "Nodes send periodic 'alive' signals to other nodes or monitors. If a heartbeat is not received within a timeout, the node is suspected failed.",
      },
      {
        front: "What is the limitation of timeout-based failure detection?",
        back: "A slow response due to network congestion may be misinterpreted as a crash — leading to false positives and unnecessary failover.",
      },
      {
        front: "How do gossip protocols detect failures?",
        back: "Each node periodically shares its view of which nodes are alive/dead with random peers. Information spreads exponentially — decentralised and scalable.",
      },
      {
        front: "What is edge computing?",
        back: "Processing directly on edge devices (IoT sensors, cameras, phones). Ultra-low latency, immediate reactions, no round-trip to network. Use cases: autonomous vehicles, robotics.",
      },
      {
        front: "What is fog computing?",
        back: "Computing in local gateways/routers between edge and cloud. Collects data from multiple sensors, performs localised analytics, reduces cloud load. Use cases: smart cities, industrial networks.",
      },
      {
        front: "Edge vs fog: key difference?",
        back: "Edge: directly on the device — ultra-low latency, limited scale. Fog: in a local network layer — very low latency, higher scale, handles coordination across multiple edge devices.",
      },
      {
        front: "What are the three tiers in the edge-fog-cloud hierarchy?",
        back: "Edge → immediate local decisions. Fog → regional coordination. Cloud → long-term strategy and storage.",
      },
      {
        front: "Smart traffic workflow across tiers?",
        back: "Edge: camera detects heavy traffic → Fog: node adjusts all junction timings in the district → Cloud: summaries stored for long-term planning.",
      },
      {
        front: "Amazon EC2 Auto-Scaling as fault tolerance?",
        back: "Uses timeout-based failure detection — detects failing servers and automatically launches replacements. An example of self-stabilization.",
      },
      {
        front: "What is self-stabilization?",
        back: "A distributed system's ability to recover from any transient fault or incorrect state and return to a correct state without external intervention.",
      },
    ],

    shortAnswers: [
      {
        id: 1,
        question:
          "Define fault tolerance and explain why it is necessary in distributed systems.",
        marks: 3,
        markingGuide: [
          "Fault tolerance: the system's ability to continue operating correctly despite failures",
          "Necessary because distributed systems consist of multiple nodes and networks where failures (hardware, software, network) are inevitable",
          "Goal is not to prevent every failure but to ensure the system keeps working when failures occur",
        ],
        hint: "Think about what makes distributed systems inherently more prone to failure than single machines.",
      },
      {
        id: 2,
        question:
          "Describe the five types of failures in distributed systems and give a real-world example of each.",
        marks: 5,
        markingGuide: [
          "Crash: node completely stops — database server crashing mid-transaction",
          "Omission: messages lost/dropped — network congestion causing lost API request",
          "Timing: responds too late/early — banking system missing real-time transaction window",
          "Byzantine: node behaves maliciously/incorrectly — hacked blockchain node broadcasting fake transactions",
          "Network partition: nodes become isolated — cloud region disconnecting from global system",
        ],
        hint: "For each: what kind of 'wrong' behaviour is it? Is the node silent, slow, wrong, or unreachable?",
      },
      {
        id: 3,
        question:
          "Compare active and passive replication. When would you choose each?",
        marks: 4,
        markingGuide: [
          "Active: all nodes run in parallel and process every request — no failover delay, higher resource usage",
          "Passive: one primary node, others are backups — brief unavailability during failover, more resource efficient",
          "Choose active when zero downtime is critical (e.g. safety systems)",
          "Choose passive when resource efficiency matters more than instantaneous failover (e.g. Google Drive, Dropbox)",
        ],
        hint: "Consider what happens at the moment of failure in each approach.",
      },
      {
        id: 4,
        question:
          "Explain checkpointing, rollback recovery, and message logging. How do they work together?",
        marks: 4,
        markingGuide: [
          "Checkpointing: saves system state periodically — a consistent snapshot",
          "Rollback recovery: restores system to last checkpoint after failure",
          "Message logging: records all messages so work done since last checkpoint can be replayed",
          "Together: checkpoint provides the starting point; message log fills in everything from checkpoint to the point of failure",
        ],
        hint: "What does checkpointing give you on its own? What does message logging add?",
      },
      {
        id: 5,
        question:
          "Compare Paxos and Raft. What failure types do they handle, and what is their key difference?",
        marks: 4,
        markingGuide: [
          "Both handle crash failures but NOT Byzantine failures",
          "Paxos: Leslie Lamport (1998) — correct but notoriously complex; leader-based proposer",
          "Raft: Ongaro & Ousterhout (2013) — same guarantees as Paxos but designed for understandability; explicit leader election + log replication",
          "Raft is used in Kubernetes for leader election; Paxos used in various distributed databases",
        ],
        hint: "What problem was Raft designed to solve that Paxos had?",
      },
      {
        id: 6,
        question:
          "Why is Byzantine Fault Tolerance necessary for blockchain systems? How does it differ from Paxos/Raft?",
        marks: 4,
        markingGuide: [
          "Blockchain involves untrusted nodes that may be controlled by attackers — crash-fault-tolerant algorithms assume nodes fail silently, not maliciously",
          "BFT handles nodes sending false or inconsistent data to different peers",
          "Bitcoin uses BFT to prevent double-spending even if some nodes are dishonest",
          "BFT requires 3f+1 nodes (vs 2f+1 for crash tolerance) — more expensive but necessary for open, adversarial networks",
        ],
        hint: "What does a dishonest node do that a crashed node does not?",
      },
      {
        id: 7,
        question:
          "Describe three failure detection mechanisms used in distributed systems. What is a key limitation of timeout-based detection?",
        marks: 4,
        markingGuide: [
          "Heartbeats: periodic 'alive' signals — absence within timeout indicates failure",
          "Timeout-based detection: mark node as failed if no response within time limit",
          "Gossip protocols: nodes share failure info with random peers — propagates exponentially",
          "Limitation of timeout: network congestion can cause a slow response to be misinterpreted as a crash (false positive)",
        ],
        hint: "Think about a scenario where a node is alive but slow — how does each mechanism react?",
      },
      {
        id: 8,
        question:
          "Explain the difference between edge and fog computing. Give one example of a task suited to each.",
        marks: 4,
        markingGuide: [
          "Edge: processing directly on devices (sensors, cameras) — ultra-low latency, device-level",
          "Fog: processing in local gateways/routers between edge and cloud — regional coordination, very low latency",
          "Edge example: traffic sensor immediately triggering a pedestrian warning",
          "Fog example: fog node monitoring all intersections in a district and adjusting traffic light timings",
        ],
        hint: "The key distinction is where the processing happens and what scale of problem it solves.",
      },
      {
        id: 9,
        question:
          "Describe the edge-fog-cloud hierarchy using the smart traffic system example from the lecture.",
        marks: 3,
        markingGuide: [
          "Edge: roadside camera detects heavy traffic — processes locally and sends 'traffic density high' signal",
          "Fog: nearby fog node receives data from all junctions in the district, analyses congestion patterns, adjusts light cycles",
          "Cloud: fog node sends summaries to cloud for long-term planning and storage",
        ],
        hint: "Trace the data from the moment a camera detects traffic all the way to long-term planning.",
      },
      {
        id: 10,
        question:
          "A distributed e-commerce system must handle node failures without data loss and ensure all replicas agree on the order of transactions. Identify two fault tolerance techniques it should use and justify each.",
        marks: 4,
        markingGuide: [
          "Technique 1: Checkpointing + rollback recovery — saves transaction state periodically; if a node fails mid-transaction, it can restore from the last checkpoint",
          "Technique 2: Consensus algorithm (Paxos/Raft) — ensures all replicas agree on the order of committed transactions before confirming to the user",
          "Both justified with reference to the specific requirements (no data loss + replica agreement)",
          "Could also mention quorum-based replication for write consistency",
        ],
        hint: "Two separate problems: recovering from failure vs agreeing on state.",
      },
      {
        id: 11,
        question:
          "A distributed IoT system for a smart factory has sensors producing real-time safety alerts, a local gateway, and a cloud backend. A sensor detects a dangerous temperature spike. Explain how edge, fog, and cloud computing should each respond, and why this division of responsibility is appropriate.",
        marks: 5,
        markingGuide: [
          "Edge: sensor detects temperature spike and immediately triggers safety shutdown/alert — ultra-low latency, cannot wait for network round-trip",
          "Fog: local gateway aggregates temperature readings from all sensors in the area, identifies whether the spike is localised or widespread, adjusts connected systems accordingly",
          "Cloud: receives summary data for analysis, long-term trend monitoring, and compliance reporting",
          "Division appropriate because safety-critical actions need millisecond response (edge only), regional coordination benefits from more compute (fog), and long-term analysis needs global scale (cloud)",
          "Sending everything to cloud would introduce unacceptable latency for a safety-critical alert",
        ],
        hint: "For each tier: what decision must it make, how fast does it need to make it, and what data does it need?",
      },
    ],
  },
};

export const moduleInfo = {
  name: "Distributed Systems",
  code: "Y3",
  totalWeeks: 7,
};

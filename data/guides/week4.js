export const week4Guide = {
  intro:
    "This guide covers all the Week 4 material: the lecture on Distributed Shared Memory (DSM) — including the DSM abstraction, architecture models (page-based, object-based, shared variable, library-based), consistency models (strict, sequential, causal, eventual, weak), cache coherence, NUMA, and false sharing — and the seminar which applies these models to real-world scenarios.",

  sections: [
    // ===== SECTION 1 =====
    {
      title: "What is Distributed Shared Memory?",
      subtitle: "The core abstraction and why it exists",
      blocks: [
        {
          type: "definition",
          term: "Distributed Shared Memory (DSM)",
          content:
            "An abstraction used for sharing data between computers that do not share physical memory. DSM allows multiple computers in a distributed network to share memory as if it were a single, unified address space — enabling processes on different machines to read and write to a shared memory space transparently, as if running on a single machine.",
        },
        {
          type: "text",
          content:
            "In a traditional distributed system, processes communicate by explicitly passing messages. DSM hides this complexity: nodes see a single logical address space while the system handles all the inter-node communication behind the scenes.",
        },
        {
          type: "keypoint",
          content:
            "DSM does not mean there is physically shared memory — the physical memory is still distributed. DSM is an abstraction that makes it appear shared to the programmer.",
        },
        {
          type: "list",
          title: "Real-world examples of DSM in practice:",
          items: [
            "Cloud storage (e.g. Google Drive) — collaborative edits appear consistent across all devices",
            "Big Data and AI — distributing AI models across compute nodes",
            "Multiplayer gaming — synchronising shared world states across platforms",
            "Scientific computing — sharing large datasets across analytics clusters",
          ],
        },
      ],
    },

    // ===== SECTION 2 =====
    {
      title: "Why Use DSM?",
      subtitle: "The motivations and benefits",
      blocks: [
        {
          type: "list",
          title: "Three key reasons to use DSM:",
          items: [
            "Simplifies Programming — eliminates the programmer's need to manage explicit message passing when writing distributed applications",
            "Improves Resource Sharing — allows sharing large datasets without duplicating memory on every node",
            "Reduces Communication Overhead — reading/writing shared memory replaces message-passing requests",
          ],
        },
        {
          type: "text",
          content:
            "DSM also provides additional advantages over message passing: no need for marshalling/unmarshalling of data, pointers remain valid, and synchronisation can use familiar primitives (locks, barriers) instead of custom protocols.",
        },
        {
          type: "keypoint",
          content:
            "The key aim is to allow programmers to write distributed applications using familiar shared-memory programming models, without worrying about network communication.",
        },
      ],
    },

    // ===== SECTION 3 =====
    {
      title: "DSM Key Features",
      subtitle: "Transparency, scalability, consistency, and synchronisation",
      blocks: [
        {
          type: "definition",
          term: "Transparency",
          content:
            "Users and programmers do not need to know that the memory is physically distributed. Access to remote memory looks identical to local memory access.",
        },
        {
          type: "definition",
          term: "Scalability",
          content:
            "More nodes can be added to the system without fundamentally affecting the programming model. The shared address space expands as nodes are added.",
        },
        {
          type: "definition",
          term: "Consistency Control",
          content:
            "The key challenge in DSM — ensuring all nodes see updated memory values correctly. Different consistency models offer different trade-offs between correctness and performance.",
        },
        {
          type: "definition",
          term: "Synchronisation",
          content:
            "Uses locks, semaphores, or barriers to prevent conflicts when multiple processes access the same shared memory region simultaneously.",
        },
        {
          type: "keypoint",
          content:
            "Consistency control is marked as the key challenge in DSM — maintaining a coherent view of shared memory across distributed nodes is what makes DSM technically difficult.",
        },
      ],
    },

    // ===== SECTION 4 =====
    {
      title: "Centralised vs Distributed DSM",
      subtitle: "Two architectural approaches to managing shared memory",
      blocks: [
        {
          type: "comparison",
          leftTitle: "Centralised DSM",
          rightTitle: "Distributed DSM",
          leftItems: [
            "A single server manages all shared memory",
            "All data access goes via the central server",
            "Data is all in one place",
            "Pro: Simple to manage, easier consistency control",
            "Con: Single point of failure, potential bottleneck",
          ],
          rightItems: [
            "Memory is spread across multiple nodes but appears as one",
            "Each node manages a portion of the shared address space",
            "Pro: No single bottleneck, better fault tolerance",
            "Con: Harder to manage consistency across nodes",
            "Con: More complex coordination protocols required",
          ],
        },
        {
          type: "keypoint",
          content:
            "The centralised model mirrors the centralised mutual exclusion pattern from Week 3 — simple but fragile. Distributed DSM avoids the single point of failure at the cost of consistency complexity.",
        },
      ],
    },

    // ===== SECTION 5 =====
    {
      title: "DSM Models Overview",
      subtitle: "Four ways to structure shared memory",
      blocks: [
        {
          type: "text",
          content:
            "There are four main DSM models, each differing in the granularity of what is shared and how consistency is managed:",
        },
        {
          type: "list",
          title: "The four DSM models:",
          items: [
            "Page-based — shares memory at the granularity of pages (like virtual memory), efficient for large datasets but high overhead from page faults. Examples: IVY, MUNIN, Clouds.",
            "Object-based — shares memory at the granularity of language-level objects, with access controlled through method interfaces. Examples: Java RMI, CORBA.",
            "Shared Variable — shares only specific annotated variables across processes; ideal for small amounts of shared data but not scalable.",
            "Library-based — sharing implemented by communication between instances of the language at runtime via library calls inserted by a compiler. Examples: Orca, Linda, OpenMP, MPI.",
          ],
        },
        {
          type: "keypoint",
          content:
            "DSM models can also be used in a hybrid approach — a real system might use page-based DSM for large datasets and object-based DSM for fine-grained shared state.",
        },
      ],
    },

    // ===== SECTION 6 =====
    {
      title: "Page-Based DSM",
      subtitle: "Virtual memory extended across the network",
      blocks: [
        {
          type: "text",
          content:
            "Page-based DSM is the simplest and most common software DSM variant. It extends the virtual memory abstraction across the network: memory is divided into fixed-size pages, each mapped to exactly one machine. The first implementation was IVY (Kai Li, 1986), which used software DSM on top of NORMA (No Remote Memory Access) systems.",
        },
        {
          type: "list",
          title: "How page-based DSM works:",
          items: [
            "Pages are mapped across different nodes in the system",
            "A reference to a local page is handled in hardware at full memory speed",
            "An attempt to reference a non-local page causes a hardware page fault",
            "The OS intercepts the fault and sends a message to the remote machine",
            "The remote machine locates the requested page and sends it over the network",
            "The faulting instruction is restarted and completes",
          ],
        },
        {
          type: "comparison",
          leftTitle: "Pros",
          rightTitle: "Cons",
          leftItems: [
            "Efficient for large datasets",
            "Transparent to the programmer",
            "Works with existing OS virtual memory infrastructure",
          ],
          rightItems: [
            "High overhead — entire pages sent back and forth",
            "Increased complexity for memory synchronisation",
            "Susceptible to false sharing",
            "Performance degrades with frequent remote accesses",
          ],
        },
        {
          type: "keypoint",
          content:
            "The main challenge for page-based DSM is minimising network traffic and reducing the latency between a memory request and when it is satisfied.",
        },
      ],
    },

    // ===== SECTION 7 =====
    {
      title: "False Sharing",
      subtitle: "A hidden performance problem in page-based DSM",
      blocks: [
        {
          type: "definition",
          term: "False Sharing",
          content:
            "A performance problem where two processes repeatedly transfer a page between them, even though they are accessing different variables that happen to reside on the same page. The processes are not actually sharing data — the 'sharing' is an artefact of page granularity.",
        },
        {
          type: "text",
          content:
            "Example: A page contains two unrelated shared variables A and B. Processor 1 reads and writes A heavily; Processor 2 reads and writes B heavily. Since they are on the same page, the page constantly travels back and forth between the two machines — causing heavy network traffic with no real data dependency.",
        },
        {
          type: "keypoint",
          content:
            "The larger the page size, the more likely false sharing will occur, because more unrelated variables will share the same page.",
        },
        {
          type: "list",
          title: "Solutions to false sharing:",
          items: [
            "Use smaller page sizes (reduces false sharing but increases per-page overhead)",
            "Use object-based or variable-based DSM (finer granularity, access only what is needed)",
            "Restructure data layout so related variables are on the same page and unrelated variables are on different pages",
          ],
        },
      ],
    },

    // ===== SECTION 8 =====
    {
      title: "Object-Based DSM",
      subtitle: "Finer-grained sharing via language objects",
      blocks: [
        {
          type: "text",
          content:
            "In object-based DSM, memory is divided into user-defined objects rather than pages. Objects are language-level constructs stored on different nodes; processes request objects as needed. Interaction is limited to the object's interface (methods), providing encapsulation and more granular access control. Only the object is transferred, not a whole page.",
        },
        {
          type: "comparison",
          leftTitle: "Pros",
          rightTitle: "Cons",
          leftItems: [
            "More efficient than page-based — reduces unnecessary data transfers",
            "More access control through object interfaces",
            "Reduces false sharing (only the object is transferred)",
          ],
          rightItems: [
            "Managing consistency can be complex",
            "Requires advanced synchronisation mechanisms",
            "Using Java RMI can reduce performance due to serialisation overhead",
          ],
        },
        {
          type: "keypoint",
          content:
            "Examples: Java RMI and CORBA — programs share data by Remote Method Invocations (RMI), encapsulating data and methods together. The system ensures only one copy of an object is updated at a time.",
        },
      ],
    },

    // ===== SECTION 9 =====
    {
      title: "Shared Variable and Library-Based DSM",
      subtitle: "Fine-grained and runtime approaches",
      blocks: [
        {
          type: "definition",
          term: "Shared Variable DSM",
          content:
            "Only specific variables or data structures needed by more than one process are shared. The programmer annotates variables as shared. Three types of variables exist: ordinary, shared, and synchronisation. Shared variables can be annotated as: read-only, migratory (release consistent), write-shared, or conventional (sequentially consistent).",
        },
        {
          type: "comparison",
          leftTitle: "Shared Variable — Pros",
          rightTitle: "Shared Variable — Cons",
          leftItems: [
            "Simple to program",
            "Efficient for small amounts of shared data",
            "Reads can be done locally (no network traffic)",
          ],
          rightItems: [
            "Not scalable to large systems",
            "Synchronisation becomes complex as shared variables grow",
          ],
        },
        {
          type: "definition",
          term: "Library-Based DSM",
          content:
            "Sharing is implemented by communication between instances of the language runtime. Processes make library calls (inserted by a compiler) when they access DSM data items. The libraries access local data and communicate as necessary to maintain consistency. Examples: Orca, Linda, OpenMP (shared variable), MPI (page-based).",
        },
        {
          type: "comparison",
          leftTitle: "Library-Based — Pros",
          rightTitle: "Library-Based — Cons",
          leftItems: ["Scalable", "Flexible — works across different systems"],
          rightItems: [
            "Errors occur if code fails at runtime",
            "Dependent on correct compiler instrumentation",
          ],
        },
      ],
    },

    // ===== SECTION 10 =====
    {
      title: "Consistency Models in DSM",
      subtitle: "How updates to shared memory are seen across processes",
      blocks: [
        {
          type: "text",
          content:
            "A consistency model defines how updates to shared memory are seen by different processes. The goal is to ensure all nodes have a consistent view of shared data while balancing performance and synchronisation overhead. Stronger consistency = higher overhead; weaker consistency = better performance but potential for stale reads.",
        },
        {
          type: "definition",
          term: "Strict Consistency",
          content:
            "All processes see memory updates immediately. Every read returns the value of the most recent write according to real-time global clock order. The strongest level of consistency — guarantees correctness in critical applications. Cons: Extremely high overhead; requires globally synchronised clocks; impractical in real wide-area distributed systems.",
        },
        {
          type: "definition",
          term: "Sequential Consistency",
          content:
            "All processes see operations in the same logical order (does not require real-time ordering). Correct order of execution is guaranteed. Easier to implement than strict (not reliant on physical time). Cons: Reliant on synchronisation; expensive for performance-sensitive applications.",
        },
        {
          type: "definition",
          term: "Causal Consistency",
          content:
            "Related (causally dependent) writes must be seen in order by all processes. Independent writes may appear in any order. If A → B (A happened before B), then all processes must see A before B. Balances ordering and efficiency. Cons: Complex due to tracking causal dependencies; does not guarantee a single order for all operations.",
        },
        {
          type: "definition",
          term: "Eventual Consistency",
          content:
            "If no new updates occur, all processes will eventually see the same data. Temporary inconsistencies are allowed — over time all nodes converge to the correct state. Best for highly scalable distributed systems. Cons: Temporary inconsistencies; no ordering guarantees.",
        },
        {
          type: "definition",
          term: "Weak Consistency",
          content:
            "The system does not guarantee immediate consistency after each write. Consistency is enforced only at explicit synchronisation points. High performance — reduces synchronisation overhead. Cons: Data may be out of date between sync points; difficult to predict data correctness.",
        },
      ],
    },

    // ===== SECTION 11 =====
    {
      title: "Comparing Consistency Models",
      subtitle: "Trade-offs and real-world application",
      blocks: [
        {
          type: "list",
          title: "Summary of trade-offs (strongest → weakest):",
          items: [
            "Strict: strongest guarantees, highest overhead, impractical in real distributed systems",
            "Sequential: all processes see same order, expensive synchronisation, used for shared dashboards",
            "Causal: causally related operations ordered, concurrent operations may diverge, good for collaborative editing",
            "Eventual: highly scalable, temporary inconsistencies tolerated — preferred by AWS S3, Google Drive, Dropbox, Azure",
            "Weak: fastest, only consistent at synchronisation points, used for analytics workloads",
          ],
        },
        {
          type: "keypoint",
          content:
            "The preferred consistency model for global cloud storage systems (AWS S3, Google Drive, Dropbox, Azure) is eventual consistency — it provides high scalability, availability, and performance while tolerating temporary inconsistencies.",
        },
        {
          type: "list",
          title: "Matching DSM models to consistency models:",
          items: [
            "Page-based DSM → Eventual or Weak consistency (large pages cause false sharing; analytics workloads tolerate stale data)",
            "Library-based DSM → Sequential consistency (fine-grained library control makes ordering feasible)",
            "Object-based DSM → Causal consistency (edits to shared objects often have causal relationships)",
            "Variable-based DSM → Eventual for non-critical metadata; Sequential for configuration values",
          ],
        },
      ],
    },

    // ===== SECTION 12 =====
    {
      title: "Cache Coherence in DSM",
      subtitle: "Write-invalidate vs write-update",
      blocks: [
        {
          type: "text",
          content:
            "For performance, DSM systems cache data locally on nodes. This introduces a cache coherence problem: when one node updates a cached copy of a page or block, other nodes' copies may be stale. Two strategies exist to handle this:",
        },
        {
          type: "definition",
          term: "Write-Invalidate",
          content:
            "When a node writes to a shared block, it broadcasts an invalidation message to all other nodes holding a copy. They discard (invalidate) their copies. Future reads by those nodes will trigger a fetch of the updated copy. More efficient when writes are frequent, as it avoids broadcasting the actual data.",
        },
        {
          type: "definition",
          term: "Write-Update",
          content:
            "When a node writes to a shared block, it broadcasts the new value to all other nodes holding a copy. They update their cached copies immediately. Reduces future read latency but consumes more network bandwidth per write.",
        },
        {
          type: "keypoint",
          content:
            "Write-invalidate is generally more efficient in DSM systems because it avoids consuming bandwidth to push updates that may never be read again. Only the next read pays the cost of fetching.",
        },
        {
          type: "text",
          content:
            "In page-based DSM, the owner concept is important: the owner is the processor that most recently wrote the page. To read, get the page from the owner (put owner in read-only mode). To write, acquire ownership from the current owner and invalidate all other copies.",
        },
      ],
    },

    // ===== SECTION 13 =====
    {
      title: "NUMA and Hardware-Based DSM",
      subtitle: "Non-Uniform Memory Access and hardware approaches",
      blocks: [
        {
          type: "definition",
          term: "NUMA (Non-Uniform Memory Access)",
          content:
            "A multiprocessor architecture where all CPUs share a single virtual address space, but remote memory accesses are significantly slower than local accesses. Typically, the remote/local performance ratio is 10:1. Unlike hardware-cached shared memory (UMA), NUMA makes no attempt to hide the performance difference — but pages can be migrated or replicated to local memory to improve performance.",
        },
        {
          type: "list",
          title: "NUMA page management:",
          items: [
            "Read-only pages can be replicated on multiple nodes for fast local access",
            "Read-write pages are migrated to the node that uses them most",
            "A page scanner daemon monitors access patterns",
            "Pages that migrate too often are frozen in place to prevent thrashing",
            "Pages accessed much more often by another cluster are invalidated locally",
          ],
        },
        {
          type: "keypoint",
          content:
            "NUMA is an alternative to full hardware caching (which is complex and expensive in large multi-computers). It accepts performance differences between local and remote access but allows programmers to use a single address space.",
        },
        {
          type: "text",
          content:
            "Hardware-based DSM approaches (e.g. DASH, KSR) use specialised hardware to handle load/store instructions to DSM addresses and communicate with remote memory modules. Page-based software approaches (IVY, MUNIN, Clouds) implement DSM as a region of virtual memory at the same address range in every participating process.",
        },
      ],
    },

    // ===== SECTION 14 =====
    {
      title: "DSM Challenges, Future Trends & Summary",
      subtitle: "What makes DSM hard and where it's heading",
      blocks: [
        {
          type: "list",
          title: "Key challenges in DSM:",
          items: [
            "Network delays — remote memory access latency is orders of magnitude higher than local access",
            "False sharing — page-level granularity causes unnecessary page transfers between nodes",
            "Consistency overhead — stronger consistency models require more synchronisation traffic",
            "Caching and coherence — keeping local caches consistent adds protocol complexity",
            "Persistence — what happens to shared memory when processes or nodes fail",
          ],
        },
        {
          type: "list",
          title: "Benefits of DSM over message passing:",
          items: [
            "No marshalling/unmarshalling of data — pointers remain valid across nodes",
            "Familiar shared-memory programming model — locks and barriers instead of custom protocols",
            "Supports processes with non-overlapping lifetimes",
            "Enables sharing of large datasets without per-node duplication",
          ],
        },
        {
          type: "list",
          title: "Future trends in DSM:",
          items: [
            "AI optimisation — predicting memory access patterns to pre-fetch data",
            "Edge and fog computing — local memory sharing among nearby devices reduces dependency on central cloud",
            "Decentralised DSM using blockchain — tamper-proof, consistent, and secure memory sharing",
            "Faster network technologies (increased bandwidth and lower latency) making DSM more practical",
          ],
        },
        {
          type: "keypoint",
          content:
            "DSM is a powerful abstraction that simplifies distributed programming, but its effectiveness depends heavily on choosing the right model (page/object/variable/library) and the right consistency model for each use case.",
        },
      ],
    },
  ],
};

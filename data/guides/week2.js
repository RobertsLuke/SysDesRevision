export const week2Guide = {
  intro:
    "This guide covers all the Week 2 material: the lecture on Communication Models in Distributed Systems, the seminar on synchronous vs asynchronous communication and practical examples, and the Question of the Week on choosing communication models for a cloud-based LMS.",

  sections: [
    // ===== SECTION 1 =====
    {
      title: "What Are Communication Models?",
      subtitle: "How processes and nodes interact in a distributed system",
      blocks: [
        {
          type: "text",
          content:
            "In distributed systems, communication models define how different processes and nodes interact with each other. These models influence system design, efficiency, and reliability.",
        },
        {
          type: "list",
          title: "The seven key communication models covered this week:",
          items: [
            "Message Passing",
            "Shared Memory Model",
            "Remote Procedure Call (RPC) Model",
            "Publish-Subscribe Model (Event-Driven Communication)",
            "Data Streaming Model",
            "Peer-to-Peer (P2P) Communication Model",
            "Tuple Space Model (Coordination-Based Communication)",
          ],
        },
        {
          type: "keypoint",
          content:
            "Each communication model has its advantages and trade-offs, depending on the system architecture, scalability needs, and latency requirements. Choosing the right model is a key design decision.",
        },
      ],
    },

    // ===== SECTION 2 =====
    {
      title: "Message Passing",
      subtitle: "Sending and receiving messages over a network",
      blocks: [
        {
          type: "definition",
          term: "Message Passing",
          content:
            "Processes communicate by sending and receiving messages over a network. This model is commonly used in distributed computing for inter-process communication.",
        },
        {
          type: "list",
          title: "Characteristics:",
          items: [
            "Asynchronous or Synchronous message exchange",
            "Requires message serialization and deserialization",
            "Can suffer from network delays and failures",
          ],
        },
        {
          type: "list",
          title: "Examples:",
          items: [
            "Sockets (TCP, UDP)",
            "Remote Procedure Call (RPC)",
            "Message Queue Systems (RabbitMQ, Kafka)",
            "REST APIs, gRPC",
          ],
        },
        {
          type: "comparison",
          items: [
            {
              label: "Pros",
              content:
                "Works well over a network. Flexible, scalable, and widely used.",
            },
            {
              label: "Cons",
              content:
                "Needs explicit message handling. Can be inefficient for frequent communications.",
            },
          ],
        },
      ],
    },

    // ===== SECTION 3 =====
    {
      title: "Shared Memory Model",
      subtitle: "Reading and writing to a shared memory space",
      blocks: [
        {
          type: "definition",
          term: "Shared Memory Model",
          content:
            "Processes communicate by reading and writing to a shared memory space. This model is more common in multi-threaded systems but can be used in distributed systems with Distributed Shared Memory (DSM).",
        },
        {
          type: "list",
          title: "Characteristics:",
          items: [
            "No need for message exchange — processes read/write directly to shared space",
            "Provides a global memory abstraction across machines",
            "Requires synchronization mechanisms (locks, semaphores) to prevent conflicts",
          ],
        },
        {
          type: "list",
          title: "Examples:",
          items: [
            "Distributed Shared Memory (DSM)",
            "Distributed File Systems (Google File System, Hadoop HDFS)",
          ],
        },
        {
          type: "keypoint",
          content:
            "The shared memory model abstracts away the network — processes think they are reading/writing to local memory, but the data may actually reside on remote machines. This is powerful but requires careful synchronization.",
        },
      ],
    },

    // ===== SECTION 4 =====
    {
      title: "Remote Procedure Call (RPC) Model",
      subtitle: "Calling remote functions as if they were local",
      blocks: [
        {
          type: "definition",
          term: "Remote Procedure Call (RPC)",
          content:
            "Allows a process to invoke a function on a remote system as if it were a local function call. It abstracts network communication details from the developer.",
        },
        {
          type: "list",
          title: "Characteristics:",
          items: [
            "Client sends request → Server processes request → Server sends response",
            "Can be blocking (synchronous) or non-blocking (asynchronous)",
            "Requires serialization (e.g., Protocol Buffers, JSON)",
          ],
        },
        {
          type: "list",
          title: "Examples:",
          items: [
            "gRPC (Google Remote Procedure Call)",
            "Apache Thrift",
            "Java RMI (Remote Method Invocation)",
          ],
        },
        {
          type: "comparison",
          items: [
            {
              label: "Advantages",
              content:
                "Abstracts network details — makes remote calls look local. Simplifies distributed programming.",
            },
            {
              label: "Disadvantages",
              content:
                "Can introduce delays due to network latency. Requires serialization and deserialization overhead.",
            },
          ],
        },
      ],
    },

    // ===== SECTION 5 =====
    {
      title: "Publish-Subscribe Model",
      subtitle: "Event-driven, decoupled communication",
      blocks: [
        {
          type: "definition",
          term: "Publish-Subscribe Model",
          content:
            "Processes communicate via event-based messaging, where publishers send messages without knowing who the subscribers are. A message broker sits between them.",
        },
        {
          type: "list",
          title: "Characteristics:",
          items: [
            "Decoupled architecture — no direct connection between sender and receiver",
            "Asynchronous communication — subscribers get updates when available",
            "Used in real-time streaming and event-driven architectures",
          ],
        },
        {
          type: "list",
          title: "Examples:",
          items: [
            "Apache Kafka",
            "MQTT (Message Queuing Telemetry Transport)",
            "Google Cloud Pub/Sub",
          ],
        },
        {
          type: "comparison",
          items: [
            {
              label: "Advantages",
              content:
                "Scalable for large systems. Decoupled architecture means publishers and subscribers can evolve independently.",
            },
            {
              label: "Disadvantages",
              content:
                "Message delivery delays are possible. Requires additional infrastructure (a message broker).",
            },
          ],
        },
        {
          type: "keypoint",
          content:
            "The key difference from message passing is decoupling — in publish-subscribe, the publisher doesn't know or care who receives the message. This makes the system more flexible and scalable.",
        },
      ],
    },

    // ===== SECTION 6 =====
    {
      title: "Data Streaming Model",
      subtitle: "Continuous real-time data flow",
      blocks: [
        {
          type: "definition",
          term: "Data Streaming Model",
          content:
            "Processes continuously send and receive data in real time. This model is ideal for applications that need low-latency data transmission.",
        },
        {
          type: "list",
          title: "Characteristics:",
          items: [
            "Continuous data flow (push model) — data is sent as it becomes available",
            "Suitable for real-time analytics and monitoring",
            "Often used with publish-subscribe systems",
          ],
        },
        {
          type: "list",
          title: "Examples:",
          items: [
            "Apache Kafka",
            "Apache Flink",
            "Spark Streaming",
          ],
        },
      ],
    },

    // ===== SECTION 7 =====
    {
      title: "Peer-to-Peer (P2P) Communication Model",
      subtitle: "No central authority — every node is both client and server",
      blocks: [
        {
          type: "definition",
          term: "Peer-to-Peer (P2P) Model",
          content:
            "All nodes in the system act as both clients and servers, sharing resources and data without a central authority.",
        },
        {
          type: "list",
          title: "Characteristics:",
          items: [
            "Decentralized architecture — no single point of control",
            "Highly scalable but may have consistency issues",
            "Used in blockchain, file sharing, and decentralized applications",
          ],
        },
        {
          type: "list",
          title: "Examples:",
          items: [
            "BitTorrent",
            "Blockchain (Bitcoin, Ethereum)",
            "Skype (older versions used P2P for calls)",
          ],
        },
        {
          type: "comparison",
          items: [
            {
              label: "Advantages",
              content:
                "No single point of failure. Scales well with more nodes joining the network.",
            },
            {
              label: "Disadvantages",
              content:
                "Difficult to maintain consistency across all nodes. Security risks due to lack of central control.",
            },
          ],
        },
      ],
    },

    // ===== SECTION 8 =====
    {
      title: "Tuple Space Model",
      subtitle: "Coordination-based communication via a shared data space",
      blocks: [
        {
          type: "definition",
          term: "Tuple Space Model",
          content:
            "Processes interact through a shared tuple space, where they write, read, and take data tuples instead of direct message exchange. Based on the Linda Coordination Model.",
        },
        {
          type: "list",
          title: "Characteristics:",
          items: [
            "Based on the Linda Coordination Model",
            "Decoupled in time and space — processes don't need to be online simultaneously",
            "Used in distributed coordination and parallel computing",
          ],
        },
        {
          type: "list",
          title: "Examples:",
          items: [
            "JavaSpaces",
            "Apache ZooKeeper",
            "TIBCO Rendezvous",
          ],
        },
        {
          type: "keypoint",
          content:
            "The tuple space model is unique because it decouples processes in both time and space — a producer can write a tuple and disconnect, and a consumer can read it later. This is fundamentally different from message passing where both parties typically need to be available.",
        },
      ],
    },

    // ===== SECTION 9 =====
    {
      title: "Synchronous vs Asynchronous Distributed Systems",
      subtitle: "From the Seminar — two fundamentally different timing models",
      blocks: [
        {
          type: "comparison",
          items: [
            {
              label: "Synchronous DS",
              content:
                "The time to execute each step has known lower and upper bounds. Each message is received within a known bounded time. Each process has a local clock whose drift rate from real time has a known bound.",
            },
            {
              label: "Asynchronous DS",
              content:
                "There are no bounds on: process execution speeds, message transmission delays, or clock drift rates. This is the more realistic model for most internet-based systems.",
            },
          ],
        },
        {
          type: "text",
          content:
            "In synchronous communication, the sender waits for the receiver to process and respond before continuing. This gives simpler coordination but increased latency. In asynchronous communication, the sender proceeds without waiting for an immediate response — this is more efficient but harder to handle failures.",
        },
        {
          type: "keypoint",
          content:
            "Most real-world distributed systems are asynchronous — you cannot guarantee how long a message will take to arrive or how fast a remote process will execute. This is why designing for failure and timeouts is essential.",
        },
      ],
    },

    // ===== SECTION 10 =====
    {
      title: "Why Communication Matters",
      subtitle: "The foundation of everything in a distributed system",
      blocks: [
        {
          type: "text",
          content:
            "Communication is critical in distributed systems for three key reasons — and a fourth is a common trap answer.",
        },
        {
          type: "list",
          title: "Why communication is critical (valid reasons):",
          items: [
            "Data sharing between processes — processes need to exchange data to collaborate",
            "Synchronization and coordination — processes must coordinate their actions to maintain consistency",
            "Fault tolerance and consistency — systems need communication to detect failures and maintain replicated data",
          ],
        },
        {
          type: "keypoint",
          content:
            "'To increase CPU performance' is NOT a valid reason why communication is critical. Communication is about coordination between machines, not about making individual CPUs faster.",
        },
      ],
    },

    // ===== SECTION 11 =====
    {
      title: "Challenges in Distributed Communication",
      subtitle: "What can go wrong and how to address it",
      blocks: [
        {
          type: "table",
          headers: ["Challenge", "Solution"],
          rows: [
            ["Latency — delays in message delivery", "Efficient protocols and caching"],
            ["Fault Tolerance — nodes or links failing", "Replication and retries"],
            ["Security — data interception or tampering", "Encryption and authentication"],
          ],
        },
        {
          type: "keypoint",
          content:
            "When designing a distributed system, you must optimise for latency using efficient protocols, ensure security with encryption and authentication, and design for failure by implementing retries, replication, and fault tolerance.",
        },
      ],
    },

    // ===== SECTION 12 =====
    {
      title: "Communication Models Comparison",
      subtitle: "Choosing the right model for the job",
      blocks: [
        {
          type: "table",
          headers: ["Model", "Key Feature", "Best For"],
          rows: [
            ["Message Passing", "Explicit send/receive", "General inter-process communication"],
            ["Shared Memory", "Global memory abstraction", "Multi-threaded / DSM systems"],
            ["RPC", "Remote calls look local", "Client-server function invocation"],
            ["Publish-Subscribe", "Decoupled, event-driven", "Real-time notifications, large-scale events"],
            ["Data Streaming", "Continuous real-time flow", "Analytics, monitoring, live data"],
            ["P2P", "No central authority", "File sharing, blockchain, decentralised apps"],
            ["Tuple Space", "Time/space decoupled", "Coordination, parallel computing"],
          ],
        },
        {
          type: "keypoint",
          content:
            "Message passing (RPC, message queues) is the most commonly used model. Publish-subscribe and streaming models are popular in event-driven and real-time applications. Real-world systems often combine multiple models.",
        },
      ],
    },

    // ===== SECTION 13 =====
    {
      title: "Real-World Systems Use Multiple Models",
      subtitle: "WhatsApp, Google Drive, and the LMS scenario",
      blocks: [
        {
          type: "text",
          content:
            "Real-world distributed systems rarely use just one communication model. They combine models based on the requirements of each feature.",
        },
        {
          type: "table",
          title: "WhatsApp's Communication Models:",
          headers: ["Feature", "Model Used"],
          rows: [
            ["Text messages", "Message Passing (TCP)"],
            ["Group messages", "Publish-Subscribe"],
            ["Voice/video calls", "P2P Model"],
          ],
        },
        {
          type: "table",
          title: "Google Drive's Communication Models:",
          headers: ["Feature", "Model Used"],
          rows: [
            ["File access and sync", "Client-Server Model"],
            ["File synchronization across devices", "Message Passing"],
            ["Real-time collaboration updates", "Publish-Subscribe"],
            ["Google Docs collaboration", "P2P Model"],
            ["Service-to-service communication", "RPC Model"],
          ],
        },
        {
          type: "keypoint",
          content:
            "When asked to choose a communication model for a scenario, consider the specific requirements of each feature independently. Most systems will need a combination of models.",
        },
      ],
    },

    // ===== SECTION 14 =====
    {
      title: "Question of the Week: Cloud-Based LMS",
      subtitle: "Applying communication models to a real scenario",
      blocks: [
        {
          type: "text",
          content:
            "The Question of the Week asks you to choose communication models for a university cloud-based Learning Management System (LMS) with four features. This is a model answer you should study.",
        },
        {
          type: "definition",
          term: "1. Uploading/Downloading Lecture Materials → Client-Server Model",
          content:
            "The LMS needs centralised cloud storage where students and professors upload/download files. Client devices request files from a server. Uses HTTP(S) REST APIs for file transfers. Example: Google Drive storing lecture PDFs.",
        },
        {
          type: "definition",
          term: "2. Real-Time Notifications → Publish-Subscribe Model",
          content:
            "Students should receive instant updates when a professor posts an assignment. The LMS publishes an event when a new assignment is uploaded, and all subscribed students get notified. Uses Google Cloud Pub/Sub or WebSockets. Example: YouTube notifications for new videos.",
        },
        {
          type: "definition",
          term: "3. Collaborating on Shared Documents → Peer-to-Peer (P2P) Model",
          content:
            "When students work on a shared document, changes should appear instantly. Direct P2P communication is more efficient than constantly requesting updates from a central server. Uses WebRTC or Operational Transformation (OT) algorithms. Example: Google Docs.",
        },
        {
          type: "definition",
          term: "4. Streaming Live Lectures → Message Passing Model",
          content:
            "Live streaming requires continuous data exchange between lecturer and students. The server sends video/audio data to students, while students send questions and responses back. Uses WebRTC, RTP (Real-time Transport Protocol), and MQTT. Example: Zoom, Microsoft Teams.",
        },
        {
          type: "keypoint",
          content:
            "Live lectures often combine multiple models: Client-Server for hosting and distributing the video stream, Publish-Subscribe for notifications when a lecture starts, and Message Passing for real-time chat, reactions, and Q&A.",
        },
      ],
    },
  ],
};

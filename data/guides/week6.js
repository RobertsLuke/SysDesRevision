export const week6Guide = {
  intro:
    "This guide covers all the Week 6 material: the lecture on Mobile and Ubiquitous Computing (volatile systems, discovery services, interoperability, data-oriented programming, sensing, location technologies), and the seminar on Smart Cities and Ubiquitous Computing applications.",

  sections: [
    // ===== SECTION 1 =====
    {
      title: "What Is Ubiquitous Computing?",
      subtitle: "The vision of invisible, everywhere computing",
      blocks: [
        {
          type: "definition",
          term: "Ubiquitous Computing (Pervasive Computing)",
          content:
            "Integrating computing capabilities into everyday objects and environments, making technology seamlessly available and accessible anytime, anywhere, without requiring explicit user interaction. Coined by Mark Weiser in 1988 at Palo Alto Research Centre (PARC). In 1991, Weiser described it as computing 'to be everywhere'.",
        },
        {
          type: "keypoint",
          content:
            "The defining characteristic of ubiquitous computing is invisibility — technology disappears into the background of everyday life. The user should not need to consciously interact with computers; computing becomes as natural as using electricity.",
        },
        {
          type: "text",
          content:
            "Weiser predicted computational devices would multiply in 'form and function' to suit different tasks — computers shrinking back into everyday life. This is a psychological notion: technology becomes embedded so naturally that users stop noticing it.",
        },
      ],
    },

    // ===== SECTION 2 =====
    {
      title: "Key Characteristics of Ubiquitous Computing",
      subtitle: "Four properties that define the paradigm",
      blocks: [
        {
          type: "list",
          title: "Four key characteristics:",
          items: [
            "Mobility — devices and users move freely while maintaining connectivity and functionality",
            "Scalability — the system can handle growing numbers of devices and users",
            "Context-Awareness — systems sense and respond to their environment (location, user identity, activity)",
            "Seamless Integration — technology is embedded in everyday objects without requiring explicit interaction",
          ],
        },
        {
          type: "keypoint",
          content:
            "High power consumption is NOT a characteristic — it is a challenge. Ubiquitous devices are typically low-power, battery-dependent, and energy-constrained.",
        },
        {
          type: "list",
          title: "Examples of ubiquitous computing in practice:",
          items: [
            "Active badge — user enters room, infrared sensor detects badge ID, display responds personally",
            "Wearable computers — nano tech in fabric, smartwatches (Apple Watch, Garmin), smart jewellery, Google Glass, employee microchips (Three Square Market, Wisconsin, 2019)",
            "Smart spaces — environments embedded with sensors, actuators, and computing that respond intelligently to occupants (smart homes, offices, classrooms)",
          ],
        },
      ],
    },

    // ===== SECTION 3 =====
    {
      title: "Device Constraints and Resource Limitations",
      subtitle: "Why energy is the scarcest resource",
      blocks: [
        {
          type: "list",
          title: "Five resource constraints for ubiquitous devices:",
          items: [
            "Computation — limited processing speeds",
            "Memory — limited RAM",
            "Storage — limited capacity",
            "Energy — battery dependent; charging is inconvenient; battery life determines device failure risk",
            "Network bandwidth — limited; wireless connectivity is energy intensive",
          ],
        },
        {
          type: "keypoint",
          content:
            "Energy is the most critical constraint. All other constraints (processing, storage, bandwidth) also increase energy consumption — and energy is the bottleneck. The fundamental design challenge is to create algorithms that execute in reasonable time using minimal resources.",
        },
      ],
    },

    // ===== SECTION 4 =====
    {
      title: "Volatile Systems",
      subtitle: "Why ubiquitous systems are unpredictable by nature",
      blocks: [
        {
          type: "definition",
          term: "Volatile Systems",
          content:
            "Mobile and ubiquitous systems are highly dynamic and unpredictable. They use spontaneous networking (Ad Hoc) and are prone to failure because: devices are power-dependent (can fail at any time), communications suffer from changing network connectivity, and associations of software components are constantly created and destroyed.",
        },
        {
          type: "list",
          title: "Why volatility occurs:",
          items: [
            "Devices are power dependent — they can fail or disconnect at any time",
            "Communications suffer from changing network connectivity and bandwidth",
            "Associations are service-driven — created and destroyed dynamically",
            "Unlike traditional servers which are always on, ubiquitous devices join, leave, fail, and reconnect constantly",
          ],
        },
        {
          type: "keypoint",
          content:
            "'Volatile' means components appear and disappear unpredictably. This is the defining challenge that distinguishes ubiquitous computing from traditional distributed systems.",
        },
      ],
    },

    // ===== SECTION 5 =====
    {
      title: "Sensors, Actuators, Trust & Privacy",
      subtitle: "How devices interact with the physical world",
      blocks: [
        {
          type: "comparison",
          leftTitle: "Sensors",
          rightTitle: "Actuators",
          leftItems: [
            "Measure physical parameters from the environment",
            "Examples: orientation, load, light, sound sensors",
            "Read the world — input from environment",
          ],
          rightItems: [
            "Software-controllable devices that act on the environment",
            "Examples: air conditioning, motors, smart home devices",
            "Change the world — output to environment",
          ],
        },
        {
          type: "text",
          content:
            "Distributed systems are based on trust of sharing. However, devices with sensing capabilities are often distrusted due to privacy concerns:",
        },
        {
          type: "list",
          title: "Privacy concerns with sensing devices:",
          items: [
            "Tracking — location and movement monitoring",
            "Discovery routines — automatic detection of nearby devices and people",
            "Shopping/commercial tracking — monitoring consumer behaviour",
          ],
        },
        {
          type: "keypoint",
          content:
            "The major privacy concern in ubiquitous/smart city environments is excessive data collection and potential surveillance risks. The more sensors embedded in the environment, the more data collected — often without the user's explicit awareness.",
        },
      ],
    },

    // ===== SECTION 6 =====
    {
      title: "The Association Problem",
      subtitle: "How volatile components find and connect to services",
      blocks: [
        {
          type: "text",
          content:
            "Volatile components need to interoperate. Access to the network is essential. Components either associate to services in their smart space and/or provide services elsewhere.",
        },
        {
          type: "comparison",
          leftTitle: "Pre-Configured Associations",
          rightTitle: "Spontaneous Associations",
          leftItems: [
            "Set up in advance before runtime",
            "Example: email client configured to connect to its specific server",
            "Service-driven — relationship known ahead of time",
          ],
          rightItems: [
            "Formed dynamically at runtime",
            "Human-driven: web browser connecting to websites",
            "Data-driven: P2P file-sharing applications",
            "Physically-driven: mobile/ubiquitous systems connecting to nearby services",
          ],
        },
        {
          type: "keypoint",
          content:
            "Spontaneous associations are the norm in ubiquitous computing and the harder problem to solve — the system must discover and connect to services that were not known in advance.",
        },
      ],
    },

    // ===== SECTION 7 =====
    {
      title: "Discovery Services",
      subtitle: "How devices find available services in a smart space",
      blocks: [
        {
          type: "text",
          content:
            "Discovery services provide a mechanism for devices to find available services. Devices and services register/de-register with a discovery server, and service lookups are provided on demand.",
        },
        {
          type: "comparison",
          leftTitle: "Push Model",
          rightTitle: "Pull Model",
          leftItems: [
            "Services advertise themselves via multicast regularly",
            "Clients run queries on cached advertisements",
            "Wasteful of bandwidth (constant advertising)",
          ],
          rightItems: [
            "Clients multicast requests (repeated)",
            "Devices providing those services respond",
            "More efficient, but may need more responses",
          ],
        },
        {
          type: "comparison",
          leftTitle: "Server-Based Discovery",
          rightTitle: "Serverless (Decentralised)",
          leftItems: [
            "Centralised directory of services",
            "Single point of failure risk",
            "Easier to manage centrally",
          ],
          rightItems: [
            "No central directory",
            "Each device maintains its own directory in its cache",
            "More resilient but harder to coordinate",
          ],
        },
        {
          type: "definition",
          term: "Lease Mechanism",
          content:
            "The key mechanism for managing volatile services. A client leases a service for a fixed period of time, must renew the lease for continued use, and the service is automatically released if not renewed. If the client or service disappears, the lease eventually expires — no manual cleanup needed.",
        },
        {
          type: "list",
          title: "Four discovery service challenges:",
          items: [
            "Bandwidth use — push is wasteful; pull needs repeated requests",
            "Management of volatile services — solved via leasing",
            "Scale — more devices = harder to manage",
            "Smart space boundaries — defining where one smart space ends and another begins",
          ],
        },
      ],
    },

    // ===== SECTION 8 =====
    {
      title: "Discovery Service Interface",
      subtitle: "The four methods and Jini as a concrete example",
      blocks: [
        {
          type: "list",
          title: "Four methods in the discovery service interface:",
          items: [
            "register(address, attributes) → lease — register a service at the given address with attributes; a lease is returned",
            "refresh(lease) — refresh/renew the lease returned at registration",
            "deregister(lease) — remove the service record registered under the given lease",
            "query(attributeSpecification) → serviceSet — return a set of registered services matching the given attribute specification",
          ],
        },
        {
          type: "text",
          content:
            "Jini is a concrete example of service discovery. Services register with lookup services by category (e.g. admin, finance). Clients query lookup services by service type. The client then uses the service directly — the lookup service is only used for discovery.",
        },
        {
          type: "list",
          title: "Methods for physical association with smart spaces:",
          items: [
            "Human input to scope discovery — user selects a scope identifier (e.g. room number)",
            "Sensing and physically constrained channels — read a code for the smart space identifier; infrared transmitter propagates the space identifier",
            "Direct association — address sensing, physical correlation, two-button protocol",
          ],
        },
      ],
    },

    // ===== SECTION 9 =====
    {
      title: "Interoperability",
      subtitle: "The N² adaptor problem and its solutions",
      blocks: [
        {
          type: "definition",
          term: "Lost Opportunity Problem",
          content:
            "A device cannot use a service because their interfaces are incompatible. A device and service are in the same smart space but cannot communicate — the opportunity to interact is lost.",
        },
        {
          type: "definition",
          term: "N² Adaptor Problem",
          content:
            "For every N different interfaces, N² adaptors are needed — and these must be determined at runtime. For 10 interfaces, 100 adaptors are needed. This is a scaling nightmare that makes heterogeneous systems impossible to manage at scale.",
        },
        {
          type: "list",
          title: "Solutions to the interoperability problem:",
          items: [
            "Constrain interfaces to a small, universal set — e.g. Unix Pipes (read/write) or Web HTTP (GET/POST)",
            "Use self-describing data formats (XML or JSON) so devices can understand each other without pre-configured adaptors",
            "Components moving between smart spaces need runtime support to adapt to new interfaces",
          ],
        },
        {
          type: "keypoint",
          content:
            "If smart spaces have their own proprietary programming interfaces, this inhibits mobility — devices moving between spaces cannot communicate without complex adaptation.",
        },
      ],
    },

    // ===== SECTION 10 =====
    {
      title: "Data-Oriented Programming in Volatile Systems",
      subtitle: "Three approaches to sharing data without tight coupling",
      blocks: [
        {
          type: "definition",
          term: "Unvarying Service Interface",
          content:
            "All services use the same universal read/write interface (like Unix pipes). Simple and universally compatible. Challenge: limited expressiveness — hard to represent complex interactions.",
        },
        {
          type: "definition",
          term: "Event Systems (Publish-Subscribe)",
          content:
            "An event service provides interfaces. Publishers publish events; subscribers consume them. Challenge: discovery and agreement on which event service instance to use, and defining the scope of the service.",
        },
        {
          type: "definition",
          term: "Tuple Spaces",
          content:
            "Allows exchange of application-specific structured data. Producers put tuples (structured data) into the shared space. Consumers use pattern matching with wildcards to retrieve matching tuples. Example: a camera puts <'Leaning Tower', 'image/jpeg', data>; a consuming device looks for <*, 'image/jpeg', *> — any JPEG from any source.",
        },
        {
          type: "keypoint",
          content:
            "Tuple spaces decouple producers from consumers — they don't need to know about each other in advance. This is the same loose-coupling principle as the publish–find–bind pattern in web services (Week 5).",
        },
      ],
    },

    // ===== SECTION 11 =====
    {
      title: "Sensing and Context Awareness",
      subtitle: "From raw data to meaningful context",
      blocks: [
        {
          type: "list",
          title: "Four context-awareness challenges:",
          items: [
            "Integration of sensors — specialised knowledge may be required to set up and calibrate sensors",
            "Abstraction from sensor data — applications must convert raw sensor data into meaningful information (e.g. raw GPS coordinates → 'in the kitchen')",
            "Sensor Fusion — data from multiple sensors must be combined and interpreted to perform complex sensing tasks (e.g. detecting human presence)",
            "Context is dynamic — applications must respond to changes in context in real time",
          ],
        },
        {
          type: "list",
          title: "Software architecture for wireless sensor networks:",
          items: [
            "In-network processing — processing on sensor nodes; aggregating from nearby nodes (not sending all data to a central server)",
            "Disruption-tolerant networking — no continuous end-to-end path exists; uses opportunistic communications",
            "Directed diffusion — interests (tasks) are injected at sink nodes; the runtime diffuses these interests throughout the network",
            "Data-oriented programming models and distributed query processing",
          ],
        },
        {
          type: "keypoint",
          content:
            "In-network processing reduces bandwidth consumption — by aggregating and filtering data at the sensor nodes, only relevant information is transmitted across the network.",
        },
      ],
    },

    // ===== SECTION 12 =====
    {
      title: "Location-Sensing Technologies",
      subtitle: "Accuracy, mechanism, and privacy trade-offs",
      blocks: [
        {
          type: "list",
          title: "Location technologies — key facts:",
          items: [
            "GPS — satellite multilateration; 1–10m accuracy; outdoors only (requires satellite visibility); user-controlled privacy",
            "Radio Beaconing (GSM/WiFi/Bluetooth) — broadcasts from wireless base stations; 10m–1km accuracy; requires wireless coverage",
            "Active Bat — radio + ultrasound multilateration; 10cm accuracy (most precise); needs ceiling sensors installed; bat identity disclosed",
            "Ultra Wide Band — radio pulse multilateration; 15cm accuracy; requires receiver installations; tag identity disclosed",
            "Active Badge — infrared sensing; room-size accuracy; affected by sunlight/fluorescent interference; badge identity disclosed",
            "RFID / NFC / Visual Tags — automatic identification; 1cm–10m; needs reader installations; tag identity disclosed",
            "EasyLiving — vision/triangulation via cameras; variable accuracy; worst privacy (no user-mounted device required — camera tracks without consent)",
          ],
        },
        {
          type: "keypoint",
          content:
            "Trade-offs to know: GPS = accurate outdoors, useless indoors. Active Bat = most accurate (10cm) but needs infrastructure. EasyLiving = worst privacy because users don't need to carry any device. Radio beaconing = widest coverage but lowest accuracy.",
        },
      ],
    },

    // ===== SECTION 13 =====
    {
      title: "Smart Cities and Ubiquitous Computing",
      subtitle: "Applications, challenges, and enabling technologies",
      blocks: [
        {
          type: "list",
          title: "Smart city applications:",
          items: [
            "Smart traffic systems — provide real-time traffic updates and adjust signals dynamically",
            "Smart parking systems — sensors detect empty spaces and notify drivers via an app",
            "AI-based emergency response systems — rely heavily on mobile and ubiquitous computing",
            "Gamification — offering rewards and incentives for reporting issues or conserving energy to enhance citizen engagement",
          ],
        },
        {
          type: "list",
          title: "Smart city challenges:",
          items: [
            "High implementation costs — the primary barrier to deployment",
            "Privacy and surveillance risks — excessive data collection from pervasive sensors",
            "Interoperability — between different systems and vendors",
          ],
        },
        {
          type: "list",
          title: "Key facts for smart cities:",
          items: [
            "Key enabling technology: IoT and sensors (real-time data collection)",
            "Future trends: 5G and AI-driven automation",
            "Best communication model: hybrid (P2P + client-server) — P2P scalability + client-server management",
            "Best model for real-time traffic monitoring: event-driven asynchronous communication",
            "DS benefit in smart cities: reduced dependency on local computing resources",
          ],
        },
        {
          type: "keypoint",
          content:
            "A hybrid communication model (P2P + client-server) is best for smart city networks — it combines the scalability of P2P with the management capabilities of client-server.",
        },
      ],
    },

    // ===== SECTION 14 =====
    {
      title: "Service-Oriented Architecture (SOA)",
      subtitle: "Dynamic service coordination",
      blocks: [
        {
          type: "definition",
          term: "Service-Oriented Architecture (SOA)",
          content:
            "A system architecture in which web services are discovered dynamically and coordinate with each other to provide enhanced services. Coordination can be distributed or managed by a choreographer.",
        },
        {
          type: "list",
          title: "SOA challenges:",
          items: [
            "How to discover existing services in the network",
            "Distributed or centralised coordination between services",
          ],
        },
        {
          type: "list",
          title: "Grid application requirements:",
          items: [
            "Remote access to resources and distributed data collection",
            "Local storage and management of data",
            "Metadata to describe data",
            "Discovery services based on metadata",
            "Software to manage data and resources",
          ],
        },
        {
          type: "keypoint",
          content:
            "SOA connects the ideas from Week 5 (web services) with Week 6 (ubiquitous computing) — in a smart space, services are discovered dynamically (like ubiquitous discovery services) and coordinated (like a web service choreographer).",
        },
      ],
    },
  ],
};

export const week5Guide = {
  intro:
    "This guide covers all the Week 5 material: the lecture on Web Services and Naming Systems (SOAP, REST, WSDL, naming types/schemes, name resolution, QoS metrics), and the seminar on Web Services, Naming, Distributed Systems Benefits, and Grid Computing.",

  sections: [
    // ===== SECTION 1 =====
    {
      title: "What Is a Web Service?",
      subtitle: "Definition and core concept",
      blocks: [
        {
          type: "definition",
          term: "Web Service",
          content:
            "A standardised way for applications to communicate over a network (usually the internet), independently of the underlying operating system or programming language. Web services provide a service-oriented, component-based application architecture built on open Internet-centric infrastructure and protocols.",
        },
        {
          type: "keypoint",
          content:
            "The key idea is platform and language agnostic communication — a client written in any language on any platform can consume a web service written in a completely different language on a different platform.",
        },
        {
          type: "keypoint",
          content:
            "A web service is NOT the same as a website. A website serves HTML pages to humans. A web service provides data and functionality to other applications through standardised protocols. A desktop calculator app is NOT a web service — it has no network communication.",
        },
      ],
    },

    // ===== SECTION 2 =====
    {
      title: "Web Service Architecture",
      subtitle: "The three components: Provider, Registry, Consumer",
      blocks: [
        {
          type: "text",
          content:
            "The web service architecture follows a publish–find–bind pattern built around three roles:",
        },
        {
          type: "list",
          title: "Three roles in web service architecture:",
          items: [
            "Service Provider — creates web services and describes them in WSDL. Publishes the description to the service registry.",
            "Service Registry — contains data about the service provider: address, contact information, and technical details of the service.",
            "Service Consumer (Requester) — retrieves information from the registry, then uses the service description to bind to and invoke the web service.",
          ],
        },
        {
          type: "keypoint",
          content:
            "The interaction pattern is: the provider publishes to the registry, the consumer finds the service in the registry, then the consumer binds to the provider. This decouples the consumer from the provider — they don't need to know about each other in advance.",
        },
      ],
    },

    // ===== SECTION 3 =====
    {
      title: "Web Service Protocols and Standards",
      subtitle: "The core stack: SOAP, XML, WSDL",
      blocks: [
        {
          type: "text",
          content:
            "Web services rely on three foundational standards that together enable platform-independent communication:",
        },
        {
          type: "definition",
          term: "SOAP (Simple Object Access Protocol)",
          content:
            "A standard way for communication between web services and clients. A lightweight, XML-based protocol for exchange of information in a decentralised distributed environment over HTTP.",
        },
        {
          type: "definition",
          term: "XML (eXtensible Markup Language)",
          content:
            "A uniform data representation and exchange format for services. Used as the data format inside SOAP messages and as the basis for WSDL documents.",
        },
        {
          type: "definition",
          term: "WSDL (Web Services Description Language)",
          content:
            "A standard meta-language to describe the services offered. An XML format for describing network services operating on messages. Defines web services as a collection of network end points or ports. Specifies the location of the service, the methods available, and the types of SOAP messages sent and accepted.",
        },
        {
          type: "keypoint",
          content:
            "Think of WSDL as a postcard with the address of the web service — it tells the client where the service is and what it can deliver. The WSDL document defines message types; SOAP carries those messages.",
        },
      ],
    },

    // ===== SECTION 4 =====
    {
      title: "SOAP — Simple Object Access Protocol",
      subtitle: "How web services communicate",
      blocks: [
        {
          type: "text",
          content:
            "SOAP is a lightweight, XML-based protocol for exchanging information in a decentralised distributed environment over HTTP. It defines how web services talk to each other or to client applications.",
        },
        {
          type: "list",
          title: "Three elements of a SOAP message:",
          items: [
            "Envelope — the root element. Identifies the XML document as a SOAP message and encapsulates all the details. Defines a framework for describing what is in a message and how to process it.",
            "Header — contains information such as authentication credentials used by the calling application. Can also contain definitions of complex types. Optional.",
            "Body — contains the actual data — the call and response information that needs to be sent between the web service and the calling application.",
          ],
        },
        {
          type: "list",
          title: "SOAP advantages:",
          items: [
            "Ideal medium for communication between web services and clients",
            "W3C recommended — the governing body for all web standards",
            "Platform and OS independent by design",
            "Works on HTTP — the default web protocol, so no customisation required; passes through firewalls easily",
            "Also works over SMTP and TCP",
          ],
        },
      ],
    },

    // ===== SECTION 5 =====
    {
      title: "SOAP vs REST",
      subtitle: "Two approaches to web services",
      blocks: [
        {
          type: "comparison",
          leftTitle: "SOAP",
          rightTitle: "REST",
          leftItems: [
            "Uses XML for communication",
            "Requires WSDL",
            "Works over HTTP, SMTP, TCP",
            "More secure but slower",
            "Best for: banking systems, secure transactions",
          ],
          rightItems: [
            "Uses standard HTTP methods: GET, POST, PUT, DELETE",
            "Data formatted in JSON or XML",
            "Faster and simpler than SOAP",
            "Better performance and scalability",
            "Best for: modern web/mobile apps, social media",
          ],
        },
        {
          type: "keypoint",
          content:
            "REST is better for social media apps because it is lightweight and fast (JSON is smaller than XML), scalable, easy to integrate with web/mobile apps, supports multiple platforms, and is used by most modern platforms (Facebook, Twitter, Instagram). SOAP is better when security is paramount (e.g. banking).",
        },
      ],
    },

    // ===== SECTION 6 =====
    {
      title: "Advantages of Web Services",
      subtitle: "Why web services matter",
      blocks: [
        {
          type: "list",
          title: "Key advantages of web services:",
          items: [
            "Allows programs written in different languages on different platforms to communicate in a standards-based manner",
            "Adapts the loosely coupled web programming model for non-browser-based applications",
            "Provides a platform for building distributed systems using software on different operating systems and devices",
            "All components can potentially be developed and deployed independently",
          ],
        },
        {
          type: "keypoint",
          content:
            "The loose coupling is critical — the consumer and provider don't need to know about each other's implementation, only about the agreed interface described in WSDL.",
        },
      ],
    },

    // ===== SECTION 7 =====
    {
      title: "Naming Systems in Distributed Systems",
      subtitle: "Why naming matters and the four types of names",
      blocks: [
        {
          type: "text",
          content:
            "Naming is a fundamental concept in distributed systems. It is used to locate and identify resources, ensuring efficient access and management. Processes need to know the name of the resources they wish to access.",
        },
        {
          type: "list",
          title: "Why naming is important:",
          items: [
            "Enables resource sharing across the distributed system",
            "Simplifies system management",
            "Supports user-friendly interaction by using meaningful names instead of raw addresses",
          ],
        },
        {
          type: "definition",
          term: "Human-Readable Names",
          content:
            "Names meaningful to people. Examples: URLs (www.port.ac.uk), email addresses (user@example.com), file names, user names.",
        },
        {
          type: "definition",
          term: "Identifiers",
          content:
            "Used to uniquely identify resources. Examples: IP addresses, MAC addresses (00:1A:2B:3C:4D:5E), Process IDs, UUIDs.",
        },
        {
          type: "definition",
          term: "Addresses",
          content:
            "Point to specific locations. Examples: Memory addresses (0x7FFF5A1B3C), device paths, network file paths (\\\\Server\\Shared\\file), local file paths.",
        },
        {
          type: "definition",
          term: "Attribute-Based Names",
          content:
            "Names based on resource properties. Examples: Database table names, tags in cloud storage, hashtags in social media.",
        },
        {
          type: "keypoint",
          content:
            "Know the difference: a MAC address is an identifier (not an address). An email address is a human-readable name (not an identifier). A memory address IS an address — it points to a location.",
        },
      ],
    },

    // ===== SECTION 8 =====
    {
      title: "Naming Schemes",
      subtitle: "Flat, hierarchical, and attribute-based naming",
      blocks: [
        {
          type: "definition",
          term: "Flat Naming",
          content:
            "No structure — names are unstructured identifiers. Used in peer-to-peer networks where there is no hierarchy. Example: BitTorrent file sharing. Limitation: harder to scale as the system grows.",
        },
        {
          type: "definition",
          term: "Hierarchical Naming",
          content:
            "Organised like a tree. The classic example is DNS — domain names are structured hierarchically (e.g. www.port.ac.uk). Easy to scale and manage because the structure distributes the namespace.",
        },
        {
          type: "definition",
          term: "Attribute-Based Naming",
          content:
            "Names based on resource attributes or properties, used in directory services and search. Example: database queries (WHERE category = 'book'), cloud storage tags.",
        },
        {
          type: "keypoint",
          content:
            "DNS is the classic example of hierarchical naming — it's organised as a tree structure. Flat naming has no structure, which makes it suitable for P2P networks but harder to scale.",
        },
      ],
    },

    // ===== SECTION 9 =====
    {
      title: "Name Resolution",
      subtitle: "Mapping names to addresses",
      blocks: [
        {
          type: "definition",
          term: "Name Resolution",
          content:
            "The process of mapping a name to an address or identifier. For example, DNS resolves a domain name (www.google.com) to an IP address (e.g. 142.250.187.46).",
        },
        {
          type: "comparison",
          leftTitle: "Centralised Resolution",
          rightTitle: "Distributed Resolution",
          leftItems: [
            "A single server resolves all names",
            "Simple to implement and manage",
            "Bottleneck and single point of failure",
            "Does not scale well",
          ],
          rightItems: [
            "Resolution spread across multiple servers",
            "DNS-like systems — scalable",
            "No single point of failure",
            "More complex coordination required",
          ],
        },
        {
          type: "keypoint",
          content:
            "Name resolution uses caching to improve efficiency, but caching introduces consistency challenges — cached data may become stale (the trade-off between performance and consistency seen throughout distributed systems).",
        },
        {
          type: "list",
          title: "Three challenges in naming systems:",
          items: [
            "Scalability — handling large numbers of names as the system grows",
            "Consistency — ensuring names always point to the correct, current resources",
            "Security — preventing unauthorised access and name spoofing (e.g. DNS spoofing)",
          ],
        },
      ],
    },

    // ===== SECTION 10 =====
    {
      title: "QoS (Quality of Service) Metrics",
      subtitle: "Measuring how well a web service performs",
      blocks: [
        {
          type: "text",
          content:
            "QoS is a key metric for web services. The following metrics measure how well a service performs:",
        },
        {
          type: "list",
          title: "QoS metrics:",
          items: [
            "Accessibility — capability in answering requests. Challenge: depends on wider infrastructure (hardware, servers).",
            "Availability — being there when the user requests a service. Challenge: depends on wider infrastructure.",
            "Time to Repair — how quickly a failed service can be restored. Challenge: depends on wider infrastructure.",
            "Scalability — coping with high and low numbers of user requests in a particular interval.",
            "Interoperability — ability to function with different languages and/or platforms. Challenge: conformance of web services to the protocols.",
            "Security — non-repudiation, authentication, authorisation, encryption, traceability, access control. Challenge: ability of the protocols to support security.",
          ],
        },
        {
          type: "keypoint",
          content:
            "QoS Security has six sub-aspects: non-repudiation, authentication, authorisation, encryption, traceability, and access control. These extend the three security elements from Week 1 (authentication, access control, auditing).",
        },
      ],
    },

    // ===== SECTION 11 =====
    {
      title: "Benefits of Distributed Systems",
      subtitle: "Why we build distributed systems",
      blocks: [
        {
          type: "list",
          title: "Four key benefits:",
          items: [
            "Scalability — can easily scale by adding more nodes to handle increasing workloads without significant reconfiguration",
            "Fault Tolerance — if one node fails, others continue operating, minimising system downtime",
            "Resource Sharing — CPU power, memory, and storage are utilised efficiently across the network",
            "Cost-Effectiveness — organisations can use existing hardware rather than investing in expensive supercomputers",
          ],
        },
        {
          type: "keypoint",
          content:
            "Distributed systems improve fault tolerance but do NOT guarantee zero downtime — failures still happen, they are just more contained.",
        },
      ],
    },

    // ===== SECTION 12 =====
    {
      title: "Grid Computing",
      subtitle: "A specialised form of distributed computing",
      blocks: [
        {
          type: "definition",
          term: "Grid Computing",
          content:
            "A specialised form of distributed computing that connects heterogeneous systems to work on large-scale tasks. It enables organisations to pool resources across various locations, allowing them to process massive amounts of data more efficiently.",
        },
        {
          type: "list",
          title: "Benefits of grid computing:",
          items: [
            "High Availability — redundant resources ensure systems remain operational during failures",
            "Interoperability — different systems and technologies work together seamlessly across platforms and organisations",
            "Cost Savings — harnesses spare computing resources, reducing hardware acquisition costs",
            "Large-Scale Data Processing — well-suited for extensive datasets, scientific simulations, and complex analyses",
          ],
        },
        {
          type: "list",
          title: "Grid computing applications:",
          items: [
            "Biomedical research — drug discovery and genomics",
            "Weather forecasting — climate predictions",
            "Financial modelling — market simulation and risk assessment",
            "Engineering simulations — design optimisation",
            "Collaborative research — cross-institution data sharing",
          ],
        },
      ],
    },

    // ===== SECTION 13 =====
    {
      title: "Distributed vs Grid Computing",
      subtitle: "Key differences",
      blocks: [
        {
          type: "comparison",
          leftTitle: "Distributed Computing",
          rightTitle: "Grid Computing",
          leftItems: [
            "Architecture: independent nodes",
            "Resource ownership: often owned by a single entity",
            "Scalability: high with added nodes",
            "Performance: optimises local resources",
            "Use cases: real-time apps, gaming, web services, cloud computing",
            "Network dependency: less dependent on network reliability",
            "User control: more control over resources",
            "Complexity: generally less complex",
          ],
          rightItems: [
            "Architecture: networked, heterogeneous resources",
            "Resource ownership: resources can be owned by multiple entities",
            "Scalability: very high across networks",
            "Performance: optimises global resources",
            "Use cases: scientific research, simulations, weather forecasting",
            "Network dependency: highly dependent on network availability",
            "User control: limited control due to resource sharing",
            "Complexity: more complex due to diverse resources",
          ],
        },
        {
          type: "keypoint",
          content:
            "The fundamental distinction: distributed computing uses independent nodes often owned by one entity, while grid computing pools heterogeneous resources across multiple organisations. Grid computing is a specialised subset of distributed computing.",
        },
      ],
    },

    // ===== SECTION 14 =====
    {
      title: "Putting It All Together",
      subtitle: "Key connections across Week 5 topics",
      blocks: [
        {
          type: "list",
          title: "Core connections to remember:",
          items: [
            "Web services use WSDL (description) + SOAP (communication) + XML (data format) — a three-layer stack",
            "The publish–find–bind pattern decouples providers from consumers — neither needs to know the other in advance",
            "Naming types (human-readable, identifier, address, attribute-based) have specific examples — know how to classify any given name",
            "DNS = hierarchical naming; BitTorrent = flat naming — both are naming schemes but with different structures",
            "QoS Security extends Week 1 security concepts — authentication, access control, and auditing grow into 6 sub-aspects",
            "Grid computing is a specialised subset of distributed computing — it adds heterogeneity, multi-organisation ownership, and very high scalability",
          ],
        },
        {
          type: "keypoint",
          content:
            "The performance vs consistency trade-off appears again in naming: caching name resolutions improves speed but risks stale data — the same tension seen in DSM consistency models (Week 4).",
        },
      ],
    },
  ],
};

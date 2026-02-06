/**
 * B1.1 The World of the Microscope - Teaching Data
 * Full node/granule structure with teaching content and verification
 */

export const microscopyTeachData = {
  id: "B1.1",
  title: "The World of the Microscope",
  subtitle: "Microscopy, Magnification & Resolution",
  emoji: "🔬",

  nodes: [
    {
      id: 1,
      title: "Understand how microscopy techniques developed over time",

      granuleGroups: [
        {
          id: "G1",
          granules: ["1.1", "1.2"],
          label: "Timeline",
          teach: {
            content: "These are the two main types of microscope. On the left, a light microscope — you might have used one at school. On the right, an electron microscope — a completely different beast. Notice the size difference. Light microscopes have been around since the mid-1600s — the 17th century. Electron microscopes came much later, in the 1930s. That's roughly a 300-year gap.",
            components: [
              {
                type: "image",
                data: {
                  src: "resources/images/light_microscope.jpg",
                  alt: "A light microscope",
                  caption: "Light Microscope — developed mid-1600s, portable, commonly used in schools",
                  size: "medium"
                }
              },
              {
                type: "image",
                data: {
                  src: "resources/images/electron_microscope.jpeg",
                  alt: "An electron microscope",
                  caption: "Electron Microscope — invented 1930s, large and room-sized",
                  size: "medium"
                }
              }
            ],
            hook: "300-year gap — light came first by centuries"
          }
        },
        {
          id: "G2",
          granules: ["1.3", "1.4"],
          label: "Mechanism",
          teach: {
            content: "So what actually makes them different? The clue is in the name. A light microscope uses a beam of light to form an image. An electron microscope uses a beam of electrons. That's it — the name tells you everything.",
            components: [
              {
                type: "callout",
                data: {
                  text: "Light microscope → beam of light\nElectron microscope → beam of electrons\n\nThe clue is in the name!",
                  type: "key"
                }
              }
            ],
            hook: "The clue is in the name"
          }
        },
        {
          id: "G3",
          granules: ["1.5"],
          label: "TEM vs SEM",
          teach: {
            content: "There are actually two types of electron microscope. TEM — transmission electron microscope — fires electrons through a thin slice of the specimen. You get a flat, 2D cross-section image. SEM — scanning electron microscope — bounces electrons off the surface. You get a 3D-looking image of the outside. Easy way to remember: transmission = through, scanning = across the surface.",
            components: [
              {
                type: "comparison",
                data: {
                  items: [
                    {
                      label: "TEM (Transmission)",
                      points: [
                        "Electrons go THROUGH specimen",
                        "2D cross-section images",
                        "Very high magnification"
                      ]
                    },
                    {
                      label: "SEM (Scanning)",
                      points: [
                        "Electrons bounce OFF surface",
                        "3D surface images",
                        "Lower magnification"
                      ]
                    }
                  ]
                }
              }
            ],
            hook: "Transmission = through, scanning = across surface"
          }
        }
      ],

      granules: [
        {
          id: "1.1",
          objective: "Can state when light microscopes were developed",
          verify: [
            {
              type: "fill-blank",
              question: "Light microscopes were developed in the mid-___.",
              answer: "1600s",
              accept: ["1600s", "1600's", "seventeenth century", "17th century"],
              explanation: "Light microscopes were developed in the mid-1600s (17th century). They've been around for over 300 years.",
              weight: 1
            },
            {
              type: "mcq",
              question: "When were light microscopes first developed?",
              options: ["1200s", "Mid-1600s", "1930s", "2000s"],
              correct: 1,
              explanation: "Light microscopes were developed in the mid-1600s. The 1930s is when electron microscopes were invented.",
              weight: 1
            }
          ]
        },
        {
          id: "1.2",
          objective: "Can state when electron microscopes were invented",
          verify: [
            {
              type: "fill-blank",
              question: "Electron microscopes were invented in the ___.",
              answer: "1930s",
              accept: ["1930s", "1930's", "nineteen thirties"],
              explanation: "Electron microscopes were invented in the 1930s — much later than light microscopes (mid-1600s).",
              weight: 1
            },
            {
              type: "mcq",
              question: "When were electron microscopes invented?",
              options: ["Mid-17th century", "Early 1800s", "1930s", "1970s"],
              correct: 2,
              explanation: "Electron microscopes were invented in the 1930s. The mid-17th century is when light microscopes were developed.",
              weight: 1
            },
            {
              type: "true-false",
              question: "Electron microscopes were invented before light microscopes.",
              answer: false,
              explanation: "Light microscopes came first (mid-1600s). Electron microscopes were invented in the 1930s — about 300 years later.",
              weight: 0.5
            }
          ]
        },
        {
          id: "1.3",
          objective: "Can explain what light microscopes use to form an image",
          verify: [
            {
              type: "fill-blank",
              question: "A light microscope uses a beam of ___ to form an image.",
              answer: "light",
              accept: ["light"],
              explanation: "Light microscopes use a beam of light. The clue is right in the name!",
              weight: 1
            },
            {
              type: "mcq",
              question: "What do light microscopes use to form an image?",
              options: ["A beam of electrons", "A beam of light", "Radio waves", "X-rays"],
              correct: 1,
              explanation: "Light microscopes use a beam of light to form an image. This is what distinguishes them from electron microscopes, which use electrons.",
              weight: 1
            }
          ]
        },
        {
          id: "1.4",
          objective: "Can explain what electron microscopes use to form an image",
          verify: [
            {
              type: "fill-blank",
              question: "An electron microscope uses a beam of ___ to form an image.",
              answer: "electrons",
              accept: ["electrons"],
              explanation: "Electron microscopes use a beam of electrons. Again — the name tells you!",
              weight: 1
            },
            {
              type: "true-false",
              question: "Electron microscopes use a beam of light to form images.",
              answer: false,
              explanation: "Electron microscopes use a beam of electrons, not light. Light microscopes use light.",
              weight: 0.5
            }
          ]
        },
        {
          id: "1.5",
          objective: "Can distinguish between transmission and scanning electron microscopes",
          verify: [
            {
              type: "mcq",
              question: "Which type of electron microscope gives you 3D surface images?",
              options: ["TEM (Transmission)", "SEM (Scanning)", "Both equally", "Neither"],
              correct: 1,
              explanation: "SEM (Scanning Electron Microscope) scans the surface and gives 3D images. TEM transmits through the specimen for 2D cross-sections.",
              weight: 1
            },
            {
              type: "true-false",
              question: "TEM produces 3D images by scanning the surface of specimens.",
              answer: false,
              explanation: "TEM (Transmission) fires electrons through the specimen for 2D images. SEM (Scanning) scans the surface for 3D images.",
              weight: 0.5
            }
          ]
        }
      ],

      macroVerify: {
        stage1: {
          type: "match-pairs",
          question: "Match each microscope type to what it uses or produces:",
          pairs: [
            { item: "Mid-1600s", match: "Light microscope" },
            { item: "1930s", match: "Electron microscopes" },
            { item: "Beam of light", match: "Light microscope" },
            { item: "Beam of electrons", match: "Electron microscopes" },
            { item: "3D surface images", match: "SEM" },
            { item: "2D high-mag images", match: "TEM" }
          ]
        }
      }
    },

    {
      id: 2,
      title: "Understand differences in magnification and resolution",

      granuleGroups: [
        {
          id: "G4",
          granules: ["2.1", "2.2"],
          label: "Magnification figures",
          teach: {
            content: "Here's where electron microscopes really shine. The best light microscopes magnify around ×2,000. Not bad. But electron microscopes? Around ×2,000,000. That's a thousand times more powerful. We're talking about seeing structures that are completely invisible under light microscopes.",
            components: [
              {
                type: "comparison",
                data: {
                  items: [
                    {
                      label: "Light Microscope",
                      points: [
                        "Max magnification: ×2,000",
                        "School ones: few hundred times",
                        "Good for cells and large structures"
                      ]
                    },
                    {
                      label: "Electron Microscope",
                      points: [
                        "Max magnification: ×2,000,000",
                        "1000× more powerful",
                        "Reveals subcellular detail"
                      ]
                    }
                  ]
                }
              }
            ],
            hook: "Electron is 1000× more powerful"
          }
        },
        {
          id: "G5",
          granules: ["2.3", "2.4", "2.5"],
          label: "Resolution",
          teach: {
            content: "Magnification is one thing — but resolution is what really matters. Resolution (or resolving power) is the ability to distinguish between two separate points. If two objects are closer together than your resolution allows, they blur into one blob. Light microscopes: about 200 nanometres. Scanning electron microscopes: about 10 nm. Transmission electron microscopes: 0.2 nm. Each step reveals structures the previous one couldn't separate.",
            components: [
              {
                type: "callout",
                data: {
                  text: "Resolution = ability to distinguish two separate points\n\nLight: ~200 nm\nSEM: ~10 nm\nTEM: ~0.2 nm\n\nBetter resolution = more detail",
                  type: "key"
                }
              }
            ],
            hook: "Resolution = how much detail you can see, not just how big"
          }
        },
        {
          id: "G6",
          granules: ["2.6"],
          label: "Practical pros/cons",
          teach: {
            content: "But electron microscopes aren't always better. Light microscopes are cheap, portable, and you can look at live specimens — watch cells dividing in real time. Electron microscopes are expensive, room-sized, need controlled environments, and the preparation process kills the specimen. Pick the right tool for the job.",
            components: [
              {
                type: "comparison",
                data: {
                  items: [
                    {
                      label: "Light - Practical",
                      points: [
                        "✓ Cheap",
                        "✓ Portable",
                        "✓ View live specimens"
                      ]
                    },
                    {
                      label: "Electron - Limitations",
                      points: [
                        "✗ Very expensive",
                        "✗ Large, needs special room",
                        "✗ Cannot view live specimens"
                      ]
                    }
                  ]
                }
              }
            ],
            hook: "Light = cheap and live. Electron = power but not practical."
          }
        }
      ],

      granules: [
        {
          id: "2.1",
          objective: "Can state max magnification of a light microscope",
          verify: [
            {
              type: "fill-blank",
              question: "The maximum magnification of the best light microscopes is around ×___.",
              answer: "2000",
              accept: ["2000", "2,000", "two thousand"],
              explanation: "Light microscopes max out at around ×2,000. School ones are usually just a few hundred times.",
              weight: 1
            },
            {
              type: "mcq",
              question: "What is the maximum magnification of the best light microscopes?",
              options: ["Around ×200", "Around ×2,000", "Around ×200,000", "Around ×2,000,000"],
              correct: 1,
              explanation: "The best light microscopes magnify around ×2,000. Electron microscopes reach ×2,000,000.",
              weight: 1
            }
          ]
        },
        {
          id: "2.2",
          objective: "Can state max magnification of an electron microscope",
          verify: [
            {
              type: "fill-blank",
              question: "Electron microscopes can magnify up to around ×___.",
              answer: "2000000",
              accept: ["2000000", "2,000,000", "two million"],
              explanation: "Electron microscopes can magnify up to around ×2,000,000 — that's 1000 times more than light microscopes.",
              weight: 1
            },
            {
              type: "true-false",
              question: "Electron microscopes are about 1000 times more powerful than light microscopes.",
              answer: true,
              explanation: "True — light microscopes max out at ×2,000, electron at ×2,000,000. That's 1000× more powerful.",
              weight: 0.5
            }
          ]
        },
        {
          id: "2.3",
          objective: "Can define resolution/resolving power",
          verify: [
            {
              type: "mcq",
              question: "What is 'resolving power'?",
              options: [
                "The maximum magnification a microscope can achieve",
                "The brightness of the image produced",
                "The ability to distinguish between two separate points",
                "The speed at which a microscope can focus"
              ],
              correct: 2,
              explanation: "Resolution is the ability to distinguish between two separate points. If objects are closer together than the resolving power allows, they appear as one.",
              weight: 1
            }
          ]
        },
        {
          id: "2.4",
          objective: "Can state resolving power of light microscope",
          verify: [
            {
              type: "fill-blank",
              question: "The resolving power of a light microscope is approximately ___ nanometres.",
              answer: "200",
              accept: ["200", "200nm", "~200"],
              explanation: "Light microscopes have a resolving power of about 200 nm.",
              weight: 1
            }
          ]
        },
        {
          id: "2.5",
          objective: "Can state resolving power of electron microscopes",
          verify: [
            {
              type: "mcq",
              question: "Which has the best resolving power?",
              options: [
                "Light microscope (~200 nm)",
                "SEM (~10 nm)",
                "TEM (~0.2 nm)",
                "They're all the same"
              ],
              correct: 2,
              explanation: "TEM has the best resolving power at ~0.2 nm. SEM is ~10 nm, and light microscopes ~200 nm.",
              weight: 1
            }
          ]
        },
        {
          id: "2.6",
          objective: "Can compare practical pros/cons",
          verify: [
            {
              type: "mcq",
              question: "Which is an advantage of light microscopes over electron microscopes?",
              options: [
                "Higher magnification",
                "Better resolving power",
                "Can view live specimens",
                "Shows more detail"
              ],
              correct: 2,
              explanation: "Light microscopes can view live specimens. Electron microscopes have better magnification and resolution, but kill the specimen during preparation.",
              weight: 1
            },
            {
              type: "true-false",
              question: "Electron microscopes are always the better choice because they have higher magnification.",
              answer: false,
              explanation: "Not always. Light microscopes are cheaper, portable, and can view live specimens — sometimes that's what you need.",
              weight: 0.5
            }
          ]
        }
      ],

      macroVerify: {
        stage1: {
          type: "match-pairs",
          question: "Match each specification to the correct microscope type:",
          pairs: [
            { item: "×2,000 max magnification", match: "Light microscope" },
            { item: "×2,000,000 max magnification", match: "Electron microscope" },
            { item: "~200 nm resolving power", match: "Light microscope" },
            { item: "~0.2 nm resolving power", match: "TEM" },
            { item: "Can view live specimens", match: "Light microscope" },
            { item: "Requires special controlled room", match: "Electron microscope" }
          ]
        }
      }
    }
  ],

  bridges: [
    {
      from: 1,
      to: 2,
      text: "You know the two types of microscope now — light and electron. But why bother with the electron one? What can it actually do that light can't? Let's look at the numbers."
    }
  ]
};

/*
 * B1.1 The World of the Microscope
 * 
 * NODE/GRANULE STRUCTURE (Single Source of Truth)
 * ================================================
 * 
 * NODE 1: Understand how microscopy techniques developed over time
 *   ├── Can state when light microscopes were developed (mid-17th century)
 *   ├── Can state when electron microscopes were invented (1930s)
 *   ├── Can explain what light microscopes use to form an image (beam of light)
 *   ├── Can explain what electron microscopes use to form an image (beam of electrons)
 *   └── Can distinguish between transmission and scanning electron microscopes (2D high mag vs 3D lower mag)
 *
 * NODE 2: Understand differences in magnification and resolution between light and electron microscopes
 *   ├── Can state max magnification of a light microscope (~×2000)
 *   ├── Can state max magnification of an electron microscope (~×2,000,000)
 *   ├── Can define resolution/resolving power (ability to distinguish two separate points)
 *   ├── Can state resolving power of light microscope (~200 nm)
 *   ├── Can state resolving power of electron microscopes (scanning ~10 nm, transmission ~0.2 nm)
 *   └── Can compare practical pros/cons (light: cheap, portable, live specimens | electron: expensive, large, special conditions, cannot view live)
 *
 * NODE 3: Calculate magnification, real size, and image size
 *   ├── Can recall unit conversions (mm → μm → nm)
 *   ├── Can calculate total magnification of a light microscope (eyepiece × objective)
 *   ├── Can state the magnification formula (magnification = image size ÷ real size)
 *   ├── Can rearrange to find real size (image size ÷ magnification)
 *   ├── Can rearrange to find image size (magnification × real size)
 *   └── Can apply the formula to solve problems with appropriate unit conversions
 *
 * ================================================
 * All content below is derived from these granules.
 * Every granule is taught. Every granule is tested.
 */

export const microscopy = {
  id: "B1.1",
  title: "The World of the Microscope",
  subtitle: "Microscopy, Magnification & Resolution",
  emoji: "🔬",

  mcqs: [
    // NODE 1 GRANULES: Development of microscopy

    {
      id: 1,
      question:
        "What do light microscopes use to form an image of an object?",
      options: [
        "A beam of electrons",
        "A beam of light",
        "Radio waves",
        "X-rays",
      ],
      correct: 1,
      explanation:
        "Light microscopes use a beam of light to form an image. This is what distinguishes them from electron microscopes, which use a beam of electrons.",
    },
    {
      id: 2,
      question:
        "When were electron microscopes invented?",
      options: [
        "Mid-17th century",
        "Early 1800s",
        "1930s",
        "1970s",
      ],
      correct: 2,
      explanation:
        "Electron microscopes were invented in the 1930s. Light microscopes are much older — they were first developed in the mid-17th century.",
    },
    {
      id: 3,
      question:
        "What type of image does a transmission electron microscope produce?",
      options: [
        "3D images with lower magnification",
        "2D images with very high magnification and resolution",
        "Colour images of live specimens",
        "Low-resolution images at high speed",
      ],
      correct: 1,
      explanation:
        "Transmission electron microscopes give 2D images with very high magnification and resolution. Scanning electron microscopes give 3D images but at lower magnification.",
    },

    // NODE 2 GRANULES: Magnification and resolution differences

    {
      id: 4,
      question:
        "What is the maximum magnification of the best light microscopes?",
      options: [
        "Around ×200",
        "Around ×2,000",
        "Around ×200,000",
        "Around ×2,000,000",
      ],
      correct: 1,
      explanation:
        "The best light microscopes can magnify around ×2,000, though school microscopes usually only magnify several hundred times. Electron microscopes can reach around ×2,000,000.",
    },
    {
      id: 5,
      question:
        "What is 'resolving power'?",
      options: [
        "The maximum magnification a microscope can achieve",
        "The brightness of the image produced",
        "The ability to distinguish between two separate points",
        "The speed at which a microscope can focus",
      ],
      correct: 2,
      explanation:
        "Resolution is the ability to distinguish between two separate points. If two objects are closer together than the resolving power allows, they appear as one object. This determines how much detail a microscope can show.",
    },
    {
      id: 6,
      question:
        "A scientist needs to study the detailed internal structure of a cell at very high magnification. Which microscope should they use and why?",
      options: [
        "Light microscope — it can view live specimens",
        "Scanning electron microscope — it gives 3D images",
        "Transmission electron microscope — it has the highest magnification and resolution",
        "Light microscope — it has the best resolving power",
      ],
      correct: 2,
      explanation:
        "A transmission electron microscope has the highest magnification (up to ×2,000,000) and the best resolving power (~0.2 nm), making it ideal for studying detailed internal structures of cells.",
    },
    {
      id: 7,
      question:
        "Which of the following is an advantage of light microscopes over electron microscopes?",
      options: [
        "Higher magnification",
        "Better resolving power",
        "Can be used to view live specimens",
        "Produces 3D images",
      ],
      correct: 2,
      explanation:
        "Light microscopes can view live specimens, are relatively cheap, and are portable. Electron microscopes have higher magnification and resolution but cannot view live specimens and require special controlled environments.",
    },
    {
      id: 8,
      question:
        "What is the approximate resolving power of a light microscope?",
      options: [
        "0.2 nm",
        "10 nm",
        "200 nm",
        "2000 nm",
      ],
      correct: 2,
      explanation:
        "A light microscope has a resolving power of about 200 nm. A scanning electron microscope achieves about 10 nm, and a transmission electron microscope about 0.2 nm.",
    },

    // NODE 3 GRANULES: Calculations

    {
      id: 9,
      question:
        "How do you calculate the total magnification of a light microscope?",
      options: [
        "Eyepiece magnification ÷ objective lens magnification",
        "Eyepiece magnification + objective lens magnification",
        "Eyepiece magnification × objective lens magnification",
        "Objective lens magnification − eyepiece magnification",
      ],
      correct: 2,
      explanation:
        "Total magnification = eyepiece magnification × objective lens magnification. For example, a ×4 eyepiece with a ×10 objective gives ×40 total magnification.",
    },
    {
      id: 10,
      question:
        "A microscope has an eyepiece lens of ×10 and an objective lens of ×40. What is the total magnification?",
      options: [
        "×50",
        "×400",
        "×4",
        "×4000",
      ],
      correct: 1,
      explanation:
        "Total magnification = eyepiece × objective = 10 × 40 = ×400.",
    },
    {
      id: 11,
      question:
        "How many micrometres (μm) are in 1 millimetre (mm)?",
      options: [
        "10",
        "100",
        "1000",
        "10,000",
      ],
      correct: 2,
      explanation:
        "1 mm = 1000 μm. Similarly, 1 μm = 1000 nm. These conversions are essential for microscopy calculations.",
    },
    {
      id: 12,
      question:
        "A cell image measures 3 mm under a magnification of ×600. What is the real size of the cell?",
      options: [
        "0.5 μm",
        "5 μm",
        "50 μm",
        "500 μm",
      ],
      correct: 1,
      explanation:
        "Real size = image size ÷ magnification = 3 mm ÷ 600 = 0.005 mm. Converting to μm: 0.005 × 1000 = 5 μm.",
    },
    {
      id: 13,
      question:
        "A cell has a real diameter of 50 μm. At what magnification would its image measure 20 mm?",
      options: [
        "×40",
        "×100",
        "×400",
        "×1000",
      ],
      correct: 2,
      explanation:
        "First convert to the same units: 50 μm = 0.05 mm. Then magnification = image size ÷ real size = 20 ÷ 0.05 = ×400.",
    },
  ],

  flashcards: [
    // NODE 1 GRANULES

    {
      id: 1,
      front: "When were light microscopes first developed?",
      back: "Mid-17th century (the 1600s).",
    },
    {
      id: 2,
      front: "When were electron microscopes invented?",
      back: "The 1930s.",
    },
    {
      id: 3,
      front: "What does a light microscope use to form an image?",
      back: "A beam of light.",
    },
    {
      id: 4,
      front: "What does an electron microscope use to form an image?",
      back: "A beam of electrons.",
    },
    {
      id: 5,
      front: "What is the difference between a transmission and a scanning electron microscope?",
      back: "Transmission: 2D images with very high magnification and resolution.\nScanning: 3D images but at lower magnification.",
    },

    // NODE 2 GRANULES

    {
      id: 6,
      front: "What is the maximum magnification of a light microscope?",
      back: "Around ×2000 (school microscopes usually only several hundred times).",
    },
    {
      id: 7,
      front: "What is the maximum magnification of an electron microscope?",
      back: "Around ×2,000,000.",
    },
    {
      id: 8,
      front: "What is resolution (resolving power)?",
      back: "The ability to distinguish between two separate points. It determines how much detail a microscope can show.",
    },
    {
      id: 9,
      front: "What are the resolving powers of the three microscope types?",
      back: "Light microscope: ~200 nm\nScanning electron microscope: ~10 nm\nTransmission electron microscope: ~0.2 nm",
    },
    {
      id: 10,
      front: "Name three advantages of light microscopes over electron microscopes.",
      back: "1) Relatively cheap\n2) Can be used almost anywhere (portable)\n3) Can view live specimens",
    },
    {
      id: 11,
      front: "Name three disadvantages of electron microscopes.",
      back: "1) Very expensive\n2) Large — need special temperature, pressure, and humidity-controlled rooms\n3) Cannot view live specimens",
    },

    // NODE 3 GRANULES

    {
      id: 12,
      front: "How do you calculate total magnification on a light microscope?",
      back: "Total magnification = eyepiece lens magnification × objective lens magnification",
    },
    {
      id: 13,
      front: "What is the magnification formula?",
      back: "magnification = size of image ÷ size of real object",
    },
    {
      id: 14,
      front: "How do you rearrange the formula to find real size?",
      back: "size of real object = size of image ÷ magnification",
    },
    {
      id: 15,
      front: "How do you rearrange the formula to find image size?",
      back: "size of image = magnification × size of real object",
    },
    {
      id: 16,
      front: "What are the key unit conversions for microscopy?",
      back: "1 mm = 1000 μm\n1 μm = 1000 nm\n1 nm = 0.000000001 m (1 × 10⁻⁹ m)",
    },
  ],

  shortAnswers: [
    // NODE 1 + NODE 2 (compare/evaluate)

    {
      id: 1,
      question:
        "State one advantage and one disadvantage of using: (a) a light microscope, (b) an electron microscope.",
      marks: 4,
      markingGuide: [
        "Light microscope advantage: any of — relatively cheap, portable/can be used almost anywhere, can view live specimens",
        "Light microscope disadvantage: any of — lower magnification (max ~×2000), lower resolving power (~200 nm), less detail of subcellular structures",
        "Electron microscope advantage: any of — much higher magnification (up to ×2,000,000), much better resolving power (down to 0.2 nm), can reveal subcellular structures in detail",
        "Electron microscope disadvantage: any of — very expensive, large and require special controlled environments, cannot view live specimens",
      ],
      hint: "Think about what each type is good at and what limits it — consider cost, where you can use it, what you can look at, and how much detail you get.",
    },
    {
      id: 2,
      question:
        "A student measured the diameter of a human capillary on a micrograph. The image measures 5 mm and the student knows the magnification is ×1000. How many micrometres is the real diameter of the capillary? Show your working.",
      marks: 3,
      markingGuide: [
        "Correct formula identified or used: real size = image size ÷ magnification",
        "Correct calculation: 5 mm ÷ 1000 = 0.005 mm",
        "Correct conversion to micrometres: 0.005 mm × 1000 = 5 μm",
      ],
      hint: "Use the magnification triangle — you have the image size and the magnification, so you need to find the real size. Then convert mm to μm.",
    },
    {
      id: 3,
      question:
        "A student is told the image of a cell has a diameter of 800 μm. The actual cell has a diameter of 20 μm. At what magnification has the cell been observed?",
      marks: 2,
      markingGuide: [
        "Correct formula identified or used: magnification = image size ÷ real size",
        "Correct calculation: 800 ÷ 20 = ×40",
      ],
      hint: "Both measurements are already in the same units — just apply the magnification formula directly.",
    },
    {
      id: 4,
      question:
        "Explain why the invention of the electron microscope was important for the study of cells.",
      marks: 3,
      markingGuide: [
        "Electron microscopes have much higher magnification (up to ×2,000,000) than light microscopes (~×2000)",
        "They have much better resolving power (down to 0.2 nm vs ~200 nm), meaning they can show far more detail",
        "This allowed biologists to see and understand subcellular structures inside cells that were not visible with light microscopes",
      ],
      hint: "Think about what biologists could see before electron microscopes vs after — what changed?",
    },
    {
      id: 5,
      question:
        "Evaluate the use of an electron microscope and a light microscope, giving one example where each type of microscope might be used.",
      marks: 6,
      markingGuide: [
        "Light microscope uses a beam of light; electron microscope uses a beam of electrons",
        "Light microscopes magnify up to ~×2000; electron microscopes up to ~×2,000,000",
        "Light microscopes have a resolving power of ~200 nm; electron microscopes as low as 0.2 nm",
        "Light microscopes are cheap, portable, and can view live specimens",
        "Electron microscopes are expensive, large, require special environments, and cannot view live specimens",
        "Appropriate example for each — e.g. light microscope to observe living cells dividing; electron microscope to study the detailed structure of organelles or viruses",
      ],
      hint: "Compare them across magnification, resolution, cost, and practicality — then think about a situation where each one's strengths would matter most.",
    },
  ],
};

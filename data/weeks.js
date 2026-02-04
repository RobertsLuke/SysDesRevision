export const weeks = {
  0: {
    id: 0,
    title: "The World of the Microscope",
    subtitle: "Microscopy, Magnification & Resolution",
    emoji: "🔬",
    isTrial: true,

    teach: {
      nodes: [
        {
          id: 1,
          title: "Understand how microscopy techniques developed over time",
          granules: [
            {
              id: "1.1",
              objective: "Can state when light microscopes were developed",
              teach: {
                content: "Light microscopes were first developed in the mid-17th century — the 1600s. These early microscopes used glass lenses and natural light to create magnified images of tiny objects invisible to the naked eye. They opened up an entirely new world of biology.",
              },
              verify: [
                {
                  type: "fill-blank",
                  question: "Light microscopes were first developed in the ___ century.",
                  answer: "mid-17th",
                  accept: ["mid-17th", "mid 17th", "17th", "mid seventeenth", "seventeenth"],
                  explanation: "Light microscopes date back to the mid-17th century (the 1600s) — centuries before electron microscopes.",
                },
                {
                  type: "mcq",
                  question: "When were light microscopes first developed?",
                  options: ["Early 16th century", "Mid-17th century", "Late 18th century", "1930s"],
                  correct: 1,
                  explanation: "Light microscopes were developed in the mid-17th century. The 1930s is when electron microscopes appeared.",
                },
              ],
            },
            {
              id: "1.2",
              objective: "Can state when electron microscopes were invented",
              teach: {
                content: "Electron microscopes were invented much later — in the 1930s. That's roughly 300 years after the first light microscopes. They represented a huge leap in technology because they use a completely different method to create images.",
              },
              verify: [
                {
                  type: "fill-blank",
                  question: "Electron microscopes were invented in the ___.",
                  answer: "1930s",
                  accept: ["1930s", "1930's", "nineteen thirties"],
                  explanation: "Electron microscopes were invented in the 1930s — about 300 years after light microscopes.",
                },
                {
                  type: "true-false",
                  question: "Electron microscopes were invented before light microscopes.",
                  answer: false,
                  explanation: "Light microscopes came first (mid-17th century). Electron microscopes arrived much later in the 1930s.",
                },
              ],
            },
            {
              id: "1.3",
              objective: "Can explain what light microscopes use to form an image",
              teach: {
                content: "Light microscopes work by passing a beam of light through a thin specimen. Glass lenses inside the microscope then bend (refract) this light to create a magnified image that your eye can see. The key word is light — that's what carries the image.",
              },
              verify: [
                {
                  type: "fill-blank",
                  question: "Light microscopes use a beam of ___ to form an image.",
                  answer: "light",
                  accept: ["light"],
                  explanation: "The clue is in the name — light microscopes use a beam of light.",
                },
                {
                  type: "mcq",
                  question: "What does a light microscope use to form an image?",
                  options: ["A beam of electrons", "X-rays", "A beam of light", "Radio waves"],
                  correct: 2,
                  explanation: "Light microscopes use a beam of light. Electron microscopes use a beam of electrons.",
                },
              ],
            },
            {
              id: "1.4",
              objective: "Can explain what electron microscopes use to form an image",
              teach: {
                content: "Electron microscopes use a beam of electrons instead of light. Electrons have a much shorter wavelength than visible light, which is why electron microscopes can achieve far greater detail and magnification. The specimen must be in a vacuum because electrons scatter in air.",
              },
              verify: [
                {
                  type: "fill-blank",
                  question: "Electron microscopes use a beam of ___ to form an image.",
                  answer: "electrons",
                  accept: ["electrons", "electron"],
                  explanation: "Electron microscopes use electrons — their shorter wavelength allows much greater detail.",
                },
              ],
            },
            {
              id: "1.5",
              objective: "Can distinguish between transmission and scanning electron microscopes",
              teach: {
                content: "There are two types of electron microscope. A transmission electron microscope (TEM) fires electrons through the specimen and produces 2D images with very high magnification and resolution — best for internal structure. A scanning electron microscope (SEM) bounces electrons off the surface and produces 3D images, but at lower magnification than TEM.",
              },
              verify: [
                {
                  type: "mcq",
                  question: "Which type of electron microscope produces 3D images?",
                  options: ["Transmission electron microscope", "Scanning electron microscope", "Both types", "Neither type"],
                  correct: 1,
                  explanation: "Scanning electron microscopes (SEM) produce 3D images by bouncing electrons off the surface. Transmission (TEM) produces 2D images at higher magnification.",
                },
                {
                  type: "true-false",
                  question: "A transmission electron microscope produces 3D images.",
                  answer: false,
                  explanation: "Transmission electron microscopes produce 2D images (very high magnification). Scanning electron microscopes produce the 3D images.",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Understand differences in magnification and resolution",
          granules: [
            {
              id: "2.1",
              objective: "Can state max magnification of a light microscope",
              teach: {
                content: "The best light microscopes can magnify up to around ×2,000. School microscopes typically only reach a few hundred times magnification. This is the upper limit of what light can achieve — beyond this, the image blurs rather than showing more detail.",
              },
              verify: [
                {
                  type: "mcq",
                  question: "What is the maximum magnification of the best light microscopes?",
                  options: ["Around ×200", "Around ×2,000", "Around ×200,000", "Around ×2,000,000"],
                  correct: 1,
                  explanation: "Light microscopes max out around ×2,000. The ×2,000,000 figure belongs to electron microscopes.",
                },
                {
                  type: "fill-blank",
                  question: "The best light microscopes can magnify up to around ×___.",
                  answer: "2000",
                  accept: ["2000", "2,000", "×2000", "×2,000", "x2000"],
                  explanation: "Light microscopes reach a maximum of about ×2,000.",
                },
              ],
            },
            {
              id: "2.2",
              objective: "Can state max magnification of an electron microscope",
              teach: {
                content: "Electron microscopes can magnify up to around ×2,000,000 — that's a thousand times more powerful than the best light microscope. This enormous magnification is possible because electrons have a much shorter wavelength than visible light.",
              },
              verify: [
                {
                  type: "fill-blank",
                  question: "Electron microscopes can magnify up to around ×___.",
                  answer: "2000000",
                  accept: ["2000000", "2,000,000", "×2000000", "×2,000,000", "2 million"],
                  explanation: "Electron microscopes can reach ×2,000,000 — a thousand times more than light microscopes.",
                },
                {
                  type: "true-false",
                  question: "Electron microscopes can magnify about 100 times more than light microscopes.",
                  answer: false,
                  explanation: "It's about 1,000 times more. Light: ×2,000. Electron: ×2,000,000.",
                },
              ],
            },
            {
              id: "2.3",
              objective: "Can define resolution / resolving power",
              teach: {
                content: "Resolution (also called resolving power) is the ability to distinguish between two separate points. Imagine two dots very close together — if your microscope's resolution is good enough, you see two dots. If not, they blur into one. Higher resolution means you can see finer detail. This is different from magnification — you can magnify a blurry image, but it's still blurry.",
              },
              verify: [
                {
                  type: "fill-blank",
                  question: "Resolution is the ability to distinguish between two ___ points.",
                  answer: "separate",
                  accept: ["separate", "distinct", "different", "individual"],
                  explanation: "Resolution = ability to distinguish between two separate points. More resolution = more detail.",
                },
                {
                  type: "mcq",
                  question: "What does 'resolving power' mean?",
                  options: ["Maximum magnification possible", "Brightness of the image", "Ability to distinguish two separate points", "Speed of focusing"],
                  correct: 2,
                  explanation: "Resolving power is about distinguishing fine detail (two separate points), not magnification or brightness.",
                },
              ],
            },
            {
              id: "2.4",
              objective: "Can state resolving powers of microscope types",
              teach: {
                content: "The resolving power of a light microscope is about 200 nm — it can't distinguish objects closer than that. A scanning electron microscope does much better at about 10 nm. A transmission electron microscope is the champion at about 0.2 nm. Remember: smaller number = better resolution = more detail.",
              },
              verify: [
                {
                  type: "mcq",
                  question: "What is the resolving power of a light microscope?",
                  options: ["0.2 nm", "10 nm", "200 nm", "2000 nm"],
                  correct: 2,
                  explanation: "Light microscope: ~200 nm. Scanning EM: ~10 nm. Transmission EM: ~0.2 nm. Smaller = better.",
                },
                {
                  type: "fill-blank",
                  question: "A transmission electron microscope has a resolving power of about ___ nm.",
                  answer: "0.2",
                  accept: ["0.2", ".2"],
                  explanation: "TEM has the best resolution at 0.2 nm — a thousand times better than a light microscope's 200 nm.",
                },
              ],
            },
            {
              id: "2.5",
              objective: "Can compare practical pros and cons",
              teach: {
                content: "Light microscopes are relatively cheap, small and portable, and — crucially — can view live specimens. Electron microscopes have much higher magnification and resolution, but they're very expensive, large (they need special temperature and humidity-controlled rooms), and cannot view live specimens because the specimen must be in a vacuum.",
              },
              verify: [
                {
                  type: "mcq",
                  question: "Which is an advantage of light microscopes over electron microscopes?",
                  options: ["Higher magnification", "Better resolution", "Can view live specimens", "Produces 3D images"],
                  correct: 2,
                  explanation: "Light microscopes can view live specimens — a major practical advantage. Electron microscopes require specimens to be in a vacuum, so no living material.",
                },
                {
                  type: "true-false",
                  question: "Electron microscopes can be used to view live specimens.",
                  answer: false,
                  explanation: "Electron microscopes require a vacuum — live specimens cannot survive. Only light microscopes can view living material.",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          title: "Calculate magnification, real size, and image size",
          granules: [
            {
              id: "3.1",
              objective: "Can recall unit conversions (mm → μm → nm)",
              teach: {
                content: "In microscopy, you'll work with very small units. The key conversions are: 1 mm = 1,000 μm (micrometres), and 1 μm = 1,000 nm (nanometres). So to go from mm to μm, multiply by 1,000. To go from μm to mm, divide by 1,000. Getting these conversions right is essential for magnification calculations.",
              },
              verify: [
                {
                  type: "fill-blank",
                  question: "1 mm = ___ μm.",
                  answer: "1000",
                  accept: ["1000", "1,000"],
                  explanation: "1 mm = 1,000 μm. And 1 μm = 1,000 nm. Each step is ×1,000.",
                },
                {
                  type: "mcq",
                  question: "How many nanometres (nm) are in 1 micrometre (μm)?",
                  options: ["10", "100", "1,000", "10,000"],
                  correct: 2,
                  explanation: "1 μm = 1,000 nm, just as 1 mm = 1,000 μm. Each step multiplies by 1,000.",
                },
              ],
            },
            {
              id: "3.2",
              objective: "Can calculate total magnification (eyepiece × objective)",
              teach: {
                content: "A light microscope has two lens systems: the eyepiece lens (the one you look through) and the objective lens (the one closest to the specimen). Total magnification is calculated by multiplying them together. For example, a ×10 eyepiece with a ×40 objective gives ×400 total magnification.",
              },
              verify: [
                {
                  type: "mcq",
                  question: "A microscope has a ×10 eyepiece and a ×40 objective lens. What is the total magnification?",
                  options: ["×50", "×400", "×4", "×4,000"],
                  correct: 1,
                  explanation: "Total magnification = eyepiece × objective = 10 × 40 = ×400.",
                },
                {
                  type: "fill-blank",
                  question: "Total magnification = eyepiece magnification ___ objective magnification.",
                  answer: "×",
                  accept: ["×", "x", "*", "multiplied by", "times"],
                  explanation: "You multiply the eyepiece by the objective to get total magnification.",
                },
              ],
            },
            {
              id: "3.3",
              objective: "Can state the magnification formula",
              teach: {
                content: "The magnification formula is: magnification = image size ÷ real size. This tells you how many times bigger the image is compared to the actual object. You can remember it as a triangle: M, I, R — magnification = image ÷ real.",
              },
              verify: [
                {
                  type: "mcq",
                  question: "What is the magnification formula?",
                  options: ["magnification = real size ÷ image size", "magnification = image size ÷ real size", "magnification = image size × real size", "magnification = image size + real size"],
                  correct: 1,
                  explanation: "Magnification = image size ÷ real size. How many times bigger is the image than reality?",
                },
              ],
            },
            {
              id: "3.4",
              objective: "Can rearrange to find real size",
              teach: {
                content: "If you need to find the real size of a specimen, rearrange the formula: real size = image size ÷ magnification. You're dividing the image measurement by how many times it was enlarged to get back to the actual size.",
              },
              verify: [
                {
                  type: "fill-blank",
                  question: "Real size = image size ___ magnification.",
                  answer: "÷",
                  accept: ["÷", "/", "divided by"],
                  explanation: "Real size = image size ÷ magnification. Divide the image by how much it was magnified.",
                },
              ],
            },
            {
              id: "3.5",
              objective: "Can rearrange to find image size",
              teach: {
                content: "To find the image size: image size = magnification × real size. If you know how big something actually is and how much it's been magnified, multiplying gives you how big it appears in the image.",
              },
              verify: [
                {
                  type: "fill-blank",
                  question: "Image size = magnification ___ real size.",
                  answer: "×",
                  accept: ["×", "x", "*", "multiplied by", "times"],
                  explanation: "Image size = magnification × real size.",
                },
              ],
            },
            {
              id: "3.6",
              objective: "Can apply the formula with unit conversions",
              teach: {
                content: "When solving problems, you'll often need to convert units first. A common scenario: the image is measured in mm but the answer needs to be in μm. Steps: (1) identify what you're solving for, (2) use the right formula, (3) calculate, (4) convert units if needed. Remember: mm to μm means ×1,000.",
              },
              verify: [
                {
                  type: "mcq",
                  question: "A cell image measures 3 mm at ×600 magnification. What is the real size in μm?",
                  options: ["0.5 μm", "5 μm", "50 μm", "500 μm"],
                  correct: 1,
                  explanation: "Real size = 3 mm ÷ 600 = 0.005 mm. Convert: 0.005 × 1,000 = 5 μm.",
                },
              ],
            },
          ],
        },
      ],
    },

    mcqs: [
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
  },
  1: {
    id: 1,
    title: "Introduction to Distributed Systems",
    subtitle: "Definitions, Design Issues & P2P Networks",
    emoji: "🌐",

    mcqs: [
      // --- CORE CONCEPTS (from Lecture 1) ---
      {
        id: 1,
        question:
          "According to Coulouris, how do components in a distributed system coordinate their actions?",
        options: [
          "Only by message passing",
          "Through shared memory accessed by all nodes",
          "Via a central coordinator that dispatches instructions",
          "Using synchronised clock signals over the network",
        ],
        correct: 0,
        explanation:
          "Coulouris defines a distributed system as hardware/software at networked computers that communicate and coordinate only by message passing — there is no shared memory or central coordinator.",
      },
      {
        id: 2,
        question:
          "Tanenbaum's definition of a distributed system emphasises that it should appear to users as what?",
        options: [
          "A collection of independent computers",
          "A single computer",
          "A network of servers",
          "A cloud-based platform",
        ],
        correct: 1,
        explanation:
          "Tanenbaum stresses the user's perspective: a distributed system is a collection of independent computers that appears to users as a single computer. The distribution is hidden.",
      },
      {
        id: 3,
        question:
          'In the "three ways to do things faster" analogy, what does "Get Help" correspond to in computing?',
        options: [
          "Using a faster CPU",
          "Improving algorithm efficiency",
          "Upgrading to more RAM",
          "Distributed or parallel processing",
        ],
        correct: 3,
        explanation:
          "The three ways map to computing as: Work Harder = hardware performance, Work Smarter = better algorithms, Get Help = distributed/parallel processing. Getting help means using multiple machines.",
      },
      {
        id: 4,
        question:
          "Which of the following is NOT listed as an example of a distributed system in the lecture?",
        options: [
          "Network File System (NFS)",
          "ATM / cash machines",
          "Blockchain cryptocurrency mining",
          "Distributed Shared Memory (DSM)",
        ],
        correct: 2,
        explanation:
          "The lecture specifically lists NFS, ATMs, DSM, CORBA, Java RMI, network printers, and others — but blockchain mining is not mentioned in the source material.",
      },
      {
        id: 5,
        question:
          "Which issue describes the problem that a distributed system must continue working even when part of it fails?",
        options: [
          "Costly communications",
          "Insecure communications",
          "Unreliable communications",
          "Independent failure",
        ],
        correct: 3,
        explanation:
          "Independent failure means the distributed system needs to keep functioning after the failure of a network connection or individual computer — unlike a single machine where everything fails together.",
      },
      {
        id: 6,
        question:
          "The lecture states that distributed systems are 'NOT so layered' as traditional networking. What does this mean?",
        options: [
          "Distributed systems don't use any networking protocols",
          "They strictly follow the OSI model at all times",
          "They mix and match protocols, APIs, and services as required",
          "They only use the physical and data link layers",
        ],
        correct: 2,
        explanation:
          "While networking follows a layered structure (OSI/TCP-IP), distributed systems mix and match protocols, APIs, and services as needed rather than strictly following layers.",
      },
      {
        id: 7,
        question:
          "In the DS road map, where does 'replication' sit?",
        options: [
          "Fundamentals (low-level)",
          "Middleware / Distributed OS level",
          "Application (high-level)",
          "It is not part of the road map",
        ],
        correct: 1,
        explanation:
          "The road map has three levels: Fundamentals (processes, threads, RPC, naming), Middleware (scheduling, transactions, replication, fault-tolerance), and Application (DSM, distributed objects, security). Replication sits at the middleware level.",
      },
      {
        id: 8,
        question:
          "What does the design issue of 'naming' require in a distributed system?",
        options: [
          "Names should change depending on which computer you're using",
          "Names must have global meanings independent of location",
          "Each computer should use its own local naming scheme",
          "Names are only needed for user-facing resources",
        ],
        correct: 1,
        explanation:
          "Naming requires that names have global meanings — the same name works everywhere, independent of the object's location, supported by a scalable name translation system.",
      },
      {
        id: 9,
        question:
          "What is the key concept behind the design issue of 'resource management'?",
        options: [
          "Load balancing — distributing work evenly across available resources",
          "Authentication of users accessing resources",
          "Ensuring data coherence across all nodes",
          "Maintaining consistency of cached data",
        ],
        correct: 0,
        explanation:
          "Resource management is about deploying processing and communication resources to optimum effect for a changing workload — the key concept is load balancing.",
      },
      {
        id: 10,
        question:
          "Which three components make up the security design issue?",
        options: [
          "Encryption, Firewalls, Antivirus",
          "Authentication, Access Control, Auditing",
          "Confidentiality, Integrity, Availability",
          "Naming, Access, Communication",
        ],
        correct: 1,
        explanation:
          "The lecture identifies three security components: Authentication (right to access), Access Control (different levels for different users), and Auditing (logging every access as an audit trail).",
      },
      {
        id: 11,
        question:
          "Which of these is listed as both an advantage AND a disadvantage of distributed systems?",
        options: [
          "Incremental growth",
          "Lower turnaround time",
          "Price vs performance",
          "Reliability",
        ],
        correct: 3,
        explanation:
          "Reliability appears on both lists. It's an advantage because redundancy can increase resilience, but also a challenge because failure modes in distributed systems are more complex than in single machines.",
      },
      {
        id: 12,
        question:
          "Which of the following is NOT an area covered by the 'consistency maintenance' design issue?",
        options: [
          "Concurrent data access",
          "Cache consistency",
          "Load balancing",
          "Consistent time / synchronisation",
        ],
        correct: 2,
        explanation:
          "Consistency maintenance covers data (concurrent access), replication, cache, failure handling, time synchronisation, and user interface. Load balancing falls under resource management, not consistency.",
      },

      // --- GAP-FILL QUESTIONS ---
      {
        id: 21,
        question:
          "In computing terms, what does 'Work Smarter' correspond to?",
        options: [
          "Adding more machines to share the workload",
          "Upgrading to faster hardware components",
          "Using more efficient algorithms to reduce the work needed",
          "Running processes in parallel across multiple cores",
        ],
        correct: 2,
        explanation:
          "Work Smarter = better algorithms. The same hardware solves the problem faster because the software finds a more efficient approach — fewer steps, less work. This is distinct from better hardware (Work Harder) or more machines (Get Help).",
      },
      {
        id: 22,
        question:
          "What does the design issue of 'access' require in a distributed system?",
        options: [
          "All data must be publicly available to any user",
          "The same functions are usable everywhere with reasonable performance",
          "Users must authenticate before accessing any resource",
          "Resources can only be accessed from the machine they are stored on",
        ],
        correct: 1,
        explanation:
          "Access means the same operations are available everywhere with reasonable performance, and includes the idea of data coherence — users see a consistent view regardless of where they access the system from.",
      },
      {
        id: 23,
        question:
          "Why is the performance of communication techniques critical in distributed systems?",
        options: [
          "Because communication is always faster than local processing",
          "Because the entire system's performance depends on how reliably and quickly machines can exchange messages",
          "Because distributed systems only use a single communication protocol",
          "Because communication is only needed during system startup",
        ],
        correct: 1,
        explanation:
          "Since machines in a distributed system coordinate entirely through message passing, the performance and reliability of that communication directly determines the overall system performance. Slow or unreliable communication bottlenecks everything.",
      },
      {
        id: 24,
        question:
          "A user in London and a user in Tokyo both edit the same shared spreadsheet at the same time. Which design issue does this primarily relate to?",
        options: [
          "Naming",
          "Resource management",
          "Consistency maintenance",
          "Software structure",
        ],
        correct: 2,
        explanation:
          "Concurrent access to the same data from different locations is a consistency maintenance problem — the system must decide how to handle conflicting edits and ensure both users end up with a coherent result.",
      },
      {
        id: 25,
        question:
          "A company moves a database from Server A to Server B, but all applications continue to access it using the same identifier without any changes. Which design issue does this demonstrate?",
        options: [
          "Access",
          "Security",
          "Naming",
          "Resource management",
        ],
        correct: 2,
        explanation:
          "This demonstrates good naming — the global name is independent of physical location. A name translation system maps the same identifier to the new location, so nothing breaks when the resource moves.",
      },
      {
        id: 26,
        question:
          "A streaming service notices that its US servers are at 95% capacity while its European servers are at 20%. What design issue needs to be addressed?",
        options: [
          "Consistency maintenance",
          "Naming",
          "Security",
          "Resource management",
        ],
        correct: 3,
        explanation:
          "This is a resource management / load balancing problem — the workload needs to be distributed more evenly across available resources so no single set of servers is overwhelmed while others sit idle.",
      },

      // --- P2P NETWORKS (from Week 1 Question Sheet) ---
      {
        id: 13,
        question:
          "What type of machines act as hosts in a peer-to-peer network?",
        options: [
          "Dedicated servers in data centres",
          "Traditional desktop computers in users' homes or offices",
          "Cloud-based virtual machines",
          "Mainframe computers",
        ],
        correct: 1,
        explanation:
          "P2P networks rely on ordinary desktop machines rather than dedicated infrastructure — this is what creates many of the availability and trust challenges.",
      },
      {
        id: 14,
        question:
          "What was the original driving force behind peer-to-peer networking?",
        options: [
          "Enterprise file storage",
          "Video conferencing",
          "Email communication",
          "Music downloads",
        ],
        correct: 3,
        explanation:
          "Music sharing (e.g. Napster) was the original killer app for P2P. Users could tolerate occasional unavailability when downloading tracks.",
      },
      {
        id: 15,
        question:
          "Which of the following is NOT identified as a risk of using home/office PCs as P2P hosts?",
        options: [
          "High server licensing costs",
          "Extended user absences (holidays, travel)",
          "Users turning their computers off",
          "Network connections exposed to attack",
        ],
        correct: 0,
        explanation:
          "There are no server licensing costs in P2P — that's a client-server concern. The real P2P risks are around availability (machines off) and security (attacks, untrusted nodes).",
      },
      {
        id: 16,
        question:
          "Why is the trustworthiness of P2P participants identified as a concern?",
        options: [
          "The owner of participating computers is likely unknown to other participants",
          "They always use outdated software",
          "They have unlimited bandwidth access",
          "They are contractually required to share all files",
        ],
        correct: 0,
        explanation:
          "Because P2P participants are typically unknown to each other, their trustworthiness cannot be verified — and with current systems, owners have full control over the data on their machines.",
      },
      {
        id: 17,
        question: "How does replication address availability in P2P networks?",
        options: [
          "By using faster internet connections",
          "By requiring all nodes to stay online 24/7",
          "By spreading copies across many nodes so all being offline simultaneously is unlikely",
          "By using dedicated backup servers",
        ],
        correct: 2,
        explanation:
          "If replicas are sufficiently widespread and numerous, the probability that ALL copies are unavailable at the same time can be reduced to a negligible level.",
      },
      {
        id: 18,
        question:
          "What mechanism is used to verify data integrity across multiple replicas?",
        options: [
          "Exchanging and comparing hashes of the data object",
          "Manual file inspection",
          "Sending duplicate copies via email",
          "Running antivirus scans on each node",
        ],
        correct: 0,
        explanation:
          "Nodes perform a consensus algorithm by exchanging hashes of the object's value and comparing them to detect inconsistencies or tampering.",
      },
      {
        id: 19,
        question: "How does a secure hash identifier work?",
        options: [
          "The file name is used as the unique ID",
          "The object's ID is derived from its hash code",
          "A random number is assigned when the file is uploaded",
          "The uploader's IP address becomes the file ID",
        ],
        correct: 1,
        explanation:
          "The object's ID is derived from its hash code. When a client receives the object, it recalculates the hash and checks it matches the ID — if the data was tampered with, the hash won't match.",
      },
      {
        id: 20,
        question:
          "What type of attack are P2P network connections particularly vulnerable to?",
        options: [
          "SQL injection",
          "Cross-site scripting (XSS)",
          "Denial of Service (DoS) attacks",
          "Man-in-the-browser attacks",
        ],
        correct: 2,
        explanation:
          "Network connections between peer computers are exposed to attack, with DoS attacks specifically highlighted as a vulnerability for P2P systems.",
      },
    ],

    flashcards: [
      // --- CORE CONCEPTS ---
      {
        id: 1,
        front: "Give two definitions of a distributed system.",
        back: "Coulouris: Hardware/software at networked computers that communicate and coordinate only by message passing.\n\nTanenbaum: A collection of independent computers that appears to users as a single computer.",
      },
      {
        id: 2,
        front: "What are the three ways of doing things faster?",
        back: "1) Work HARDER (brute force / crunch time)\n2) Work SMARTER (efficiency / shortcuts)\n3) Get HELP (collaboration / distribution)",
      },
      {
        id: 3,
        front: "How do the 'three ways to go faster' map to computing?",
        back: "Work Harder = hardware performance (faster CPUs, more RAM)\nWork Smarter = better algorithms\nGet Help = distributed / parallel processing (multiple machines)",
      },
      {
        id: 4,
        front: "Give six examples of distributed systems.",
        back: "1) Network File System (NFS)\n2) The Web (page retrieval, CGI scripts)\n3) ATM / cash machines\n4) Network printers\n5) Distributed Shared Memory (DSM)\n6) Distributed objects (CORBA, Java RMI)",
      },

      // --- ISSUES ---
      {
        id: 5,
        front: "Name the four key issues that must be addressed in distributed systems.",
        back: "1) Costly communications — bandwidth and latency vs local processing\n2) Unreliable communications — messages lost, corrupted, machines unavailable\n3) Independent failure — system must keep working after partial failure\n4) Insecure communications — exposed to unauthorised / malicious access",
      },
      {
        id: 6,
        front: "What are the building blocks of DS communications?",
        back: "Layered structure (OSI / TCP-IP):\n- Data link layer (bits on a wire)\n- Packet switching\n- Addressing and routing\n- Reliable data streams\n- RPC + higher protocols (HTTP, SNMP)\n\nBut DS is NOT strictly layered — mix and match as needed.",
      },
      {
        id: 7,
        front: "What are the three levels of the DS road map?",
        back: "1) FUNDAMENTALS (low-level): processes, threads, concurrency, synchronisation, RPC, naming, caching\n2) MIDDLEWARE (OS-level): scheduling, transactions, replication, fault-tolerance, persistence\n3) APPLICATION (high-level): DSM, distributed objects, security",
      },

      // --- DESIGN ISSUES ---
      {
        id: 8,
        front: "Design Issue — NAMING: What is required?",
        back: "Names must have GLOBAL meanings:\n- Independent of object location\n- Supported by a name translation system\n- Must scale and translate efficiently\n\nKey point: the same name works everywhere.",
      },
      {
        id: 9,
        front: "Design Issue — ACCESS: What is required?",
        back: "Same functions usable everywhere with reasonable performance.\n\nGlobal access includes DATA COHERENCE — all users see a consistent view of the data.",
      },
      {
        id: 10,
        front: "Design Issue — SOFTWARE STRUCTURE: What is openness?",
        back: "Openness = software built with well-defined interfaces (APIs).\n\nData abstraction is important.\n\nKey challenge: design a framework that inter-works with existing AND new services without duplicating what already exists.",
      },
      {
        id: 11,
        front: "Design Issue — RESOURCE MANAGEMENT: What does it involve?",
        back: "Deploying processing and communication resources to optimum effect for a changing workload.\n\nKey concept: LOAD BALANCING — distributing work evenly across available resources.",
      },
      {
        id: 12,
        front: "Design Issue — CONSISTENCY MAINTENANCE: What areas does it cover?",
        back: "Consistency of:\n- Data (concurrent access)\n- Replication (fault tolerance)\n- Cache (performance / availability)\n- Failure handling (master/slave, e.g. DNS)\n- Time (synchronisation)\n- User Interface (ergonomics / usability)",
      },
      {
        id: 13,
        front: "Design Issue — SECURITY: What are the three components?",
        back: "1) AUTHENTICATION — ensure users have the right to access resources\n2) ACCESS CONTROL — different levels of access for different users\n3) AUDITING — log every resource access as evidence (audit trail)",
      },

      // --- SUMMARY ---
      {
        id: 14,
        front: "Name four advantages of distributed systems.",
        back: "1) Price vs performance (cheaper than one powerful machine)\n2) Lower application turnaround time\n3) Reliability (redundancy)\n4) Incremental growth as workload increases",
      },
      {
        id: 15,
        front: "Name four disadvantages of distributed systems.",
        back: "1) Complexity of software (system and application level)\n2) Communications bottlenecks\n3) Weaker security (more attack surface)\n4) Reliability is also harder (failure modes are more complex)",
      },

      // --- P2P NETWORKS ---
      {
        id: 16,
        front: "What type of machines act as hosts in a P2P network?",
        back: "Traditional desktop computers in users' homes/offices — not dedicated servers.",
      },
      {
        id: 17,
        front:
          "Name three availability risks of using home/office PCs as P2P hosts.",
        back: "1) Users turn machines off when not in use\n2) Extended absences (holidays, travel) cause prolonged downtime\n3) No guaranteed uptime — no obligation to stay online",
      },
      {
        id: 18,
        front: "Name three security/trust risks in a P2P network.",
        back: "1) Identity of participants may be unknown — trustworthiness unverified\n2) Owners have full control — can modify or delete hosted data\n3) Network connections exposed to attacks (e.g. DoS)",
      },
      {
        id: 19,
        front:
          "Why does the impact of P2P risks depend on the application?",
        back: "Low-stakes (e.g. music sharing) — users can wait for a host to come online.\nHigh-stakes (e.g. file storage) — availability and data integrity are critical.",
      },
      {
        id: 20,
        front: "How does replication address availability in P2P?",
        back: "By spreading copies across many nodes, the chance of ALL replicas being offline simultaneously becomes negligible.",
      },
      {
        id: 21,
        front:
          "How can data integrity be verified across multiple replicas?",
        back: "Use a consensus algorithm — nodes exchange hashes of the data object and compare them to detect inconsistencies or tampering.",
      },
      {
        id: 22,
        front: "What is a secure hash identifier and how does it work?",
        back: "The object's ID is derived from its hash code. When received, the client recalculates the hash and checks it matches the ID. If tampered with, the hash won't match.",
      },
      {
        id: 23,
        front:
          '"To what extent" does replication overcome P2P weaknesses?',
        back: "Availability: very well (enough copies = near-constant access).\nIntegrity/Trust: needs additional mechanisms — consensus algorithms and hash-based verification. Replication alone is not enough.",
      },
      {
        id: 24,
        front: "What are the two core risk categories in P2P networks?",
        back: "1) Availability — nodes going offline unpredictably\n2) Integrity/Trust — nodes being untrustworthy, data being altered or corrupted",
      },
      {
        id: 25,
        front: "What is the fundamental trade-off of P2P vs client-server?",
        back: "P2P trades the reliability and control of dedicated servers for decentralisation and shared resources across ordinary machines.",
      },
    ],

    shortAnswers: [
      // --- LECTURE CONTENT ---
      {
        id: 1,
        question:
          "Define what a distributed system is, using two definitions from the literature, and explain how they differ in emphasis.",
        marks: 4,
        markingGuide: [
          "Coulouris definition: hardware/software at networked computers that communicate and coordinate only by message passing",
          "Tanenbaum definition: a collection of independent computers that appears to users as a single computer",
          "Coulouris emphasises the mechanism — communication happens through message passing only (no shared memory)",
          "Tanenbaum emphasises the user's perspective — the distribution should be invisible to the user",
        ],
        hint: "Think about whether each definition focuses on how the system works internally or how it looks from the outside.",
      },
      {
        id: 2,
        question:
          "Describe the four key issues that must be addressed when building a distributed system.",
        marks: 4,
        markingGuide: [
          "Costly communications: bandwidth and latency are expensive compared to local processing within a single machine",
          "Unreliable communications: connections may be unavailable, messages may be lost or corrupted, remote computers may be down",
          "Independent failure: the distributed system needs to continue working even after failure of part of the network or individual computers",
          "Insecure communications: network connections are exposed to unauthorised access that may be malicious",
        ],
        hint: "Think about what could go wrong when you start connecting computers together over a network — cost, reliability, partial failure, and who might be listening.",
      },
      {
        id: 3,
        question:
          "Explain the 'consistency maintenance' design issue, describing at least four areas where consistency must be maintained.",
        marks: 5,
        markingGuide: [
          "Data consistency: managing concurrent access to the same data by multiple users or processes",
          "Replication consistency: ensuring replicated copies of data remain consistent for fault tolerance",
          "Cache consistency: keeping cached data consistent with the original for performance and availability",
          "Failure consistency: maintaining consistent behaviour when components fail (e.g. master/slave relationships in DNS)",
          "Time consistency: synchronising clocks across distributed nodes",
          "User interface consistency: maintaining a consistent and usable interface (ergonomics/ease of use)",
        ],
        hint: "Think about all the different things that could get 'out of sync' when you have many computers working together — data, copies, cached versions, what happens during failures, and even time itself.",
      },
      {
        id: 4,
        question:
          "Compare the advantages and disadvantages of distributed systems. Why might reliability appear on both lists?",
        marks: 4,
        markingGuide: [
          "Advantages include: better price-to-performance ratio, lower application turnaround, reliability through redundancy, incremental growth",
          "Disadvantages include: software complexity, communications bottlenecks, weaker security, reliability challenges",
          "Reliability is an advantage because redundancy means the system can survive individual failures — if one node goes down, others continue",
          "Reliability is also a disadvantage because failure modes in distributed systems are more complex — partial failures, network partitions, and inconsistent states are harder to handle than a single machine simply crashing",
        ],
        hint: "Think about what happens when one computer in a group of ten fails versus when a single standalone computer fails — there's a positive side and a much trickier side.",
      },

      // --- P2P CONTENT ---
      {
        id: 5,
        question:
          "Explain two implications of using home desktop computers as hosts in a P2P network.",
        marks: 4,
        markingGuide: [
          "Availability issue: users turn their machines off when not in use, making data inaccessible",
          "Availability issue: extended absences (holidays, travel) cause prolonged unavailability",
          "Security/trust issue: participants are likely unknown, so trustworthiness cannot be verified",
          "Security/trust issue: owners have full control over data and may modify or delete it",
          "Security issue: network connections between peers are exposed to attacks including DoS",
        ],
        hint: "Think about what happens when someone goes on holiday, and whether you'd trust a stranger with your data.",
      },
      {
        id: 6,
        question:
          "Describe how replication can overcome availability issues in a P2P network.",
        marks: 3,
        markingGuide: [
          "Data is copied/replicated across multiple different nodes in the network",
          "If replicas are sufficiently widespread and numerous, the chance of all being unavailable simultaneously is negligible",
          "This means data remains accessible even when individual nodes go offline",
        ],
        hint: "Consider what happens when you have many copies of something spread across many places.",
      },
      {
        id: 7,
        question:
          "Explain how secure hash identifiers help maintain data integrity in a P2P network.",
        marks: 4,
        markingGuide: [
          "The object's ID is derived from / based on its hash code",
          "The hash code acts as the address used to locate and identify the object",
          "When a client receives the object, it recalculates the hash",
          "The recalculated hash is compared with the ID to verify the data hasn't been tampered with",
        ],
        hint: "Think about how you might create a fingerprint for a piece of data that could be checked later.",
      },
      {
        id: 8,
        question:
          "Why might P2P availability concerns matter more for file storage than for music downloads?",
        marks: 3,
        markingGuide: [
          "Music downloads: users can tolerate waiting for a host to come back online — delay is acceptable",
          "File storage: requires reliable, consistent access to data — availability is critical",
          "File storage: data integrity matters more — files may be important documents that cannot be lost or corrupted",
        ],
        hint: "Think about the consequences of waiting for a song vs waiting for an important document.",
      },
      {
        id: 9,
        question:
          "Describe the consensus approach to verifying data integrity across multiple hosts in a P2P network.",
        marks: 3,
        markingGuide: [
          "Multiple hosts holding replicas exchange hashes of the data object's value",
          "The exchanged hashes are compared with each other to check for consistency",
          "If hashes match, the data is agreed upon as correct; if they differ, tampering or error is detected",
        ],
        hint: "Imagine several people each have a copy of a document — how could they check they all have the same version?",
      },
    ],
  },
};

export const moduleInfo = {
  name: "Distributed Systems",
  code: "Y3",
  totalWeeks: 12,
};

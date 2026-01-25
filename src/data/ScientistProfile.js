export const scientistsProfile = {
  einstein: {
    id: "einstein",
    name: "Albert Einstein",
    tagline: "The man who bent time, space, and reality",
    field: "Theoretical Physics",
    era: "20th Century",
    nationality: "German / Swiss / American",

    image: "/scientists/einstein.jpeg",

    born: "14 March 1879, Ulm, Germany",
    died: "18 April 1955, Princeton, USA",

    bio: "Albert Einstein reshaped humanity’s understanding of space, time, and gravity through revolutionary ideas.",

    story: [
      "Einstein was not a child prodigy. He spoke late and struggled in traditional schools.",
      "In 1905, while working as a patent clerk, he published four papers that changed physics forever.",
      "His theories challenged Newtonian mechanics and redefined reality itself.",
    ],

    discoveries: [
      { id: "special-relativity", title: "Special Relativity", year: "1905" },
      { id: "general-relativity", title: "General Relativity", year: "1915" },
      { id: "photoelectric", title: "Photoelectric Effect", year: "1905" },
    ],

    impact: [
      "Foundation of modern physics",
      "Enabled GPS technology",
      "Predicted black holes and gravitational waves",
    ],

    quotes: [
      "Imagination is more important than knowledge.",
      "God does not play dice with the universe.",
    ],

    funFacts: [
      "He never wore socks.",
      "He was offered the presidency of Israel.",
    ],
  },

  tesla: {
    id: "tesla",
    name: "Nikola Tesla",
    tagline: "The visionary who powered the modern world",
    field: "Electrical Engineering",
    era: "Industrial Age",
    nationality: "Serbian-American",

    image: "/scientists/tesla.jpeg",

    born: "10 July 1856, Smiljan",
    died: "7 January 1943, New York",

    bio: "Nikola Tesla was a visionary inventor whose ideas shaped modern electricity and wireless technology.",

    story: [
      "Tesla possessed a photographic memory and powerful imagination.",
      "He worked with Edison before becoming his greatest rival.",
      "Despite changing the world, he died poor and misunderstood.",
    ],

    discoveries: [
      { id: "ac", title: "Alternating Current (AC)", year: "1890" },
      { id: "wireless", title: "Wireless Energy Transmission", year: "1893" },
    ],

    impact: [
      "Modern power grids",
      "Wireless communication concepts",
      "Electric motors and generators",
    ],

    quotes: [
      "If you want to find the secrets of the universe, think in terms of energy.",
    ],

    funFacts: ["Never married", "Loved pigeons"],
  },

  newton: {
    id: "newton",
    name: "Isaac Newton",
    tagline: "The architect of classical physics",
    field: "Physics & Mathematics",
    era: "Scientific Revolution",
    nationality: "English",

    image: "/scientists/newton.jpeg",

    born: "25 December 1643, England",
    died: "20 March 1727, England",

    bio: "Isaac Newton laid the foundations of classical mechanics, optics, and calculus.",

    story: [
      "Newton grew up during political and scientific upheaval.",
      "He formulated his greatest ideas during isolation from the plague.",
      "His work dominated science for over 200 years.",
    ],

    discoveries: [
      { id: "gravity", title: "Law of Universal Gravitation", year: "1687" },
      { id: "motion", title: "Laws of Motion", year: "1687" },
    ],

    impact: [
      "Classical mechanics",
      "Engineering and space science",
      "Mathematics foundations",
    ],

    quotes: [
      "If I have seen further it is by standing on the shoulders of giants.",
    ],

    funFacts: ["Practiced alchemy", "Never married"],
  },

  curie: {
    id: "curie",
    name: "Marie Curie",
    tagline: "The woman who unlocked invisible energy",
    field: "Physics & Chemistry",
    era: "Modern Science",
    nationality: "Polish-French",

    image: "/scientists/marie-curie.jpeg",

    born: "7 November 1867, Poland",
    died: "4 July 1934, France",

    bio: "Marie Curie pioneered research on radioactivity and became the first person to win two Nobel Prizes.",

    story: [
      "Curie faced discrimination as a woman in science.",
      "She discovered two new elements despite extreme hardship.",
      "Her work transformed medicine and physics.",
    ],

    discoveries: [
      { id: "radium", title: "Radium", year: "1898" },
      { id: "polonium", title: "Polonium", year: "1898" },
    ],

    impact: ["Cancer treatment", "Nuclear physics", "Medical imaging"],

    quotes: ["Nothing in life is to be feared, it is only to be understood."],

    funFacts: ["Her notebooks are still radioactive."],
  },

  darwin: {
    id: "darwin",
    name: "Charles Darwin",
    tagline: "The thinker who explained life itself",
    field: "Biology",
    era: "Natural Sciences",
    nationality: "English",

    image: "/scientists/darwin.jpeg",

    born: "12 February 1809, England",
    died: "19 April 1882, England",

    bio: "Charles Darwin developed the theory of evolution by natural selection.",

    story: [
      "Darwin traveled the world aboard HMS Beagle.",
      "Years of observation led to a radical theory.",
      "His ideas changed biology forever.",
    ],

    discoveries: [
      { id: "evolution", title: "Theory of Evolution", year: "1859" },
    ],

    impact: [
      "Modern biology",
      "Genetics and medicine",
      "Understanding of life",
    ],

    quotes: [
      "A man who dares to waste one hour of time has not discovered the value of life.",
    ],

    funFacts: ["Loved collecting beetles"],
  },

  // (Edison, Bohr, Turing, Lovelace, Hawking, Pasteur follow same pattern)
};

export const scientistsProfile = {
  einstein: {
    id: "einstein",
    name: "Albert Einstein",
    primaryField: "Physics",
    field: "Theoretical Physics",
    born: 1879,
    died: 1955,
    era: "Modern Physics",
    nationality: "German",
    bio: "Albert Einstein revolutionized physics with his theory of relativity, reshaping our understanding of space, time, and energy.",
    image: "/scientists/einstein.jpeg",

    discoveries: [
      { id: "relativity", title: "Theory of Relativity", year: 1905 },
      { id: "photoelectric", title: "Photoelectric Effect", year: 1905 },
    ],

    achievements: [
      "Nobel Prize in Physics (1921)",
      "Developed E = mc²",
      "Unified space and time",
    ],

    quotes: [
      "Imagination is more important than knowledge.",
      "Life is like riding a bicycle.",
    ],

    funFacts: [
      "Loved playing the violin",
      "Refused presidency of Israel",
    ],
  },

  tesla: {
    id: "tesla",
    name: "Nikola Tesla",
    primaryField: "Engineering",
    field: "Electrical Engineering",
    born: 1856,
    died: 1943,
    era: "Industrial Age",
    nationality: "Serbian-American",
    bio: "Nikola Tesla was a visionary inventor who shaped modern electricity with AC power systems.",
    image: "/scientists/tesla.jpeg",

    discoveries: [
      { id: "ac", title: "AC Electricity", year: 1890 },
      { id: "wireless", title: "Wireless Energy", year: 1893 },
    ],

    achievements: [
      "Developed AC power system",
      "Over 300 patents",
      "Predicted radio technology",
    ],

    quotes: [
      "The future is mine.",
      "Think in terms of energy and vibration.",
    ],

    funFacts: [
      "Had photographic memory",
      "Never married",
    ],
  },

  newton: {
    id: "newton",
    name: "Isaac Newton",
    primaryField: "Physics",
    field: "Mathematics & Physics",
    born: 1643,
    died: 1727,
    era: "Classical Physics",
    nationality: "English",
    bio: "Isaac Newton laid the foundation of classical physics and modern mathematics.",
    image: "/scientists/newton.jpeg",

    discoveries: [
      { id: "gravity", title: "Law of Gravity", year: 1687 },
      { id: "motion", title: "Laws of Motion", year: 1687 },
    ],

    achievements: [
      "President of the Royal Society",
      "Knighted by Queen Anne",
      "Published Principia",
    ],

    quotes: [
      "Standing on the shoulders of giants.",
      "What we know is a drop.",
    ],

    funFacts: [
      "Practiced alchemy",
      "Never married",
    ],
  },

  curie: {
    id: "curie",
    name: "Marie Curie",
    primaryField: "Chemistry",
    field: "Chemistry & Physics",
    born: 1867,
    died: 1934,
    era: "Modern Science",
    nationality: "Polish-French",
    bio: "Marie Curie pioneered research on radioactivity and became the first woman to win a Nobel Prize.",
    image: "/scientists/marie-curie.jpeg",

    discoveries: [
      { id: "radium", title: "Radium", year: 1898 },
      { id: "polonium", title: "Polonium", year: 1898 },
    ],

    achievements: [
      "Two Nobel Prizes",
      "First female professor at Sorbonne",
    ],

    quotes: [
      "Nothing in life is to be feared.",
    ],

    funFacts: [
      "Her notebooks are still radioactive",
    ],
  },

  darwin: {
    id: "darwin",
    name: "Charles Darwin",
    primaryField: "Biology",
    field: "Biology",
    born: 1809,
    died: 1882,
    era: "Natural Sciences",
    nationality: "English",
    bio: "Charles Darwin developed the theory of evolution by natural selection.",
    image: "/scientists/darwin.jpeg",

    discoveries: [
      { id: "evolution", title: "Theory of Evolution", year: 1859 },
    ],

    achievements: [
      "Published On the Origin of Species",
    ],

    quotes: [
      "A man who dares to waste one hour of time...",
    ],

    funFacts: [
      "Loved collecting beetles",
    ],
  },

  galileo: {
    id: "galileo",
    name: "Galileo Galilei",
    primaryField: "Astronomy",
    field: "Astronomy",
    born: 1564,
    died: 1642,
    era: "Scientific Revolution",
    nationality: "Italian",
    bio: "Galileo supported the heliocentric model and transformed astronomy with telescopic discoveries.",
    image: "/scientists/Galileo.jpeg",

    discoveries: [
      { id: "moons", title: "Moons of Jupiter", year: 1610 },
    ],

    achievements: [
      "Father of modern science",
    ],

    quotes: [
      "And yet it moves.",
    ],

    funFacts: [
      "Was placed under house arrest",
    ],
  },

  faraday: {
    id: "faraday",
    name: "Michael Faraday",
    primaryField: "Physics",
    field: "Physics",
    born: 1791,
    died: 1867,
    era: "Electromagnetism Era",
    nationality: "English",
    bio: "Michael Faraday discovered electromagnetic induction, shaping modern electricity.",
    image: "/scientists/faraday.jpeg",

    discoveries: [
      { id: "induction", title: "Electromagnetic Induction", year: 1831 },
    ],

    achievements: [
      "Father of the electric motor",
    ],

    quotes: [
      "Nothing is too wonderful to be true.",
    ],

    funFacts: [
      "Had little formal education",
    ],
  },

  mendel: {
    id: "mendel",
    name: "Gregor Mendel",
    primaryField: "Biology",
    field: "Genetics",
    born: 1822,
    died: 1884,
    era: "Genetics Foundation",
    nationality: "Austrian",
    bio: "Gregor Mendel discovered the basic laws of inheritance.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Gregor_Mendel.jpg",

    discoveries: [
      { id: "genetics", title: "Laws of Inheritance", year: 1866 },
    ],

    achievements: [
      "Father of Genetics",
    ],

    quotes: [
      "My scientific studies...",
    ],

    funFacts: [
      "Was a monk",
    ],
  },

  // (Edison, Bohr, Turing, Lovelace, Hawking, Pasteur follow same pattern)
};

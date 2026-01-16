export const scientistsProfile = {
  einstein: {
    name: "Albert Einstein",
    field: "Theoretical Physics",
    born: "1879",
    died: "1955",
    bio: "Albert Einstein revolutionized physics with his theory of relativity, reshaping our understanding of space, time, and energy.",
    image:
      "/scientists/einstein.jpeg",
    discoveries: [
      { id: "relativity", title: "Theory of Relativity", year: "1905" },
      { id: "photoelectric", title: "Photoelectric Effect", year: "1905" },
    ],
    achievements: [
      "Nobel Prize in Physics (1921)",
      "Developed E=mc² equation",
      "Unified space and time",
    ],
    quotes: [
      "Imagination is more important than knowledge.",
      "Life is like riding a bicycle.",
    ],
    funFacts: ["Loved playing the violin.", "Refused presidency of Israel."],
  },

  tesla: {
    name: "Nikola Tesla",
    field: "Electrical Engineering",
    born: "1856",
    died: "1943",
    bio: "Nikola Tesla was a visionary inventor who shaped modern electricity with AC power systems.",
    image: "/scientists/tesla.jpeg",
    discoveries: [
      { id: "ac", title: "AC Electricity", year: "1890" },
      { id: "wireless", title: "Wireless Energy", year: "1893" },
    ],
    achievements: [
      "Developed AC power system",
      "Over 300 patents",
      "Predicted radio technology",
    ],
    quotes: ["The future is mine.", "Think in terms of energy and vibration."],
    funFacts: ["Had photographic memory.", "Never married."],
  },

  newton: {
    name: "Isaac Newton",
    field: "Mathematics & Physics",
    born: "1643",
    died: "1727",
    bio: "Isaac Newton laid the foundation of classical physics and modern mathematics.",
    image:
      "/scientists/newton.jpeg",
    discoveries: [
      { id: "gravity", title: "Law of Gravity", year: "1687" },
      { id: "motion", title: "Laws of Motion", year: "1687" },
    ],
    achievements: [
      "President of Royal Society",
      "Knighted by Queen Anne",
      "Published Principia",
    ],
    quotes: ["Standing on the shoulders of giants.", "What we know is a drop."],
    funFacts: ["Practiced alchemy.", "Never married."],
  },

  curie: {
    name: "Marie Curie",
    field: "Chemistry & Physics",
    born: "1867",
    died: "1934",
    bio: "Marie Curie pioneered research on radioactivity and became the first woman to win a Nobel Prize.",
    image:
      "/scientists/marie-curie.jpeg",
    discoveries: [
      { id: "radium", title: "Radium", year: "1898" },
      { id: "polonium", title: "Polonium", year: "1898" },
    ],
    achievements: ["Two Nobel Prizes", "First female professor at Sorbonne"],
    quotes: ["Nothing in life is to be feared."],
    funFacts: ["Her notebooks are still radioactive."],
  },

  darwin: {
    name: "Charles Darwin",
    field: "Biology",
    born: "1809",
    died: "1882",
    bio: "Charles Darwin developed the theory of evolution by natural selection.",
    image:
      "/scientists/darwin.jpeg",
    discoveries: [
      { id: "evolution", title: "Theory of Evolution", year: "1859" },
    ],
    achievements: ["Published On the Origin of Species"],
    quotes: ["A man who dares to waste one hour of time..."],
    funFacts: ["Loved collecting beetles."],
  },

  galileo: {
    name: "Galileo Galilei",
    field: "Astronomy",
    born: "1564",
    died: "1642",
    bio: "Galileo supported the heliocentric model and transformed astronomy with telescopic discoveries.",
    image:
      "/scientists/Galileo.jpeg",
    discoveries: [{ id: "moons", title: "Moons of Jupiter", year: "1610" }],
    achievements: ["Father of modern science"],
    quotes: ["And yet it moves."],
    funFacts: ["Was placed under house arrest."],
  },

  faraday: {
    name: "Michael Faraday",
    field: "Physics",
    born: "1791",
    died: "1867",
    bio: "Michael Faraday discovered electromagnetic induction, shaping modern electricity.",
    image:
      "/scientists/faraday.jpeg",
    discoveries: [
      { id: "induction", title: "Electromagnetic Induction", year: "1831" },
    ],
    achievements: ["Father of electric motor"],
    quotes: ["Nothing is too wonderful to be true."],
    funFacts: ["Had little formal education."],
  },

  mendel: {
    name: "Gregor Mendel",
    field: "Genetics",
    born: "1822",
    died: "1884",
    bio: "Gregor Mendel discovered the basic laws of inheritance.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Gregor_Mendel.jpg",
    discoveries: [
      { id: "genetics", title: "Laws of Inheritance", year: "1866" },
    ],
    achievements: ["Father of Genetics"],
    quotes: ["My scientific studies..."],
    funFacts: ["Was a monk."],
  },

  edison: {
    name: "Thomas Edison",
    field: "Engineering",
    born: "1847",
    died: "1931",
    bio: "Thomas Edison invented the phonograph and improved the light bulb.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Thomas_Edison2.jpg",
    discoveries: [{ id: "bulb", title: "Electric Light Bulb", year: "1879" }],
    achievements: ["Over 1,000 patents"],
    quotes: ["Genius is one percent inspiration..."],
    funFacts: ["Was partially deaf."],
  },

  bohr: {
    name: "Niels Bohr",
    field: "Physics",
    born: "1885",
    died: "1962",
    bio: "Niels Bohr developed the modern model of the atom.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Niels_Bohr.jpg",
    discoveries: [{ id: "atom", title: "Bohr Model of Atom", year: "1913" }],
    achievements: ["Nobel Prize in Physics (1922)"],
    quotes: ["An expert is a person..."],
    funFacts: ["Loved soccer."],
  },

  turing: {
    name: "Alan Turing",
    field: "Computer Science",
    born: "1912",
    died: "1954",
    bio: "Alan Turing laid the foundations of computer science and artificial intelligence.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg",
    discoveries: [{ id: "ai", title: "Turing Machine", year: "1936" }],
    achievements: ["Cracked Enigma code"],
    quotes: ["We can only see a short distance ahead..."],
    funFacts: ["Loved long-distance running."],
  },

  lovelace: {
    name: "Ada Lovelace",
    field: "Computer Science",
    born: "1815",
    died: "1852",
    bio: "Ada Lovelace wrote the first computer algorithm.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg",
    discoveries: [
      { id: "programming", title: "First Algorithm", year: "1843" },
    ],
    achievements: ["First computer programmer"],
    quotes: ["The Analytical Engine weaves algebraic patterns."],
    funFacts: ["Was a poet’s daughter."],
  },

  hawking: {
    name: "Stephen Hawking",
    field: "Cosmology",
    born: "1942",
    died: "2018",
    bio: "Stephen Hawking explored black holes and the origin of the universe.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
    discoveries: [
      { id: "radiation", title: "Hawking Radiation", year: "1974" },
    ],
    achievements: ["Author of A Brief History of Time"],
    quotes: ["Intelligence is the ability to adapt to change."],
    funFacts: ["Lived with ALS for 55 years."],
  },

  pasteur: {
    name: "Louis Pasteur",
    field: "Microbiology",
    born: "1822",
    died: "1895",
    bio: "Louis Pasteur discovered germ theory and developed vaccines.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Louis_Pasteur.jpg",
    discoveries: [{ id: "vaccines", title: "Rabies Vaccine", year: "1885" }],
    achievements: ["Father of microbiology"],
    quotes: ["Chance favors the prepared mind."],
    funFacts: ["Saved many lives with vaccines."],
  },
};

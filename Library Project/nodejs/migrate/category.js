const category = require("../src/models/category");
const data = [
  {
    category: "Programming",
    description:
      "Programmers write code for computer programs and mobile applications.",
  },
  {
    category: "Artificial Intelligence",
    description:
      "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems.",
  },
  {
    category: "Database",
    description:
      "An algorithm is a procedure used for solving a problem or performing a computation. Algorithms act as a precise list of instructions that conduct specified actions step by step in either hardware- or software-based routines. Algorithms are widely used throughout all areas of IT.",
  },
  {
    category: "History",
    description:
      "events of the past and especially those relating to a particular place or subject European history.",
  },
  {
    category: "Fantasy",
    description:
      "events of the past and especially those relating to a particular place or subject European history.",
  },
  {
    category: "Math",
    description:
      "Mathematics is the science and study of quality, structure, space, and change. Mathematicians seek out patterns, formulate new conjectures, and establish truth by rigorous deduction from appropriately chosen axioms and definitions.",
  },
  {
    category: "Physic",
    description:
      "Physical indicates connected with, pertaining to, the animal or human body as a material organism: physical strength, exercise. Bodily means belonging to, concerned with, the human body as distinct from the mind or spirit: bodily pain or suffering. ",
  },
  {
    category: "Statistic",
    description:
      "Statistics is the science concerned with developing and studying methods for collecting, analyzing, interpreting and presenting empirical data.",
  },
  {
    category: "Algorithm",
    description:
      "An algorithm is a procedure used for solving a problem or performing a computation. Algorithms act as a precise list of instructions that conduct specified actions step by step in either hardware- or software-based routines. Algorithms are widely used throughout all areas of IT.",
  },


  {
    category: "Language",
    description:
      "An algorithm is a procedure used for solving a problem or performing a computation. Algorithms act as a precise list of instructions that conduct specified actions step by step in either hardware- or software-based routines. Algorithms are widely used throughout all areas of IT.",
  },
  {
    category: "philosophy",
    description:
      "An algorithm is a procedure used for solving a problem or performing a computation. Algorithms act as a precise list of instructions that conduct specified actions step by step in either hardware- or software-based routines. Algorithms are widely used throughout all areas of IT.",
  },

];
const createCategory = async () => {
  const result = await category.insertMany(data);
  console.log("Insert Category Successfully");
  return result;
};

module.exports = {
  createCategory,
};

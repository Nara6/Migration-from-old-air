const language = require("../src/models/language");
const data = [
  {
    language:"English"
  },
  {
    language:"Khmer"
  },
  {
    language:"France"
  },
];
const createLanguage = async () => {
  const result = await language.insertMany(data);
  console.log("Insert Language Successfully");
  return result;
};

module.exports = {
  createLanguage
};

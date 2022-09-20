const generatePassword = (words) => {
  const { keyword, app } = words;
  const numbers = keyword[0].charCodeAt(0) + app[0].charCodeAt(0);
  console.log(numbers);
  return words.keyword.toLowerCase() + words.app.toLowerCase();
};

export default generatePassword;

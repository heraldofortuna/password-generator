const generatePassword = (words) => {
  return words.keyword.toLowerCase() + words.app.toLowerCase();
};

export default generatePassword;

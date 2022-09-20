const getTwoDigits = (number) => {
  return number < 10 ? "0" + number.toString() : number.toString();
};

const getCode = (letter) => {
  return letter.charCodeAt(0) - 96;
};

const encode = (letter, positions) => {
  const code = getCode(letter);
  const newCode = (code + positions) % 26;
  const newLetter = String.fromCharCode(newCode + 96);

  return newLetter;
};

const generatePassword = (words) => {
  const { keyword, app } = words;
  const letter = app.toLowerCase()[0];

  return (
    keyword
      .split("")
      .map((letter) => encode(letter, 3))
      .join("") +
    "_%" +
    getTwoDigits(getCode(letter))
  );
};

export default generatePassword;

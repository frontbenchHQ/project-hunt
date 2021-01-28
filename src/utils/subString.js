const subString = (text, length) =>
  text.length > length ? `${text.slice(0, length)}...` : text;
export default subString;

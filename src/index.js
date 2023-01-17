module.exports = function check(str, bracketsConfig) {
  const bracketArray = bracketsConfig.map((cur) => cur.join(""));

  while (true) {
    let newString = str;
    for (let i = 0; i < bracketArray.length; i++) {
      str = str.replace(bracketArray[i], "");
    }
    if (newString === str) break;
  }
  return !Boolean(str);
};

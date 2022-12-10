const string = 'abababcababd';

const getRepeatedCharacters = function (string) {
  const output = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i] + 1) {
      output.push(string[i]);
    } else {
      console.log(string[i]);
    }
  }
  return output;
};

console.log(getRepeatedCharacters(string));

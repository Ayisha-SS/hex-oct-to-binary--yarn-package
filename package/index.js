
const hexToBinary = hex => {
    return parseInt(hex, 16).toString(2);
  };
  
  const octToBinary = oct => {
    return parseInt(oct, 8).toString(2);
  };
  
  module.exports = { hexToBinary, octToBinary };
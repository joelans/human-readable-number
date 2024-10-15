  const hm = new Map();
  hm.set(0, "zero");
  hm.set(1, "one");
  hm.set(2, "two");
  hm.set(3, "three");
  hm.set(4, "four");
  hm.set(5, "five");
  hm.set(6, "six");
  hm.set(7, "seven");
  hm.set(8, "eight");
  hm.set(9, "nine");
  hm.set(10, "ten");
  hm.set(11, "eleven");
  hm.set(12, "twelve");
  hm.set(13, "thirteen");
  hm.set(14, "fourteen");
  hm.set(15, "fifteen");
  hm.set(16, "sixteen");
  hm.set(17, "seventeen");
  hm.set(18, "eighteen");
  hm.set(19, "nineteen");
  hm.set(20, "twenty");
  hm.set(30, "thirty");
  hm.set(40, "forty");
  hm.set(50, "fifty");
  hm.set(60, "sixty");
  hm.set(70, "seventy");
  hm.set(80, "eighty");
  hm.set(90, "ninety");
  hm.set(100, "hundred");
  
  module.exports = function toReadable (number) {
    let result = "";
    let str = number.toString();
    if(str.length == 1) {
      result = hm.get(parseInt(str));
    } else if(str.length == 2) {
      if(parseInt(str[0] + str[1]) > 20) {
        result += hm.get(parseInt(str[0]) * 10);
        if(str[1] !== "0") result += " " + hm.get(parseInt(str[1]));
      } else result += hm.get(parseInt(str[0] + str[1]));
    } else {
      result = hm.get(parseInt(str[0])) + " hundred";
      if(parseInt(str[1] + str[2]) > 20) {
        result +=  " " + hm.get(parseInt(str[1]) * 10);
        if(str[2] !== "0") result += " " + hm.get(parseInt(str[2]));
      } else if(parseInt(str[1] + str[2]) !== 0) result +=  " " + hm.get(parseInt(str[1] + str[2]));
    }
    return result;
}

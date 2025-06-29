function add(numbers) {
    if (!numbers) return 0;
  
    let delimiterPattern = /,|\n/;
    let customDelimiterMatch = numbers.match(/^\/\/(\[.*\])\n/);
  
    if (customDelimiterMatch) {
      let delimiters = [...customDelimiterMatch[1].matchAll(/\[(.*?)\]/g)].map(m => m[1]);
      delimiterPattern = new RegExp(delimiters.map(d => escapeRegex(d)).join("|"));
      numbers = numbers.replace(/^\/\/.*\n/, "");
    } else if (numbers.startsWith("//")) {
      delimiterPattern = new RegExp(numbers[2]);
      numbers = numbers.slice(4);
    }
  
    const parts = numbers.split(delimiterPattern).map(Number);
    const negatives = parts.filter(n => n < 0);
    if (negatives.length) {
      throw new Error("negatives not allowed " + negatives.join(","));
    }
  
    return parts.filter(n => n <= 1000).reduce((sum, num) => sum + num, 0);
  }
  
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  module.exports = { add };
  
export default function letterCombinations(digits: string): string[] {
  const letters = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  const digitArr = digits.split("");
  const lettters = digitArr.map((digit) => letters[digit].split(""));

  if (lettters.length === 0) {
    return [];
  }

  if (lettters.length === 1) {
    return lettters[0];
  }

  return lettters.reduce((result, cur) => {
    let temp = [];
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < cur.length; j++) {
        temp.push(`${result[i]}${cur[j]}`);
      }
    }

    return temp;
  });
}

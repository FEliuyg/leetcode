export default function countBinarySubstrings(str: string): number {
  // 1. 循环遍历 O(n^2) 超时
  // let result = 0;

  // for (let i = 0; i < str.length - 1; i++) {
  //   let start = str[i];
  //   let j = i;
  //   let stack = [];
  //   let flag = false;
  //   while (j < str.length) {
  //     if (str[j] === start && flag === false) {
  //       stack.push(str[j]);
  //     } else if (str[j] !== start) {
  //       flag = true;
  //       stack.pop();
  //     } else {
  //       break;
  //     }
  //     j++;
  //   }
  //   if (stack.length === 0 && flag === true) {
  //     result++;
  //   }
  // }

  // return result;

  // 2.分割字符，将相同的树分割在一起
  let counts = [];
  let count = 0;
  let start = str[0];
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element === start) {
      count++;
    } else {
      counts.push(count);
      count = 1;
      start = element;
    }
  }
  counts.push(count);

  let result = 0;
  for (let i = 1; i < counts.length; i++) {
    result += Math.min(counts[i - 1], counts[i]);
  }

  return result;
}

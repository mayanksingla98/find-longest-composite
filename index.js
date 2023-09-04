const fs = require("fs");

const finder = (arr) => {
  const sorted = arr.sort((a, b) => b.length - a.length);

  const ln = sorted.length;
  const results = [];

  loop1: for (let idx = 0; idx < ln - 1; idx++) {
    const parent = sorted[idx];

    const remainers = [];
    loop2: for (let idy = idx + 1; idy < ln; idy++) {
      const sub = sorted[idy];
      const splited = parent.split(sub);
      const remaining = splited.join("");

      for (let idz = 0; idz < remainers.length; idz++) {
        const [rs, parent_remaining] = remainers[idz];

        const sub_splited = parent_remaining.split(sub);
        const sub_remaining = sub_splited.join("");
        remainers[idz] = [rs, sub_remaining];

        if (sub_remaining.length === 0) {
          results.push(rs);
          if (results[1]) break loop1;
          break loop2;
        }
      }

      if (remaining !== parent) {
        remainers.push([parent, remaining]);
      }
    }
  }

  const sorted_results = results.sort((a, b) => b.length - a.length);

  return sorted_results;
};

const data = fs.readFileSync("sample2.txt", "utf8");
const arr = data.split("\n");

console.time("time_taken");

const result = finder(arr);
console.log("Longest :  " + result[0] + " len : " + result[0].length);
console.log("Second longest :  " + result[1] + " len : " + result[1].length);

console.timeEnd("time_taken");

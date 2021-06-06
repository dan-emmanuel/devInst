let formatDate = (dateObj) => {
  console.log(dateObj);
  let toReturn = `${dateObj.getFullYear()}${`${dateObj.getMonth() + 1}`.padStart(2, 0)}${`${dateObj.getDate()}`.padStart(2, 0)}${`${dateObj.getHours()}`.padStart(2, 0)}${`${dateObj.getMinutes()}`.padStart(2, 0)}${`${dateObj.getSeconds()}`.padStart(2, 0)}`;

  return toReturn;
};

console.log(20200704080000,formatDate(new Date(2020, 6, 4, 8, 0, 0)));
// ➞ "20200704080000"


console.log(20191231235959,formatDate(new Date(2019, 11, 31, 23, 59, 59)));
// ➞ "20191231235959"

console.log(20200704000000,formatDate(new Date(2020, 6, 4)));
// ➞ "20200704000000"

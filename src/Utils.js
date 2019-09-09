export const arrayToObjOnKey = (arr, key) => {
  let res = {};
  arr.forEach(ar => {
    res[ar[key]] = ar;
  });
  return res;
};

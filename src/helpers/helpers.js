export function convertToArray(data) {
  const result = [];
  for (let item of Object.values(data)) {
    result.push(item);
  }
  return result;
};

export function convertToObject(data) {
  const result = {};
  let total = 0;
  for (let item of data) {
    result[item.name] = Number(item.sum);
    total += Number(item.sum);
  }
  result.total = total;
  console.log(result);
  return result;
}
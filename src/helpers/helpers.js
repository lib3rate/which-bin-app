export function convertToArray(data) {
  const result = [];
  for (let item of Object.values(data)) {
    result.push(item);
  }
  return result;
};

export function convertToObject(data) {
  const result = {};
  for (let item of data) {
    result.user = item;
  }
  return result.user;
}
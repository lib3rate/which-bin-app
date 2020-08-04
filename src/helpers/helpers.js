export function convertToArray(data) {
  const result = [];
  for (let item of Object.values(data)) {
    result.push(item);
  }
  return result;
}
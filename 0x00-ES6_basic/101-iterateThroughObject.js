export default function iterateThroughObject(reportWithIterator) {
  const newArr = [];
  for (const value of reportWithIterator) {
    newArr.push(value);
  }
  return newArr.join(' | ');
}

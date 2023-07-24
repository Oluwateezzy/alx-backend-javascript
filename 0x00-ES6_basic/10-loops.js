export default function appendToEachArrayValue(array, appendString) {
  const newArr = []
  for (var value of array) {
    newArr.push(`${appendString}${value}`)
  }

  return newArr;
}
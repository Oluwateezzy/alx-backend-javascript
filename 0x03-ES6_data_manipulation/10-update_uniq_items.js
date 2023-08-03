export default function updateUniqueItems(mapd) {
  if (!(mapd instanceof Map)) {
    throw new Error('Cannot process');
  }
  return mapd.forEach((element, index) => {
    if (element === 1) {
      mapd.set(index, 100);
    }
  });
}

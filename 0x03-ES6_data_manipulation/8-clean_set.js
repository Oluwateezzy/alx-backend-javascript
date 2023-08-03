export default function cleanSet(set, startWith) {
  if (!startWith || startWith.length === 0) {
    return '';
  }
  const filtered = Array.from(set).filter((value) => value.startsWith(startWith));
  return filtered.map((value) => value.slice(startWith.length)).join('-');
}

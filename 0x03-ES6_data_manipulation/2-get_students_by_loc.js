export default function getStudentsByLocation(lists, loc) {
  return lists.filter((list) => list.location === loc);
}

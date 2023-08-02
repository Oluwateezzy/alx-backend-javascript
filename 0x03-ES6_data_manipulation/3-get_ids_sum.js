export default function getStudentIdsSum(lists) {
  return lists.reduce((prev, next) => prev + next.id, 0);
}

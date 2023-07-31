import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [19, 20, 34];
  const room = arr.map((value) => new ClassRoom(value));
  return room;
}

interface IUser {
  id: string;
  name: string;
  room: string;
}

const users: IUser[] = [];

export function addUser({id, name, room}: IUser) {
  const formattedName = name.trim().toLowerCase();
  const formattedRoom = room.trim().toLowerCase();

  const existingUser = users.find(
    user => user.room === formattedRoom && user.name === formattedName
  );

  if (existingUser) {
    return {error: 'Username is taken.'};
  }

  const user = {id, name: formattedName, room: formattedRoom};

  users.push(user);

  return {user};
}

export function removeUser(id: string) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

export function getUser(id: string) {
  return users.find(user => user.id === id);
}

export function getUsersInRoom(room: string) {
  return users.filter(user => user.room === room);
}

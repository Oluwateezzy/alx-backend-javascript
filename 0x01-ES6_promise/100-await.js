import { uploadPhoto, createUser } from './utils';

export default function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((data) => ({ photo: data[0], user: data[1] }))
    .catch(() => ({ photo: null, user: null }));
}

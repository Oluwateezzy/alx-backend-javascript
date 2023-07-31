import handleProfileSignup from './6-final-user';

// console.log(handleProfileSignup('John', 'Doe', 'Gerald.jpg').then(()));
handleProfileSignup("John", "Doe", "Gerald.jpg").then((data) => {
  console.log(data)
});
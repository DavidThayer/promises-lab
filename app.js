const simplehttp = new SimpleHTTP;

// User Data
const userData = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

console.log(new XMLHttpRequest());

// React import and export is from Babel

// Get Users
// simplehttp.get('https://jsonplaceholder.typicode.com/users')
//   .then(res => console.log(res))
//   .catch(res => console.log(err));

// // Create  User
// simplehttp.post('https://jsonplaceholder.typicode.com/users', userData)
//   .then(res => console.log(res))
//   .catch(res => console.log(err));


// // Update  User
// simplehttp.put('https://jsonplaceholder.typicode.com/users/2', userData)
//   .then(res => console.log(res))
//   .catch(res => console.log(err));

// Delete  User
simplehttp.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(res => console.log(res))
  .catch(res => console.log(err));
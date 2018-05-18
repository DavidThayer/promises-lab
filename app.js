const simplehttp = new SimpleHTTP;

// User Data
const userData = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// // Get Users
simplehttp.get('https://jsonplaceholder.typicode.com/users')
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Create  User
simplehttp.post('https://jsonplaceholder.typicode.com/users', userData)
 .then(res => console.log(res))
 .catch(err => console.log(err));

// Update  User
simplehttp.put('https://jsonplaceholder.typicode.com/users/2', userData)
 .then(res => console.log(res))
 .catch(err => console.log(err));

// Delete  User
simplehttp.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(res => console.log(res))
  .catch(err => console.log(err));

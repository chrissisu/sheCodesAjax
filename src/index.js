function displayUsername(response) {
  console.log(response.data.email);
}
let apiUrl = "https://jsonplaceholder.typicode.com/users/1";
axios.get(apiUrl).then(displayUsername);

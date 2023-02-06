// disable eslint for this file
/* eslint-disable */

const users = [
  "Dave", "Gabriela", "Jorge", "Juan", "Luis", "Miguel", "Natalia", "Ricardo", "Sergio", "Sofia", "Tania", "Vicente"
]

let selectedUser = "Dave";
let selectedRepositories = 12;

function changeUser() {
  selectedUser = users[Math.floor(Math.random() * users.length)];
  document.getElementById("title").innerHTML =
    `The user ${selectedUser} has ${selectedRepositories} repositories`;
}

function changeRepos() {
  selectedRepositories = Math.floor(Math.random() * 100);
  document.getElementById("title").innerHTML =
    `The user ${selectedUser} has ${selectedRepositories} repositories`;
}

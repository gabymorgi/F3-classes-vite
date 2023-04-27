// disable eslint for this file
/* eslint-disable */

const users = [
  "Dave", "Gabriela", "Jorge", "Juan", "Luis", "Miguel", "Natalia", "Ricardo", "Sergio", "Sofia", "Tania", "Vicente"
]

function changeUser() {
  const newUser = users[Math.floor(Math.random() * users.length)];
  document.getElementById("title").innerHTML =
    `The user ${newUser} has 12 repositories`;
}

function changeRepos() {
  const newRepos = Math.floor(Math.random() * 100);
  document.getElementById("title").innerHTML =
    `The user Dave has ${newRepos} repositories`;
}
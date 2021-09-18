"use strict";

//const friend =
// const clickedFriend = event.currentTarget;
//
// if (ev.currentTarget.id === friend) {
//   containerBackground.classList.add('friended');
// } else {
//   containerBackground.classList.remove('friended');
// }
//
//
const image = document.querySelector(".js-image");
//// VARIABLES PARA LA FUNCIÓN PAINTUSERS
//let allUsers = [];
//let allUsersImg = [];
//let allUsersName = [];
//let allUsersLogin = [];
//let allUsersCity = [];
//
////FUNCIÓN QUE PINTA LOS DATOS EN LA SECTION
//function paintUsers() {
//  let html = "";
//  for (const info of allUsers) {
//    allUsersLogin = info.results.login;
//    allUsersImg = info.results.picture.medium;
//    allUsersName = info.results.name;
//    allUsersCity = info.results.location.city;
//    html += `<img
//           class="js-image main__section--container--img"
//           id=""
//           src="${allUsersImg}"
//           alt=""
//         />`;
//    html += ` <h3 class="js-user main__section--container--text--user">${allUsersLogin}</h3>`;
//    html += `<h1 class="js-name main__section--container--text--name">${allUsersName}</h1>`;
//    html += `<h3 class="js-city main__section--container--text--city">${allUsersCity}</h3>`;
//  }
//}
//
console.log("antes");
function convertToJS(response) {
  return response.json();
}

function renderToHTML(data) {
  console.log(data);
}

fetch("https://randomuser.me/api/?results=10")
  .then(convertToJS)

  .then(renderToHTML);

console.log("Después");

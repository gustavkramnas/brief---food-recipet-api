"use strict";

let btnClick = document.getElementById("btn");
btnClick.onclick = async function () {
  const resolve = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const data = await resolve.json();

  console.log(data);
  console.log(data.meals);
  console.log(data.meals[0]);
  console.log(data.meals[0].strArea);
  console.log(data.meals[0].strCategory);
  console.log(data.meals[0].strIngredient1);
  console.log(data.meals[0].strIngredient2);
  console.log(data.meals[0].strIngredient3);
  console.log(data.meals[0].strIngredient4);

  //   let video = document.createElement('video')
  //   let sourceone = document.createElement('source');
  //     sourceone.src = "movie.mp4"

  //   let sourcetwo = document.createElement('source')
  //   console.log(video);
  //   console.log(sourceone);
  //   console.log(sourcetwo);

  //   you access all information inside data
  let str = document.getElementById("strArea");
  let strCategory = document.getElementById("strCategory");
  let strIngredient1 = document.getElementById("strIngredient1");
  let strIngredient2 = document.getElementById("strIngredient2");
  let strIngredient3 = document.getElementById("strIngredient3");
  let strIngredient4 = document.getElementById("strIngredient4");
  let strIngredient5 = document.getElementById("strIngredient5");
  let strIngredient6 = document.getElementById("strIngredient6");
  let strIngredient7 = document.getElementById("strIngredient7");
  let strIngredient8 = document.getElementById("strIngredient8");
  let strIngredient9 = document.getElementById("strIngredient9");
  let strIngredient10 = document.getElementById("strIngredient10");
  let strIngredient11 = document.getElementById("strIngredient11");
  let strIngredient12 = document.getElementById("strIngredient12");
  let strIngredient13 = document.getElementById("strIngredient13");
  let strIngredient14 = document.getElementById("strIngredient14");
  let strIngredient15 = document.getElementById("strIngredient15");
  let strIngredient16 = document.getElementById("strIngredient16");
  let strIngredient17 = document.getElementById("strIngredient17");
  let strIngredient18 = document.getElementById("strIngredient18");
  let strIngredient19 = document.getElementById("strIngredient19");
  let strIngredient20 = document.getElementById("strIngredient20");

  str.innerHTML = data.meals[0].strArea;
  strCategory.innerHTML = data.meals[0].strCategory;
  strIngredient1.innerHTML = data.meals[0].strIngredient1;
  strIngredient2.innerHTML = data.meals[0].strIngredient2;
  strIngredient3.innerHTML = data.meals[0].strIngredient3;
  strIngredient4.innerHTML = data.meals[0].strIngredient4;
  strIngredient5.innerHTML = data.meals[0].strIngredient5;
  strIngredient6.innerHTML = data.meals[0].strIngredient6;
  strIngredient7.innerHTML = data.meals[0].strIngredient7;
  strIngredient8.innerHTML = data.meals[0].strIngredient8;
  strIngredient9.innerHTML = data.meals[0].strIngredient9;
  strIngredient10.innerHTML = data.meals[0].strIngredient10;
  strIngredient11.innerHTML = data.meals[0].strIngredient11;
  strIngredient12.innerHTML = data.meals[0].strIngredient12;
  strIngredient13.innerHTML = data.meals[0].strIngredient13;
  strIngredient14.innerHTML = data.meals[0].strIngredient14;
  strIngredient15.innerHTML = data.meals[0].strIngredient15;
  strIngredient16.innerHTML = data.meals[0].strIngredient16;
  strIngredient17.innerHTML = data.meals[0].strIngredient17;
  strIngredient18.innerHTML = data.meals[0].strIngredient18;
  strIngredient19.innerHTML = data.meals[0].strIngredient19;
  strIngredient20.innerHTML = data.meals[0].strIngredient20;
};
// second way to create element dynamically

//let strArea = document.createElement("p");
//   strArea.innerHTML = data.meals[0].strArea;
//   document.body.append(strArea);
//

/* Eskils formel
async function getData() {
  const res = await fetch("https://randomfox.ca/floof/");
  const data = await res.json();

  const img = document.createElement("img");
  img.src = data.image;
  document.body.append(img);
}
getData();
*/

/* 
async function getData() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data = await res.json();

  console.log(data);
}
getData();
 */

/*-------Staffan formel
const getData = async () => {
  const data = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((json) => json);
  return data;

  console.log(data);
};

const start = async () => {
  const result = await getData();
};
start();
//www.themealdb.com/api/json/v1/1/random.php

*/

btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", function () {
  btn[0].style.display = "none";
  btn[1].style.display = "none";
  document.getElementsByTagName("select")[0].style.display = "none";
  render();
});
p = 4;
let figury;
let rand;
function render() {
  let szuk = document.getElementsByTagName("div");
  document
    .getElementsByTagName("body")[0]
    .appendChild(document.createElement("div"));
  szuk[0].setAttribute("class", "plansza");
  for (i = 1; i <= 20; i++) {
    let oblicz = document.querySelectorAll("div").length;
    let cd = document.createElement("div");
    document.getElementsByTagName("div")[0].appendChild(cd);
    szuk[oblicz].setAttribute("class", "rzad");
    for (j = 2; j <= 11; j++) {
      let oblicz1 = document.querySelectorAll("div").length;
      let cd1 = document.createElement("div");
      document.getElementsByTagName("div")[oblicz].appendChild(cd1);
      szuk[oblicz1].setAttribute("class", "kwadrat");
      console.log(document.querySelectorAll("div").length);
    }
  }
  stworzblok();
}
function stworzblok() {
  setInterval(() => {
    
  
    rysuj()
  for (r = 0; r < 4; r++) {
    document.getElementsByClassName("kwadrat")[figury[rand][0][r]].style.background = figury[rand][licz-1][0]
  }
  p+=10;
}, 1000);
}
function rysuj(){

  figury=[

    [
      [p, p + 10, p + 20, p + 30],
      [p, p + 1, p + 2, p + 3],
      ["red"]
    ],
    [
      [p, p + 1, p + 2, p + 10 + 1],
      [p + 1, p + 10 + 1, p + 20 + 1, p + 10],
      [p + 10, p + 11, p + 12, p + 1],
      [p + 1, p + 11, p + 21, p + 10 + 3],
      ["orange"]
    ],
    [
      [p, p + 1, p + 10, p + 11],
      ["aqua"]
    ],
    [
      [p + 1, p + 11, p + 21, p + 22],
      [p, p + 1, p + 2, p + 10],
      [p + 1, p + 2, p + 10 + 2, p + 20 + 2],
      [p + 2, p + 10, p + 11, p + 12],
      ["yellow"]
    ],
    [
      [p + 2, p + 12, p + 22, p + 21],
      [p, p + 10, p + 11, p + 12],
      [p, p + 1, p + 10, p + 20],
      [p, p + 1, p + 2, p + 12],
      ["pink"]
    ],
    [
      [p+1, p + 2, p + 10, p + 11],
      [p, p+10, p + 11, p + 21],
      ["blue"]
    ],
    [
      [p, p + 1, p + 11, p + 12],
      [p+1, p + 11, p + 10, p + 20],
      ["green"]
    ],
    ]
    rand=Math.floor(Math.random()*figury.length)
  licz=figury[rand].length
  console.log(licz)
  p+=10;
 
}
// function ruch(){
//   for(r=0;r<i[0].length;r++){

//   }

// }
// setInterval(() => {
//   console.log("spadam")
// }, 1000);

 

btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", function () {
  btn[0].style.display = "none";
  btn[1].style.display = "none";
  document.getElementsByTagName("select")[0].style.display = "none";
  render();
  setInterval(() => {
    p += rzad;
    wyswietl("none");
    dekfig();
    wyswietl(figury[rand][(figury[rand].length - 1)][0]);
  }, predkosc);
});
p = 4;
predkosc=300;
let figury;
let rzad;
let k;
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
      szuk[oblicz1].setAttribute("class", "kwadrat pole");
      // szuk[oblicz1].classList.add('kwadrar', 'pole')
      // console.log(document.querySelectorAll("div").length);
    }
  }
  stworzblok();
}
dodawanie=0

function ruch(e) {
  console.log(e)
  if(e.key=="ArrowRight"){
    p++
    wyswietl("none");
  }else if(e.key=="ArrowLeft" ){
    p--
    wyswietl("none");
  }

  dekfig();
  wyswietl(figury[rand][(figury[rand].length - 1)][0]);
}
document.addEventListener("keydown",ruch);
function stworzblok() {
  p = 4;
 rzad = 10;
 rand = Math.floor(Math.random() * 4);


//  if(dalej1!="none"){
//   console.log("123")
// }



  dekfig();
  wyswietl(figury[rand][(figury[rand].length - 1)][0]);

}





function wyswietl(kolorek) {
  
  for (r = 0; r < 4; r++) {
    document.getElementsByClassName("kwadrat")[
      figury[rand][0][r]
    ].style.background = kolorek;
    
    if (figury[rand][0][r] > 190) {
      rzad = 0;
      // for(i=0;i<4;i++){
      //   document.getElementsByClassName("kwadrat")[figury[rand][0][i]].setAttribute("class","polee")
      // }
      stworzblok()
    }
    dalej=figury[rand][0][3]
    if(dalej+10<190){
      dalej1=document.getElementsByClassName("kwadrat")[dalej+10].style.background
      if(dalej1!='none')
         console.log("nic")
      // if(dalej1=="none"){
      //   rzad = 0;
      // }
    }
    // console.log(figury[rand][0][r]);
  }
}

function dekfig() {
  figury = [
    [[p, p + 10, p + 20, p + 30], [p, p + 1, p + 2, p + 3], ["red"]],
    [
      [p, p + 1, p + 2, p + 10 + 1],
      [p + 1, p + 10 + 1, p + 10, p + 20 + 1],
      [p + 10, p + 11, p + 1, p + 12],
      [p + 1, p + 11, p + 10 + 3, p + 21],
      ["orange"],
    ],
    [[p, p + 1, p + 10, p + 11], ["aqua"]],
    [
      [p + 1, p + 11, p + 21, p + 22],
      [p, p + 1, p + 2, p + 10],
      [p + 1, p + 2, p + 10 + 2, p + 20 + 2],
      [p + 2, p + 10, p + 11, p + 12],
      ["yellow"],
    ],
    [
      [p + 2, p + 12, p + 22, p + 21],
      [p, p + 10, p + 11, p + 12],
      [p, p + 1, p + 10, p + 20],
      [p, p + 1, p + 2, p + 12],
      ["pink"],
    ],
    [[p + 1, p + 2, p + 10, p + 11], [p, p + 10, p + 11, p + 21], ["blue"]],
    [[p, p + 1, p + 11, p + 12], [p + 1, p + 11, p + 10, p + 20], ["green"]],
  ];

}

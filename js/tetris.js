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
predkosc = 100;
let figury;
let rzad;
let k;
let rand;
let bok;


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
      
     
    }
  }
  stworzblok();
}

function ruch(e) {
  console.log(e)
  if(e.key=="ArrowUp"){
    wyswietl("none");
    bok++;
    if(bok>=(figury[rand].length-1)){
      bok=0
    }
    
  }

  if (e.key == "ArrowRight") {
    p++
    wyswietl("none");
  } else if (e.key == "ArrowLeft") {
    p--
    wyswietl("none");
  }

  dekfig();
  wyswietl(figury[rand][(figury[rand].length - 1)][0]);
}
document.addEventListener("keydown", ruch);

function stworzblok() {
  p = 4;
  bok=0;
  rzad = 10;
  rand = Math.floor(Math.random() * 4);

  dekfig();
  wyswietl(figury[rand][(figury[rand].length - 1)][0]);

}





function wyswietl(kolorek) {
  x=0
  for (r = 0; r < 4; r++) {
    document.getElementsByClassName("kwadrat")[
      (figury[rand][bok][r])
    ].style.background = kolorek;

    if (figury[rand][bok][r] > 190) {
      rzad = 0;
      x++
      if(x==1){
        setTimeout(console.log("tak"),0)
        setTimeout(stworzblok,0)
      }

      
    }
  }
}

function dekfig() {
  figury = [
    [
      [p, p + 10, p + 20, p + 30],
      [p, p + 1, p + 2, p + 3],
      ["red"]
    ],
    [
      [p, p + 1, p + 2, p + 10 + 1],
      [p + 1, p + 10 + 1, p + 10, p + 20 + 1],
      [p + 10, p + 11, p + 1, p + 12],
      [p + 1, p + 11, p + 10 + 2, p + 21],
      ["orange"],
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
      ["yellow"],
    ],
    [
      [p + 2, p + 12, p + 22, p + 21],
      [p, p + 10, p + 11, p + 12],
      [p, p + 1, p + 10, p + 20],
      [p, p + 1, p + 2, p + 12],
      ["pink"],
    ],
    [
      [p + 1, p + 2, p + 10, p + 11],
      [p, p + 10, p + 11, p + 21],
      ["blue"]
    ],
    [
      [p, p + 1, p + 11, p + 12],
      [p + 1, p + 11, p + 10, p + 20],
      ["green"]
    ],
  ];

}
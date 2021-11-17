

let rzad = 1;
let figury;
let k;
let rand ;
let rand1=Math.floor(Math.random() * 7);
let rand2=rand1;
let bok;
let punkty=0;
let rzedy=0;
btn = document.getElementsByTagName("button");

btn[0].addEventListener("click", function () {
  btn[0].style.display = "none";
  btn[1].style.display = "none";
  render();
  inter = setInterval(() => {
    
    p += 10;
    rzad += 10;

    wyswietl("none");
    dekfig();
    wyswietl(figury[rand][figury[rand].length - 1][0]);
    sprawdzanie();
    czywyg();
  }, 400);
});
document.addEventListener("keydown", ruch);

function czywyg() {
  for (let index1 = 40; index1 < 49; index1++) {
    if (
      document.querySelectorAll(".kwadrat")[index1].classList.contains("zajete")
    ) {
      clearInterval(inter)

      setTimeout(() => {
        document.querySelector(".plansza").remove()
        document.querySelector(".punkty").remove()
      }, 1000);
      document.createElement("div")

    }
  }
}

function odswiez() {
  wyswietl("none");
  dekfig();
  wyswietl(figury[rand][figury[rand].length - 1][0]);
}

function render() {
  let szuk = document.getElementsByTagName("div");
  document
    .getElementsByTagName("body")[0]
    .appendChild(document.createElement("div"));
  szuk[0].setAttribute("class", "plansza");
  for (i = 1; i <= 24; i++) {
    let oblicz = document.querySelectorAll("div").length;
    let cd = document.createElement("div");
    document.getElementsByTagName("div")[0].appendChild(cd);
    szuk[oblicz].setAttribute("class", "rzad");
    for (j = 2; j <= 11; j++) {
      let oblicz1 = document.querySelectorAll("div").length;
      let cd1 = document.createElement("div");
      document.getElementsByTagName("div")[oblicz].appendChild(cd1);
      szuk[oblicz1].setAttribute("class", "kwadrat");
    }
  }
  for (let index = 0; index < 4; index++) {
    console.log("wykonane")
    document.querySelectorAll('.rzad')[index].style.display="none"
  }

  document
    .getElementsByTagName("body")[0]
    .appendChild(document.createElement("div"));
  document
    .querySelectorAll("div")
    [document.querySelectorAll("div").length - 1].setAttribute(
      "class",
      "punkty"
    );

    document
    .getElementsByClassName("punkty")[0]
    .appendChild(document.createElement("div"));
  document
    .querySelectorAll("div")
    [document.querySelectorAll("div").length - 1].setAttribute(
      "class",
      "kratka"
    );
  for (let index = 0; index < 4; index++) {
    document
      .getElementsByClassName("kratka")[0]
      .appendChild(document.createElement("div"));
    document
      .querySelectorAll("div")
      [document.querySelectorAll("div").length - 1].setAttribute(
        "class",
        "rzad1"
      );
    for (let index1 = 0; index1 < 4; index1++) {
      document
        .getElementsByClassName("rzad1")
        [index].appendChild(document.createElement("div"));
      document
        .querySelectorAll("div")
        [document.querySelectorAll("div").length - 1].setAttribute(
          "class",
          "kolejnafigura"
        );
    }
  }
  document
    .getElementsByClassName("punkty")[0]
    .appendChild(document.createElement("div"));
  document.getElementsByTagName("div")[
    document.querySelectorAll("div").length - 1
  ].innerHTML="rzędy: 0"

  document.getElementsByTagName("div")[
    document.querySelectorAll("div").length - 1
  ].setAttribute("class","napis")

  document
  .getElementsByClassName("punkty")[0]
  .appendChild(document.createElement("div"));


document.getElementsByTagName("div")[
  document.querySelectorAll("div").length - 1
].innerHTML="bloki: 0"



document.getElementsByTagName("div")[
  document.querySelectorAll("div").length - 1
].setAttribute("class","napis")

  stworzblok();
}
function ruch(e) {
  if (e.key == "ArrowUp") {
    wyswietl("none");
    bok++;
    if (bok >= figury[rand].length - 1) {
      bok = 0;
    }
  }
  if (e.key == "ArrowDown") {
    wyswietl("none");
    p += 10;
    rzad += 10;
  }

  if (e.key == "ArrowRight") {
    if (figury[rand][bok][5] < 9 + rzad) {
      p++;
    }
    wyswietl("none");
  } else if (e.key == "ArrowLeft") {
    if (figury[rand][bok][4] > 0 + rzad) {
      p--;
    }
    wyswietl("none");
  }

  dekfig();
  wyswietl(figury[rand][figury[rand].length - 1][0]);
}

function pokaznastepna() {
  for (let index1 = 0; index1 < 15; index1++) {
    document.getElementsByClassName("kolejnafigura")[index1].style.background="none"
    
  }
  p=1;
  dekfig();
  for (let index = 0; index < 4; index++) {  
    kl=figury[rand1][0][index]
    if (kl>=30) {
      kl-=18
    }else if (kl>=20) {
      kl-=12
    }else if (kl>=10) {
      kl-=6
    }
    document.getElementsByClassName("kolejnafigura")[kl].style.background=figury[rand1][figury[rand1].length-1][0]
    console.log(kl)
  }
}

function stworzblok() {
  p = 4;
  bok = 0;
  rzad = 0;
  rand=rand1;
  while (rand2 == rand1) {
    rand1 = Math.floor(Math.random() * 7);
  }
  rand2 = rand1;
  console.log(rand,rand1)
  pokaznastepna()
  p=4; 
  dekfig();
  wyswietl(figury[rand][figury[rand].length - 1][0]);
}

function sprawdzanie() {
  let rz = 0;
  let x = 1;
  for (ix = 0; ix < 24; ix++) {
    for (let i = 0; i < 10; i++) {
      kwadracik =
        document.getElementsByClassName("kwadrat")[
          document.querySelectorAll(".kwadrat").length - x
        ];
      if (kwadracik.classList.contains("zajete")) {
        rz++;
      }
      x++;
    }
    if (rz == 10) {
      rzedy++;
      punkty+=10;
      document.getElementsByClassName("napis")[0].innerHTML="rzędy: "+rzedy;
      document.getElementsByClassName("napis")[1].innerHTML="punkty: "+punkty;

      for (let i = 1; i <= 10; i++) {
        pt = 239 - Math.floor(document.querySelectorAll(".kwadrat").length - x);
        kwadracik =
          document.getElementsByClassName("kwadrat")[
            Math.floor(document.querySelectorAll(".kwadrat").length - x) + i
          ];
        kwadracik.style.background = "none";
        kwadracik.setAttribute("class", "kwadrat");
      }
      for (
        let index = document.querySelectorAll(".kwadrat").length - pt - 1;
        index > 10;
        index--
      ) {
        orzaddalej = 0;
        kolorspad =
          document.getElementsByClassName("kwadrat")[index].style.background;
        if (
          document
            .getElementsByClassName("kwadrat")
            [index].classList.contains("zajete")
        ) {
          while (true) {
            if (
              document
                .getElementsByClassName("kwadrat")
                [index + orzaddalej].classList.contains("zajete")
            ) {
              document.getElementsByClassName("kwadrat")[
                index + orzaddalej
              ].style.background = "none";
              document
                .getElementsByClassName("kwadrat")
                [index + orzaddalej].setAttribute("class", "kwadrat");

              orzaddalej += 10;
            } else {
              document.getElementsByClassName("kwadrat")[
                index + orzaddalej
              ].style.background = kolorspad;
              document
                .getElementsByClassName("kwadrat")
                [index + orzaddalej].setAttribute("class", "kwadrat zajete");
              break;
            }
          }
        }
      }
    }
    rz = 0;
  }
}

function wyswietl(kolorek) {
  x = 0;
  for (r = 0; r < 4; r++) {
    document.getElementsByClassName("kwadrat")[
      figury[rand][bok][r]
    ].style.background = kolorek;
    let jak = figury[rand][bok][r];
    if (
      figury[rand][bok][r] > 229 ||
      document
        .getElementsByClassName("kwadrat")
        [jak + 10].classList.contains("zajete")
    ) {
      x++;

      if (x == 1) {
        for (i = 0; i < 4; i++) {
          document
            .getElementsByClassName("kwadrat")
            [figury[rand][bok][i]].setAttribute("class", " kwadrat zajete");
        }
        setTimeout(stworzblok, 0);
      }
    }
  }
}

function dekfig() {
  figury = [
    [
      [p + 10, p, p + 20, p + 30, p, p],
      [p, p + 3, p + 1, p + 2, p, p + 3],
      ["#F2522E"],
    ],
    [
      [p, p + 2, p + 1, p + 10 + 1, p, p + 2],
      [p + 10 + 1, p + 1, p + 10, p + 20 + 1, p + 1, p + 1],
      [p + 10, p + 12, p + 11, p + 1, p, p + 2],
      [p + 1, p + 10 + 2, p + 11, p + 21, p + 1, p + 2],
      ["#F2BC57"],
    ],
    [[p, p + 1, p + 10, p + 11, p, p + 1], ["#EDFF7A"]],
    [
      [p + 11, p + 22, p + 1, p + 21, p + 1, p + 2],
      [p, p + 2, p + 1, p + 10, p, p + 2],
      [p + 1, p + 2, p + 10 + 2, p + 20 + 2, p + 1, p + 2],
      [p + 10, p + 2, p + 11, p + 12, p, p + 2],
      ["#04BF68"],
    ],
    [
      [p + 2, p + 12, p + 22, p + 21, p + 1, p + 2],
      [p, p + 12, p + 10, p + 11, p, p + 2],
      [p, p + 1, p + 10, p + 20, p, p + 1],
      [p, p + 2, p + 1, p + 12, p, p + 2],
      ["#5E66F2"],
    ],
    [
      [p + 1, p + 2, p + 10, p + 11, p, p + 2],
      [p, p + 10, p + 11, p + 21, p, p + 1],
      ["#2BD9FE"],
    ],
    [
      [p, p + 1, p + 11, p + 12, p, p + 2],
      [p + 1, p + 11, p + 10, p + 20, p, p + 1],
      ["#FEC0CE"],
    ],
  ];
}

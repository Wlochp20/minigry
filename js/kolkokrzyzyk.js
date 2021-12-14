let losowa;
let kolejna = 1;
let p = 1;
let ruch = [];
let wygrane = [];
let ruchprzeciwnika = [];
let twoj = "kolko";
let przeciwnika = "krzyz";
let pktkrzyzyka = 0;
let pktkolka = 0;
let remis = 0;
let soloduo;

let wygrana = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [4, 5, 6],
  [7, 8, 9],
  [3, 5, 7],
  [3, 6, 9],
];
document.querySelector(".kolko").style.border = "5px solid rgb(0, 225, 255)";
document.querySelector(".krzyz").addEventListener("click", function () {
  twoj = "krzyz";
  przeciwnika = "kolko";
  document
    .querySelector(".krzyz")
    .style.setProperty("--color", "rgb(0, 225, 255)");
  document.querySelector(".kolko").style.border = "5px solid whitesmoke";
});
document.querySelector(".kolko").addEventListener("click", function () {
  twoj = "kolko";
  przeciwnika = "krzyz";
  document.querySelector(".krzyz").style.setProperty("--color", "whitesmoke");
  this.style.border = "5px solid rgb(0, 225, 255)";
});

document.querySelector("button").addEventListener("click", function () {
  render();
});

function render() {

  soloduo = document.querySelector("select").value;
  document.querySelector("select").style.display = "none";
  // document.querySelectorAll("button")[1].style.display="none"
  document.querySelector(".krzyz").style.setProperty("--color", "whitesmoke");
  document.querySelector("button").style.display = "none";
  document.querySelector(".wybor").style.display = "none";
  plansza = document.createElement("div");
  document.querySelector("body").appendChild(plansza);
  plansza.className = "plansza";
  for (let index = 0; index < 3; index++) {
    document
      .querySelector(".plansza")
      .appendChild(document.createElement("div"));
    document
      .querySelectorAll("div")
      [document.querySelectorAll("div").length - 1].setAttribute(
        "class",
        "rzad"
      );
    for (let index1 = 0; index1 < 3; index1++) {
      document
        .querySelectorAll(".rzad")
        [index].appendChild(document.createElement("div"));
      document
        .querySelectorAll("div")
        [document.querySelectorAll("div").length - 1].addEventListener(
          "click",
          graj
        );
      document
        .querySelectorAll("div")
        [document.querySelectorAll("div").length - 1].setAttribute(
          "class",
          "kwadrat"
        );
      document
        .querySelectorAll("div")
        [document.querySelectorAll("div").length - 1].setAttribute(
          "id",
          kolejna
        );
      kolejna++;
    }
    if (twoj=="krzyz" && soloduo=="d" ) {
      twoj="kolko"
    }
  }
  if (twoj == "krzyz" && soloduo != "d") przeciwnik();
}
function graj() {
  if (this.classList.contains("zajete")) {
    return 0;
  }

  this.setAttribute("class", "kwadrat zajete");
  kolko = document.createElement("div");
  this.appendChild(kolko);
  kolko.className = twoj;

  if (soloduo == "d") {
    if (twoj == "krzyz") {
      ruchprzeciwnika.push(this.id);
      czywyg(ruchprzeciwnika);
      twoj = "kolko";
    } else {
      twoj = "krzyz";
      ruch.push(this.id);
      czywyg(ruch);
    }
  } else {
    ruch.push(this.id);
    czywyg(ruch);
    // console.log(this.id)
    for (let index2 = 0; index2 < 9; index2++) {
      if (
        document
          .querySelectorAll(".kwadrat")
          [index2].classList.contains("zajete") == false
      ) {
        przeciwnik();
        break;
      }
    }
  }
}
function przeciwnik() {
  losowa = Math.floor(Math.random() * 9);
  while (
    document.querySelectorAll(".kwadrat")[losowa].classList.contains("zajete")
  ) {
    losowa = Math.floor(Math.random() * 9);
    //   console.log(losowa)
  }
  // console.log(losowa)
  setTimeout(() => {
    // console.log("kwadrat")
    document
      .querySelectorAll(".kwadrat")
      [losowa].setAttribute("class", "kwadrat zajete");
    krzyzyk = document.createElement("div");
    document.querySelectorAll(".kwadrat")[losowa].appendChild(krzyzyk);
    krzyzyk.className = przeciwnika;
    ruchprzeciwnika.push(document.querySelectorAll(".kwadrat")[losowa].id);

    czywyg(ruchprzeciwnika);
  }, 200);
  // console.log(document.querySelectorAll(".kwadrat")[losowa].id);
}

// function przeciwnik2() {
//   if (this.classList.contains("zajete")) {
//     return 0;
//   }

//   this.setAttribute("class", "kwadrat zajete");
//   krzyzyk = document.createElement("div");
//   this.appendChild(krzyzyk);
//   krzyzyk.className = "krzyz";
//   ruchprzeciwnika.push(this.id);
//   czywyg(ruchprzeciwnika);
//   graj()

//   }

function czywyg(jaka) {
  remis = 0;
  for (let j = 0; j < 9; j++) {
    if (document.querySelectorAll(".kwadrat")[j].classList.contains("zajete")) {
      remis++;
    }
  }
  if (remis == 9) {
    setTimeout(() => {
      koniec();
    }, 500);
  }

  let czywygrana = 0;
  wygrane = [];
  for (let index1 = 0; index1 < wygrana.length; index1++) {
    czywygrana = 0;
    for (let index = 0; index < wygrana[index1].length; index++) {
      for (let index3 = 0; index3 < ruch.length; index3++) {
        if (jaka[index3] == wygrana[index1][index]) {
          wygrane.push(jaka[index3]);
          czywygrana++;
        }
        if (czywygrana == 3) {
          for (let i = 0; i < 3; i++) {
            if (
              document
                .getElementById(wygrane[0])
                .children[0].classList.contains("krzyz")
            ) {
              // console.log("dziala")
              document
                .getElementById(wygrana[index1][i])
                .children[0].style.setProperty("--color", "blueviolet");
            } else {
              document.getElementById(
                wygrana[index1][i]
              ).children[0].style.border = "5px solid blueviolet";
            }
          }
          setTimeout(() => {
            koniec();
          }, 500);
        }
      }
    }

    // console.log("co")
  }
}

function koniec() {
  //punktacja u góry

  if (remis == 9) {
  } else if (
    document.getElementById(wygrane[0]).children[0].classList.contains("krzyz")
  ) {
    pktkolka++;
  } else {
    pktkrzyzyka++;
  }

  // nowy = document.createElement("div");
  // document.querySelector("body").appendChild(nowy);
  // punktykolko = document.createElement("div");
  // punktykrzyzyk = document.createElement("div");
  // punktykolko.setAttribute("id", "gora");
  // punktykolko.setAttribute("class", "kolko");
  // punktykrzyzyk.setAttribute("id", "kgora");
  // punktykrzyzyk.setAttribute("class", "krzyz");
  // h11 = document.createElement("span");
  // h12 = document.createElement("span");
  // nowy.appendChild(h11);
  // nowy.appendChild(punktykolko);
  // nowy.appendChild(h12);
  // h11.setAttribute("id", "pp");
  // h12.setAttribute("id", "pp1");
  // nowy.appendChild(punktykrzyzyk);
  // nowy.setAttribute("class", "wyniki");
  document.querySelector("select").style.display = "block";
  document.querySelector("span").innerHTML = pktkrzyzyka;
  document.querySelectorAll("span")[1].innerHTML = pktkolka;
  document.querySelector(".plansza").remove();
  kolejna = 1;
  czywygrana = 0;
  p = 1;
  ruch = [];
  wygrane = [];
  ruchprzeciwnika = [];
  document.querySelector("button").style.display = "block";
  document.querySelector(".wybor").style.display = "flex";

  if (twoj == "krzyz") {
    document
      .querySelector(".krzyz")
      .style.setProperty("--color", "rgb(0, 225, 255)");
    document.querySelector(".kolko").style.border = "5px solid whitesmoke";
  } else {
    document.querySelector(".kolko").style.border =
      "5px solid rgb(0, 225, 255)";
    document.querySelector(".krzyz").style.setProperty("--color", "whitesmoke");
  }
}

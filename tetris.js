btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", function () {
  btn[0].style.display = "none";
  btn[1].style.display = "none";
  document.getElementsByTagName("select")[0].style.display = "none";
  render();
});

function render() {
  let szuk = document.getElementsByTagName("div");
  document.getElementsByTagName("body")[0].appendChild(document.createElement("div"));
  szuk[0].setAttribute("class","plansza");
  for(i=1;i<=20;i++){
    let oblicz=document.querySelectorAll("div").length;
    let cd = document.createElement("div");
    document.getElementsByTagName("div")[0].appendChild(cd);
    szuk[oblicz].setAttribute("class","rzad");
    for(j=2;j<=11;j++){
      let oblicz1=document.querySelectorAll("div").length;
      let cd1 = document.createElement("div");
      document.getElementsByTagName("div")[oblicz].appendChild(cd1);
      szuk[oblicz1].setAttribute("class","kwadrat")
      console.log(document.querySelectorAll("div").length)
    }
  }
}

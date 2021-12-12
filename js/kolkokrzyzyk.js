let losowa;
let kolejna=1;
let p=1;
let ruch=[];
let wygrane=[];
let ruchprzeciwnika=[];
let twoj="kolko";
let przeciwnika="krzyz";
let wygrana=[
    [1,2,3],
    [1,4,7],
    [1,5,9],
    [2,5,8],
    [4,5,6],
    [7,8,9],
    [3,5,7],
    [3,6,9]
]
document.querySelector(".kolko").style.border="5px solid rgb(0, 225, 255)"
document.querySelector(".krzyz").addEventListener('click',function () {
    twoj="krzyz"
    przeciwnika="kolko"
    document.querySelector(".krzyz").style.setProperty('--color', "rgb(0, 225, 255)")
    document.querySelector(".kolko").style.border="5px solid whitesmoke"
})
document.querySelector(".kolko").addEventListener('click',function () {
    twoj="kolko"
    przeciwnika="krzyz"
    document.querySelector(".krzyz").style.setProperty('--color', "whitesmoke")
    this.style.border="5px solid rgb(0, 225, 255)"
})

document.querySelector("button").addEventListener("click",function() {
    render()
})


function render() {
    // document.querySelector("select").style.display="none"
    // document.querySelectorAll("button")[1].style.display="none"
    document.querySelector(".krzyz").style.setProperty('--color', "whitesmoke")
    document.querySelector("button").style.display="none"
    document.querySelector(".wybor").style.display="none"
    plansza=document.createElement("div")
    document.querySelector("body").appendChild(plansza)
    plansza.className="plansza"
    for (let index = 0; index < 3; index++) {
        document.querySelector(".plansza").appendChild(document.createElement("div"))
        document.querySelectorAll("div")[document.querySelectorAll("div").length-1].setAttribute("class","rzad")
        for (let index1= 0; index1 < 3; index1++) {
            document.querySelectorAll(".rzad")[index].appendChild(document.createElement("div"))
            document.querySelectorAll("div")[document.querySelectorAll("div").length-1].addEventListener("click",graj)
            document.querySelectorAll("div")[document.querySelectorAll("div").length-1].setAttribute("class","kwadrat")
            document.querySelectorAll("div")[document.querySelectorAll("div").length-1].setAttribute("id",kolejna)
            kolejna++;
           
        }

}
}  
function graj() {
    if (this.classList.contains("zajete")) {
        return 0;
    }
    this.setAttribute("class","kwadrat zajete")
    kolko=document.createElement("div")
    this.appendChild(kolko)
    kolko.className=twoj
    ruch.push(this.id)
    // console.log(this.id)
    czywyg(ruch)
    for (let index2 = 0; index2 < 9; index2++) {
        if (document.querySelectorAll(".kwadrat")[index2].classList.contains("zajete")==false) {
            przeciwnik()
            break;
        }
    }
}  
function przeciwnik() {
    
    losowa=Math.floor((Math.random() * 9))
    while (document.querySelectorAll(".kwadrat")[losowa].classList.contains("zajete")) {
      losowa=Math.floor((Math.random() * 9));
    //   console.log(losowa)
    }
    // console.log(losowa)
    setTimeout(() => {
        // console.log("kwadrat")
        document.querySelectorAll(".kwadrat")[losowa].setAttribute("class","kwadrat zajete");
        krzyzyk=document.createElement("div")
        document.querySelectorAll(".kwadrat")[losowa].appendChild(krzyzyk)
        krzyzyk.className=przeciwnika
        ruchprzeciwnika.push(document.querySelectorAll(".kwadrat")[losowa].id)
     
        czywyg(ruchprzeciwnika)
       
    }, 200);
    console.log(document.querySelectorAll(".kwadrat")[losowa].id)
}

function czywyg(jaka) {
    let czywygrana=0;
    wygrane=[]
    for (let index1 = 0; index1 < wygrana.length; index1++) {
        if (czywygrana==3) {
            // for (let i = 0; i < wygrane.length; i++) {
            //     document.querySelectorAll(".kwadrat")[wygrane[i]].style.background="red"

            // }
            setTimeout(() => {
                document.write("wygrana")
            }, 200);
            
        
        } 
        czywygrana=0
        for (let index = 0; index < wygrana[index1].length; index++) {
            for (let index3 = 0; index3 < ruch.length; index3++) {
                if (jaka[index3]==wygrana[index1][index]) {
                wygrane.push(jaka[index3])
                czywygrana++;
                }
            }
        }
        // console.log("co")

       

    }
}


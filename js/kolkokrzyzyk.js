let losowa;
document.querySelector("button").addEventListener("click",function() {
    render()
})
function render() {
    document.querySelector("button").style.display="none"

    for (let index = 0; index < 3; index++) {
        document.querySelector("body").appendChild(document.createElement("div"))
        document.querySelectorAll("div")[document.querySelectorAll("div").length-1].setAttribute("class","rzad")
        for (let index1= 0; index1 < 3; index1++) {
            document.querySelectorAll(".rzad")[index].appendChild(document.createElement("div"))
            document.querySelectorAll("div")[document.querySelectorAll("div").length-1].addEventListener("click",graj)
            document.querySelectorAll("div")[document.querySelectorAll("div").length-1].setAttribute("class","kwadrat")
            console.log("tak")
        }
        function graj() {
            this.setAttribute("class","kwadrat zajete")
            for (let index2 = 0; index2 < 9; index2++) {
                if (document.querySelectorAll(".kwadrat")[index2].classList.contains("zajete")==false) {
                    
                    przeciwnik()
                    break;
                }
                
            }
           
           
        }
}

    function przeciwnik() {
        losowa=Math.floor((Math.random() * 9))
        while (document.querySelectorAll(".kwadrat")[losowa].classList.contains("zajete")) {
          losowa=Math.floor((Math.random() * 9));
          console.log(losowa)
        }
        console.log(losowa)
        setTimeout(() => {
            document.querySelectorAll(".kwadrat")[losowa].setAttribute("class","kwadrat zajete");
            document.querySelectorAll(".kwadrat")[losowa].style.background="blue";
        }, 200);
    }
    function czywyg() {
        
    }


}    
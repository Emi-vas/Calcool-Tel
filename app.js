window.onload = function() {
    let nb1 = 0
    let nb2 = 0
    let rep = "0"
    let good = 0
    let score = 0
    
    nb1 = arrondi()
    nb2 = arrondi()
    afficheNb()

    function redLight(){
        document
            .getElementById("main")
            .classList.add("rouge")
        document
            .getElementById("main")
            .classList.remove("vert")
    }

    function greenLight(){
        document
            .getElementById("main")
            .classList.add("vert")
        document
            .getElementById("main")
            .classList.remove("rouge")
    }

    function afficheNb(){
        document
            .getElementById("nb1")
            .innerText = nb1;

        document
            .getElementById("nb2")
            .innerText = nb2;
    }

    function arrondi() {
        return Math.round(Math.random() * 10)
    }

    function reset(){
        document.location.reload();

    }

    function tempo() {
        if (rep == nb1 * nb2 || good == 1) {

        }else {
        redLight()
            
        document
           .getElementById("rep").value = (''); 
        document
           .getElementById("rep").setAttribute("disabled", true);
        }
    }

    window.setTimeout(tempo, 5000) // execute une seul fois
    
    document.addEventListener("keydown", function(event) {
        if (event.key == "Enter") {
            if (rep == nb1 * nb2) {
                greenLight()
                
                window.setTimeout(reset, 700) // execute une seul fois
                document.getElementById("anima").classList.remove("anim")
                good = 1
                score++
            } else if(rep == "") {
                redLight()
            }else{
                redLight()
                document
                   .getElementById("rep").value = "";
            }
            
        }
    })
    
    document.getElementById("rep").addEventListener("input", function(e) {
        rep = e.target.value
    });



    document.getElementById("reload").addEventListener("click", function() {
        reset()
    });

    console.log(score)

}


window.onload = function() {
    let nb1 = 0
    let nb2 = 0
    let rep = ""
    let score = 0

    let t1 = "0"
    let t2 = "0"
    let t3 = "0"
    let t4 = "0"
    let t5 = "0"
    let t6 = "0"
    let t7 = "0"
    let t8 = "0"
    let t9 = "0"


    
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

    function print() {
        document
        .getElementById("affichage")
        .innerText = rep;
    }



    
    document
        .getElementById("touche1")
        .addEventListener("click", function() {
            rep = rep + "1"
            print()
            window.navigator.vibrate(200);
        })

    document
        .getElementById("touche2")
        .addEventListener("click", function() {
            rep = rep + "2"
            print()
            window.navigator.vibrate(200);
        })
    document
        .getElementById("touche3")
        .addEventListener("click", function() {
            rep = rep + "3"
            print()
            window.navigator.vibrate(200);
        })
    document
        .getElementById("touche4")
        .addEventListener("click", function() {
            rep = rep + "4"
            print()
            window.navigator.vibrate(200);
        })
    document
        .getElementById("touche5")
        .addEventListener("click", function() {
            rep = rep + "5"
            print()
            window.navigator.vibrate(200);
        })
    document
        .getElementById("touche6")
        .addEventListener("click", function() {
            rep = rep + "6"
            print()
            window.navigator.vibrate(200);
        })
    document
        .getElementById("touche7")
        .addEventListener("click", function() {
            rep = rep + "7"
            print()
            window.navigator.vibrate(200);
        })
    document
        .getElementById("touche8")
        .addEventListener("click", function() {
            rep = rep + "8"
            print()
            window.navigator.vibrate(200);
        })
    document
        .getElementById("touche9")
        .addEventListener("click", function() {
            rep = rep + "9"
            print()
            window.navigator.vibrate(200);
        })
    document
        .getElementById("touche0")
        .addEventListener("click", function() {
            rep = rep + "0"
            print()
            window.navigator.vibrate(200);
        })
    document
        .getElementById("clear")
        .addEventListener("click", function() {
            rep = ""
            print()
            window.navigator.vibrate(200);
        })



    document
        .getElementById("toucheV")
        .addEventListener("click", function() {
            window.navigator.vibrate(200);
            if (rep == nb1 * nb2) {
                greenLight()
                window.setTimeout(reset, 700)
            } else {
                redLight()
            }
        })



}


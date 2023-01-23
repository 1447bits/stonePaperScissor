const P2 = document.getElementById("P2Img")
const P1 = document.getElementById("P1Img")
const winner = document.getElementById("winner")

let images = [
    "./image/rock.png",
    "./image/scissor.png",
    "./image/paper.png"
]

function compPlay(n) {
    const flashing = setInterval(() => {
        const randomElement = images[Math.floor(Math.random() * images.length)];
        P2.setAttribute("src", randomElement)
    }, 70)
    
    setTimeout(() => {
        clearInterval(flashing)
        const randomElement = images[Math.floor(Math.random() * images.length)];
        P2.setAttribute("src", randomElement)
    }, n)
}

function ckeckwin() {
    if(P1.getAttribute("src") === P2.getAttribute("src")){
        return 0
    } 
    else if (P1.getAttribute("src") === images[0]) {
        if (P2.getAttribute("src") === images[1] ) { return 1 } 
        else { return 2 }
    } 
    else if (P1.getAttribute("src") === images[1]) {
        if (P2.getAttribute("src") === images[2]) { return 1 } 
        else { return 2 }
    } 
    else if (P1.getAttribute("src") === images[2]) {
        if (P2.getAttribute("src") === images[0]) { return 1 } 
        else { return 2 }
    }
}

let earlyImg = P1.getAttribute("src")
const options = document.querySelectorAll(".optionImg")
for (let option of options) {
    
    option.addEventListener("mouseover", (move) => {
        earlyImg = P1.getAttribute("src")
        let choice = move.target.getAttribute("src")
        P1.setAttribute("src", choice)
    })
    
    option.addEventListener("mouseleave", () => {
        P1.setAttribute("src", earlyImg)
    })
    
    option.addEventListener("click", (move) => {
        
        const flashing = setInterval(() => {
            const randomElement = images[Math.floor(Math.random() * images.length)];
            P1.setAttribute("src", randomElement)
        }, 70)

        winner.style.opacity = "0"
        let choice = move.target.getAttribute("src")
        P1.setAttribute("src", choice)
        earlyImg = P1.getAttribute("src")
        
        compPlay(800)
        setTimeout(()=>{
            clearInterval(flashing)
            let win = ckeckwin()
            if ( win === 0){
                winner.innerHTML = "Tieeee"
                winner.style.opacity = "1"
            } else if ( win === 1) {
                winner.innerHTML = "Yuu Won 🥲"
                winner.style.opacity = "1"
            } else if ( win === 2) {
                winner.innerHTML = "I Won 😁"
                winner.style.opacity = "1"
            }

        },900)

    })

}
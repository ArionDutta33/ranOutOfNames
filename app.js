const page1 = document.querySelector("#first")
const page2 = document.querySelector("#second")
const main = document.querySelector(".page1")
const cursor = document.querySelector(".cursor")
const h1 = document.querySelector("h1")
const webdesign = document.querySelector("#one")
const cursorImageWebdesign = document.querySelector(".cursor img")
const overlay = document.querySelector(".cursor .overlay")

//navbar
const navbar = document.querySelector(".nav")
const navLinks = document.querySelector(".nav-2")
const icon = document.querySelector(".cursor i")

//first header


const webDevelopment = document.querySelector("#two")
const images = {
    webdesign: "https://images.pexels.com/photos/7120851/pexels-photo-7120851.jpeg?auto=compress&cs=tinysrgb&w=600",
    developer: "https://images.pexels.com/photos/1524620/pexels-photo-1524620.jpeg?auto=compress&cs=tinysrgb&w=600"
}

function loaderAnimation() {
    gsap.to(page1, {
        transform: "translateY(-100vh)",
        duration: 5,

    })
    gsap.to(page2, {
        transform: "translateY(100vh)",
        duration: 5,

    })
}
loaderAnimation()

function mainAnim() {
    main.addEventListener("mousemove", (e) => {

        if (e.target === webdesign) {
            webdesign.addEventListener("mouseenter", () => {
                overlay.style.display = "block"
                cursor.style.backgroundImage = `url(${images.webdesign})`
                //  overlay.style.display="block"
                //  gsap.to(overlay,{
                //     transform:"translateX(100%)",
                //     ease:"none",
                //     repeat:-1,
                //     delay:2
                //  })

            })
            webdesign.addEventListener("mouseleave", () => {
                cursor.style.backgroundImage = ""
                //  cursor.style.backgroundColor="red"
                overlay.style.display = "none"
            })

        } else if (e.target === webDevelopment) {
            webDevelopment.addEventListener("mouseenter", () => {

                overlay.style.display = "block"
                cursor.style.backgroundImage = `url(${images.developer})`
                //  overlay.style.display="block"
                //  gsap.to(overlay,{
                //     transform:"translateX(100%)",
                //     ease:"none",
                //     repeat:-1,
                //     delay:2
                console.log("mouse enter")
                //  })
                //    overlay.style.display="block"
            })
            webDevelopment.addEventListener("mouseleave", () => {
                cursor.style.backgroundImage = ""
                console.log("mouse leave")
                //  cursor.style.backgroundColor="red"
                overlay.style.display = "none"
            })
        } else if (e.target === navLinks) {
            // cursor.innerHTML=`<i class="ri-arrow-right-up-line"></i>`
            navLinks.addEventListener("mouseenter", () => {
                icon.style.display = "block"
                gsap.to(cursor, {
                    scale: 0.2,
                    // ease:"expoScale(0.5,7,none)"
                })
            })
            navLinks.addEventListener("mouseleave", () => {
                icon.style.display = "none"
                gsap.to(cursor, {
                    scale: 1,
                    // ease:"expoScale(0.5,7,none)"
                })
            })
        }
        // console.log(e)
        // if(e.target===)
        gsap.to(cursor, {
            top: e.y - 200,
            left: e.x - 200
        })
    })
}
mainAnim()
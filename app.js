const page1=document.querySelector("#first")
const page2=document.querySelector("#second")
const main=document.querySelector(".page1")
const cursor=document.querySelector(".cursor")
const h1=document.querySelector("h1")
const webdesign=document.querySelector("#one")
const cursorImageWebdesign=document.querySelector(".cursor img")
 const images={
    webdesign:"https://images.unsplash.com/photo-1514179974491-a7885781ed87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5fGVufDB8fDB8fHww",
    developer:"https://images.unsplash.com/photo-1618020405355-435b53dc2cd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFuY3klMjBzcG9ydHN8ZW58MHx8MHx8fDA%3D"
 }
function loaderAnimation(){
    gsap.to(page1,{
        transform:"translateY(-100vh)",
        duration:5,
        
    })
    gsap.to(page2,{
        transform:"translateY(100vh)",
        duration:5,
        
    })
}
loaderAnimation()

main.addEventListener("mousemove",(e)=>{
    if(e.target===webdesign){
        webdesign.addEventListener("mouseenter",()=>{
             cursor.style.backgroundImage=`url(${images.webdesign})`
        })
        webdesign.addEventListener("mouseleave",()=>{
             cursor.style.backgroundImage=""
            //  cursor.style.backgroundColor="red"
        })

    }
    // console.log(e)
    // if(e.target===)
gsap.to(cursor,{
    top:e.y-200,
    left:e.x-200
})
})
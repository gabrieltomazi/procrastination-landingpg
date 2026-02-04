
gsap.registerPlugin(SplitText)

const textBottom = document.querySelectorAll('.list2 li')
console.log(textBottom)




gsap.from('.learn', {
    opacity: 0,
    x: 200,
})



let split = new SplitText(textBottom.innerText, {
    type: "lines"
})

gsap.from(".list2 li", {
    duration: 1,
    y: 100,       
    autoAlpha: 0, 
    stagger: .4 
});

let tl = gsap.timeline() 

tl.from('.up', {
    opacity: 0,
    x: -200
})


gsap.from('.down', {
    opacity: 0,
    x: 200,
})

tl.to('.float', {
    y: -20,           
    duration: 2,          
    ease: "power1.inOut", 
    repeat: -1,          
    yoyo: true
})

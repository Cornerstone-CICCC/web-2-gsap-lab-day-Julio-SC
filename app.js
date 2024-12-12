gsap.registerPlugin(ScrollTrigger);

const firstSection = gsap.timeline({
    scrollTrigger: {
        trigger: '.section1',
        pin: true,
        start: 'top top',
        //markers: true
    }
})

firstSection
    .from('.section1 span:nth-child(1)', { x: '-100vw', duration: 1, }, '<')
    .from('.section1 span:nth-child(2)', { x: '100vw', duration: 1, }, '<')
    .from('.section1 p', { rotate: '30deg', transformOrigin: 'top left', opacity: 0, duration: 1, })
    .from('.section1 img', { y: '100vh', duration: 1, },)


const secondSection = gsap.timeline({
    scrollTrigger: {
        trigger: '.section2',
        pin: true,
        start: 'top top',
        //markers: true,
        toggleActions: "play none reverse none"
    }
})

secondSection
    .from('.section2 span:nth-child(1)', { y: '-100vh', duration: 1, },)
    .from('.section2 span:nth-child(2)', { y: '-100vh', duration: 1, },)
    .from('.section2 p', { scale: 0, opacity: 0, duration: 1, },)



const hozSection = gsap.timeline({
    scrollTrigger: {
        trigger: '.horizontal-sections',
        start: 'top top',
        //markers: true,
        toggleActions: "play none reverse none"
    }
})

hozSection
    .from('.section3 h2', { y: '-100vh', scale: 20, duration: 1, },)
    .to('.section3 p span', { background: 'white', color: 'black', duration: 0 })
    .from('.section3 p span', { y: ' 100vh', stagger: 0.2, duration: 1 })
    .to('.section3', { xPercent: -100, duration: 1 },)
    .to('.section4', { xPercent: -100, duration: 1 }, '<')
    .from('.portfolio-item', { x: '100vw', stagger: 0.2, duration: 2, })


const fifthSection = gsap.timeline({
    scrollTrigger: {
        trigger: '.section5',
        start: 'top top',
        scrub: true,
        pin: true,
    }
})

const h2 = document.querySelector(".section5 div h2")
const letters = h2.textContent.split("")
h2.innerHTML = letters
    .map((letter) => `<span class="letter">${letter}</span>`)
    .join("")

gsap.set('.section5 h2',{whiteSpace:'break-spaces'} )

fifthSection
    .from('.section5 h2 span', { y: '-100vh', stagger: 0.6, opacity: 0, duration: 1, },)
    .from('.section5 p', {y: '500vh', stagger: 0.2, duration: 1.5, })
    .from('.section5 .contact-btn', {scale: 0 })
    .to('.section5', {backgroundColor: 'black', delay:1 })
    .from('.section5', {backgroundPosition: '135% 90%'}, '<')
    



// YOUR CODE HERE
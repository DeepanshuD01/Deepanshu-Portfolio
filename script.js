var typed = new Typed("#post",{
    strings:["Fresher","Software Engineer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

function animationGsap(){
    var tl = gsap.timeline();
    gsap.from("#nav h1",{
       y:-300,
       opacity:0,
       scale:0,
    
    })
    gsap.from("#nav a",{
        y:-50,
        stagger:".1s"
    })
    gsap.from("#page1 #name h3",{
        x:300,
       opacity:0,
       scale:0,
       duration:1
    })
    gsap.from("#page1 #name h1",{
        x:-300,
       opacity:0,
       scale:0,
       duration:1
    })
    gsap.from("#page1 #name h2",{
        x:300,
       opacity:0,
       scale:0,
       duration:1
    })
    gsap.from("#page1 #name p",{
        x:-300,
       opacity:0,
       scale:0,
       duration:1
    })
    gsap.from("#page1 #name button",{
       opacity:0,
       scale:0,
       duration:1
    })
    gsap.from("#page1 #name #logos a",{
        opacity:0,
        scale:0,
        duration:1
     })
     gsap.from("#page1 #photo #photo-container",{
        opacity:0,
        scale:0,
        duration:1
     })
     
     gsap.from("#page2 #edu h1",{
        y:-50,
            opacity:0,
            scale:0,
        scrollTrigger:{
            trigger:"#page2 #edu h1",
            scroller:"body",
            // markers:true,
            start:"top 90%",
            end:"bottom 40%",
            scrub:4
        }
     })
     var tl1 = gsap.timeline();
     tl1.from("#page2 #edu-details .edu-class:nth-child(1)",{
         x:-200,
         opacity:0,
         scale:0,
         scrollTrigger:{
            trigger:"#page2 #edu-details .edu-class:nth-child(1)",
            scroller:"body",
            // markers:true,
            start:"top 90%",
            end:"bottom 60%",
            scrub:4
         }
      })
      tl1.from("#page2 #edu-details .edu-class:nth-child(2)",{
        x:200,
        opacity:0,
        scale:0,
        scrollTrigger:{
           trigger:"#page2 #edu-details .edu-class:nth-child(2)",
           scroller:"body",
        //    markers:true,
           start:"top 90%",
           end:"bottom 60%",
           scrub:4
        }
     })
     tl1.from("#page2 #edu-details .edu-class:nth-child(3)",{
        x:-200,
        opacity:0,
        scale:0,
        scrollTrigger:{
           trigger:"#page2 #edu-details .edu-class:nth-child(3)",
           scroller:"body",
        //    markers:true,
           start:"top 90%",
           end:"bottom 89%",
           scrub:4
        }
     })
     gsap.from("#page3 #ski h1",{
        y:-100,
            opacity:0,
            scale:0,
        scrollTrigger:{
            trigger:"#page3 #ski h1",
            scroller:"body",
            // markers:true,
            start:"top 90%",
            end:"bottom 40%",
            scrub:4
        }
     })
     
     gsap.from("#page3 #ski-details",{
        y:300,
        opacity:0,
        stagger:5,
        // rotate:360,
        scrollTrigger:{
           trigger:"#page3 #ski-details",
           scroller:"body",
        //    markers:true,
           start:"top 95%",
           end:"top 80%",
           scrub:4
        }
     })
     gsap.from("#page4 #pro h1",{
        y:-100,
            opacity:0,
            scale:0,
        scrollTrigger:{
            trigger:"#page4 #pro h1",
            scroller:"body",
            // markers:true,
            start:"top 90%",
            end:"bottom 40%",
            scrub:4
        }
     })
     
     gsap.from("#page4 #pro-details",{
        y:300,
        opacity:0,
        stagger:5,
        // rotate:360,
        scrollTrigger:{
           trigger:"#page4 #pro-details",
           scroller:"body",
        //    markers:true,
           start:"top 95%",
           end:"top 80%",
           scrub:4
        }
     })
     gsap.from("#page5 #cer h1",{
        y:-100,
            opacity:0,
            scale:0,
        scrollTrigger:{
            trigger:"#page5 #cer h1",
            scroller:"body",
            // markers:true,
            start:"top 90%",
            end:"bottom 40%",
            scrub:4
        }
     })
     
     gsap.from("#page5 #cer-details",{
        y:300,
        opacity:0,
        stagger:5,
        // rotate:360,
        scrollTrigger:{
           trigger:"#page5 #cer-details",
           scroller:"body",
        //    markers:true,
           start:"top 95%",
           end:"top 80%",
           scrub:4
        }
     })
     gsap.from("#page6 #con h1",{
        y:-300,
        opacity:0,
        stagger:5,
        // rotate:360,
        scrollTrigger:{
           trigger:"#page5 #cer-details",
           scroller:"body",
        //    markers:true,
           start:"top 95%",
           end:"top 80%",
           scrub:4
        }
     })

}
animationGsap();
function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// // --- RED PANEL ---
// gsap.from(".line-1", {
//   scrollTrigger: {
//     trigger: ".line-1",
//     scroller: "#main",
//     scrub: true,
//     start: "top bottom",
//     end: "top top",
//     onUpdate: self => console.log(self.direction)
//   },
//   scaleX: 0,
//   transformOrigin: "left center", 
//   ease: "none"
// });


// // --- ORANGE PANEL ---
// gsap.from(".line-2", {
//   scrollTrigger: {
//     trigger: ".orange",
//     scroller: "#main",
//     scrub: true,
//     pin: true,
//     start: "top top",
//     end: "+=100%"
//   },
//   scaleX: 0, 
//   transformOrigin: "left center", 
//   ease: "none"
// });


// // --- PURPLE/GREEN PANEL ---
// var tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".purple",
//       scroller: "#main",
//       scrub: true,
//       pin: true,
//       start: "top top",
//       end: "+=100%"
//     }
//   });

// tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
//   .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
//   .to(".purple", {backgroundColor: "#28a92b"}, 0);



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
// loco();
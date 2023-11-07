
const container = document.querySelector(".smooth-scroll-container");
const group1 = document.querySelector(".group1");
const group2 = document.querySelector(".group2");
const group3 = document.querySelector(".group3");
const group4 = document.querySelector(".group4");

ScrollTrigger.matchMedia({
        "(min-width: 800px)": function () {
          gsap.to(".smooth-scroll-item", {
            y: -100, 
            scrollTrigger: {
              trigger: container,
              start: "top top", 
              end: "bottom bottom", 
              scrub: 2, 
            },
          });
          gsap.to(".group1", {
            y: 100, 
            scrollTrigger: {
              trigger: group1,
              start: "top top", 
              end: "bottom bottom",
              scrub: 2, 
            },
          });
          gsap.to(".group2", {
            y: 100, 
            scrollTrigger: {
              trigger: group2,
              start: "top top", 
              end: "bottom bottom", 
              scrub: 2, 
            },
          });
          gsap.to(".group3", {
            y: 100, 
            scrollTrigger: {
              trigger: group3,
              start: "top top",
              end: "bottom bottom", 
              scrub: 2, 
            },
          });
          gsap.to(".group4", {
                y: 100,
                scrollTrigger: {
                  trigger: group4,
                  start: "top top",
                  end: "bottom bottom", 
                  scrub: 2, 
                },
              });
        };
      
        all: function () {},
      });
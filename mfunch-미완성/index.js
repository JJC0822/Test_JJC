
gsap.registerPlugin(ScrollTrigger);
// header menu
const showNav = gsap
  .from(".h_pc_menu", {
    opacity: 0,
    paused: true,
    duration: 0.3,
  })

ScrollTrigger.create({
  start: "top top",
  end: 99999,

  onUpdate: (self) => {
    self.direction === -1 ? showNav.play() : showNav.reverse();
  },
});

//main_intro
const meteor = document.querySelectorAll(".meteor");
const meteor1 = document.querySelector("#m_1");
const meteor2 = document.querySelector("#m_2");
const meteor3 = document.querySelector("#m_3");
const meteor4 = document.querySelector("#m_4");
const h1 = document.querySelector("#h1");
const h3 = document.querySelector("#h3");
const h4 = document.querySelector("#h4");
addEventListener("mousemove", (e) => {
  //마우스의 실시간 좌표확인
  let x = e.clientX;
  let y = e.clientY;
  meteor1.style.transform = `translate(${-x / -50}px, ${
    y / 70 + 10
  }px) rotate(15deg)`;
  meteor2.style.transform = `translate(${-x / -50}px, ${
    y / 70 + 10
  }px) rotate(15deg)`;
  meteor3.style.transform = `translate(${-x / -50}px, ${
    y / 70 + 10
  }px) rotate(15deg)`;
  meteor4.style.transform = `translate(${x / -50}px, ${
    y / 70 + 10
  }px)  rotate(15deg)`;
  h1.style.transform = `translate(${-x / -50}px, ${y / 70 + 10}px)`;
  h3.style.transform = `translate(${30 - x / 60}px, ${40 - y / 50}px)`;
  h4.style.transform = `translate(${30 - x / 60}px, ${y / 50}px)`;
});

const h_bg = document.querySelector("#pc_bg");
const h_bg_m = document.querySelector("#m_bg");

addEventListener("scroll", () => {
  h_bg.style.transform = `translateY(${scrollY / 8}px)`;
});
addEventListener("scroll", () => {
  h_bg_m.style.transform = `translateY(-${scrollY / 8}px)`;
});

//스크롤 이벤트
const container = document.querySelector(".smooth-scroll-container");

gsap.to(".smooth-scroll-item", {
  y: -500, // 원하는 애니메이션 효과 설정
  scrollTrigger: {
    trigger: container,
    start: "top top", // 트리거가 언제 시작될지 설정
    end: "bottom bottom", // 트리거가 언제 끝날지 설정
    scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
  },
});

// works
/* gsap;
const cloud = document.querySelector(".cloud");
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
  },
  // all: function () {},
}); */

//토글메뉴---------------------------------------------------------------------------------------------


const elem = document.querySelector('#nav-bg'),
      toggleBtn = document.querySelector('#toggle-btn'),
      elemH = elem.getBoundingClientRect().height,
      elemW = elem.getBoundingClientRect().width;

let open = false;
let scale, offsetX, offsetY;

const calculateValues = (() => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  //const cssStyles = getComputedStyle(elem);
  //const offsetValue = Number(cssStyles.getPropertyValue('--offset-value'));
  const offsetValue = Number(getComputedStyle(elem).getPropertyValue('--offset-value'));

  //  Offsets to center the circle
/*   offsetX = (w/2) - (elemW/2) - offsetValue;
  offsetY = (h/2) - (elemH/2) - offsetValue; */
  offsetX = 50; // 가로 위치 (픽셀)
  offsetY = 10;  // 세로 위치 (픽셀)

  // Good old pythagoras
  const radius = Math.sqrt((h ** 2)+(w ** 2));
  scale = radius/(elemW/2)/1 + .1; // Add '.1' to compensate for Safari sub pixel blur issue
  return scale;
})


const openMenu = () => {
  elem.style.setProperty("--translate-x", `${offsetX}px`);
  elem.style.setProperty("--translate-y", `-${offsetY}px`);
  elem.style.setProperty("--scale", scale);
}
const closeMenu = () => {
  elem.style.setProperty("--scale", 1);
  elem.style.setProperty("--translate-x", 0);
  elem.style.setProperty("--translate-y", 0);
}
const animateMenu = () => {
  open ? openMenu() : closeMenu();
};

const toggleMenu = () => {
  open = !open;
  animateMenu();
  toggleBtn.classList.toggle('shown');
}

const resizeHandler = () => { 
  window.requestAnimationFrame(() => {
    calculateValues();
    animateMenu();
  });
}

calculateValues();

//toggleBtn.onclick = toggleMenu;
toggleBtn.addEventListener('click', toggleMenu, false);
window.addEventListener("resize", resizeHandler, false);

const container = document.querySelector(".smooth-scroll-container");

const group1 = document.querySelector(".group1");
const group2 = document.querySelector(".group2");
const group3 = document.querySelector(".group3");
const url_1 = document.querySelector(".url_1");
const url_2 = document.querySelector(".url_2");
const url_3 = document.querySelector(".url_3");
const url_4 = document.querySelector(".url_4");
const url_5 = document.querySelector(".url_5");
const url_6 = document.querySelector(".url_6");
const url_7 = document.querySelector(".url_7");
const url_8 = document.querySelector(".url_8");
const url_9 = document.querySelector(".url_9");
const url_10 = document.querySelector(".url_10");
const url_11 = document.querySelector(".url_11");
const url_12 = document.querySelector(".url_12");
const body = document.querySelector(".w_body_img");

ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {
    gsap.to(".w_body_img", {
      y: 300, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: body,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".smooth-scroll-item", {
      y: -400, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: container,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".group1", {
      y: 100, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: group1,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".group2", {
      y: 100, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: group2,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".group3", {
      y: 100, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: group3,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
  },

  /////////////// **************** 모바일

  "(max-width: 799px)": function () {
    gsap.to(".smooth-scroll-item", {
      y: -300, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: container,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".body_img", {
      y: -800, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: body,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".url_1", {
      y: -100, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: url_1,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".url_2", {
      y: -100, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: url_2,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".url_3", {
      y: -100, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: url_3,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".url_4", {
      y: -100, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: url_4,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".url_5", {
      y: -100, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: url_5,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".url_6", {
      y: -100, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: url_6,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".url_7", {
      y: -100, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: url_7,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".url_8", {
      y: -100, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: url_8,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".url_9", {
      y: -100, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: url_9,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".url_10", {
      y: -100, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: url_10,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".url_11", {
      y: -100, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: url_11,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".url_12", {
      y: -100, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: url_12,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
  },

  all: function () {},
});

// header side menu
//토글메뉴
const elem = document.querySelector("#nav-bg"),
  toggleBtn = document.querySelector("#toggle-btn"),
  elemH = elem.getBoundingClientRect().height,
  elemW = elem.getBoundingClientRect().width;

let open = false;
let scale, offsetX, offsetY;

const calculateValues = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  //const cssStyles = getComputedStyle(elem);
  //const offsetValue = Number(cssStyles.getPropertyValue('--offset-value'));
  const offsetValue = Number(
    getComputedStyle(elem).getPropertyValue("--offset-value")
  );

  //  Offsets to center the circle
  /*   offsetX = (w/2) - (elemW/2) - offsetValue;
  offsetY = (h/2) - (elemH/2) - offsetValue; */
  offsetX = 50; // 가로 위치 (픽셀)
  offsetY = 10; // 세로 위치 (픽셀)

  // Good old pythagoras
  const radius = Math.sqrt(h ** 2 + w ** 2);
  scale = radius / (elemW / 2) / 1 + 0.1; // Add '.1' to compensate for Safari sub pixel blur issue
  return scale;
};

const openMenu = () => {
  elem.style.setProperty("--translate-x", `${offsetX}px`);
  elem.style.setProperty("--translate-y", `-${offsetY}px`);
  elem.style.setProperty("--scale", scale);
};
const closeMenu = () => {
  elem.style.setProperty("--scale", 1);
  elem.style.setProperty("--translate-x", 0);
  elem.style.setProperty("--translate-y", 0);
};
const animateMenu = () => {
  open ? openMenu() : closeMenu();
};

const toggleMenu = () => {
  open = !open;
  animateMenu();
  toggleBtn.classList.toggle("shown");
};

const resizeHandler = () => {
  window.requestAnimationFrame(() => {
    calculateValues();
    animateMenu();
  });
};

calculateValues();

//toggleBtn.onclick = toggleMenu;
toggleBtn.addEventListener("click", toggleMenu, false);
window.addEventListener("resize", resizeHandler, false);

// footer family
const fClose = document.querySelector(".family_close span");
const fSubBg = document.querySelector(".family_bg");
const fOpen = document.querySelector(".family button");

fClose.addEventListener("click", () => {
  fSubBg.style.display = "none";
});

fOpen.addEventListener("click", () => {
  fSubBg.style.display = "block";
});

gsap.registerPlugin(ScrollTrigger);
// header menu
const showNav = gsap
  .from(".h_pc_menu", {
    opacity: 0,
    paused: true,
    duration: 0.3,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,

  onUpdate: (self) => {
    self.direction === -1 ? showNav.play() : showNav.reverse();
  },
});

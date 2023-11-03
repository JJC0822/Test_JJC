gsap.registerPlugin(ScrollTrigger);

// 스크롤 스무딩 효과를 적용할 요소 선택
const container = document.querySelector(".smooth-scroll-container");
const run = document.querySelector("img.run");
const robot = document.querySelector("img.robot");
const i_info1 = document.querySelector(".i_infotxt");
const i_info2 = document.querySelector(".i_video h2");
const i_info3 = document.querySelector(".boo");

// ScrollTrigger를 사용하여 요소를 트리거하고 애니메이션을 정의
gsap.to(".smooth-scroll-item", {
  y: -500, // 원하는 애니메이션 효과 설정
  scrollTrigger: {
    trigger: container,
    start: "top top", // 트리거가 언제 시작될지 설정
    end: "bottom bottom", // 트리거가 언제 끝날지 설정
    scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
  },
});
gsap.to(".run", {
  x: -200, // 원하는 애니메이션 효과 설정
  scrollTrigger: {
    trigger: run,
    start: "top center", // 트리거가 언제 시작될지 설정
    end: "bottom center", // 트리거가 언제 끝날지 설정
    scrub: 3, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
  },
});
gsap.to(".robot", {
  x: 150, // 원하는 애니메이션 효과 설정
  scrollTrigger: {
    trigger: robot,
    start: "top bottom", // 트리거가 언제 시작될지 설정
    end: "bottom bottom", // 트리거가 언제 끝날지 설정
    scrub: 3, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
  },
});
gsap.to(".i_infotxt", {
  y: -60, // 원하는 애니메이션 효과 설정
  scrollTrigger: {
    trigger: i_info1,
    start: "top bottom", // 트리거가 언제 시작될지 설정
    end: "bottom center", // 트리거가 언제 끝날지 설정
    scrub: 3, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
  },
});

gsap.to(".i_video h2", {
  y: -50, // 원하는 애니메이션 효과 설정
  scrollTrigger: {
    trigger: i_info1,
    start: "top bottom", // 트리거가 언제 시작될지 설정
    end: "bottom center", // 트리거가 언제 끝날지 설정
    scrub: 7, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
  },
});
gsap.to(".i_boo", {
  y: -100, // 원하는 애니메이션 효과 설정
  scrollTrigger: {
    trigger: i_info3,
    start: "top bottom", // 트리거가 언제 시작될지 설정
    end: "bottom center", // 트리거가 언제 끝날지 설정
    scrub: 7, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
  },
});

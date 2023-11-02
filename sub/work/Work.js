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
const body = document.querySelector(".body_img");

ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {
    gsap.to(".body_img", {
      y: 500, // 원하는 애니메이션 효과 설정
      scrollTrigger: {
        trigger: body,
        start: "top top", // 트리거가 언제 시작될지 설정
        end: "bottom bottom", // 트리거가 언제 끝날지 설정
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
      },
    });
    gsap.to(".smooth-scroll-item", {
      y: -300, // 원하는 애니메이션 효과 설정
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

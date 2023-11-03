// map
const mapContainer = document.getElementById("c_map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.57606916877362, 126.89055950772155), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
  };

// 지도를 생성한다
const map = new kakao.maps.Map(mapContainer, mapOption);

// 지도에 마커를 생성하고 표시한다
const marker = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.57606916877362, 126.89055950772155), // 마커의 좌표
  map: map, // 마커를 표시할 지도 객체
});

// gsap.plugin
gsap.registerPlugin(ScrollTrigger);
// header menu
const showNav = gsap
  .from(".h_pc_menu", {
    opacity: 0,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,

  onUpdate: (self) => {
    self.direction === -1 ? showNav.play() : showNav.reverse();
  },
});

// scrollSmoder
const container = document.querySelector(".contact");
const mainText = document.querySelector(".c_txt");
const content = document.querySelector(".smooth-scroll-container");
const mapSmoder = document.querySelector(".c_map");

gsap.to(".smooth-scroll-item", {
  y: -500,
  scrollTrigger: {
    trigger: container,
    start: "top top",
    end: "bottom bottom",
    scrub: 3,
  },
});
gsap.to(".smooth-scroll-item", {
  y: -200,
  scrollTrigger: {
    trigger: mainText,
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
  },
});
gsap.to(".smooth-scroll-item", {
  y: -80,
  scrollTrigger: {
    trigger: content,
    start: "top bottom",
    end: "bottom bottom",
    scrub: 3,
  },
});
gsap.to(".smooth-scroll-item", {
  y: -800,
  scrollTrigger: {
    trigger: mapSmoder,
    start: "top bottom",
    end: "bottom bottom",
    scrub: 6,
  },
});

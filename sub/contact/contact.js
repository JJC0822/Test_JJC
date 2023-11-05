// gsap.plugin
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

// scrollSmoder
const mainText = document.querySelector(".c_txt");
const content = document.querySelector(".smooth-scroll-container");
const mapSmoder = document.querySelector(".c_map");

gsap.to(".c_txt", {
  y: -50,
  scrollTrigger: {
    trigger: mainText,
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
  },
});
gsap.to(".smooth-scroll-container", {
  y: -40,
  scrollTrigger: {
    trigger: content,
    start: "top bottom",
    end: "bottom bottom",
    scrub: 3,
  },
});
gsap.to(".c_map", {
  y: -30,
  scrollTrigger: {
    trigger: mapSmoder,
    start: "top bottom",
    end: "bottom bottom",
    scrub: 3,
  },
});

// QNA
const innerQnaBtn = document.querySelector(".inner_qna_btn");
const qnaSlideMenu = document.querySelector(".c_qna_menu");

innerQnaBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  qnaSlideMenu.classList.toggle("active");
});

// QNA내에 checkbox
const checkBoxes = document.querySelectorAll(".c_qna_check");

checkBoxes.forEach((checkBox, idx) => {
  checkBox.addEventListener("change", () => {
    const label = document.querySelector(`[for="checkbox${idx}"]`);
    if (checkBox.checked) {
      label.style.color = "#ea5028";
      label.style.borderColor = "#ea5028";
    } else {
      label.style.color = "black";
      label.style.borderColor = "lightgray";
    }
  });
});

// brochure
const brochurOpenBtn = document.querySelector(".inner_brochur_btn");
const bsrochurCloseBtn = document.querySelector(".brochure_close_btn");
const brochureModal = document.querySelector(".c_brochure_modal");
// 모달 열기
brochurOpenBtn.addEventListener("click", () => {
  brochureModal.style.display = "block";
});
// 모달 닫기
bsrochurCloseBtn.addEventListener("click", () => {
  brochureModal.style.display = "none";
});

// map
const mapContainer = document.getElementById("c_map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.57606916877362, 126.89055950772155), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
  };

// 지도를 생성한다
const map = new kakao.maps.Map(mapContainer, mapOption);

// 지도에 확대 축소 컨트롤을 생성한다
const zoomControl = new kakao.maps.ZoomControl();

// 지도의 우측에 확대 축소 컨트롤을 추가한다
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 마커 이미지의 주소
const markerImageUrl =
    "https://jjc0822.github.io/Test_JJC/sub/contact/imgase/logo.svg",
  markerImageSize = new kakao.maps.Size(40, 42), // 마커 이미지의 크기
  markerImageOptions = {
    offset: new kakao.maps.Point(20, 42), // 마커 좌표에 일치시킬 이미지 안의 좌표
  };

// 마커 이미지를 생성한다
const markerImage = new kakao.maps.MarkerImage(
  markerImageUrl,
  markerImageSize,
  markerImageOptions
);

// 지도에 마커를 생성하고 표시한다
const marker = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.57606916877362, 126.89055950772155), // 마커의 좌표
  image: markerImage, // 마커의 이미지
  map: map, // 마커를 표시할 지도 객체
});

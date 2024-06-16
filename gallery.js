const current = document.getElementById("current"); // 현재 선택된 이미지를 표시할 요소를 가져옴
// const current = document.querySelector('#current'); // 선택적으로 사용할 수 있는 대체 방법
const imgs = document.querySelectorAll(".imgs img"); // 모든 이미지 요소를 가져옴

imgs.forEach((img) => img.addEventListener("click", imgClick)); // 각 이미지에 클릭 이벤트 리스너를 추가

document.addEventListener("DOMContentLoaded", (event) => { // DOM이 완전히 로드되었을 때 실행되는 함수
  const imgs = document.querySelectorAll(".imgs img"); // 모든 이미지 요소를 가져옴
  const current = document.getElementById("current"); // 현재 선택된 이미지를 표시할 요소를 가져옴
  let slide = document.querySelector(".main-img"); // 슬라이드 요소를 가져옴
  let currentIndex = 0; // 현재 슬라이드의 인덱스를 저장할 변수

  // 이미지 클릭 이벤트
  imgs.forEach((img, index) => // 각 이미지에 대해
    img.addEventListener("click", () => { // 이미지 클릭 이벤트를 추가
      current.src = img.src; // 클릭한 이미지의 src를 현재 이미지로 설정
      current.classList.remove("fade-in"); // fade-in 클래스를 제거하여 애니메이션을 재설정
      void current.offsetWidth; // Reflow to restart the animation // 애니메이션 재시작을 위한 리플로우
      current.classList.add("fade-in"); // fade-in 클래스를 다시 추가하여 애니메이션을 시작
      currentIndex = index; // 현재 인덱스를 클릭한 이미지의 인덱스로 설정
    })
  );

  // 다음 슬라이드로 이동하는 함수
  function nextMove() { 
    currentIndex = (currentIndex + 1) % imgs.length; // 다음 인덱스를 계산 (순환)
    current.src = imgs[currentIndex].src; // 다음 이미지의 src를 현재 이미지로 설정
    current.classList.remove("fade-in"); // fade-in 클래스를 제거하여 애니메이션을 재설정
    void current.offsetWidth; // Reflow to restart the animation // 애니메이션 재시작을 위한 리플로우
    current.classList.add("fade-in"); // fade-in 클래스를 다시 추가하여 애니메이션을 시작
  }

  let loopInterval = setInterval(nextMove, 3000); // 3초마다 슬라이드를 자동으로 넘김

  slide.addEventListener("mouseover", () => { // 슬라이드에 마우스가 올라간 경우
    clearInterval(loopInterval); // 루프 멈추기
  });

  slide.addEventListener("mouseout", () => { // 슬라이드에서 마우스가 나온 경우
    loopInterval = setInterval(nextMove, 3000); // 루프 재시작하기
  });
});

function imgClick(e) { // 이미지 클릭 이벤트 핸들러
  imgs.forEach((img) => (img.style.opacity = 1)); // 모든 이미지의 투명도를 초기화

  current.src = e.target.src; // 클릭한 이미지의 src를 현재 이미지로 설정

  current.classList.add("fade-in"); // fade-in 클래스를 추가하여 애니메이션을 시작

  setTimeout(() => current.classList.remove("fade-in"), 500); // 500ms 후에 fade-in 클래스를 제거

  e.target.style.opacity = 0.4; // 클릭한 이미지의 투명도를 변경
}

// DOMContentLoaded 이벤트가 발생하면 실행되는 또 다른 함수
document.addEventListener("DOMContentLoaded", function() {
  // 'backToTop' id를 가진 버튼 요소 선택
  const backToTopButton = document.getElementById('backToTop');

  // 스크롤 이벤트 리스너 추가
  window.addEventListener('scroll', () => {
      // 스크롤 위치가 0보다 크면
      if (window.scrollY) {
          // 'backToTop' 버튼을 보이게 함
          backToTopButton.style.display = 'block';
      } else {
          // 'backToTop' 버튼을 숨김
          backToTopButton.style.display = 'none';
      }
  });

  // 'backToTop' 버튼에 클릭 이벤트 리스너 추가
  backToTopButton.addEventListener('click', () => {
      // 부드러운 스크롤로 페이지 상단으로 이동
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});
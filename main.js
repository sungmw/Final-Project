// DOMContentLoaded 이벤트가 발생하면 실행되는 함수
document.addEventListener("DOMContentLoaded", function() {
    // 포트폴리오 웹사이트가 로드되었음을 콘솔에 로그 출력
    console.log("Portfolio website loaded.");

    // "hidden" 클래스를 가진 모든 section 요소들을 선택
    const sections = document.querySelectorAll("section.hidden");

    // IntersectionObserver의 옵션을 설정 (10%가 보일 때 콜백 실행)
    const options = {
        threshold: 0.1
    };

    // IntersectionObserver를 생성하고, 각 항목이 관찰될 때 콜백 함수 실행
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // 항목이 화면에 보일 경우
            if (entry.isIntersecting) {
                // 항목에 'visible' 클래스 추가
                entry.target.classList.add('visible');
                // 더 이상 이 항목을 관찰하지 않음
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // 각 section 요소를 관찰 시작
    sections.forEach(section => {
        observer.observe(section);
    });

    // 네비게이션 링크 요소들을 선택
    const navLinks = document.querySelectorAll("nav ul li a");

    // 각 링크에 클릭 이벤트 리스너 추가
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // 기본 클릭 동작(페이지 이동) 방지
            event.preventDefault();
            // 클릭한 링크의 href 속성에서 #을 제거한 후 id 값 얻기
            const targetId = event.currentTarget.getAttribute("href").substring(1);
            // 해당 id를 가진 섹션 요소 선택
            const targetSection = document.getElementById(targetId);

            // 부드러운 스크롤로 해당 섹션으로 이동, 헤더 높이만큼 오프셋 조정
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: "smooth"
            });
        });
    });
});

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







// --------------------
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지
    
    var userMessage = document.getElementById('userMessage').value;
    
    if(userMessage.trim() === "") {
      alert("댓글을 입력해주세요!");
      return;
    }
  
    // 폼 제출 시 메시지 확인 및 리셋
    document.getElementById('messageBox').style.display = 'block';
    document.getElementById('userMessage').value = '';
  
    // 3초 후 메시지 박스를 숨김
    setTimeout(function() {
      document.getElementById('messageBox').style.display = 'none';
    }, 3000);
  });
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('.study_img .link img');
  
    links.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
      });
  
      link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
      });
    });
  });



//   버튼 눌르면 pdf 나오게 하기
document.addEventListener('DOMContentLoaded', () => {
    const togglePhpPdfBtn = document.getElementById('togglePhpPdfBtn');
    const phpPdf = document.getElementById('phpPdf');
  
    const toggleJobPdfBtn = document.getElementById('toggleJobPdfBtn');
    const jobPdf = document.getElementById('jobPdf');
  
    const toggleBoardPdfBtn = document.getElementById('toggleBoardPdfBtn');
    const boardPdf = document.getElementById('boardPdf');
  
    togglePhpPdfBtn.addEventListener('click', () => {
      if (phpPdf.style.display === 'none' || phpPdf.style.display === '') {
        phpPdf.style.display = 'block';
      } else {
        phpPdf.style.display = 'none';
      }
    });
  
    toggleJobPdfBtn.addEventListener('click', () => {
      if (jobPdf.style.display === 'none' || jobPdf.style.display === '') {
        jobPdf.style.display = 'block';
      } else {
        jobPdf.style.display = 'none';
      }
    });
  
    toggleBoardPdfBtn.addEventListener('click', () => {
      if (boardPdf.style.display === 'none' || boardPdf.style.display === '') {
        boardPdf.style.display = 'block';
      } else {
        boardPdf.style.display = 'none';
      }
    });
  });
  
  
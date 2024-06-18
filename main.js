document.addEventListener("DOMContentLoaded", function() {
  console.log("Portfolio website loaded."); // 웹사이트 로드 시 콘솔에 메시지 출력

  const sections = document.querySelectorAll("section.hidden"); // 숨겨진 섹션들을 선택

  const options = {
      threshold: 0.1 // 섹션의 10%가 보일 때 콜백 실행
  };

  // 섹션이 보이면 'visible' 클래스를 추가하고, 관찰 중지
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, options);

  // 각 섹션을 관찰
  sections.forEach(section => {
      observer.observe(section);
  });

  const navLinks = document.querySelectorAll("nav ul li a"); // 네비게이션 링크 선택

  // 네비게이션 링크 클릭 시 부드럽게 스크롤
  navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault(); // 기본 동작 방지
          const targetId = event.currentTarget.getAttribute("href").substring(1); // 타겟 섹션 ID
          const targetSection = document.getElementById(targetId); // 타겟 섹션 선택

          window.scrollTo({
              top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // 헤더 높이만큼 보정
              behavior: "smooth" // 부드러운 스크롤
          });

          // 모바일 메뉴를 클릭했을 때 메뉴를 닫도록 추가
          if (window.innerWidth <= 768) {
              document.querySelector("nav ul").classList.remove("active");
          }
      });
  });

  // 햄버거 메뉴 토글 기능 추가
  document.querySelector(".menu-toggle").addEventListener("click", function() {
      document.querySelector("nav ul").classList.toggle("active");
  });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지
    
    var userMessage = document.getElementById('userMessage').value; // 유저 메시지 값 가져오기
    
    if(userMessage.trim() === "") { // 메시지가 빈 경우 알림 표시
      alert("댓글을 입력해주세요!");
      return;
    }
  
    // 폼 제출 시 메시지 확인 및 리셋
    document.getElementById('messageBox').style.display = 'block'; // 메시지 박스 표시
    document.getElementById('userMessage').value = ''; // 입력 필드 리셋
  
    // 3초 후 메시지 박스를 숨김
    setTimeout(function() {
      document.getElementById('messageBox').style.display = 'none';
    }, 3000);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('.study_img .link img'); // 이미지 링크 선택
  
    // 이미지에 마우스 오버 시 확대, 아웃 시 원래 크기로
    links.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
      });
  
      link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
      });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const togglePhpPdfBtn = document.getElementById('togglePhpPdfBtn');
    const phpPdf = document.getElementById('phpPdf');
  
    const toggleJobPdfBtn = document.getElementById('toggleJobPdfBtn');
    const jobPdf = document.getElementById('jobPdf');
  
    const toggleBoardPdfBtn = document.getElementById('toggleBoardPdfBtn');
    const boardPdf = document.getElementById('boardPdf');
  
    // PHP PDF 토글 버튼 기능
    togglePhpPdfBtn.addEventListener('click', () => {
      if (phpPdf.style.display === 'none' || phpPdf.style.display === '') {
        phpPdf.style.display = 'block';
      } else {
        phpPdf.style.display = 'none';
      }
    });
  
    // Job PDF 토글 버튼 기능
    toggleJobPdfBtn.addEventListener('click', () => {
      if (jobPdf.style.display === 'none' || jobPdf.style.display === '') {
        jobPdf.style.display = 'block';
      } else {
        jobPdf.style.display = 'none';
      }
    });
  
    // Board PDF 토글 버튼 기능
    toggleBoardPdfBtn.addEventListener('click', () => {
      if (boardPdf.style.display === 'none' || boardPdf.style.display === '') {
        boardPdf.style.display = 'block';
      } else {
        boardPdf.style.display = 'none';
      }
    });

    // 좋아요 버튼 기능
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');
    let count = 0;
  
    likeBtn.addEventListener('click', () => {
      count++; // 좋아요 카운트 증가
      likeCount.textContent = count; // 좋아요 카운트 업데이트
  
      // 하트 요소 생성 및 추가
      const heart = document.createElement('span');
      heart.classList.add('heart');
      heart.textContent = '❤️';
      likeBtn.appendChild(heart);
  
      // 애니메이션 종료 후 하트 제거
      heart.addEventListener('animationend', () => {
        heart.remove();
      });
    });
});

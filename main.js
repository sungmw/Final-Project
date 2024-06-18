document.addEventListener("DOMContentLoaded", function() {
  console.log("Portfolio website loaded.");

  const sections = document.querySelectorAll("section.hidden");

  const options = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section);
  });

  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          const targetId = event.currentTarget.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          window.scrollTo({
              top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
              behavior: "smooth"
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



  
//   좋아요 카운트 증가 및 pdf 버튼
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
  
    // Like button functionality
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');
    let count = 0;
  
    likeBtn.addEventListener('click', () => {
      count++;
      likeCount.textContent = count;
  
      // Create heart element
      const heart = document.createElement('span');
      heart.classList.add('heart');
      heart.textContent = '❤️';
      likeBtn.appendChild(heart);
  
      // Remove heart after animation
      heart.addEventListener('animationend', () => {
        heart.remove();
      });
    });
  });
  

  // 설문조사
  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const messageBox = document.getElementById('messageBox');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      messageBox.style.display = 'block';
    });

    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');
    let likes = 0;

    likeBtn.addEventListener('click', () => {
      likes++;
      likeCount.textContent = likes;
    });

    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

    stars.forEach(star => {
      star.addEventListener('click', () => {
        selectedRating = star.getAttribute('data-value');
        stars.forEach(s => s.classList.remove('selected'));
        star.classList.add('selected');
        for (let i = 0; i < selectedRating; i++) {
          stars[i].classList.add('selected');
        }
      });
    });

    const surveyForm = document.getElementById('surveyForm');
    const surveyMessageBox = document.getElementById('surveyMessageBox');

    surveyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const visitAgain = document.querySelector('input[name="visitAgain"]:checked')?.value;

      if (selectedRating && visitAgain) {
        surveyMessageBox.style.display = 'block';
      } else {
        alert('모든 항목을 입력해 주세요.');
      }
    });
  });


  
document.addEventListener("DOMContentLoaded", function () {
  const API_BASE_URL = "https://be-semarang-13-production.up.railway.app";

  function buildCourseCard(course) {
    const card = document.createElement("div");
    card.classList.add("card-1");

    card.innerHTML = `
      <img src="${course.imgSrc}" alt="" />
      <div class="accsess">
        <h4>${course.students}</h4>
      </div>
      <h5>${course.date}</h5>
      <h1>${course.title}</h1>
      <p>${course.teacher}</p>
      <div class="bottom">
        <h4>${course.price}</h4>
        <button class="enroll-button" data-course-id="${course.id}">Enroll Now</button>
      </div>
    `;

    return card;
  }

  function appendCourseCards() {
    const cardContainer = document.querySelector(".card-container");
    if (cardContainer) {
      fetch(`${API_BASE_URL}/index`)
        .then((response) => response.json())
        .then((data) => {
          data.forEach(function (courseData) {
            const card = buildCourseCard(courseData);
            cardContainer.appendChild(card);
          });

           // Menambahkan event listener "Enroll Now" setelah data kursus dimuat
           const enrollButtons = document.querySelectorAll(".enroll-button");
           enrollButtons.forEach((button) => {
             button.addEventListener("click", function () {
               const courseId = button.getAttribute("data-course-id");
               redirectToCourseView(courseId);
             });
           });
         })
         .catch((error) => {
           console.error("Error fetching data:", error);
         });
     }
   }

    // Fungsi klik tombol "Enroll Now"
  function redirectToCourseView(courseId) {
    window.location.href = `../views/courseview.html?course=${courseId}`;
  }

const contentFill = document.querySelector('.content-fill');
  
  // Fungsi Scroll Contact
  const currentURL = window.location.pathname;
  if (currentURL.includes("index.html")) {
    const contactLink = document.getElementById("contact-link");
    if (contactLink) {
      contactLink.addEventListener("click", function (event) {
        event.preventDefault();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          const offsetTop = contactSection.offsetTop;
          scrollToSection(offsetTop);
        }
      });
    }
  
    const popularCourseLink = document.getElementById("popular-course-link");
    if (popularCourseLink) {
      popularCourseLink.addEventListener("click", function (event) {
        event.preventDefault();
        const popularCourseSection = document.getElementById("popular-course");
        if (popularCourseSection) {
          const offsetTop = popularCourseSection.offsetTop;
          scrollToSection(offsetTop);
        }
      });
    }
  }  

  function scrollToSection(offsetTop) {
    const scrollDuration = 1000;
    const start = window.pageYOffset;
    const distance = offsetTop - start;
    let startTime;

    function scrollStep(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / scrollDuration, 1);
      window.scrollTo(0, start + distance * easeInOutSine(percentage));

      if (progress < scrollDuration) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }

  function easeInOutSine(t) {
    return (1 - Math.cos(Math.PI * t)) / 2;
  }
  appendCourseCards();
});

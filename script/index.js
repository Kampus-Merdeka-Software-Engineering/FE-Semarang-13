const API_BASE_URL = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", function () {
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

          // Menambahkan event listener "Enroll Now"
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

  function redirectToCourseView(courseId) {
    window.location.href = `courseview.html?course=${courseId}`;
  }

  const contentFill = document.querySelector(".content-fill");

  // Fungsi Scroll Contact
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

  // Handle form
  const form = document.querySelector("#contact-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {
      nama: document.querySelector("#nama").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
    };

    try {
      // Mengirimkan data formulir
      const response = await fetch(`${API_BASE_URL}/index`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      form.reset();

      // Menampilkan pesan pop-up
      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: "Your message has been successfully sent!",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        location.reload();
      });
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  });
});

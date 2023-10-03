document.addEventListener("DOMContentLoaded", function() {
  const courses = [
    {
      name: "Indonesian",
      students: "+ 50 Student",
      date: "1 - 30 October 2023",
      instructor: "Endang Kristiani - Headmaster of Kristen Kalam Kudus School",
      price: "$ 380",
      image: "indonesia.png",
    },
    {
      name: "Mathematics",
      students: "+ 40 Student",
      date: "1 - 30 October 2023",
      instructor: "Teguh Satya - Teacher of Islamic School South Jakarta",
      price: "$ 680",
      image: "mtk.png",
    },
    {
      name: "Natural Sciences",
      students: "+ 80 Student",
      date: "1 - 30 October 2023",
      instructor: "Nurmia Sinta - Teacher of Al Azhar Center School",
      price: "$ 380",
      image: "ipa.png",
    },
    {
      name: "Social Science",
      students: "+ 90 Student",
      date: "1 - 30 October 2023",
      instructor: "Herry Aswandi - Teacher of Al Azhar Center School",
      price: "$ 380",
      image: "ips.png",
    },
  ];

  function buildCourseCard(course) {
    const card = document.createElement("div");
    card.classList.add("card-1");

    card.innerHTML = `
      <img src="/img/${course.image}" alt="" />
      <div class="accsess">
        <h4>${course.students}</h4>
      </div>
      <h5>${course.date}</h5>
      <h1>${course.name}</h1>
      <p>${course.instructor}</p>
      <div class="bottom">
        <h4>${course.price}</h4>
        <button>Enroll Now</button>
      </div>
    `;

    return card;
  }

  function appendCourseCards() {
    const cardContainer = document.querySelector(".card-container");
    if (cardContainer) {
      courses.forEach((course) => {
        const card = buildCourseCard(course);
        cardContainer.appendChild(card);
      });
    }
  }

const contentFill = document.querySelector('.content-fill');

fetch('/data/data-content-fill.json')
  .then(response => response.json())
  .then(data => {
    data.sections.forEach(section => {

      // Buat elemen div dengan class "fill"
      const fillDiv = document.createElement('div');
      fillDiv.className = 'fill';

      // Buat elemen img
      const img = document.createElement('img');
      img.src = section.imageSrc;
      img.alt = '';

      // Buat elemen h1
      const h1 = document.createElement('h1');
      h1.textContent = section.title;

      // Buat elemen p
      const p = document.createElement('p');
      p.textContent = section.description;

      // Gabungkan elemen-elemen di atas ke dalam "fill"
      fillDiv.appendChild(img);
      fillDiv.appendChild(h1);
      fillDiv.appendChild(p);

      // Gabungkan elemen "fill" ke dalam elemen "content-fill"
      contentFill.appendChild(fillDiv);
    });
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });

  
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


   // Fungsi klik tombol "Click to Learn More"
   function redirectToCourseView(courseName) {
    window.location.href = `courseview.html?course=${courseName}`;
  }

  // Menambahkan event listener "Enroll Now"
  const enrollNowButtons = document.querySelectorAll(".bottom button");

  enrollNowButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const courseName = this.parentElement.parentElement.querySelector("h1").textContent;
      redirectToCourseView(courseName);
    });
  });

});



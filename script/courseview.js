const API_BASE_URL = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get("course");

  const courseInput = document.getElementById("course-id");
  if (courseInput) {
    courseInput.value = courseId;
  }

  // Fetch data course dari API
  fetch(`${API_BASE_URL}/courseview.html?course=${courseId}`)
    .then(response => response.json())
    .then((data) => {

      document.querySelector(".img-card").src = data.imgSrc;
      document.querySelector(".card-course h3").textContent = data.title;
      document.querySelector(".course-total h5").textContent = `${data.courseMaterials} course materials`;
      document.querySelector(".vidio h5").textContent = `${data.videos} videos`;
      document.querySelector(".intro-card h1").textContent = data.intro;
      document.querySelector(".duration h5").textContent = `Duration: ${data.duration}`;
      document.querySelector(".indo-desc p").textContent = data.description;
      document.querySelector(".teacher p").textContent = `You will learn with ${data.teacher}.`;

      // Informasi Jumlah Materi dan vidio
      const courseTotalElement = document.querySelector(".course-total h5");
      courseTotalElement.textContent = data.courseMaterials;
      const vidioElement = document.querySelector(".vidio h5");
      vidioElement.textContent = data.videos;

      // Deskripsi
      const indoDescElement = document.querySelector(".indo-desc p");
      indoDescElement.textContent = data.description;

      // Nama Guru
      const teacherElement = document.querySelector(".teacher p");
      teacherElement.textContent = `You will learn with ${data.teacher}.`;

      // Enroll Now Button
      const enrollButton = document.querySelector(".card-course button");
      enrollButton.textContent = "Enroll Now";

      // Menambahkan vidio detail
      const vidioDetailElement = document.querySelector(".vidio-detail");
      for (let i = 1; i <= 6; i++) {
        const descElement = document.createElement("div");
        descElement.className = "desc";
        descElement.innerHTML = `<h3>Class ${i}</h3><h3>05:10</h3>`;
        vidioDetailElement.appendChild(descElement);

        // Menambahkan Garis
        if (i < 7) {
          const garisElement = document.createElement("div");
          garisElement.className = "garis";
          vidioDetailElement.appendChild(garisElement);
        }
      }
    })
    .catch(error => {
      console.error('Error loading data from the API:', error);
    });
});

const descriptionButton = document.getElementById("description");
const teacherButton = document.getElementById("teacher");
const indoDesc = document.querySelector(".indo-desc");
const teacherInfo = document.querySelector(".teacher");

descriptionButton.addEventListener("click", function () {
  indoDesc.style.display = "block";
  teacherInfo.style.display = "none";
});

teacherButton.addEventListener("click", function () {
  indoDesc.style.display = "none";
  teacherInfo.style.display = "block";
});

const API_BASE_URL = "https://be-semarang-13-production.up.railway.app"; // Update with your API URL

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get("course");

  // Check if the course-id element exists before setting its value
  const courseInput = document.getElementById("course-id");
  if (courseInput) {
    courseInput.value = courseId;
  }

  // Fetch course data from the API using the course ID
  fetch(`${API_BASE_URL}/views/courseview.html?course=${courseId}`)
    .then(response => response.json())
    .then((data) => {
      // Assuming data is an object containing course information
      // Update the following lines to match the structure of your data
      document.querySelector(".img-card").src = data.imgSrc;
      document.querySelector(".card-course h3").textContent = data.title;
      document.querySelector(".course-total h5").textContent = `${data.courseMaterials} course materials`;
      document.querySelector(".vidio h5").textContent = `${data.videos} videos`;
      document.querySelector(".intro-card h1").textContent = data.intro;
      document.querySelector(".duration h5").textContent = `Duration: ${data.duration}`;
      document.querySelector(".indo-desc p").textContent = data.description;
      document.querySelector(".teacher p").textContent = `You will learn with ${data.teacher}.`;

      // Fill in information about the number of course materials and videos
      const courseTotalElement = document.querySelector(".course-total h5");
      courseTotalElement.textContent = data.courseMaterials;
      const vidioElement = document.querySelector(".vidio h5");
      vidioElement.textContent = data.videos;

      // Fill in course description
      const indoDescElement = document.querySelector(".indo-desc p");
      indoDescElement.textContent = data.description;

      // Fill in teacher's name
      const teacherElement = document.querySelector(".teacher p");
      teacherElement.textContent = `You will learn with ${data.teacher}.`;

      // Show "Enroll Now" button
      const enrollButton = document.querySelector(".card-course button");
      enrollButton.textContent = "Enroll Now";

      // Show video list (assuming you have data for it)
      const vidioDetailElement = document.querySelector(".vidio-detail");
      for (let i = 1; i <= 6; i++) {
        const descElement = document.createElement("div");
        descElement.className = "desc";
        descElement.innerHTML = `<h3>Class ${i}</h3><h3>05:10</h3>`;
        vidioDetailElement.appendChild(descElement);

        // Add a separator line
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

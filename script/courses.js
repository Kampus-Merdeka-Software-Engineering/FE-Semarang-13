const API_BASE_URL = "http://localhost:3000";

// Fungsi untuk menampilkan data dari API
function populateContent() {
  var cardsContainer = document.getElementById("cards-container");
  var viewCoursesButton = document.getElementById("view-courses-button");

  // Fetch data course dari API
  fetch(`${API_BASE_URL}/courses`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach(function (courseData) {
        var card = document.createElement("div");
        card.className = "card";

        var img = document.createElement("img");
        img.src = courseData.imgSrc;
        img.alt = "";

        var h3 = document.createElement("h3");
        h3.textContent = courseData.title;

        var button = document.createElement("button");
        button.textContent = "Click to Learn More";
        button.addEventListener("click", function () {
          redirectToCourseView(courseData.id);
        });

        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(button);

        cardsContainer.appendChild(card);
      });

      viewCoursesButton.textContent = "View All Courses";
    })
    .catch((error) => {
      console.error("Error loading data from the API:", error);
    });
}

populateContent();

// Learn More Button
function redirectToCourseView(courseId) {
  window.location.href = `courseview.html?course=${courseId}`;
}

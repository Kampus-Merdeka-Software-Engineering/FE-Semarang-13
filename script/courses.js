 // courses.js
 // Data JSON yang telah Anda buat
 var jsonData = {
    "content-2": {
        "cards": [
            {
                "imgSrc": "../img/indonesia.png",
                "title": "Indonesian",
                "buttonText": "Click to Learn More"
            },
            {
                "imgSrc": "../img/mtk.png",
                "title": "Mathematics",
                "buttonText": "Click to Learn More"
            },
            {
                "imgSrc": "../img/ipa.png",
                "title": "Natural Sciences",
                "buttonText": "Click to Learn More"
            },
            {
                "imgSrc": "../img/ips.png",
                "title": "Social Science",
                "buttonText": "Click to Learn More"
            },
            {
                "imgSrc": "../img/ips.png",
                "title": "Icha Love Yoko",
                "buttonText": "Click to Learn More"
            }
        ],
        "viewCoursesButton": "View All Courses"
    }
};

// Fungsi untuk menampilkan data dari JSON ke dalam HTML
function populateContent() {
    var cardsContainer = document.getElementById('cards-container');
    var viewCoursesButton = document.getElementById('view-courses-button');
    
    var content2Data = jsonData['content-2'];
    var cards = content2Data.cards;

    cards.forEach(function(cardData) {
        var card = document.createElement('div');
        card.className = 'card';

        var img = document.createElement('img');
        img.src = cardData.imgSrc;
        img.alt = '';

        var h3 = document.createElement('h3');
        h3.textContent = cardData.title;

        var button = document.createElement('button');
        button.textContent = cardData.buttonText;

        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(button);

        cardsContainer.appendChild(card);
    });

    viewCoursesButton.textContent = content2Data.viewCoursesButton;
}

// Panggil fungsi untuk menampilkan data dari JSON ke dalam HTML
populateContent();

// Fungsi untuk menangani klik tombol "Click to Learn More"
function redirectToCourseView(courseName) {
    // Redirect ke courseview.html dengan parameter nama kursus
    window.location.href = `courseview.html?course=${courseName}`;
  }
  
  // Menambahkan event listener untuk semua tombol "Click to Learn More"
  document.addEventListener("DOMContentLoaded", function () {
    const learnMoreButtons = document.querySelectorAll(".card button");
  
    learnMoreButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const courseName = this.parentElement.querySelector("h3").textContent;
        redirectToCourseView(courseName);
      });
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {

    const currentURL = window.location.pathname;
    if (currentURL.includes("home.html")) {
      // Menambahkan event listener ke link "Contact"
      const contactLink = document.getElementById("contact-link");
      if (contactLink) {
        contactLink.addEventListener("click", function(event) {
          event.preventDefault(); 
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            const offsetTop = contactSection.offsetTop; 
            scrollToSection(offsetTop);
          }
        });
      }
    }
    
    // Fungsi untuk menggulir halaman dengan efek lambat
    function scrollToSection(offsetTop) {
      const scrollDuration = 35; 
      const scrollStep = Math.PI / (scrollDuration / 15);
      let count = 0;
      const start = window.pageYOffset;
      const scrollInterval = setInterval(function(){
        if (window.pageYOffset !== offsetTop) {
          count = count + 1;
          const step = Math.round(start + (offsetTop - start) * easeInOutSine(count / scrollDuration));
          window.scrollTo(0, step);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    }
  
    function easeInOutSine(t) {
      return (1 - Math.cos(Math.PI * t)) / 2;
    }
  });
  

//  // Your JSON data
//  const jsonData = {
//     "content-3": {
//         "header": "Popular Course",
//         "courses": [
//             {
//                 "image": "../img/indonesia.png",
//                 "students": "+ 50 Student",
//                 "duration": "1 - 30 October 2023",
//                 "title": "Indonesian",
//                 "instructor": "Endang Kristiani - Headmaster of Kristen Kalam Kudus School",
//                 "price": "$380",
//                 "buttonText": "Enroll Now"
//             },
//             {
//                 "image": "../img/mtk.png",
//                 "students": "+ 40 Student",
//                 "duration": "1 - 60 October 2023",
//                 "title": "Mathematics",
//                 "instructor": "Teguh Satya - Teacher of Islamic School",
//                 "price": "$680",
//                 "buttonText": "Enroll Now"
//             },
//             {
//                 "image": "../img/ipa.png",
//                 "students": "+ 80 Student",
//                 "duration": "1 - 30 October 2023",
//                 "title": "Natural Science",
//                 "instructor": "Nurmia Sinta - Teacher of Al Azhar School",
//                 "price": "$380",
//                 "buttonText": "Enroll Now"
//             },
//             {
//                 "image": "../img/ips.png",
//                 "students": "+ 90 Student",
//                 "duration": "1 - 30 October 2023",
//                 "title": "Social Science",
//                 "instructor": "Herry Aswandi - Headmaster of Sampoerna Academy Sentul School",
//                 "price": "$380",
//                 "buttonText": "Enroll Now"
//             }
//         ]
//     }
// };

//         // Function to display JSON data in HTML
//         function displayCourses() {
//             const content3 = jsonData["content-3"];
//             document.getElementById("course-header").textContent = content3.header;

//             const courseList = document.getElementById("course-list");
//             courseList.innerHTML = '';

//             content3.courses.forEach(course => {
//                 const card = document.createElement("div");
//                 card.className = "card-1";

//                 card.innerHTML = `
//                     <img src="${course.image}" alt="" />
//                     <div class="accsess">
//                         <h4>${course.students}</h4>
//                     </div>
//                     <h5>${course.duration}</h5>
//                     <h1>${course.title}</h1>
//                     <p>${course.instructor}</p>
//                     <div class="bottom">
//                         <h4>${course.price}</h4>
//                         <button>${course.buttonText}</button>
//                     </div>
//                 `;

//                 courseList.appendChild(card);
//             });
//         }

//         // Call the function to display courses
//         displayCourses();
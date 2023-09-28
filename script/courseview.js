var courseData = {
  Indonesian: {
    imgSrc: "../img/indonesia.png",
    title: "Indonesian",
    description:
      "The subject of Bahasa Indonesia at the elementary school level is one of the core subjects that is highly important in the education curriculum. This subject aims to teach students the fundamentals of the Indonesian language, including reading, writing, listening, and speaking. The Bahasa Indonesia subject in elementary school not only helps students to understand the Indonesian language effectively but also develops their communication skills, assists them in becoming proficient readers, and lays a strong foundation for higher-level learning.",
    duration: "2 Months",
    courseMaterials: "7 courses materials",
    videos: "7 Videos",
    teacher: "Endang Kristiani - Headmaster of Kristen Kalam Kudus School",
    intro: "Introduction to Indonesian Course",
  },
  Mathematics: {
    imgSrc: "../img/mtk.png",
    title: "Mathematics",
    description:
      "The subject of Mathematics at the elementary school level is an integral part of the basic education curriculum in Indonesia. Mathematics helps students understand and develop fundamental skills in counting, measuring, problem-solving, and grasping foundational mathematical concepts. In Mathematics classes at the elementary level, students will learn basics such as addition, subtraction, multiplication, and division, and they will also be introduced to concepts of geometry, measurement, statistics, and probability in simplified forms. The primary goal of this subject is to assist students in developing logical understanding, problem-solving skills, and critical thinking abilities.",
    duration: "3 Months",
    courseMaterials: "7 courses materials",
    videos: "7 Videos",
    teacher: "Teguh Satya - Teacher of Islamic School South Jakarta",
    intro: "Introduction to Mathematics Course",
  },
  "Natural Sciences": {
    imgSrc: "../img/ipa.png",
    title: "Natural Sciences",
    description:
      "The subject of Natural Sciences at the elementary school level is an important part of the basic education curriculum in Indonesia. Natural Sciences aims to introduce students to a fundamental understanding of nature and natural phenomena around them. In the Natural Sciences class, students will learn about various topics, including natural phenomena such as weather, climate, and seasons, as well as basic concepts in physics, chemistry, biology, and the environment. The primary goal of the Natural Sciences subject at the elementary level is to develop students' basic scientific understanding, teach them critical thinking about the world around them, and cultivate their curiosity. It also helps students understand the importance of preserving the natural environment for a sustainable future.",
    duration: "2.5 Months",
    courseMaterials: "7 courses materials",
    videos: "7 Videos",
    teacher: "Nurmia Sinta - Teacher of Al Azhar Center School",
    intro: "Introduction to Natural Sciences Course",
  },
  "Social Science": {
    imgSrc: "../img/ips.png",
    title: "Social Science",
    description:
      "The subject of Social Sciences at the elementary school level is one of the essential components of the basic education curriculum in Indonesia. Social Sciences aims to provide students with an understanding of various aspects of social, cultural, economic, and political life. In Social Sciences classes, students will learn about various topics such as history, geography, culture, society, government, and economics. They will grasp how humans live together, form communities, and interact with their environment. The primary goal of the Social Sciences subject at the elementary level is to help students understand the world around them, encourage them to think critically about social issues, and cultivate a sense of responsibility towards their society and country.",
    duration: "2.5 Months",
    courseMaterials: "7 courses materials",
    videos: "7 Videos",
    teacher: "Herry Aswandi - Teacher of Al Azhar Center School",
    intro: "Introduction to Social Science Course",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const courseName = urlParams.get("course");

  // Cek courseName dalam objek courseData
  if (courseData.hasOwnProperty(courseName)) {
    const course = courseData[courseName];

    // Mengisi data dari JSON ke dalam elemen-elemen HTML
    document.querySelector(".img-card").src = course.imgSrc;
    document.querySelector(".card-course h3").textContent = course.title;
    document.querySelector(
      ".course-total h5"
    ).textContent = `${course.courseMaterials} course materials`;
    document.querySelector(".vidio h5").textContent = `${course.videos} videos`;
    document.querySelector(".intro-card h1").textContent = course.intro;
    document.querySelector(
      ".duration h5"
    ).textContent = `Duration: ${course.duration}`;
    document.querySelector(".indo-desc p").textContent = course.description;
    document.querySelector(
      ".teacher p"
    ).textContent = `You will learn with ${course.teacher}.`;

    // Isi informasi tentang jumlah course materials dan videos
    const courseTotalElement = document.querySelector(".course-total h5");
    courseTotalElement.textContent = course.courseMaterials;
    const vidioElement = document.querySelector(".vidio h5");
    vidioElement.textContent = course.videos;

    // Isi deskripsi course
    const indoDescElement = document.querySelector(".indo-desc p");
    indoDescElement.textContent = course.description;

    // Isi nama pengajar
    const teacherElement = document.querySelector(".teacher p");
    teacherElement.textContent = `You will learn with ${course.teacher}.`;

    // Tampilkan tombol "Enroll Now"
    const enrollButton = document.querySelector(".card-course button");
    enrollButton.textContent = "Enroll Now";

    // Tampilkan daftar video
    const vidioDetailElement = document.querySelector(".vidio-detail");
    for (let i = 1; i <= 6; i++) {
      const descElement = document.createElement("div");
      descElement.className = "desc";
      descElement.innerHTML = `<h3>Class ${i}</h3><h3>05:10</h3>`;
      vidioDetailElement.appendChild(descElement);

      // Tambahkan garis pembatas
      if (i < 7) {
        const garisElement = document.createElement("div");
        garisElement.className = "garis";
        vidioDetailElement.appendChild(garisElement);
      }
    }
  }
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

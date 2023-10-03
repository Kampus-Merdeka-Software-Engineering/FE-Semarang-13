class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Mengambil URL saat ini
    const currentURL = window.location.pathname;

    this.innerHTML = `
    <style>
        
    .navbar {
      padding: 0px 32px;
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
      background-color: transparent;
    }

    .brand-title {
      font-size: 30px;
      font-weight: 700;
      margin: 1rem;
      transition: transform 0.3s ease-in-out;
    }

    .brand-title a {
      text-decoration: none;
      margin-left: 20px;
      display: block;
      color: #fff;
    }

    .brand-title span {
      color: #212738;
      font-weight: 550;
    }

    .brand-title:hover {
      transform: scale(1.1);
    }

    .brand-title:active {
      transform: scale(0.9);
    }

    .navbar-links {
      height: 100%;
    }

    .navbar-links ul {
      display: flex;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    .navbar-links li a {
      display: block;
      text-decoration: none;
      color: white;
      font-size: 17px;
      font-weight: 500;
      margin-right: 50px;
      overflow: hidden;
      position: relative;
      transition: color 0.3s ease;
    }

    .navbar-links li a:hover {
      color: #212738;
    }

    .navbar-links li a::after {
      content: '';
      display: block;
      width: 0;
      height: 2px; /* Lebar garis bawah */
      background-color: #212738; /* Warna garis bawah */
      transition: width 0.3s ease; /* Efek transisi */
    }

    .navbar-links li a.active::after {
      width: 100%;
    }

    .toggle-button {
      position: absolute;
      top: 1.20rem;
      right: 1rem;
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      transition: transform 0.3s ease-in-out, content 0.3s ease-in-out, font-size 0.3s ease-in-out;
    }

    .toggle-button.active::before {
      content: "×";
      font-size: 50px;
      font-weight: bold;
      color: black;
      transform: rotate(90deg);
    }

    .toggle-button .bar {
      height: 3px;
      width: 100%;
      background-color: black;
      border-radius: 10px;
    }

    .account-and-start {
      display: flex;
      margin: 0px 20px;
    }

    .account-button {
      border: none;
      background: transparent;
      color: #fff;
      font-size: 17px;
      font-weight: 550;
      outline: none;
    }

    .start-button {
      border: none;
      font-weight: 550;
      margin-left: 30px;
      width: 130px;
      height: 40px;
      border-radius: 20px;
      color: #FFFFFF;
      background: ${
        currentURL.includes("./index.html")
          ? "#F8918B"
          : currentURL.includes("courses.html")
          ? "#57C4E5"
          : currentURL.includes("courseview.html")
          ? "#F97068"
          : currentURL.includes("about.html")
          ? "#F97068"
          : currentURL.includes("sendfeedback.html")
          ? "#F97068"
          : ""
      };
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      transition: all 0.3s ease-in-out;
    }

    .start-button:hover {
      color: white;
      background-color: ${
        currentURL.includes("./index.html")
          ? "#F97068"
          : currentURL.includes("courses.html")
          ? "#F97068"
          : currentURL.includes("courseview.html")
          ? "#68b7d8"
          : currentURL.includes("about.html")
          ? "#68b7d8"
          : currentURL.includes("sendfeedback.html")
          ? "#57C4E5"
          : ""
      };
      cursor: pointer;
      transform: scale(1.1);
    }

    .start-button:active {
      transform: scale(0.95);
      transition: transform 0.1s;
    }

    /* Responsive Mobile */

    @media (max-width: 720px) {
      .navbar {
          padding: 0px;
          flex-direction: column;
          align-items: flex-start;
      }

      .toggle-button {
          display: flex;
      }

      .navbar-links {
          display: none;
          width: 100%;
      }

      .navbar-links ul {
          width: 100%;
          flex-direction: column;
      }

      .navbar-links ul li {
          text-align: center;
      }

      .navbar-links ul li a {
          padding: .5rem 1rem;
      }

      .navbar-links.active {
          display: flex;
      }

      .account-and-start {
          display: none;
      }

      .account-and-start.active {
          padding: 20px 20px;
          display: flex;
      }

      .account-button {
          margin-top: 10px;
      }

    }

    /* Responsive Tablet */
    @media (max-width: 1080px) {
      .navbar {
          flex-direction: column;
          align-items: flex-start;
      }

      .navbar-links {
        margin-left: 20px;
        margin-bottom: 1rem;
      }
    }
    </style>

    <header>
    <nav class="navbar">
    <div class="brand-title">
        <a href="../index.html" class="navbar-brand">
            Edu<span class="navbar-brand-teks2">Mbel</span>
          </a>
    </div>

    <a href="#" class="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </a>

    <div class="navbar-links">
        <ul>
            <li><a id="courses-link" href="../views/courses.html" class="${
              currentURL.includes("courses.html") ? "active" : ""
            }">Courses</a></li>
            <li><a id="about-link" href="../views/about.html" class="${
              currentURL.includes("about.html") ? "active" : ""
            }">About EduMbel</a></li>
            <li><a id="contact-link" href="../index.html#contact" class="${
              currentURL.includes("../index.html") &&
              currentURL.includes("#contact")
                ? "active"
                : ""
            }">Contact</a></li>
        </ul>
    </div>

    <div class="account-and-start">
            <button class="account-button">My Account</button>
          <button class="start-button">Get Started</button>
    </div>
    </header>
  `;
  }
}

window.onload = function () {
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];
  const accountStartButton =
    document.getElementsByClassName("account-and-start")[0];

  // Tambahkan event listener untuk toggle menu saat tombol di klik
  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    accountStartButton.classList.toggle("active");
    toggleButton.classList.toggle("active");
  });

  // Tambahkan event listener untuk setiap tautan menu
  const coursesLink = document.getElementById("courses-link");
  const aboutLink = document.getElementById("about-link");
  const contactLink = document.getElementById("contact-link");

  coursesLink.addEventListener("click", () => {
    window.location.href = "../views/courses.html#contact";
  });

  aboutLink.addEventListener("click", () => {
    window.location.href = "../views/about.html#contact";
  });

  contactLink.addEventListener("click", () => {
    window.location.hash = "#contact";
  });
};

customElements.define("header-component", Header);

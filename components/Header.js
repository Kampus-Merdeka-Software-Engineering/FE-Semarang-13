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
      height: 80px;
      background-color: transparent;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 120px;
    }
    
    .navbar-brand a {
      color: #fff;
      font-size: 30px;
      font-weight: 700;
    }
    
    .navbar-brand span {
      color: #212738;
      font-size: 30px;
      font-weight: 400;
    }
    
    .navbar-menu a {
      color: white;
      font-size: 17px;
      font-weight: 500;
      margin-right: 50px;
      text-decoration: none;
      transition: color 0.3s ease-in-out;
    }
    
    .navbar-menu a:hover {
      color: #212738;
    }
    
    .navbar-menu a.active {
      border-bottom: 3.3px solid #212738;
      color: #212738;
    }
    
    .navbar-button {
      display: flex;
      align-items: center;
    }
    
    .navbar-button h3 {
      color: #fff;
      font-size: 17px;
      font-weight: 550;
    }
    
    .navbar-button button {
      border: none;
      font-weight: 550;
      margin-left: 30px;
      width: 130px;
      height: 40px;
      border-radius: 20px;
      color: #FFFFFF;
      background: ${
        currentURL.includes("home.html")
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
      transition: background-color 0.1s ease-in-out, scale 0.3s ease-in-out;
    }
    
    .navbar-button button:hover {
      background-color: ${
        currentURL.includes("home.html")
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
      color: white;
      cursor: pointer;
      scale: 1.1;
    }
    
    .navbar-button button:active {
      scale: 0.9;
    }
    </style>

    <header>
    <nav class="navbar">
    <div class="navbar-brand">
       <a id="home-link" href="../views/home.html">Edu<span>Mbel</span></a>
    </div>
    <div class="navbar-menu">
      <a id="courses-link" href="../views/courses.html" class="${
        currentURL.includes("courses.html") ? "active" : ""
      }">Courses</a>
      <a id="about-link" href="../views/about.html" class="${
        currentURL.includes("about.html") ? "active" : ""
      }">About EduMbel</a>
      <a id="contact-link" href="../views/home.html#contact" class="${
        currentURL.includes("home.html") && currentURL.includes("#contact") ? "active" : ""
      }">Contact</a>
    </div>
    <div class="navbar-button">
      <h3>My Account</h3>
      <button>Start Learning</button>
    </div>
  </nav>
    </header>
  `;
  }
}

customElements.define("header-component", Header);

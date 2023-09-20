class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        .footer {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 300px;
            color: white;
            background-color: #343e57;
          }
          
          .quick-links {
            display: flex;
            flex-direction: column;
            margin-top: 60px;
            margin-left: 200px;
          }
          
          .quick-links a {
            margin-top: 12px;
            color: white;
            transition: all 0.3s ease-in-out;
          }
          
          .quick-links a:hover {
            color: #F97068;
          }
          
          .social {
            margin-bottom: 34px;
          }
          
          .icon-social i {
            font-size: 30px;
            margin-top: 20px;
            margin-right: 12px;
            color: white;
          }
          
          .icon-social i:hover {
            color: #F97068; 
            cursor: pointer;
          }

          .end {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            background-color: #212738;
            color: white;
            font-size: 16px;
            font-weight: 600;
          }
        </style>

       <footer class="footer">
       <div class="footer-1>
      <div class="brand">
        <h1>EduMbel</h1>
        <p>
          Is an ed-tech platform that trains <br />
          children in learning courses.
        </p>
      </div>

      <div class="quick-links">
        <h3>Quick Links</h3>
        <a href="courses.html">Courses</a>
        <a href="about.html">About EduMbel</a>
        <a href="home.html#contact">Contact</a>
        <a href="sendfeedback.html">Send Feedback</a>
      </div>

      <div class="social">
        <h3>Social</h3>
        <div class="icon-social">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
       </div>
       </div>
    </footer>
    <div class="end">
    ©2023 - EduMbel. All Rights Reserved.
    </div>
      `;
  }
}

customElements.define("footer-component", Footer);

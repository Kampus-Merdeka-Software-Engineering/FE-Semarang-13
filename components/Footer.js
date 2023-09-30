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
        
        .brand h1 {
          font-size: 38px;
          font-weight: 600;
        }
        
        .brand p {
          font-size: 20px;
        }
        
        .quick-links {
          display: flex;
          flex-direction: column;
          margin-top: 60px;
          margin-left: 200px;
        }
        
        .quick-links h3 {
          font-size: 20px;
        }
        
        .quick-links a {
          font-size: 16px;
          margin-top: 12px;
          color: white;
          transition: all 0.3s ease-in-out;
        }
        
        .quick-links a:hover {
          color: #f97068;
        }
        
        .social {
          margin-bottom: 34px;
        }
        
        .social h3 {
          font-size: 20px;
        }
        
        .icon-social i {
          font-size: 30px;
          margin-top: 20px;
          margin-right: 12px;
          color: white;
          transition: all 0.3s ease-in-out;
        }
        
        .icon-social i:hover {
          color: #f97068;
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

          /* Responsive Mobile */
          @media (max-width: 720px) {
            .footer {
              flex-direction: column;
              height: auto;
              padding: 20px 0;
            }

            .brand{
              margin-right: 120px;
            }

            .brand h1 {
              font-size: 1.5rem;
            }

            .brand p {
              font-size: 14px;
            }

            .quick-links {
              margin-top: 40px;
              text-align: center;
              margin-left: 0;
            }

            .quick-links h3 {
              font-size: 18px;
            }

            .quick-links a {
              font-size: 14px;
              margin-top: 12px;
              text-align: center;
            }

            .social {
              margin-top: 20px;
              margin-bottom: 10px;
              text-align: center;
            }

            .social h3 {
              font-size: 18px;
            }

            .icon-social i {
              margin-top: 10px;
              margin-right: 12px;
            }

            .end {
              height: auto;
              font-size: 10px;
              padding: 8px 0;
            }
          }

          /* Responsive Tablets */
          @media (min-width: 721px) and (max-width: 1080px) {
            .brand{
              margin-left: 20px;
            }

            .brand h1 {
              font-size: 30px;
            }

            .brand p {
              font-size: 18px;
            }

            .quick-links h3 {
              font-size: 16px;
              margin-left: -50px;
            }

            .quick-links a {
              font-size: 16px;
              margin-left: -50px;
            }

            .social h3 {
              font-size: 16px;
            }

            .end {
              height: auto;
              font-size: 14px;
              padding: 10px 0;
            }
          }
        </style>

        <footer class="footer">
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

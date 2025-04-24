class MyNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <style>
          .nav-trigger {
            position: fixed;
            top: 0;
            left: 0;
            width: 10px;
            height: 100vh;
            z-index: 999;
            background-color: transparent;
          }
  
          .nav-container {
            position: absolute;
            top: 0;
            left: -20vw;
            width: 20vw;
            height: 100vh;
            background-color: #1a1a1a;
            font-family: Arial, sans-serif;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 2em;
            transition: left 0.3s ease;
            z-index: 1000;
          }

          .nav-container.fixed {
                position: fixed;
                left: 0;
            }
  
          .nav-container:hover,
          .nav-trigger:hover + .nav-container,
          .nav-container.fixed {
            left: 0;
          }
  
          .logo {
            color: #00d8ff;
            font-size: 1.5em;
            font-weight: bold;
            margin-bottom: 1em;
          }
  
          .nav-links {
            display: flex;
            flex-direction: column;
            gap: 1em;
          }
  
          .nav-links a {
            color: white;
            text-decoration: none;
            padding: 0.5em;
            border-radius: 4px;
            transition: background 0.3s;
          }
  
          .nav-links a:hover {
            background-color: #333333;
          }
  
          .toggle-btn {
            background-color: #00d8ff;
            border: none;
            color: black;
            padding: 0.5em;
            cursor: pointer;
            border-radius: 4px;
            font-weight: bold;
          }
  
          @media (max-width: 600px) {
            .nav-container {
              width: 60vw;
              left: -60vw;
            }
  
            .nav-container.fixed {
              left: 0;
            }
          }
        </style>
  
        <div class="nav-trigger"></div>
        <nav class="nav-container" id="navBar">
          <div class="logo">Xt</div>
          <div class="nav-links">
            <a href="#" onclick="goToPage('')">홈</a>
            <a href="#" onclick="goToPage('ms_test')">XtCH</a>
            <a href="#" onclick="goToPage('')">Real Test(adv)</a>
          </div>
          <button class="toggle-btn" onclick="toggleFixed()">고정 토글</button>
        </nav>
      `;
  
      // 기본 고정 상태 설정
      if (!window.navFixed) window.navFixed = false;
      this.updateFixedClass();
    }
  
    updateFixedClass() {
        const nav = this.querySelector("#navBar");
        const content = document.querySelector(".content");
      
        if (window.navFixed) {
          nav.classList.add("fixed");
          if (content) content.classList.add("fixed");
        } else {
          nav.classList.remove("fixed");
          if (content) content.classList.remove("fixed");
        }
    }
  }
  
  customElements.define("my-navbar", MyNavbar);
  
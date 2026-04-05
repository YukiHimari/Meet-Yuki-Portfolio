import profileImg from './assets/Yuki-profile.png'
import './App.css'

function App() {

  return (
    <>
      <header className="top-nav">
        <a className="brand" href="#about-me" aria-label="Go to top section">
          <img src="/meet-yuki Logo.png" width="50" height="50" alt="Meet Yuki Logo" />
          <h2 className="profile-title">Meet Yuki</h2>
        </a>

        <nav aria-label="Primary navigation">
          <ul className="nav-links">
            <li>
              <a href="#about-me">About</a>
            </li>
            <li>
              <a href="#docs">Projects</a>
            </li>
            <li>
              <a href="#social">Skills</a>
            </li>
             <li>
              <a href="#social">Experience</a>
            </li>
             <li>
              <a href="#social">Education</a>
            </li>

          </ul>
        </nav>

      </header>

      <section id="about-me" className="about-me">
        <div className="profile-image">
          <img src={profileImg} className="overlay" width="200" alt="Yuki profile" />
        </div>
        <div className="profile-description">
          <h3>Hi I'm</h3>
          <h1  style={{ fontFamily: 'Dancing Script', fontWeight: 500 }}>Yuki Gunawardena</h1>
          <p>
            An aspiring web developer with a passion for designing web pages and creating applications. I'm known for my strong communication skills and motivation to keep learning and growing.
            <p className="quote" style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>
              "Be yourself; everyone else is already taken." - Oscar Wilde
            </p>
          </p>
          <section id="social-links">
        <div id="social">
          <ul>
            <li>
              <a href="https://github.com/YukiHimari/YukiHimari" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yuki-gunawardena/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="src/files/Yuki-Resume(Tech).pdf" download= "Yuki-Resume.pdf"target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#download-icon"></use>
                </svg>
                <button>Resume</button>
              </a>
            </li>
          </ul>
        </div>
      </section>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Yuki Gunawardena | All rights reserved.</p>
      </footer>

    </>
  )
}

export default App

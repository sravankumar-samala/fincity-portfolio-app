import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h2>Modelyn Torff</h2>
        <nav className="nav-bar">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#">Contacts</a>
        </nav>
      </header>
      <main className="main-container">
        <section className="hero-container">
          <div className="hero-content-wrapper">
            <div className="hero-content">
              <p className="hero-heading-sm">Full Stack Developer</p>
              <h1>
                Hello, my name <br />
                is Modelyn Torff
              </h1>
              <p className="hero-para">
                Short text with details about you, what you do or your
                professional career. You can add more information on the about
                page.
              </p>
              <div className="hero-buttons">
                <button type="button" className="projects-btn">
                  Projects
                </button>
                <button type="button" className="linked-in-btn">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
          <div className="hero-image-container">
            <img src="src/assets/hero-img.jpg" alt="hero logo" />
          </div>
        </section>
        <section className="add-projects-container" id="about">
          <div className="add-projects-wrapper">
            <h1 className="section-heading">Add projects</h1>
            <form>
              <label htmlFor="project-name">Project Name</label>
              <input type="text" id="project-name" />
              <label htmlFor="project-link">Project Link</label>
              <input type="text" id="project-link" />
              <label htmlFor="project-description">Project Description</label>
              <textarea id="project-description" rows="8" />
              <button type="submit" className="submit-btn">
                Add
              </button>
            </form>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1436"
            height="112"
            viewBox="0 0 1436 112"
            fill="#FDC435"
          >
            <path
              d="M0 83.9182L59.8333 74.594C119.667 65.2697 239.333 46.6212 359 48.9523C478.667 51.2833 598.333 74.594 718 74.594C837.667 74.594 957.333 51.2833 1077 34.9659C1196.67 18.6485 1316.33 9.32425 1376.17 4.66212L1436 0V111.891H1376.17C1316.33 111.891 1196.67 111.891 1077 111.891C957.333 111.891 837.667 111.891 718 111.891C598.333 111.891 478.667 111.891 359 111.891C239.333 111.891 119.667 111.891 59.8333 111.891H0V83.9182Z"
              fill="#FDC435"
            />
          </svg>
        </section>
        <section className="projects-container" id="projects">
          <h1 className="section-heading">Projects</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1436"
            height="112"
            viewBox="0 0 1436 112"
            fill="#FDC435"
          >
            <path
              d="M0 83.9182L59.8333 74.594C119.667 65.2697 239.333 46.6212 359 48.9523C478.667 51.2833 598.333 74.594 718 74.594C837.667 74.594 957.333 51.2833 1077 34.9659C1196.67 18.6485 1316.33 9.32425 1376.17 4.66212L1436 0V111.891H1376.17C1316.33 111.891 1196.67 111.891 1077 111.891C957.333 111.891 837.667 111.891 718 111.891C598.333 111.891 478.667 111.891 359 111.891C239.333 111.891 119.667 111.891 59.8333 111.891H0V83.9182Z"
              fill="#FDC435"
            />
          </svg>
        </section>
      </main>
    </div>
  );
}

export default App;

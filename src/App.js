import logo from './logo.svg';
import circleFrame from './circleFrame.png';
import './App.css';

function App() {
  return (
    <body>
    <div className="App">
      <header className="App-header">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      {/* <nav class="navbar background">
          <ul class="nav-list">
              <li>
                  <a href="#home" class="fa fa-home"> </a>
              </li>
              <li>
                  <a href="#aboutme">About Me</a>
              </li>
              <li>
                  <a href="#experience">Experience</a>
              </li>
              <li>
                  <a href="#projects">Projects</a>
              </li>
          </ul>
      </nav> */}

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#home">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#aboutme">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#experience">Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="home"></div>

      <div id="banner">
        <h1>Mandy Chen</h1>
        <h2>Welcome to my portfolio.</h2>
        <div id="circle">
          <img src={circleFrame} id="frame" alt="circle frame" />
        </div>
      </div>
      
      </header>
    </div>
    </body>
  );
}

export default App;

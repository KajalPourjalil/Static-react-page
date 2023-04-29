function Header() {
  return (
    <div className="navigation">
    <header>
      <nav className="nav">
        <img className="logo" src="reactjs_logo_icon_170805.png" />
        <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </header>
    </div>
  );
}


function List() {
  return (
    <div className="first">
    <h1>Reasons why I love react</h1>
      <ul>
      <li>I enjoy how fast it is</li>
      <li>I like how complete it is</li>
      <li>Helps me reach my goals</li>
    </ul>
    </div>
  );
}

function TempName() {
  return (
    <div className="second">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>
        <p>@2023 Pourjalil development. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <List/>
      <TempName />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

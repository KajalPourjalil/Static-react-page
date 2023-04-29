// function Hello () {
//     return(
//         <h1>Ola Alexandra</h1>
//     )
// }

// function MainContent() {
//     return(
//         <h1>I'm learning React</h1>
//     )
// }

// // const h1 = document.createElement("h1")
// // h1.textContent = "Imperative way"
// // h1.className = "header"
// // document.getElementsById("root").append(h1)

// function New() {
//     return(
//         <h1>Ela e em minha destinada!</h1>
//     )
// }

// function Navbar() {
//     return (
//         <nav>
//             <h1>Practice React: project #1</h1>
//             <ul>
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//     )
// }

// const navbar = (
//     <nav>
//         <h1>Practice React: project #1</h1>
//             <ul>
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//     </nav>
// )

// ReactDOM.render(navbar, document.getElementById("now"))

// const Element = (
//     <div>
//         <h2>Eu sou digno dela!</h2>
//         <p>I am doing this for her and for me</p>
//         <p>Ela e: </p>
//         <ul>
//             <li>Gostosa</li>
//             <li>Querida</li>
//             <li>Corajosa</li>
//             <li>Elegente</li>
//             <li>Incrivel</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(Element, document.getElementById('now'))
// document.getElementById('now').append(Element)

// ReactDOM.render(
//   <div>
//   <Hello/>
//   <MainContent/>
//   <New/>
//   <Navbar/>

//   </div>, document.getElementById("root")
// );

// ReactDOM.createRoot(document.getElementById("root")).render(navbar)

const page = (
  <div>
    <img src="reactjs_logo_icon_170805.png" width="200px" />
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

function Header() {
  return (
    <div>
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

function Footer() {
  return (
    <div>
      <footer>
        <p>@2023 Pourjalil development. All rights reserved.</p>
      </footer>
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

function Page() {
  return (
    <div>
      <Header />
      <List/>
      <TempName />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));

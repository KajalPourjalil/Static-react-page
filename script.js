
function Hello () {
    return(
        <h1>Ola Alexandra</h1>
    )
}

function MainContent() {
    return(
        <h1>I'm learning React</h1>
    )
}

// const h1 = document.createElement("h1")
// h1.textContent = "Imperative way"
// h1.className = "header"
// document.getElementsById("root").append(h1)

function New() {
    return(
        <h1>Ela e em minha destinada!</h1>
    )
}

function Navbar() {
    return (
        <nav>
            <h1>Practice React: project #1</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

const navbar = (
    <nav>
        <h1>Practice React: project #1</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("now"))





ReactDOM.render(
  <div>
  <Hello/>
  <MainContent/>
  <New/>
  {/* <Navbar/> */}
    
  </div>, document.getElementById("root")
);

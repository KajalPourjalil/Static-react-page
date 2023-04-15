
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

const h1 = document.createElement("h1")
h1.textContent = "Imperative way"
h1.className = "header"
document.getElementsById("root").append(h1)

function New() {
    return(
        <h1>Ela e em minha destinada!</h1>
    )
}





ReactDOM.render(
  <div>
  <Hello/>
  <MainContent/>
  <New/>
    
  </div>, document.getElementById("root")
);

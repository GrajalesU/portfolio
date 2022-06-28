import "./app.css"
import Header from "./Components/Header"
import About from "./Components/About"
import Projects from "./Components/Projects"
import ContactMe from "./Components/Contact"

function App() {
    return (
        <div className='app' >
            <Header />
            <div className="container">
                <About />
                <Projects />
                <ContactMe />
            </div>
        </div>
    )
}

export default App

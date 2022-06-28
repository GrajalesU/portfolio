import "./style.css"

const Header = () => {
    return (
        <section className="header">
            <p className="logo">Juan Manuel Grajales <span>Portfolio</span></p>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li><a href="#about">Sobre mi</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </section>
    )
}

export default Header
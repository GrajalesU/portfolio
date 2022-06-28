import "./style.css"

const About = () => {
    return (
        <section className="about" id="about">
            <div className="img_content">
                <img src="profile_mobile.png" alt="profile" />
            </div>
            <div className="info">
                <div className="presentation">
                    <p>¡HOLA! 👋</p>
                    <h1>
                          Soy Juan Manuel Grajales <br />
                        <span className="description">
                            Junior Frontend Developer situado en Colombia 👨‍💻
                        </span>
                    </h1>
                </div>
                <div className="social_media">
                    <p>codificando tus ideas</p>
                    <div className="social_media_icons">
                        <a href="https://github.com/GrajalesU">
                            <img src="GitHub_mobile.png" alt="Github logo"  target="_blank" rel="noreferrer"/>
                        </a>
                        <a href="https://www.linkedin.com/in/juan-manuel-grajales-urquijo-8aa78b225" target="_blank" rel="noreferrer">
                            <img src="LI_mobile.png" alt="LinkedIn logo" />
                        </a>
                        <a href="./cv_JuanManuelGrajales.pdf" target="_blank" >
                            <img src="cv_mobile.png" alt="curriculum vitae logo" />
                        </a>
                    </div>      
                </div>
            </div>
            
        </section>
    )
}

export default About
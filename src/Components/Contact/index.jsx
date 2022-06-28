import { useRef, useState } from "react"
import emailjs from "emailjs-com"
import "./style.css"


const ContactMe = () => {
    const [messageSended, setMessageSended] = useState(false)
    const form = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_USER_ID
        ).then(
            (result) => {
                console.log(result.text)
                setMessageSended(true)
            },
            (error) => {
                console.log(error.text)
            }
        )

    }

    return (
        <section className="contact" id="contact">
            <h2>Contáctame</h2>
            
            {messageSended ? 
                <div className="write_machine">
                    <p>Gracias por comunicarte conmigo, lo más pronto posible te estaré contactando, espero que puedan salir buenas oportunidades gracias a esto</p>
                </div> : 
                <>
                    <p>Llena el siguiente formulario o envía un email a <a href="juan.grajalesu@gmail.com">mi correo 📧</a></p>
                    <form action="post" ref={form} onSubmit={handleSubmit}>
                        <label htmlFor="name">Nombre *</label>
                        <input type="text" name="name" placeholder="Introduce tu nombre" />
                        <label htmlFor="email">Correo *</label>
                        <input type="email" name="email" placeholder="Introduce tu correo" />
                        <label htmlFor="message">Mensaje *</label>
                        <textarea name="message" placeholder="Introduce tu mensaje" />
                        <button type="submit">ENVIAR</button>
                    </form>
                </>}
        </section>
    )
}

export default ContactMe
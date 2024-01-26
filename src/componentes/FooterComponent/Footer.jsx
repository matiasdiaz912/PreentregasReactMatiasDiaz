import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

const FooterComponent = () => {
  return (
    <footer>
        <img src="multimedia\img\marketLogo-removebg-preview.png" alt="Logo de nuestra tienda" />
        <div className="redes">
            <a href="https://www.instagram.com/" target="blanket">
                <FontAwesomeIcon className="social" icon={faXTwitter} />
            </a>

            <a href="https://www.X.com/" target="blanket">
                 <FontAwesomeIcon className="social" icon={faInstagram} /> 
            </a>

            <a href="https://www.facebook.com/" target="blanket">
            <FontAwesomeIcon className="social" icon={faFacebook} />
            </a>
        </div>
        <h2>Copyright 2024 ©</h2>
    </footer>
  )
}

export default FooterComponent
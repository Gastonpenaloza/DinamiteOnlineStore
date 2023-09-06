import './Footer.css'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {

    return (
        <div className="footer">
            <div className="container footer-container">
                <div className="footer-rights">
                    <img alt="logo" src={Logo} width="80" height="80" />
                    <p>© 2023 Ropa Dinamite, Rosario, Argentina</p>
                </div>
                <div className="footer-social">
                    <a href="" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff", }} /></a>
                    <a href="" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", }} /></a>
                    <a href="" target="_blank"><FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} /></a>
                </div>
            </div>
        </div >
    )
}

export default Footer;
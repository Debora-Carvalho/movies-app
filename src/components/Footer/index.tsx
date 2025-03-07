import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { RiMovie2AiFill } from "react-icons/ri";
import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-logo'>
          <h1 className="page-title logo-inteira">
              <RiMovie2AiFill />
              Movies App
          </h1>
        </div>
        <nav className='footer-nav'>
          <a href="#">Sobre</a>
          <a href="#">Contatos</a>
          <a href="#">Política de Privacidade</a>
        </nav>
        <div className='footer-social'>
          <a href="#" className='footer-icon'><FaLinkedin /></a>
          <a href="#" className='footer-icon'><FaInstagram /></a>
          <a href="#" className='footer-icon'><FaWhatsapp/></a>
        </div>
      </div>
      <p className='footer-copy'>© 2025 Movies App. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;

import './App.css';
import { Homepage, Header, Footer } from "./sections/index";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram  } from "react-icons/fa6";


function App() {

  function showContact() {
    let contactsItem = document.querySelectorAll('.contact');
    contactsItem.forEach((item) => {
      item.classList.toggle('show-contact');
      })
    let contactBtn = document.getElementById('contact-btn');
    contactBtn.classList.toggle('rotate-motion')
  }

  return (
    <>
      <Header/>
      <Homepage/>
      <Footer />
      <div className='textCopyAlert' id='textCopyAlert'>
        <p>تم نسخ النص</p>
      </div>
      <a  href="https://api.whatsapp.com/send/?phone=%2B963932063444&text&type=phone_number&app_absent=0"  target="_blank" rel='noreferrer' className="whatsapp contact-item  contact"><i className="fa-brands fa-whatsapp whatsapp-icon"></i></a>
      <a  href="tel:+963935337980" className='call contact-item contact'><i className="fa-solid fa-phone call-icon"></i></a>
      <a  href="#/" className='facebook contact-item contact'><FaFacebookF className='facebook-icon' /></a>
      <a  href="#/" className='instagram contact-item contact'><FaInstagram  className='instagram-icon' /></a>
      
      <button id='contact-btn' className='contact_float' onClick={(showContact)}><IoChatbubblesOutline className='contact-icon' /></button>
    </>
  );
}

export default App;

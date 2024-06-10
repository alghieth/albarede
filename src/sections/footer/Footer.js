import './Footer.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CiMobile1, CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import logo from '../../assets/images/لوغو شركة البريدي.png'

function Footer() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_upe897v', 'template_bwlmafh', form.current, {
            publicKey: 'ySWKafEZSA1m3pNdM',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };
  return (
    <div id='footer' className='footer'>
    <div className='container'>
        <div className='logo-section'>
            <img src={logo} alt='albarde-logo'/>
            <div>
            <p className='primary-color'>شركة البريدي للمحاماة</p>
            <span className='primary-color'>Al Barede Law Firm</span>
            </div>
        </div>
        <div className='contact-info'>
            <h4 className='primary-color'>معلومات التواصل</h4>
            <ul>
                <li>
                <CiLocationOn />
                دمشق-أوتستراد المزة-مول كوين سنتر
                </li>
                <li>
                <CiMobile1 />
                444 063 932 963+
                </li>
                <li>
                <BsTelephone />
                7591 666 011 963+
                </li>
                <li>
                <HiOutlineMail />
                mkbtel063444@gmail.com
                </li>
            </ul>
        </div>
        <div className='send-email'>
            <h4 className='primary-color'>أطلب استشارتك</h4>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='user_name' placeholder='الاسم' required/>
                <input type='text' name='user_number' placeholder='رقم الهاتف' required/>
                <input type='email' name='user_email' placeholder='البريد الإلكتروني' required/>
                <input type='text' placeholder='موضوع الاستشارة' required/>
                <textarea name='message' rows={3} cols={30} placeholder='شرح القضية'></textarea>
                <button type='submit' className='btn-email'>أرسل استشارتك</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Footer
import './Header.css'
import logo from '../../assets/images/لوغو شركة البريدي.png'
import { ButtonPrimary } from '../../components/index';

function Header() {
    function menuToggle() {
      let toggleBtn = document.querySelector('.navbar-toggler');
      toggleBtn.click();
    }
    return (
    <>
    <nav className="container navbar navbar-expand-lg fixed-top rounded">
    <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#home-page">
            <img className='logo' src={logo} alt=''/>
            <div className='logo-info'>
            <p>شركة البريدي للمحاماة</p>
            <span>Al Barede Law Firm</span>
            </div>
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home-page" onClick={(menuToggle)}>الصفحة الرئيسية</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us" onClick={(menuToggle)}>عن الشركة</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#why-us" onClick={(menuToggle)}>لماذا نحن</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#our-serv' onClick={(menuToggle)}>خدماتنا</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#contact-us' onClick={(menuToggle)}>اتصل بنا</a>
            </li>
          </ul>
        </div>
        <ButtonPrimary hide='hide-button' href='#footer'>
          أطلب استشارتك
        </ButtonPrimary>
  </div>
</nav>
    </>
  )
}

export default Header
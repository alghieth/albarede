import './Header.css'
import logo from '../../assets/images/لوغو شركة البريدي.png'
import { ButtonPrimary } from '../../components/index';

function Header() {
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
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home-page">الصفحة الرئيسية</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">عن الشركة</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#why-us">لماذا نحن</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#our-serv'>خدماتنا</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#our-team'>فريقنا</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#contact-us'>اتصل بنا</a>
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
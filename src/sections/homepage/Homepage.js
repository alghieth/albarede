import './Homepage.css'
import { BsRocketTakeoff } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { ButtonPrimary, SectionHeader, SectionWrap, ButtonSecoundry, ButtonTransparent, Card, CardNoBorder } from '../../components/index';
import ServicesData from '../../assets/data/servicesData';
import ContactUsData from '../../assets/data/ContactUsData';
import WorksData from '../../assets/data/WorksData';
import logo from '../../assets/images/ابيض-لوغو-شركة-البريدي.webp';
import image_6 from '../../assets/images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg';
import image_9 from '../../assets/images/tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg';

// import image_caro_1 from '../../assets/images/1.jpg';
// import image_caro_2 from '../../assets/images/2.jpg';
// import image_caro_3 from '../../assets/images/3.jpg';
// import image_caro_4 from '../../assets/images/5.jpg';
// import image_caro_5 from '../../assets/images/6.jpg';
// import image_caro_6 from '../../assets/images/7.jpg';
// import image_caro_7 from '../../assets/images/8.jpg';
// import image_caro_8 from '../../assets/images/9.jpg';
// import image_caro_9 from '../../assets/images/business-card.jpg';
// import image_caro_10 from '../../assets/images/folder-1.jpg';
// import image_caro_11 from '../../assets/images/folder-2.jpg';
// import image_caro_12 from '../../assets/images/folder-3.jpg';
// import image_caro_13 from '../../assets/images/folder-4.jpg';
// import image_caro_14 from '../../assets/images/10.jpg';
// import image_caro_15 from '../../assets/images/11.jpg';
// import image_caro_16 from '../../assets/images/12.jpg';
// import image_caro_17 from '../../assets/images/13.jpg';
// import image_caro_18 from '../../assets/images/14.jpg';



function Homepage() {

  let cards = ServicesData.map(card => {
    return <Card key={card.id} icon={card.icon} title={card.title} info={card.info} />
  })
  let contactCard = ContactUsData.map(card => {
    return <Card key={card.id} icon={card.icon} title={card.title} info={card.info} />
  })
  let worksCards = WorksData.map(card => {
    return <CardNoBorder key={card.id} icon={card.icon} title={card.title} info={card.info} />
  })
 
  return (
    <>
    {/* start homepage */}
      <div id='home-page' className='hompage-background'>
        <img src={logo} alt=''/>
        <h1>شركة البريدي للمحاماة</h1>
        <p>Al Barede Law Firm</p>
        <span>ركز على تنمية اعمالك ودعنا نتولى عنك أمورك القانونية</span>
        <div className='buttons'>
        <ButtonPrimary hide='' href='#footer'>
          أطلب استشارتك
        </ButtonPrimary>
        <ButtonSecoundry href='#our-serv'>
          خدمات الشركة
        </ButtonSecoundry>
        </div>
      </div>
    {/* End homepage */}

  {/* start about us */}
  <div id='about-us'></div>
    <SectionWrap>
      <SectionHeader title='نبذة عن الشركة' disc='خبرات متراكمة لعقود من التجربة'/>
          <div className='about-info'>
            <div className='about-item'>
              <p>مرحباً بك في شركة البريدي </p>
              <h4 className='primary-color mb-3'>نبذة عن شركة البريدي المتميزة للمحاماة والإستشارات القانونية</h4>
              <p> تأسست شركة البريدي للمحاماة في دمشق عام 2016 على يد الأستاذ محمد خليل البريدي, وأصبحت خلال مدة وجيزة من أهم الشركات الرائدة على مستوى سوريا والمختصة بأهم القضايا القانونية ويعود الفضل في ذلك للجهود الحثيثة من كامل فريق محامي الشركة الذي يتمتع بآداء عالي أثبت جدارته في مختلف القضايا القانونية. </p>
              <h4 className='primary-color mb-3'>رسالتنا</h4>
              <p className='mb-5'>رضا العميل وصيانة الحقوق والسعي الدائم لكسب ثقتكم</p>
              <div className='about-button'>
              <ButtonPrimary href='#our-serv'>
                خدمات الشركة
              </ButtonPrimary>
              <ButtonSecoundry href='#contact-us'>
                تواصل معنا
              </ButtonSecoundry>  
              </div>
            </div>
            <div className='about-img'>
              <img className='w-100' src={image_6} alt=''/>
            </div>
          </div>
    </SectionWrap>
    {/* End about us */}

    {/* start why us section */}
    <div className='overlay'>
    <div className='why-us-section'>
    <SectionWrap>
      <SectionHeader title='أرقى المعايير المهنية' disc=''/>
      <p className='mb-5'>نؤمن بأن جودة الخدمة هي أهم وأعظم المفاهيم المحورية في التسويق الخدمي لذلك قمنا في شركة البريدي المتميزة للمحاماة والاستشارات القانونية بوضع مؤشر لجودة الخدمة وتطبيقه بعد تقسيم مركباته بإدارة ومتابعة دقيقة يضمن لنا استمرارية التحسين والتطوير في الأداء باعتمادية وأصالة وسرعة استعداد واستجابة ومبادلة توكيد وثقة وبتعاطف ورعاية ﻳﻤنح منذ بداية العلاقة واثناءها وحتى بعد انتهاءها .</p>
      <ButtonTransparent href='#contact-us'>
        تواصل معنا
      </ButtonTransparent>
    </SectionWrap>
    </div>
    </div>
    {/* end why us section */}
    
    {/* start why us2 section */}
    <div id='why-us'></div>
    <SectionWrap>
      <div className='why-us2'>
        <div className='why-us2-disc'>
          <SectionHeader title='لماذا نحن ؟' disc='دقة خبرة إنجاز'/>
          <div className='disc-item'>
            <div>
            <GrAnalytics />
            </div>
            <h3>يعمل لدينا فريق مختار بعناية</h3>
            <p>يتميز أعضاء مكتبنا بما عرف عنهم من النزاهة والحرص والعمل الجاد والقدرة على تقييم الأوضاع القانونية وتقديم الخدكات بفاعلية وسرعة.</p>
          </div>
          <div className='disc-item'>
            <div>
            <BsRocketTakeoff />
            </div>
            <h3>الأمانة والمصداقية</h3>
            <p>نحن في شركة البريدي المتميزة للمحاماة والاستشارات القانونية نستمد ثقتنا من تمكن الفريق القانوني من الدفاع عن حقوق العملاء واكتسابها بقوة القانون، متمسكين بالأمانة والمصداقية في التعامل.</p>
          </div>
          <div className='disc-item'>
            <div>
            <MdOutlineSpeakerNotes />
            </div>
            <h3>السرية التامة</h3>
            <p>نتعهد كفريق مع كافة منسوبينا بالحفاظ على سرية البيانات والمعلومات التي نصل إليها من خلال تعاقدنا مع أي من العملاء.</p>
          </div>
        </div>
        <img className='w-100' src={image_9} alt=''/>
      </div>
    </SectionWrap>
    {/* end why us2 section */}

    {/* start our services sectio */}
    <div id='our-serv' className='our-services'>
      <SectionWrap>
        <SectionHeader title='خدمات الشركة' disc='وقتك من أولوياتنا'/>
        <div className='card-holder'>
          {cards}
        </div>
      </SectionWrap>
    </div>
    {/* end our services sectio */}
    {/* start carousel section */}
    {/* <div className='carousel-section'>
    <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11" aria-label="Slide 12"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="12" aria-label="Slide 13"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="13" aria-label="Slide 14"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="14" aria-label="Slide 15"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="15" aria-label="Slide 16"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="16" aria-label="Slide 17"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="17" aria-label="Slide 18"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image_caro_16} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_6} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_7} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_8} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_9} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_10} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_11} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_12} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_13} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_14} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_15} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_17} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image_caro_18} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div> */}
    {/* end carousel section */}
    {/* Start Contact Us section */}
    <div id='contact-us'></div>
    <SectionWrap>
      <SectionHeader title='تواصل معنا' disc='نجيبك دائما'/>
      <div className='card-holder'>
        {contactCard}
        </div>
    </SectionWrap>
    {/* End Contact Us section */}

    {/* start our works section */}
    <div className='our-works'>
    <SectionWrap>
      <SectionHeader title='أعمالنا' disc='السعي الدائم لتحقق رضاك مسعانا' />
      <div className='card-holder'>
        {worksCards}
      </div>
    </SectionWrap>
    </div>
    {/* end our works section */}
    </>
  )
}

export default Homepage
import './Homepage.css'
import { AiOutlineTeam, AiOutlineSafety  } from "react-icons/ai";
import { PiHandshake } from "react-icons/pi";
import { ButtonPrimary, SectionHeader, SectionWrap, ButtonSecoundry, ButtonTransparent, Card, CardNoBorder, Cards } from '../../components/index';
import ServicesData from '../../assets/data/servicesData';
import ContactUsData from '../../assets/data/ContactUsData';
import WorksData from '../../assets/data/WorksData';
import logo from '../../assets/images/لوغو شركة البريدي.png';
import image_9 from '../../assets/images/tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg';
import image_1 from '../../assets/images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg';


import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

function Homepage() {

  let cards = ServicesData.map(card => {
    return <Card key={card.id} icon={card.icon} title={card.title} info={card.info} />
  })
  let contactCard = ContactUsData.map(card => {
    return <Cards key={card.id} icon={card.icon} title={card.title} info={card.info} text={card.text}/>
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
        <p>والاستشارات القانونية</p>
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
      <SectionHeader title='نبذة عن الشركة' disc='خبرات متراكمة لسنوات من التجربة'/>
          <div className='about-info' data-aos='fade-up'>
            <div className='about-item'>
              <p>مرحباً بك في شركة البريدي </p>
              <h4 className='primary-color mb-3'>نبذة عن شركة البريدي المتميزة للمحاماة والإستشارات القانونية</h4>
              <p> تأسست شركة البريدي للمحاماة في دمشق عام 2020 على يد الأستاذ محمد خليل البريدي, وأصبحت خلال مدة وجيزة من أهم الشركات الرائدة على مستوى سوريا والمتخصصة بأهم القضايا القانونية ويعود الفضل في ذلك للجهود الحثيثة من كامل فريق محامي الشركة الذي يتمتع بآداء عالي أثبت جدارته في مختلف القضايا القانونية. </p>
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
              <img className='w-100' src={image_1} alt=''/>
            </div>
          </div>
    </SectionWrap>
    {/* End about us */}

    {/* start why us section */}
    <div className='overlay'>
    <div className='why-us-section' data-aos='fade-up'>
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
      <div className='why-us2' data-aos='fade-up'>
        <div className='why-us2-disc'>
          <SectionHeader title='لماذا نحن ؟' disc='دقة خبرة إنجاز'/>
          <div className='disc-item'>
            <div>
            <AiOutlineTeam />
            </div>
            <h3>يعمل لدينا فريق مختار بعناية</h3>
            <p>يتميز أعضاء مكتبنا بما عرف عنهم من النزاهة والحرص والعمل الجاد والقدرة على تقييم الأوضاع القانونية وتقديم الخدمات بفاعلية وسرعة.</p>
          </div>
          <div className='disc-item'>
            <div>
            <PiHandshake />
            </div>
            <h3>الأمانة والمصداقية</h3>
            <p>نحن في شركة البريدي المتميزة للمحاماة والاستشارات القانونية نستمد ثقتنا من تمكن الفريق القانوني من الدفاع عن حقوق العملاء واكتسابها بقوة القانون، متمسكين بالأمانة والمصداقية في التعامل.</p>
          </div>
          <div className='disc-item'>
            <div>
            <AiOutlineSafety />
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
    <div id='our-serv' className='our-services' data-aos='fade-up'>
      <SectionWrap>
        <SectionHeader title='خدمات الشركة' disc='وقتك من أولوياتنا'/>
        <div className='card-holder'>
          {cards}
        </div>
      </SectionWrap>
    </div>
    {/* end our services sectio */}
   
    {/* Start Contact Us section */}
    <div id='contact-us' data-aos='fade-up'>
    <SectionWrap>
      <SectionHeader title='تواصل معنا' disc='نجيبك دائما'/>
      <div className='card-holder'>
        {contactCard}
        </div>
    </SectionWrap>
    </div>
    {/* End Contact Us section */}

    {/* start our works section */}
    <div className='our-works' data-aos='fade-up'>
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
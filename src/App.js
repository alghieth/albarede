import './App.css';
import { Homepage, Header, Footer } from "./sections/index";

function App() {
  return (
    <>
      <Header/>
      <Homepage/>
      <Footer />
      <a href="https://api.whatsapp.com/send/?phone=%2B963932063444&text&type=phone_number&app_absent=0"  target="_blank" className="whatsapp_float"><i className="fa-brands fa-whatsapp whatsapp-icon"></i></a>
    </>
  );
}

export default App;

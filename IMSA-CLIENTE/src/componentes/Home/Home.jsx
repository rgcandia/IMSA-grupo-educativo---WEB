import style from './Home.module.css'
import Nav from '../Nav/Nav.jsx'
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'
export default function Home(){
    return(<div className={style.home}>
    <Nav/>
    <Main/>
    <Footer/>
        
<a href="https://wa.me/5491137729571"  className={style.wafloat} target="_blank" rel="noopener">
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
</a>
    </div>);
}
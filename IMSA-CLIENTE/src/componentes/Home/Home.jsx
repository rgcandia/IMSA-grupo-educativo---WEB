import style from './Home.module.css'
import Nav from '../Nav/Nav.jsx'
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'
export default function Home(){
    return(<div className={style.home}>
    <Nav/>
    <Main/>
    <Footer/>
    </div>);
}
import '../styles/Banner.css'
import logo from '../assets/leaf.png'

function Banner () {
    return (
    <div className='lmj-banner'>
        <img src={logo} alt="image d'une feuille" className='lmj-logo'/>
        <h1 className='lmj-title'>Salut à tous les potos</h1>
    </div>
    )
}

export default Banner;
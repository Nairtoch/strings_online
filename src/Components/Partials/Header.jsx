import HeaderImage from '../../Assets/Images/header-bg.png'
import { Home } from '../Pages/Home'

export const Header = () => {
    return(
        <header className='Header'>
            <a href={<Home />}><img src={HeaderImage} alt="Header background image. Guitar." /></a>
        </header>
    )
}
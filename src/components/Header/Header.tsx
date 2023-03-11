import { IconBasket } from '../../SVG/IconBasket'
import { LogoMain } from '../../SVG/LogoMain'
import { IconLogin } from '../../SVG/IconLogin'
import { IconContact } from '../../SVG/IconContact'
import './Header.css'

export const Header = () => {

    return <div className='Header'>
        <div className='logo'>
            <LogoMain />
        </div>
        <div className='search'>
            B
        </div>
        <div className='controls'>
            <div className='contact'>
                <IconContact />
            </div>
            <div className="basket">
                <IconBasket isItems={false} />
            </div>
            <div className="login">
                <IconLogin isLoged={false}/>
            </div>
        </div>
    </div>
}
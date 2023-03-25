import './Header.css'
import { IconBasket } from '../../SVG/IconBasket'
import { LogoMain } from '../../SVG/LogoMain'
import { IconLogin } from '../../SVG/IconLogin'
import { IconContact } from '../../SVG/IconContact'
import { IconCandle } from '../../SVG/IconCandle'
import { NavLink } from 'react-router-dom'

export const Header = () => {

    return <div className='Header'>
        <div className='logo'>
            <LogoMain />
        </div>
        <div className='search'>
            B
        </div>
        <div className='controls'>
            <NavLink to='/contact' className='control contact'>
                <IconContact />
                <div className='description'>
                    Kontakt
                </div>
            </NavLink>
            <NavLink to='/basket' className="control basket">
                <IconBasket isItems={false} />
                <div className='description'>
                    Koszyk
                </div>
            </NavLink>
            <NavLink to='/login' className="control login">
                <IconLogin isLoged={false}/>
                <div className='description'>
                    Zaloguj
                </div>
            </NavLink>
        </div>
    </div>
}
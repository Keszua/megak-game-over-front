import './Header.css'
import { IconBasket } from '../../SVG/IconBasket'
import { LogoMain } from '../../SVG/LogoMain'
import { IconLogin } from '../../SVG/IconLogin'
import { IconContact } from '../../SVG/IconContact'
import { IconCandle } from '../../SVG/IconCandle'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../contexts/login.context'

export const Header = () => {
    const context = useContext(LoginContext);
    
    return <div className='Header'>
        <div className='logo'>
            <LogoMain />
        </div>
        <div className='search'>
                Wyszukaj
        </div>
        <div className='controls'>
            <NavLink to='/contact' className='control contact'>
                <IconContact />
                <div className='description'>
                    Kontakt
                </div>
            </NavLink>
            <NavLink to='/basket' className="control basket">
                <IconBasket isItems={context.basketNoEmpty} />
                <div className='description'>
                    Koszyk
                </div>
            </NavLink>
            <NavLink to='/login' className="control login">
                <IconLogin isLoged={context.isLoged}/>
                <div className='description'>
                    {context.login}
                </div>
            </NavLink>
        </div>
    </div>
}
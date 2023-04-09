import './Menu.css'
import { IconCandle } from '../../SVG/IconCandle'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
    const boxShadowOfLink = ({isActive}: {isActive: boolean}) => 
        ({boxShadow: isActive ? 'inset 0px -5px 3px 2px rgba(105, 105, 0, 0.5)' : ''})

    return <div className='Menu'>
        <NavLink to="/"          style={boxShadowOfLink} className='Menu_element'> Strona domowa </NavLink>
        <NavLink to="/products"  style={boxShadowOfLink} className='Menu_element'> Produkty </NavLink>
        <NavLink to="/services"  style={boxShadowOfLink} className='Menu_element'> Usługi </NavLink>
        <NavLink to="/promotion" style={boxShadowOfLink} className='Menu_element'> Promocje </NavLink>
    </div>
}
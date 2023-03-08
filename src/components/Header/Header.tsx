import { LogoMain } from '../../SVG/LogoMain'
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
                C1
            </div>
            <div className="basket">
                C2
            </div>
            <div className="login">
                C3
            </div>
        </div>
    </div>
}
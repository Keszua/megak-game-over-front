import './Header.css'
import { IconBasket } from '../../SVG/IconBasket'
import { LogoMain } from '../../SVG/LogoMain'
import { IconLogin } from '../../SVG/IconLogin'
import { IconContact } from '../../SVG/IconContact'
import { IconCandle } from '../../SVG/IconCandle'

export const Header = () => {

    return <div className='Header'>
        <div className='logo'>
            <LogoMain />
        </div>
        <div className='search'>
            B
        </div>
        <div className='controls'>
            <div className='control contact'>
                <IconContact />
                <div className='description'>
                    Kontakt
                </div>
            </div>
            <div className="control basket">
                <IconBasket isItems={false} />
                <div className='description'>
                    Koszyk
                </div>
            </div>
            <div className="control login">
                <IconLogin isLoged={false}/>
                <div className='description'>
                    Zaloguj
                </div>
            </div>
        </div>
    </div>
}
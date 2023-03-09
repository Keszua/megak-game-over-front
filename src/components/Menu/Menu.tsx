import { IconCoffin } from '../../SVG/IconCoffin'
import './Menu.css'

export const Menu = () => {

        return <div className='Menu'>
            <div className='Menu_element'>
                <IconCoffin />
            </div>
            <div className='Menu_element'>
                Produkty
            </div>
            <div className='Menu_element'>
                Usługi
            </div>
            <div className='Menu_element'>
                Promocje
            </div>
            <div className='Menu_element'>
                Kod rabatowy
            </div>
        </div>
}
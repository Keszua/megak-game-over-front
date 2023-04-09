import { Map } from '../components/Map/Map';
import '../components/common/common_style.css'

export const ContactView = () => (
    <div className="Flex_row">
        <Map position={[53.64975, 21.401]}/> 
        <div>
            <br/>
            Kontakt:
            <br/><br/>
            ul. Żałobna 14
            <br/>
            11-710 Zgon
            <br/><br/>
            <a href="mailto:keszua@gmail.com">Napisz do nas</a>

        </div>
    </div>
);
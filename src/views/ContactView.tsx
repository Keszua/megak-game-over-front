import { Map } from '../components/Map/Map';
import '../components/common/common_style.css'

export const ContactView = () => (
    <div className="Flex_row">
        <Map position={[53.64975, 21.401]}/> 
        <div>
            Kontakt:
            <br/><br/>
            ul. Żałobna 14
            <br/>
            11-710 Zgon
        </div>
    </div>
);
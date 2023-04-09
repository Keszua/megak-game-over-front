import './Footer.css'
import '../common/common_style.css'

export const Footer = () => {

    return <div className='Footer Flex_row' style={{justifyContent: 'space-between'}}>
        <div style={{minWidth:'100px'}} >
            <div>
                Kontak do mnie:
            </div>
            <div>
                <a href="https://www.linkedin.com/in/karol-michalczyk-keszua83/" target="_blank" rel="noreferrer"> 
                    <img src="https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg" alt="www.linkedin.com" style={{width:"85", height:"40" }} /> 
                </a>
            </div>
            <div>
                <a href="mailto:keszua@gmail.com">Email</a>
            </div>
        </div>

        <div>
            <p>
                Ta storona jest projektem na zaliczenie drugiej edycji <a href="https://www.megak.pl">Mega K</a>
            </p>
            <p>
                Strona jest tylko przykładem zakładu pogrzebowego, który w rzeczywistości nie istnieje. 
            </p> 
            <p>
                Usługi, produkty, ceny itp. są częścią projektu.
            </p> 
            <p>
                Przy grafice pomagała mi moja żona <a href="https://pl.linkedin.com/in/marta-michalczyk-099043205/">Marta Michalczyk</a>
            </p> 
        </div>

        <div>
            <a href="https://www.megak.pl">
                <img src="https://github.com/Keszua/megak-game-over-front/raw/main/public/images/megak.png" alt="MegaK" width="100" height="60"/> 
            </a>
        </div>
    </div>
}
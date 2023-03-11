import { settings } from "../components/globalSettings"

export const IconContact = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="60"  viewBox="0 -8 65 80">
        <g stroke={settings.iconColor} fill='none' strokeWidth="2">
			<circle cx="46" cy="43" r="5"/>
			<path d="M46,48h0a7,7,0,0,1,7,7v7a0,0,0,0,1,0,0H39a0,0,0,0,1,0,0V55A7,7,0,0,1,46,48Z"/>
			<circle cx="32" cy="43" r="5"/>
			<path d="M32,48h0a7,7,0,0,1,7,7v7a0,0,0,0,1,0,0H25a0,0,0,0,1,0,0V55A7,7,0,0,1,32,48Z"/>
			<circle cx="18" cy="43" r="5"/>
			<path d="M18,48h0a7,7,0,0,1,7,7v7a0,0,0,0,1,0,0H11a0,0,0,0,1,0,0V55A7,7,0,0,1,18,48Z"/>
			<rect height="4" width="60" x="2" y="22"/>
			<rect height="4" width="56" x="4" y="6"/>
			<line x1="55" x2="45" y1="18" y2="18"/>
			<line x1="43" x2="41" y1="18" y2="18"/>
			<rect height="12" width="52" x="6" y="10"/>
			<polyline points="6 6 10 2 54 2 58 6"/>
			<polyline points="13 44 4 44 4 26 60 26 60 44 51 44"/>
			<line x1="27" x2="23" y1="44" y2="44"/>
			<line x1="41" x2="37" y1="44" y2="44"/>
		</g>
    </svg>
}
import { settings } from "../config/globalSettings"

interface Props {
    isItems: boolean,
}

export const IconBasket = (props: Props) => {
    const { isItems } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" height="60"  viewBox="0 5 190 150">
        <g stroke={settings.iconColor}  strokeWidth="4" >
            { isItems && <g id="trumna" >
                    <polygon fill="none"  points="152.758,117.196 143.697,128.829 56.767,78.275 39.173,48.898 48.416,37.655 46.685,34.031 67.456,6.754 103.955,17.509 178.156,92.004 161.827,112.381 156.337,119.221 	"/>
                    <polyline fill="none" points="57.03,78.142 71.878,58.908 52.686,26.323 	"/>
                    <polyline fill="none" points="153.311,117.625 66.828,65.563 47.674,36.149 	"/>
                    <line fill="none" x1="71.878" y1="58.908" x2="161.827" y2="112.381"/>
                    <line fill="none" x1="155.17" y1="91.616" x2="74.236" y2="28.549"/>
                    <line fill="none"  x1="97.65" y1="30.118" x2="82.215" y2="49.926"/>
                </g>
            }

            <g id="wozek">
                <circle fill="none" cx="15" cy="67" r="7"/>
                <circle fill="none" cx="79" cy="142.956" r="9.6"/>
                <circle fill="none" cx="135" cy="142" r="9.6"/>
                <line fill="none" x1="128" y1="140" x2="90" y2="140"/>
                <path fill="none" d="M160,126.011 H63.21 c0,0 -12 0 -12,7 s10,7,10,7 l7,0"/>
                <polyline fill="none" points="22.753,67.059 49.786,67.059 60.978,124.829 	"/>
                <path fill="none" d="M52,75 175,85 160,128"/>
                <line x1="54" y1="93" x2="170" y2="100" />
                <line x1="57" y1="110" x2="165" y2="116" />
                <line x1="80" y1="79" x2="83" y2="127" />
                <line x1="110" y1="80" x2="110" y2="127" />
                <line x1="143" y1="81" x2="136" y2="127" />
            </g>
        </g>
    </svg>
}
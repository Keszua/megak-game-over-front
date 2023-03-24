import { useEffect, useState } from "react";
import { settings } from "../components/globalSettings"

export const IconCandle = () => {
    const [color, setColor] = useState<string>("#DD0")

    useEffect( () => {
        const interval = setInterval(() => {
            const flash = Math.random();            
            if (flash < 0.2) {
                setColor("#FF0");
            } else if (flash > 0.85) {
                setColor("#FA0");
            } else {
                setColor("#CC0");
            }
        }, 200);
        return () => clearInterval(interval);
    }, [])

    return <svg xmlns="http://www.w3.org/2000/svg" height="60"  viewBox="0 -30 520 550">
        <g fill={settings.iconColor}>
            <path id="plomien" fill={color} d="M295.655,36.972c-22.838-22.505-46.603-35.168-47.603-35.695c-3.425-1.807-7.546-1.69-10.868,0.31 c-3.318,2-5.345,5.592-5.345,9.466c0,40.678-14.483,54.231-29.815,68.578c-13.373,12.514-28.531,26.699-27.838,57.236 c0.616,27.199,17.929,49.432,46.303,59.479c2.012,0.712,4.076,1.057,6.118,1.057c5.172,0,10.184-2.219,13.733-6.312 c4.986-5.749,5.929-13.817,2.405-20.549c-8.564-16.361-7.418-30.577,3.577-43.102c3.807,9.375,9.503,16.116,14.44,21.958 c6.25,7.398,9.513,11.557,9.513,17.97c0,2.277-0.137,4.436-0.404,6.411c-0.902,6.639,1.906,13.227,7.328,17.193 c5.443,3.979,12.602,4.66,18.683,1.773c23.653-11.227,38.308-31.153,41.268-56.107C341.235,102.211,326.886,67.748,295.655,36.972 z M315.196,134.033c-2.175,18.337-12.639,29.191-22.844,35.508c0.021-0.719,0.031-1.443,0.031-2.174 c0-14.801-7.829-24.065-14.735-32.239c-6.871-8.131-12.806-15.154-13.466-28.525c-0.197-3.985-2.526-7.553-6.094-9.339 c-3.568-1.786-7.82-1.509-11.127,0.721c-28.45,19.187-38.295,45.627-27.905,73.636c-10.633-5.726-22.341-16.315-22.771-35.254 c-0.469-20.651,8.471-29.014,20.842-40.593c14.119-13.212,31.21-29.202,35.697-65.46 C276.982,47.059,321.041,84.781,315.196,134.033z"/>
            <path d="M507.105,260.898c0-6.104-4.948-11.053-11.053-11.053H267.055v-38.887c0-6.104-4.948-11.053-11.053-11.053 s-11.053,4.949-11.053,11.053v38.887H15.951c-6.106,0-11.053,4.949-11.053,11.053c0,101.777,60.866,189.603,148.11,228.997H94.629 c-6.106,0-11.053,4.949-11.053,11.053s4.948,11.053,11.053,11.053h322.743c6.106,0,11.053-4.949,11.053-11.053 s-4.948-11.053-11.053-11.053h-58.377C446.239,450.501,507.105,362.675,507.105,260.898z M27.268,271.952h457.467 c-0.819,17.152-3.539,33.813-7.944,49.783H35.211C30.806,305.765,28.087,289.104,27.268,271.952z M256.001,489.894 c-7.263,0-14.446-0.351-21.538-1.015c4.264-7.55,12.37-12.647,21.542-12.647c9.167,0,17.268,5.096,21.529,12.648 C270.444,489.543,263.263,489.894,256.001,489.894z M300.224,485.602c-6.405-18.359-23.959-31.479-44.217-31.479 c-20.265,0-37.823,13.12-44.231,31.477c-77.507-15.227-141.106-69.685-169.213-141.762h426.88 C441.335,415.917,377.732,470.377,300.224,485.602z"/>
            <path d="M89.103,285.632h-36.36c-6.106,0-11.053,4.949-11.053,11.053s4.949,11.053,11.053,11.053h36.36 c6.106,0,11.053-4.949,11.053-11.053S95.209,285.632,89.103,285.632z"/>
            <path d="M459.257,285.632h-36.358c-6.106,0-11.053,4.949-11.053,11.053s4.949,11.053,11.053,11.053h36.358 c6.106,0,11.053-4.949,11.053-11.053S465.363,285.632,459.257,285.632z"/>
            <path d="M181.641,285.632h-36.358c-6.106,0-11.053,4.949-11.053,11.053s4.949,11.053,11.053,11.053h36.358 c6.106,0,11.053-4.949,11.053-11.053S187.747,285.632,181.641,285.632z"/>
            <path d="M366.718,285.632H330.36c-6.106,0-11.053,4.949-11.053,11.053s4.949,11.053,11.053,11.053h36.358 c6.106,0,11.053-4.949,11.053-11.053S372.824,285.632,366.718,285.632z"/>
            <path d="M274.18,285.632h-36.358c-6.106,0-11.053,4.949-11.053,11.053s4.949,11.053,11.053,11.053h36.358 c6.106,0,11.053-4.949,11.053-11.053S280.286,285.632,274.18,285.632z"/>
        </g>
    </svg>
}
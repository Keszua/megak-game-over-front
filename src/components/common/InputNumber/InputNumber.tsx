import { useState } from "react";
import "./InputNumber.css"

export const Input_number = () => {
    const [count, setCount] = useState<number>(1);

    return <label className="Input_number">
        <div>Ilość</div>
        <button className="plusminus plus" onClick={() => setCount( prev => Number(prev)-1) }>-</button>
        <input type="number" className="num" value={count} />
        <button className="plusminus minus" onClick={() => setCount( prev => Number(prev)+1) }>+</button>
    </label>
}
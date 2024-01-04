import { useState } from "react";

function Colors(){

    const [color, setColor] = useState('#2A5825');

    console.log(color);

    return(
        <section className="colors">
            <input type="color" value={color} onChange={e => setColor(e.target.value)} />
            <p>{color}</p>
        </section>
    );
}

export default Colors;
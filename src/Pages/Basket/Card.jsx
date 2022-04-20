import React, {useState} from 'react';


const Card = ({ id, name, price, counter, del}) =>{
    const [count, setCount] = useState(count)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const total = count * price

        return(
            <>
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{counter}</td>
                    <td>
                        <button onClick={decrement}> - </button>
                        <button onClick={increment}> + </button>
                    </td>
                    <td>{total}</td>
                    <td>
                        <button onClick={() => del}>Удалить</button>
                    </td>
                </tr>
            </>
        )
}
export default Card;

import React, {useState, useEffect} from 'react';

import './App.css';

export default function App() {
    const [current, setCurrent] = useState(0)
    const [arr, setArr] = useState([])

    function clear() {
        setCurrent(0)
        setArr([])
    }

    function handleClick(e) {
        // handle two or more math symbol next to each other
        if(!isNaN(arr[arr.length-1])) {
            setArr([...arr,e.target.value])
        } else if(isNaN(e.target.value)){
            setArr([current])
        } else {
            setArr([...arr,e.target.value])
        }
        // arr.push(e.target.value)
    }
    let total = 0;

    function handleTotal() {
        if(!isNaN(arr[arr.length-1])) {
            total = eval(current)
            setCurrent(total)
            setArr([total])
        } else {
            setCurrent(current)
        }
    }

    useEffect(() => {
        setCurrent(arr.join(''))
    },[arr])

    return (
        <div>
        <table className='border'>
            <tbody>
            <tr><td colSpan='4' className='td-1'>{current}</td></tr>
            <tr>
                <td colSpan='3' onClick={clear}><button>C</button></td>
                <td ><button value='/' onClick={handleClick}>/</button></td>
            </tr>
            <tr>
                <td><button value='7' onClick={handleClick}>7</button></td>
                <td><button value='8' onClick={handleClick}>8</button></td>
                <td><button value='9' onClick={handleClick}>9</button></td>
                <td><button value='*' onClick={handleClick}>*</button></td>
            </tr>
            <tr>
                <td><button value='4' onClick={handleClick}>4</button></td>
                <td><button value='5' onClick={handleClick}>5</button></td>
                <td><button value='6' onClick={handleClick}>6</button></td>
                <td><button value='-' onClick={handleClick}>-</button></td>
            </tr>
            <tr>
                <td><button value='1' onClick={handleClick}>1</button></td>
                <td><button value='2' onClick={handleClick}>2</button></td>
                <td><button value='3' onClick={handleClick}>3</button></td>
                <td><button value='+' onClick={handleClick}>+</button></td>
            </tr>
            <tr>
                <td colSpan='2'><button value='0' onClick={handleClick}>0</button></td>
                <td><button value='.' onClick={handleClick}>.</button></td>
                <td><button onClick={handleTotal}>=</button></td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}
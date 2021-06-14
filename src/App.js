import React, {useState, useEffect} from 'react';

import './App.css';

export default function App() {
    const [current, setCurrent] = useState(0)
    const [total, setTotal] = useState(0)
    const [arr, setArr] = useState([0])

    function handleClick(e) {
        e.preventDefault()
        setCurrent(e.targer.value)
    }

    function handleDivide() {

    }

    return (
        <table className='border'>
            <tbody>
            <tr><td colSpan='4' className='td-1'>{current}</td></tr>
            <tr>
                <td colSpan='3'><button>C</button></td>
                <td onClick={handleDivide}><button>/</button></td>
            </tr>
            <tr>
                <td><button>7</button></td>
                <td><button>8</button></td>
                <td><button>9</button></td>
                <td><button>x</button></td>
            </tr>
            <tr>
                <td><button>4</button></td>
                <td><button>5</button></td>
                <td><button>6</button></td>
                <td><button>-</button></td>
            </tr>
            <tr>
                <td><button>1</button></td>
                <td><button>2</button></td>
                <td><button>3</button></td>
                <td><button>+</button></td>
            </tr>
            <tr>
                <td colSpan='2'><button>0</button></td>
                <td><button>,</button></td>
                <td><button>=</button></td>
            </tr>
            </tbody>
        </table>
    )
}
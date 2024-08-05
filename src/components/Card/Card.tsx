import { useState } from 'react'
import './Card.css'
import Contador from '../Contador/Contador';
import Task from '../Task/Task';


interface CardProps {
    titulo: string
    descricao: string
}




function Card({ titulo, descricao }: CardProps) {
    const [jogar, setJogar] = useState(false);
    const [tasks, setTasks] = useState(false);
    return (
        <>
            <div className="card">
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <div className='button-container'>
                    <button onClick={() => { setJogar(true) }}>jogar?</button>
                    <button onClick={() => { setTasks(true) }}>tasks</button>
                </div>
            </div>
            <div >
                {jogar ? (
                    <Contador />
                ) : <></>}
            </div>
            <div>
                {tasks ? (
                    <Task />
                ) : <></>}
            </div>
        </>
    )
}

export default Card
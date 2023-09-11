import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Conteiner from './styles'
import ButtonCheck from '../../components/ButtonCheck'
import {AiOutlineDelete} from 'react-icons/ai'

// utilies
import {handleCheckTask, deleteTask} from '../../utilies'

function ConteinerTask({task}) {
    const {dataUser} = useSelector(rootReducer => rootReducer.userReducer)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return ( 
        <Conteiner>
                <div className={`conteiner-name-task ${task.isCompleted && 'task-checked'}`}>
                    <ButtonCheck onChange={() => handleCheckTask(task.id, dataUser, dispatch)} isChecked={task.isCompleted} />

                    <span onClick={() => navigate(`/tasks/${task.id}`)}>{task.nameTask}</span>
                </div>

                <div className='conteiner-action'>
                    <button onClick={() => deleteTask(task.id,dataUser, dispatch)}>
                        <AiOutlineDelete size='25' fill='red' />
                    </button>
                </div>
            </Conteiner>
     );
}

export default ConteinerTask;
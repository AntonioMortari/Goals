// hooks
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// components
import Main from '../../components/Main'
import BackToHome from '../../components/BackToHome'
import InputEdit from '../../components/InputEdit'
import TextAreaEdit from '../../components/TextAreaEdit'
import Button from '../../components/Button'
import ButtonCheck from '../../components/ButtonCheck'
import {AiOutlineDelete} from 'react-icons/ai'

// utilies
import {attDataUser, deleteTask, handleCheckTask} from '../../utilies'

function DetailsTask() {
    let { id } = useParams()

    const { dataUser } = useSelector(rootReducer => rootReducer.userReducer)

    const [dataTask, setDataTask] = useState(dataUser.tasks.find(task => task.id === id))

    const [values, setValues] = useState(dataUser.tasks.find(task => task.id === id))

    const [isEditing, setIsEditing] = useState(false)


    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        if (!dataUser) {
            navigate('/login')
        } else {
            setDataTask(dataUser.tasks.find(task => task.id === id))
            setValues(dataUser.tasks.find(task => task.id === id))
        }


    }, [dataTask])

    const handleValues = (e) => {
        const { name, value } = e.target

        let newValues = { ...values }
        newValues[name] = value

        setValues(newValues)
    }

    const updateDataTask = async() =>{
        const indexTaskUpdated = dataUser.tasks.findIndex(task => task.id === id)

        
        dataUser.tasks[indexTaskUpdated] = {...values}

        dispatch({type:'user/update', payload:dataUser})
        await attDataUser(dataUser.id, dataUser)
    }

    return (
        <Main>
            <BackToHome />

            <div className="conteiner-title-details">
                <h1 className='title'>Detalhes da tarefa</h1>

                <ButtonCheck isChecked={dataTask.isCompleted} onChange={() => handleCheckTask(dataTask.id, dataUser, dispatch)} />
            </div>
            <br />
            <br />

            <InputEdit
                txt='Nome da tarefa'
                name='nameTask'
                value={values.nameTask}
                isEditing={isEditing}
                onChange={handleValues}
            />

            <TextAreaEdit
                value={values.description}
                onChange={handleValues}
                name='description'
                isEditing={isEditing}
            />

            {isEditing ? (
                <div className='conteiner-buttons-edit'>
                    <Button txt='Cancelar' onClick={() => {
                        setValues(dataTask)
                        setIsEditing(false)
                    }} />

                    <Button txt='Salvar Alterações' onClick={() => {
                        updateDataTask()
                        setIsEditing(false)
                    }} />

                </div>

            ) : (
                <Button txt='Editar' onClick={() => setIsEditing(true)} />
            )}

            <div className="conteiner-date-create-task">
                <p className='date-create-task'>
                    Criada em {dataTask.date}
                </p>

                    <button onClick={() =>{
                        deleteTask(dataTask.id,dataUser, dispatch)
                        navigate('/')
                    } }>
                        <AiOutlineDelete size='22' fill='red' />
                    </button>
            </div>
        </Main>
    );
}

export default DetailsTask;
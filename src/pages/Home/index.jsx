import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'

import Main from '../../components/Main';
import ConteinerTask from '../../components/ConteinerTask'
import Button from '../../components/Button'

import {AiOutlinePlus} from 'react-icons/ai'

function Home() {
    const {dataUser} = useSelector(rootReducer => rootReducer.userReducer)
    const [filter, setFilter] = useState('all')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() =>{
        !dataUser && navigate('/login')
    },[dataUser])

    const handleFilter = (e) =>{
        setFilter(e.target.value)
    }

    return ( 
        <Main>
            <div className='conteiner-title'>
                <h1 className="title">Olá {dataUser?.firstName}!</h1>

                <button onClick={() =>{
                    dispatch({type:'user/logout'})
                    navigate('/login')
                }}>
                    Sair
                </button>
            </div>
            <p className='subtitle'>Esperamos que você tenha um dia produtivo. Aqui está sua lista de tarefas para manter você no caminho certo.</p>

            <div className='conteiner-filter'>
                <Button onClick={() => navigate('/new-task')} txt='Adicionar Tarefa' iconRight={<AiOutlinePlus fill='#e7e7e7' />} />

                <select name="filters" onChange={handleFilter}>
                    <option value="all">Todas as tarefas</option>
                    <option value="checkeds">Apenas concluídas</option>
                    <option value="no-checkeds">Apenas não concluídas</option>
                </select>
            </div>

            <div className="conteiner-tasks">
                {dataUser?.tasks.length > 0 ? (
                    dataUser.tasks.map(task => {
                        if(filter == 'all'){
                            return <ConteinerTask key={task.id} task={task} />
                        }

                        if(filter == 'no-checkeds' && !task.isCompleted){
                            return <ConteinerTask key={task.id} task={task} />
                        }

                        if(filter == 'checkeds' && task.isCompleted){
                            return <ConteinerTask key={task.id} task={task} />
                        }
                    })
                ) : (
                    <p className='message-no-tasks'>Você ainda não adicionou nenhuma tarefa!</p>
                )}
            </div>
        </Main>
     );
}

export default Home;
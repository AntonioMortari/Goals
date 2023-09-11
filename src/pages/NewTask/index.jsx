// hooks
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// components
import Main from '../../components/Main'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea';
import Button from '../../components/Button'

// utilies
import {attDataUser, getData} from '../../utilies'
import shortid from 'shortid';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import BackToHome from '../../components/BackToHome';


function NewTask() {
    const {register, formState:{errors}, handleSubmit} = useForm()
    const {dataUser} = useSelector(rootReducer => rootReducer.userReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() =>{
        !dataUser && navigate('/login')
    }, [dataUser])

    const onSubmit = async(data) =>{
        let dataNewTask = {...data}

        dataNewTask.id = shortid.generate()
        dataNewTask.isCompleted = false
        dataNewTask.date = getData()

        dataUser.tasks.push(dataNewTask)

        dispatch({type:'user/update', payload:dataUser})

        await attDataUser(dataUser.id, dataUser)

        navigate('/')
    }

    return ( 
        <Main>
            <BackToHome />
            <h1 className="title">Nova tarefa</h1>

            <div className="form">
                <Input
                    type='text'
                    name='nameTask'
                    txt='Nome da tarefa'
                    register={register}
                    error={errors.nameTask}
                />

                <TextArea placeholder='Faça uma breve descrição da sua tarefa' txt='Descrição' name='description' error={errors.description} register={register}/>

                <Button txt='Criar Tarefa' onClick={handleSubmit(onSubmit)} />
            </div>
        </Main>
     );
}

export default NewTask;
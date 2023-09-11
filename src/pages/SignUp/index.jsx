// hooks
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// components
import Main from '../../components/Main'
import Input from '../../components/Input';
import Button from '../../components/Button';
import AlertError from '../../components/AlertError';

// utilies
import {verifyUserExist, postUser, handleShowError} from '../../utilies'
import shortid from 'shortid';

function SignUp() {
    let { dataUser } = useSelector(rootReducer => rootReducer.userReducer)
    const {handleSubmit, register, formState:{errors}} = useForm()

    const [showError, setShowError] = useState(false)
    const [showMessageError, setShowMessageError] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        // se o usuário estiver logado, redireciona a home
        dataUser && navigate('/')
    }, [dataUser])

    const onSubmit = async(data) =>{
        if(data.password != data.password2){
            // verificando se as senhas conferem
            handleShowError(setShowError, setShowMessageError, 'Senhas não conferem!')
            return
        }

        // verificando se usuário existe
        const userExist = await verifyUserExist(data.email)
        if(userExist){
            handleShowError(setShowError, setShowMessageError, `O email ${data.email} já foi cadastrado!`)
            return
        }
        
        // insere o array de tasks e o id
        let newDataUser = {...data}
        newDataUser.tasks = []
        newDataUser.id = shortid.generate()

        // post dos dados
        postUser(newDataUser)

        // att o estado global dataUser
        dispatch({type:'user/newUser', payload:newDataUser})
    }

    return (
        <Main>
            <h1 className='title'>Cadastre-se</h1>
            <p className='subtitle'>Faça o seu cadastro gratuitamente e comece a gerenciar suas tarefas!</p>

            <div className='form'>
                <Input
                    txt='Nome'
                    type='text'
                    name='firstName'
                    placeholder='Digite o seu nome'
                    register={register}
                    error={errors.firstName}
                    
                />

                <Input
                    txt='Email'
                    type='email'
                    name='email'
                    placeholder='Digite o seu melhor email'
                    register={register}
                    error={errors.email}
                    
                />
                <Input
                    txt='Senha'
                    type='password'
                    name='password'
                    placeholder='Digite sua senha'
                    register={register}
                    error={errors.password}
                />
                <Input
                    txt='Confirme sua senha'
                    type='password'
                    name='password2'
                    placeholder='Confirme a sua senha'
                    register={register}
                    error={errors.password2}
                    
                />

                <Button txt='Completar Cadastro' color='primary' onClick={handleSubmit(onSubmit)} />

                {showError && <AlertError messageError={showMessageError} />}

                <p className='call-to-action'>Já tem uma conta? <Link to='/login'>Faça Login</Link></p>
            </div>
        </Main>
    );
}

export default SignUp;
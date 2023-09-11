// hooks
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'

// components
import Main from '../../components/Main';
import Input from '../../components/Input';
import Button from '../../components/Button';
import AlertError from '../../components/AlertError';

// utilies
import {verifyUserExist, handleShowError} from '../../utilies'

function Login() {
    let {dataUser} = useSelector(rootReducer => rootReducer.userReducer)
    const {register, formState:{errors}, handleSubmit} = useForm()

    const [showError, setShowError] = useState(false)
    const [showMessageError, setShowMessageError] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() =>{
        dataUser && navigate('/')
    },[dataUser])

    const onSubmit = async(data) =>{
        const onDataUser = await verifyUserExist(data.email, true)

        if(!onDataUser){
            handleShowError(setShowError, setShowMessageError, 'Usuário não encontrado!')
            return
        }

        if(data.password != onDataUser.password){
            handleShowError(setShowError, setShowMessageError, 'Senha incorreta')
            return
        }

        dispatch({type:'user/newUser', payload:onDataUser})
        
    }

    return ( 
        <Main>
            <h1 className='title'>Login</h1>
            <p className='subtitle'>Bem-vindo(a) novamente! Faça login para continuar</p>

            <div className='form'>
                <Input 
                type='email'
                name='email'
                txt='Email'
                placeholder='Digite o seu email'
                error={errors.email}
                register={register}
                />

                <Input 
                type='password'
                name='password'
                txt='Senha'
                placeholder='Digite sua senha'
                error={errors.password}
                register={register}
                />

                <Button txt='Entrar' onClick={handleSubmit(onSubmit)} />

                {showError && <AlertError messageError = {showMessageError} />}

                <p className='call-to-action'>Não tem uma conta? <Link to='/sign-up'>Cadastre-se</Link></p>
            </div>

        </Main>
     );
}

export default Login;
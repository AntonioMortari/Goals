import styled from 'styled-components'
import { useState } from 'react'

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'


const Label = styled.label`

    display: flex;
    flex-direction: column;
    gap: 2px;
    color: #262626ba;

    input{
        padding: 5px 8px;
        border: 1px solid ${({ theme }) => theme.colors.gray_100};
        border-radius: 4px;
        font-size: 1.1rem;

        transition: all.2s;

        &:focus{
            outline: 1px solid ${({ theme }) => theme.colors.primary};
        }
    }

    .input-error{
        border: 1px solid rgb(255, 77, 71);
    }


    .message-error{
        font-size: .8rem;
        color: rgb(255, 77, 71);
        margin-top: 5px;
    }
`


function Input({ txt, type, placeholder, name, register, error, isDisabled, value}) {
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='conteiner-input'>
            <Label>
                {txt}
                <input
                    className={error ? 'input-error' : ''}
                    type={showPassword ? 'text' : type}
                    placeholder={placeholder}
                    autoComplete='off'
                    disabled={isDisabled}
                    value={value}
                    {...register(`${name}`,
                        { required: true, minLength: type == 'password' ? 7 : 0 })}
                />
                <span className='message-error'>{error?.type == 'required' && 'Campo obrigatório'}</span>
                <span className='message-error'>{error?.type == 'minLength' && 'Sua senha deve ter no mínimo 7 caracteres'}</span>

            </Label>

            {type == 'password' && (
                <button className='eye' onClick={handleShowPassword}>
                    {showPassword ? <AiOutlineEyeInvisible size='25' fill='#262626' /> : <AiOutlineEye size='25' fill='#262626' />}
                </button>
            )}
        </div>
    );
}

export default Input;
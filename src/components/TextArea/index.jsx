import styled from 'styled-components'

const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #262626ba;
    font-size: 1.1rem;

    textarea{
        resize: vertical;
        width: 100%;
        border: 1px solid ${({ theme }) => theme.colors.gray_100};
        border-radius: 5px;
        font-size: 1.1rem;
        padding: 5px;

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


function TextArea({ placeholder, txt, register, error, name,value, isDisabled}) {
    return (
        <Conteiner>
            {txt}

            <textarea
                className={error ? 'input-error' : ''}
                name={name}
                {...register(`${name}`, { required: true })}
                wrap='soft'
                rows='6'
                placeholder={placeholder}
                value={value}
                disabled={isDisabled}>
                    
            </textarea>

            <span className='message-error'>{error?.type == 'required' && 'Campo obrigatório'}</span>
        </Conteiner>


    );
}

export default TextArea;
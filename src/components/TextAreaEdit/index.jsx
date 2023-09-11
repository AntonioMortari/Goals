import styled from 'styled-components'

const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #262626ba;
    font-size: 1.1rem;
    margin-top: 10px;
    margin-bottom: 35px;

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

    .input-disabled{
        opacity: .5;
    }

`


function TextAreaEdit({ txt, placeholder, name, onChange, isEditing, value }) {

    return (
        <div className='conteiner-input'>
            <Conteiner>
                {txt}
                <textarea
                    className={isEditing ? '' : 'input-disabled'}
                    placeholder={placeholder}
                    name={name}
                    disabled={isEditing ? false : true}
                    value={value}
                    wrap='soft'
                    rows='6'
                    onChange={onChange}
                />

            </Conteiner>


        </div>
    );
}

export default TextAreaEdit;
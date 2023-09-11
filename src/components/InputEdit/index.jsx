import styled from 'styled-components'

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

    .input-disabled{
        opacity: .5;
    }
`


function InputEdit({ txt, type, placeholder, name, onChange,isEditing, value}) {

    return (
        <div className='conteiner-input'>
            <Label>
                {txt}
                <input
                className={isEditing ? '' : 'input-disabled'}
                    type={type}
                    placeholder={placeholder}
                    autoComplete='off'
                    name={name}
                    disabled={isEditing ? false : true}
                    value={value}
                    onChange={onChange}
                />

            </Label>

            
        </div>
    );
}

export default InputEdit;
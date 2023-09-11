import styled from 'styled-components'

const Conteiner = styled.button`
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
    padding: 8px;
    font-size: 1.1rem;
    border-radius: 8px;
    border: none;
    transition:.3s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover{
        filter: brightness(90%);
    }

`


function Button({txt, onClick, iconRight}) {
    return (  
        <Conteiner onClick={onClick}>
            {txt}
            {iconRight}
        </Conteiner>
    );
}

export default Button;
import styled from 'styled-components'
import {GoAlert} from 'react-icons/go'

const Conteiner = styled.div`
    background-color: #fa5f5f;
    color: ${({theme}) => theme.colors.white};
    padding: 8px;
    border-radius: 3px;
    width: 100%;

    display: flex;
    justify-content: center;
    gap: 15px;
    align-items: center;
`

function AlertError({messageError}) {
    return ( 
        <Conteiner>
            <GoAlert size='20' fill='white' />
            {messageError}
        </Conteiner>
     );
}

export default AlertError;
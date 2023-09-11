import styled from 'styled-components'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import {useNavigate} from 'react-router-dom'

const Button = styled.button`
    background-color: transparent;
    border: none;

    margin-bottom: 20px;
`

function BackToHome() {
    const navigate = useNavigate()

    return (
        <Button className='arrow-left' onClick={() => navigate('/')}>
            <AiOutlineArrowLeft size='20' color='#262626' />
        </Button>
    );
}

export default BackToHome;
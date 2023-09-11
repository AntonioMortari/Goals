import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: 'Roboto';
        color:#262626;
    }

    body{
        min-height:100vh;
        background-image:linear-gradient(145deg, ${({theme}) => theme.colors.primary} 50%, ${({theme}) => theme.colors.white} 50%);

        display:flex;
        align-items: center;
        justify-content: center;
    }

    button{
        cursor:pointer;
    }

    a{
        text-decoration: none;
    }
`
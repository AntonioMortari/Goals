import styled from 'styled-components'

const Conteiner = styled.main`
    background-color: ${({theme}) => theme.colors.white};
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px #26262642;
    min-width: 350px;

    margin: 20px 30px;

    

    .conteiner-title{
        display: flex;
        align-items: center;
        justify-content: space-between;

        button{
            background-color: transparent;
            border: none;
            font-size: 1rem;
            font-weight: bold;
            color: ${({theme}) => theme.colors.primary};
        }
    }

    .title{
        color: ${({theme}) => theme.colors.primary};
        font-weight: normal;

        font-size: 2.5rem;

        @media screen and (max-width:600px){
                font-size:1.8rem;
        }
    }

    .subtitle{
        margin-top: 8px;
        color: ${({theme}) => theme.colors.gray_100};
        line-height: 1.6rem;
    }

    .form{
        display: flex;
        flex-direction: column;
        gap: 15px;

        margin-top: 25px;

        button{
            margin-top: 25px;
        }

        .conteiner-input{
            width: 100%;
            display: flex;
            align-items: center;
            gap: 5px;
            position: relative;

            .eye{
                background-color: transparent;
                border: none;
                position: absolute;
                right:10px;
                bottom: 15px;
            }

            label{
                width: 100%;
            }
        }
    }

    .call-to-action{
        margin-top: 15px;
        color: ${({theme}) => theme.colors.gray_100};

        a{
            color: ${({theme}) => theme.colors.secondary};

            &:hover{
                text-decoration: underline;
            }
        }
    }

    .conteiner-filter{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        padding: 25px 5px;

        select{
            border-radius: 8px;
            padding: 5px;
            transition: all.3s;

            @media screen and (max-width:800px){
                height: 50%;
            }
            &:focus{
                outline: 1px solid ${({theme}) => theme.colors.primary};
            }
            option{
                background-color: ${({theme}) => theme.colors.gray_50};
            }
        }
    }

    .conteiner-tasks{
        margin-top: 35px;
        display:flex;
        flex-direction:column;
        gap:10px;
    }

    .message-no-tasks{
        color:${({theme}) => theme.colors.primary};
        text-align: center;
        font-size: 1.2rem;
        opacity: .8;
    }

    .conteiner-buttons-edit{            
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-around;
    }

    .date-create-task{
        color: ${({theme}) => theme.colors.gray_100};
    }

    .conteiner-title-details{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width:900px){
            flex-direction: row;
            
            gap: 20px;
        }
        
    }

    .conteiner-date-create-task{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 40px;

        button{
            background-color: transparent;
            border: none;
        }
    }
`

export default Conteiner
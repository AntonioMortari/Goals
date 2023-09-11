import styled from 'styled-components'

const Conteiner = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding:8px;

    .conteiner-name-task{
        display: flex;
        gap: 10px;
        width: 100%;

        span{
            display: block;
            font-size: 1.2rem;
            transition: .3s;
            width: 100%;
            padding: 3px;
            border-radius: 5px;
            cursor: pointer;
            padding-bottom: 5px;

            &:hover{
                background-color: rgba(27, 24, 24, 0.055);
            }
        }
    }

    .task-checked{
        span{
            color: ${({theme}) => theme.colors.gray_100};
            text-decoration: line-through;
        }
    }

    .conteiner-action{
        display: flex;
        align-items: center;
        gap: 10px;

        button{
            background-color: transparent;
            border: none;
        }
    }
`

export default Conteiner
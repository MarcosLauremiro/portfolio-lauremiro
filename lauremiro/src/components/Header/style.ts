import styled from "styled-components";


export const HeaderStyle = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: ${({theme}) => theme.bc};

    padding: .3rem;
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: transparent;

        border: none;
        border-radius: 6px;

        padding: 6px;

        cursor: pointer;

        &:hover{
            background-color:#868e96;
        }
    }
`
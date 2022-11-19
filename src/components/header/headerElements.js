import styled from 'styled-components'

export const HeaderContainer = styled.div`
    padding: 0.25rem;
    /* background-color: rgba(0,0,0,0.2); */
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
export const HeaderTitle = styled.h1`
    font-size: 1.75rem;
    font-family: 'Anton';
    margin: 0;
    letter-spacing: 2px;
    margin-left: 3%;
`

export const HeaderButton = styled.button`
    background: var(--dark-blue);
    color: white;
    margin: 0.5% 5% 0 0;
    padding: 0.35rem 1.25rem;
    outline: none;
    border: 0.5px solid rgb(0,0,0,0.4);
    border-radius: 0.25rem;
    font-family: 'Bebas Neue';
    font-size: 1rem;
    letter-spacing: 1px;
    &:hover{
        border: 0.5px solid rgb(0,0,0,1);
        background: var(--mid-blue);
        box-shadow: 1px 1px 5px black;
        color: black;
    }
`
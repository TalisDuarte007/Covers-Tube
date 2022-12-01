import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${({ theme }) => theme.borderBase};
    max-width: 425px;
    width: 100%;
    border-radius: 2px;
    overflow: hidden;

    input{
        width: 80%;
        padding: 4px 6px;
        border: none;
        outline: none;
        color: ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.backgroundBase};
    }

    button{
        flex: 1;
        cursor: pointer;
        border: none;
        background-color: ${({ theme }) => theme.backgroundLevel2};
        box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
        border-left: 1px solid ${({ theme }) => theme.borderBase};
        width: 40px;
        height: 40px;
        @media (min-width: 600px){
            width: 64px;
            height: 40px;
        }
    }
`;

export default function Search({valorDoFiltro, setValorDoFiltro}){
    const valorDaBusca = valorDoFiltro;
    const setValorDaBusca = setValorDoFiltro;
    return(
        <StyledSearch>
            <input type="text" onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca}/>
            <button>
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E"/>
            </button>
        </StyledSearch>
    )
}

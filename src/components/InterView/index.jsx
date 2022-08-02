import { useState } from "react";
import styled from "styled-components";

const Container = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

const TopBar = styled.div`
    width: 100%;
    height: 50px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Content = styled.div` 
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.interviewBackground};
`;

const Title = styled.h1`
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0;
    
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

const InterView = ({ name, children, visible }) => {
    return (
        <>
            {
                visible && 
                    <Container>
                        <TopBar><Title>{name}</Title></TopBar>
                        <Content>{children}</Content>
                    </Container>
            }
        </>
    )
}

export default InterView;
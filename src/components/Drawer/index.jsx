import styled from "styled-components";

const View = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.drawerBackground};
`;

const Item = styled.a` 
    font-size: 1.3rem; 
    font-weight: bold;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.text}
`;

const Drawer = {View,Item}

export default Drawer;
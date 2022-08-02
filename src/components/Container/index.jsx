import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: inherit;
    position: relative;
    background-color: ${({theme}) => theme.colors.background};
`;

export default Container;
import styled from "styled-components";

const Content = styled.div`
    width: 100%;
    height: max-content;
    padding: ${({theme}) => theme.defaults.spacing.paddingContent};
    background-color: ${({ theme }) => theme.colors.background};

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export default Content;
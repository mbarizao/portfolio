import styled from "styled-components";

const Default = styled.button`
    position: relative;
    background-color: transparent;
    border: solid 1px ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.3rem;
    padding: 10px;
    z-index: 1;

    &:before {
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${({ theme }) => theme.colors.primary};
        position: absolute;
        z-index: -1;
        transform: scaleX(0);
        transform-origin: 0%;
        transition: transform ease-in-out 0.3s;
    }
    &:hover {
    &:before {
        transform: scaleX(1);
    }
    }

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

const Button = {
    Default
};
export default Button;
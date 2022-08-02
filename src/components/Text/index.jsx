import styled from "styled-components";

const Title = styled.h1`
    font-size: 4rem;
    font-family: bold;
    color: ${({colored, theme}) => colored ? theme.colors.primary : theme.colors.text};

    @media (max-width: 768px) {
        text-align: center;
        font-size: 2.3rem;    
    }
`;

const Subtitle = styled.h5`
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 768px) {
        text-align: center;
        font-size: 1.3rem;    
    }
`;

const SessionTitle = styled.h1`
    font-size: 2rem;
    font-family: bold;
    color: ${({ theme }) => theme.colors.text};
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
    width: min-content;
    white-space: nowrap;

    @media (max-width: 768px) {
        text-align: start;
        font-size: 1.3rem;    
    }
`;

const Span = styled.span`
    font-size: 1.2rem;
    font-family: normal;
    color: ${({ theme }) => theme.colors.text};
    text-align: justify;

    @media (max-width: 768px) {
        font-size: 0.9rem;    
    }
`;

const Skills = styled.span`
    font-size: 1.2rem;
    font-family: bold;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 768px) {
        font-size: 0.9rem;    
    }
`;

const Link = styled.a`
    font-size: 1.3rem;
    border-bottom: 2px solid ${({theme}) => theme.colors.primary};
    width: min-content;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.text};
`;

const Text = {
    Title,
    Subtitle,
    SessionTitle,
    Span,
    Skills,
    Link
};

export default Text;
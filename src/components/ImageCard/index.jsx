import styled from "styled-components";

const Card = styled.div` 
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.card};
    box-shadow: ${({theme}) => theme.colors.shadow} 0px 8px 24px;
    margin-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    cursor: pointer;

    &:hover {
        box-shadow: ${({theme}) => theme.colors.hoverShadow} 0px 8px 24px;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 5px;
        margin-right: 0;
    }
`;

const Content = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`;

const Title = styled.h1`
    margin-top: 5px;
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
`;

const ImageCard = ({ image, title, onClick }) => {
    return (
        <Card onClick={onClick}>
            <img
                src={image}
                width={'100%'}
                alt={'icon'} />
            <Content>
                <Title>
                    {title}
                </Title>
            </Content>
        </Card>
    )
}

export default ImageCard;
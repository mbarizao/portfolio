import styled from "styled-components";

const Card = styled.div` 
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.card};
    box-shadow: ${({theme}) => theme.colors.shadow} 0px 8px 24px;
    padding-top: 1.7rem;
    padding-bottom: 1.7rem;
    margin-right: 1rem;
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
`;

const IconView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    padding: 16px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h1`
    margin-top: 5px;
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
`;

const Text = styled.span`
    font-size: 1rem;
    font-weight: normal;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
`;

const VCard = ({ icon, title, text, onClick }) => {
    return (
        <Card onClick={onClick}>
            <IconView>
                <img 
                    src={icon} 
                    width={32} 
                    height={32} 
                    alt={'icon'} />
            </IconView>
            <Content>
                <Title>
                    {title}
                </Title>
                <Text>
                    {text}
                </Text>
            </Content>
        </Card>
    )
}

export default VCard;
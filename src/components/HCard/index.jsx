import styled from "styled-components";

const Card = styled.div` 
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.card};
    padding: 10px;
    box-shadow: ${({theme}) => theme.colors.shadow} 0px 8px 24px;
    margin-top: 0.8rem;
    margin-right: 1rem;
    cursor: pointer;

    &:hover {
        box-shadow: ${({theme}) => theme.colors.hoverShadow} 0px 8px 24px;
    }
`;

const Content = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 1rem;
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
    text-align: start;
`;

const Text = styled.span`
    font-size: 1rem;
    font-weight: normal;
    text-align: start;
    color: ${({ theme }) => theme.colors.text};
`;

const HCard = ({ icon, title, text }) => {
    return (
        <Card>
            <IconView>
                {icon}
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

export default HCard;
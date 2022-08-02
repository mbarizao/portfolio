import styled from "styled-components";


const View = styled.div`
    position: ${({ fixed }) => fixed ? 'fixed' : 'relative'};
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: ${({ theme }) => theme.defaults.sizes.toolbarHeight};
    padding-left: ${({ theme }) => theme.defaults.spacing.toolbarPadding};
    padding-right: ${({ theme }) => theme.defaults.spacing.toolbarPadding};
    background-color: ${({ theme }) => theme.colors.toolbar};

    @media (max-width: 768px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`;

const Actions = styled.div`
    display: flex;
    flex-direction: row;  
    * {
        margin-left: 10px;
        margin-right: 10px;
        padding: 5px;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        color:  ${({ theme }) => theme.colors.text};
        border-bottom: 4px solid transparent;
        cursor: pointer;
    }

    a:link,
    a:visited,
    a:active {
        color:  ${({ theme }) => theme.colors.text};
    }
    
    a:hover {
        color: ${({ theme }) => theme.colors.primary};;
        border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const Button = styled.button` 
    display: none;
    justify-content: center;
    align-items: center;
    padding: 4px;
    background-color: ${({ theme }) => theme.colors.toolbarButton};
    border: 0px;
    border-radius: 6px;

    @media (max-width: 768px) {
        display: flex;
    }
`;

const Toolbar = {
    View,
    Actions,
    Button
}

export default Toolbar;
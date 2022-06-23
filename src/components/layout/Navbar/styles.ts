import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
  cursor: pointer;
  width: auto;
  height: auto;
`;

export const ContainerOptions = styled.div`
    padding: 3;
    align-items: center;
    flex-direction: row;
`

export const NavbarOptions = styled.a`
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    margin-right: 1.5rem;
`

export const NavbarLogin = styled.a`
    cursor: pointer;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    margin-right: 1.5rem;
`

export const NavbarButton = styled.button`
    height: 53px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 16px;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    color: ${props => props.theme.colors.secondary};
    border: solid 0 transparent;

    :hover {
        background-color: ${props => props.theme.colors.primary}
    }
`
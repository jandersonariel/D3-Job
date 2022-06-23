import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.primary};
    padding: 2em;
    align-items: flex-start;
    flex-direction: row;
`;

export const ImageTop = styled.img`
    margin-bottom: -1em;
    width: 100%;
`
export const ImageBottom = styled.img`
    margin-top: -1em;
    width: 100%;
`

export const Column = styled.div`
display: flex;
    flex-direction: column;
`

export const MainTitle = styled.a`
    margin: 3em 0 0 0;
    font-size: 32px;
    font-weight: 700;
    text-align: justify;
    color: ${props => props.theme.colors.secondary};
`

export const MainText = styled.a`
    margin: 2em 0 0 0;
    font-size: 16px;
    font-weight: 400;
    text-align: justify;
    color: ${props => props.theme.colors.secondary};
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2em 0 0 0;
    align-items: center;
`

export const MainIcon = styled.img`
    width: 26px;
    margin-right: 1em;
`

export const MainWarning = styled.a`
    font-size: 15px;
    font-weight: 400;
    text-align: justify;
    color: ${props => props.theme.colors.error};
`

export const MainImage = styled.img`
    width: 462px;
    height: 404px;
    margin-top: 20em;
`


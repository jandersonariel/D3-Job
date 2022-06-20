import styled from 'styled-components'

export const Container = styled.div`
`;
export const ContHeader = styled.div`
  display: flex;
  justify-content: center;
`;
export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  overflow-y: auto;

  @media (max-width: 581px) {
  text-align: center;
  flex-direction: column;
  padding-top: 5.5rem;
  }
`;
export const MainText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 35rem;
  height: 20rem;
  @media (max-width: 581px) {
    width: 25rem;
    padding-bottom: 2rem;
    padding-top: 2rem;
 }
`;
export const Text1 = styled.text`
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 581px) {
    font-size: 1.5rem;
 }
`;
export const TextName = styled.text`
  font-size: 2.5rem;
  font-weight: 600;
  @media (max-width: 581px) {
    font-size: 1.25rem;
 }
`;
export const Text2 = styled.text`
  font-size: 1.5rem;
  font-weight: 500;
  @media (max-width: 581px) {
    font-size: 0.75rem;
 }
`;
export const Text3 = styled.text`
  font-size: 1.5rem;
  font-weight: 400;
  @media (max-width: 581px) {
    font-size: 0.75rem;
 }
`;
export const ContImg = styled.div`
  display: flex;
  align-items: center;
 
  border: solid 2px ${props => props.theme.color.primary};
  border-radius: 20px;
`;
export const Image = styled.img`
  width: 16rem;

  border-radius: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);;
`;




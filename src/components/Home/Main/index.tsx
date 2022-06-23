import React from 'react';

import * as S from './styles';

const Main: React.FC = () => {
    return (
        <div>
            <S.ImageTop src={'https://i.imgur.com/O2AFbK7.png'} />
            <S.Container>
                <S.Column>
                    <S.MainTitle>Como funciona?</S.MainTitle>
                    <S.MainText>
                        Nosso objetivo nesse projeto é conseguir ajudar a compartilhar serviços de pessoas, por sua região.
                        Para alguns de nós que moramos sozinhos em lugares novos as vezes precisamos de algum serviço, como troca de encanamento ou afiação e não conhecemos ninguém pela região, esse é o site ideial para encontrar pessoas para te ajudar.
                        Não somente pessoas como lojas, precisam de manutenção em certas areas e não tem contato de ninguém então nesse site permitimos os cadastro de:
                    </S.MainText>
                    <S.MainText>
                        º Consumidores
                    </S.MainText>
                    <S.MainText>
                        º Prestadores
                    </S.MainText>
                    <S.MainText>
                        º Lojas
                    </S.MainText>
                    <S.MainText>
                        Com um sistema de feedback para ambos os lados em acordos, como para quem pediu o serviço e quem o executou.
                    </S.MainText>
                    <S.Row>
                        <S.MainIcon src={'https://i.imgur.com/ff0VVlX.png'} />
                        <S.MainWarning>
                            Ainda não realizamos pagamentos na plataforma.
                        </S.MainWarning>
                    </S.Row>
                </S.Column>
                <S.MainImage src={'https://i.imgur.com/qhGrRcl.png'} />
            </S.Container>
            <S.ImageBottom src={'https://i.imgur.com/TvZOLbg.png'} />
        </div>
    );
}

export default Main;
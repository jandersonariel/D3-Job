import React from 'react';

import * as S from './styles';

const Footer: React.FC = () => {
    return (
        <S.Container>
            <S.Image src={'https://i.imgur.com/RXOqwLf.png'} />
            <S.Column>
                <S.FlexIcons>
                    <S.SocialLogo src={'https://i.imgur.com/PEJgMUN.png'} />
                    <S.SocialLogoText>@DAY_Official</S.SocialLogoText>
                </S.FlexIcons>

                <S.FlexIcons>
                    <S.SocialLogo src={'https://i.imgur.com/5SdAlmy.png'} />
                    <S.SocialLogoText>/DAY3_Official</S.SocialLogoText>

                </S.FlexIcons>

                <S.FlexIcons>
                    <S.SocialLogo src={'https://i.imgur.com/6W1ybt5.png'} />
                    <S.SocialLogoText>+55 31 60606060</S.SocialLogoText>

                </S.FlexIcons>

                <S.FlexIcons>
                    <S.SocialLogo src={'https://i.imgur.com/pFVEbnZ.png'} />
                    <S.SocialLogoText>contato@day3.com.br</S.SocialLogoText>

                </S.FlexIcons>
            </S.Column>
        </S.Container>
    );
}

export default Footer;
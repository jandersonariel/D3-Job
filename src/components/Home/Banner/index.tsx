import React from "react";
import * as S from "./styles";

const Banner: React.FC = () => {

  return (
    <S.Container>
      <S.BannerImage src={'https://i.imgur.com/YtXhqqx.png'} alt="bannerImage" />
      <S.ContainerBoxes>
        <S.BannerBox>
          <S.BoxText>SERVIÇOS</S.BoxText>
          <S.BoxIcon src={'https://i.imgur.com/yJWbn7S.png'} />
        </S.BannerBox>
        <S.BannerMiddleBox>
          <S.BoxText>LOJAS</S.BoxText>
          <S.BoxIcon src={'https://i.imgur.com/8UWN7ZT.png'} />
        </S.BannerMiddleBox>
        <S.BannerBox>
          <S.BoxText>USUÁRIOS</S.BoxText>
          <S.BoxThirdIcon src={'https://i.imgur.com/dHGFm7L.png'} />
        </S.BannerBox>
      </S.ContainerBoxes>
    </S.Container>
  );
};

export default Banner;
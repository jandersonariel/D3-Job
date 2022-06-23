import Link from 'next/link';
import React from 'react';

import * as S from './styles';

const Navbar: React.FC = () => {
    return (
        <S.Container>
            <Link href="/">
                <S.Logo src={'https://i.imgur.com/USIbBeU.png'} alt="logo" />
            </Link>

            <S.ContainerOptions>
                <S.NavbarOptions>Como Funciona</S.NavbarOptions>
                <S.NavbarOptions>Contato</S.NavbarOptions>
                <Link href="/signIn">
                    <S.NavbarLogin>Login</S.NavbarLogin>
                </Link>
                <Link href="/preSignUp">
                    <S.NavbarButton>Inscreva-se</S.NavbarButton>
                </Link>
            </S.ContainerOptions>
        </S.Container>
    )
}

export default Navbar;
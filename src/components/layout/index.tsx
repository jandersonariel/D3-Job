import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

// import { Container } from './styles';
type Props = {
    children?: React.ReactNode
}

const layout: React.FC<Props> = ({ children }) => {

    return (
        <div>
            <Head>
                <title>D3Job</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default layout;
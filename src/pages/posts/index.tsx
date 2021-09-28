import Head from 'next/head'
import styles from './styles.module.scss';


export default function Posts(){
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Upload de imagens no Front End com ReactJS e Context API</strong>
                        <p>Vamos implementar o sistema de upload de imagens no Front End com ReactJS utilizando o gerenciamento de estados com Context API.</p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Upload de imagens no Front End com ReactJS e Context API</strong>
                        <p>Vamos implementar o sistema de upload de imagens no Front End com ReactJS utilizando o gerenciamento de estados com Context API.</p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Upload de imagens no Front End com ReactJS e Context API</strong>
                        <p>Vamos implementar o sistema de upload de imagens no Front End com ReactJS utilizando o gerenciamento de estados com Context API.</p>
                    </a>
                </div>
            </main>
        </>
    )
}
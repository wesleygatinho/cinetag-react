import Titulo from '../../componentes/Titulo';
import Banner from '../../componentes/Banner';
import styles from './Player.module.css';
import { useParams } from 'react-router-dom';
import NaoEncontrada from '../../Pages/NaoEncontrada';
import { useEffect, useState } from 'react';
const Player = () => {
    const [video, setVideo] = useState([]);
    const parametros = useParams();
    
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/wesleygatinho/dbjson/videos?id=${parametros.id}`)
        .then((response) => response.json())
        .then(dados => {
            setVideo(...dados)
        })
    },[])

    if (!video) {
        return <NaoEncontrada/>
    }
    return (
        <>
            <Banner imagem='player' />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                </iframe>
            </section>
        </>
    )
}

export default Player;
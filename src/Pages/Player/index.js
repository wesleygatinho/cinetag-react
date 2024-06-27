import Titulo from '../../componentes/Titulo';
import Banner from '../../componentes/Banner';
import styles from './Player.module.css';
import { useParams } from 'react-router-dom';
import videos from "../../json/db.json";
import NaoEncontrada from '../../Pages/NaoEncontrada';
const Player = () => {
    const parametros = useParams();
    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    })

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
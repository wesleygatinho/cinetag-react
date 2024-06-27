import { Link } from 'react-router-dom';
import { useFavoritoContext } from '../../contextos/Favoritos';
import styles from './Card.module.css';
import iconeDesfavoritar from './desfavoritar.png';
import iconeFavoritar from './favoritar.png'
const Card = ({ id, capa, titulo }) => {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img
                src={icone}
                alt='Favoritar filme'
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }}
            />
        </div>
    )
}

export default Card;
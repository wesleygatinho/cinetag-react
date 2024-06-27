import { Link } from 'react-router-dom';
import styles from './CabelhoLink.module.css';

const CabecalhoLink = ({url, children}) =>{
    return(
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default CabecalhoLink;
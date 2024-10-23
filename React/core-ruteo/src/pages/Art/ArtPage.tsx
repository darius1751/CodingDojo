import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch"
import { ResponseImageAPI } from "../../interfaces/ResponseImageAPI";
import { Pagination } from "../../components/Pagination/Pagination";
import { URLS } from "../../constants/URLS";
import { routes } from "../../constants/routes";
import styles from './artPage.module.css';
import { Loading } from "../../components/Loading/Loading";

export const ArtPage = () => {
    const { id: idParam } = useParams();
    const id = parseInt(idParam!);
    const navigate = useNavigate();
    const { length } = routes;
    useEffect(() => {
        if (!id || isNaN(id) || id > length || id < 1)
            navigate('/home');
    }, [])

    const imageAPI = useFetch<ResponseImageAPI>(`${URLS.API_IMAGES}?query=natural&per_page=${id}`, { Authorization: 'CicTShATpDqHgVyMOGHHVqq3gdw6Ow4CQT2ynFeYZwE4OaZeNcYBEe44' });
    return (
        <div className={`page ${styles['art-page']}`}>
            <h1>{routes[id - 1]}</h1>
            {
                !imageAPI?.photos[id - 1]?.src?.original ? <Loading /> :
                    <img className={styles.image} src={imageAPI?.photos[id - 1]?.src?.original} alt={'natural'} />
            }
            <Pagination
                previouse={id > 1 ? `/art/${id - 1}` : undefined}
                next={id < length ? `/art/${id + 1}` : undefined}
                home="/home" />
        </div>
    )
}
import { Card } from 'antd';

import { posterPath } from '../config/moviedb';
import { IKnownFor } from '../interfaces';
import { humanDate } from '../helpers/date';

import star from '../assets/img/star.png';

interface Props{
    movie: IKnownFor
}

function MovieCard({ movie } : Props) {

    const {
        title,
        poster_path,
        vote_average,
        release_date
    } = movie;

    const stringDate = release_date ? humanDate(release_date) : '';

    return (
        <Card title={title} bordered={false}>
            <div className="actor__card-info">
                <div>
                    <div className="actor__poster-wrap">
                        <img className="actor__movie-poster" src={`${posterPath}${poster_path}`} alt={title} />
                    </div>
                    <div className="actor__movie-vote">                        
                        <img src={star} alt="vote average"/>
                        <span> {vote_average} / 10</span>
                    </div>                  
                </div>
                <div className="actor__movie-description">
                    <p>{movie.overview}</p>
                    <p className="ant-typography ant-typography-secondary">{stringDate}</p>
                </div>
            </div>
        </Card>
    )
}

export default MovieCard;
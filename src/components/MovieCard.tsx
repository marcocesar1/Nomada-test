import { Card } from 'antd';

import { posterPath } from '../config/moviedb';
import { IKnownFor } from '../interfaces';

import star from '../assets/img/star.png';
import { humanDate } from '../helpers/date';

interface Props{
    movie: IKnownFor
}

function MovieCard({movie} : Props) {
    return (
        <Card title={movie.title} bordered={false}>
            <div className="actor__card-info">
                <div>
                    <div className="actor__poster-wrap">
                        <img className="actor__movie-poster" src={`${posterPath}/${movie.poster_path}`} alt={movie.title} />
                    </div>
                    <div className="actor__movie-vote">                        
                        <img src={star} alt="vote average"/>
                        <span> {movie.vote_average} / 10</span>
                    </div>                  
                </div>
                <div className="actor__movie-description">
                    <p>{movie.overview}</p>
                    <p className="ant-typography ant-typography-secondary">{humanDate(movie.release_date)}</p>
                </div>
            </div>
        </Card>
    )
}

export default MovieCard
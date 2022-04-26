import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";

import { searchActor } from "../../store/slices/actorSlice";
import { AppDispatch, RootState } from "../../store/store";
import SkeletonMovie from "../../components/SkeletonMovie";
import ErrorMovie from "../../components/ErrorMovie";

import { posterPath } from "../../config/moviedb";
import MovieCard from "../../components/MovieCard";

const Actor = () => {

  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  const { actor, ui } = useSelector((state: RootState) => state.actor);

  const {
    name,
    popularity,
    profile_path,
    known_for
  } = actor;

  const {
    isLoading,
    isError,
    errorMessage
  } = ui;

  useEffect(() => {
    dispatch(searchActor(query));
  }, [query, dispatch]);
  
  if(isLoading) return <SkeletonMovie />;

  if(isError) return <ErrorMovie message={errorMessage} />;

  return (
    <div className="container">
      {name && (<Row>
          <Col xs={24} md={6}>
            <Card
              hoverable
              cover={<img className="actor__poster" src={`${posterPath}${profile_path}`} alt={name} />}
            >
              <Meta title={name} description={`Popularidad: ${popularity}`} />
            </Card>
            <div>
              <Link
                  to="/"
                  type="primary"
                  className="ant-btn ant-btn-primary error-movie__btn"
              >Regresar</Link>
            </div>
          </Col>
          <Col xs={24} md={18}>
            <div className="actor__movies">
              {known_for.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </Col>
      </Row>)}    
    </div>
  )
}

export default Actor;
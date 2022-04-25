import { useSearchParams } from 'react-router-dom';

function Detail() {

  const [searchParams] = useSearchParams();
  const actor = searchParams.get('actor');

  console.log(actor)

  return (
    <div>Detail {actor}</div>
  )
}

export default Detail;
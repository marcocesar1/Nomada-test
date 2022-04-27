import { Link } from 'react-router-dom';
import { Empty } from 'antd';

const NotFound = () => {
  return (
    <div className="not-found">
      <Empty description="Página no encontrada"/>
      <Link
        to="/"
        className="ant-btn ant-btn-primary not-found__btn"
      >Regresar</Link>
    </div>
  )
}

export default NotFound;
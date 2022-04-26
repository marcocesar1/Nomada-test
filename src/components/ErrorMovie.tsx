import { Alert, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

interface Props{
    message: string;
}

function ErrorMovie({ message }: Props) {
  return (
    <Row>
        <Col xs={24} md={{pull: 7, push: 7, span: 10}}>
            <Alert message={message} type="error" />
            <Link
                to={`/`} 
                type="primary"
                className="ant-btn ant-btn-primary error-movie__btn"
            >Regresar</Link>
        </Col>
    </Row>
  )
}

export default ErrorMovie;
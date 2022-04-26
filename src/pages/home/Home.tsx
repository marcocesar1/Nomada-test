import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Upload, Row, Col, Card, Alert } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import { RootState } from '../../store/store';
import useDragger from '../../hooks/useDragger';

import adivina from '../../assets/img/adivina.jpg';

const { Dragger } = Upload;

function Home() {

  const draggerProps = useDragger();

  const { 
    fileList,
    nomadaResp,
    ui
  } = useSelector((state: RootState) => state.search);

  const { error, actorName } = nomadaResp;

  return (
    <div>
        <Row>
          <Col xs={24} md={{pull: 7, push: 7, span: 10}}>
            <Card
              hoverable
              className="home__card"
              cover={<img className="home__card-cover" alt="example" src={adivina} />}
            >
              {ui.isError && <Alert message={ui.errorMessage} type="error" />}
              {error && <Alert message={error} type="error" />}
              {actorName && (<>
                <Alert message={actorName} type="success" />
                <Link
                  to={`/actor?query=${actorName}`} 
                  type="primary"
                  className="ant-btn ant-btn-primary home__btn-info"
                >Ver información</Link>
              </>)}
            </Card>
            <div>
              <Dragger 
                {...draggerProps}
                fileList={fileList}
                className="home__dragger">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Haz click o arrastra una imagen</p>
                <p className="ant-upload-hint">
                  Selecciona la foto de un actor famoso para conocer en qué películas ha salido
                </p>
              </Dragger>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default Home;
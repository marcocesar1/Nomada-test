import { useSelector } from 'react-redux';
import { Upload, Row, Col, Card, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import { RootState } from '../../store/store';
import useDragger from '../../hooks/useDragger';

import adivina from '../../assets/img/adivina.jpg';

const { Meta } = Card;
const { Dragger } = Upload;

function Home() {

  const { draggerProps, handleDetail } = useDragger();

  const { 
    fileList,
    nomadaResp
  } = useSelector((state: RootState) => state.search);

  const { error, actorName } = nomadaResp;

  return (
    <div className="container">
        Home
        <Row>
          <Col xs={24} md={{pull: 7, push: 7, span: 10}}>
            <Card
              hoverable
              className="home__card"
              cover={<img className="home__card-cover" alt="example" src={adivina} />}
            >
              <Meta title={actorName} description={error} />
              {actorName && (
                <Button 
                  type="primary"
                  className="home__btn-info"
                  onClick={() => handleDetail(actorName)}
                >Ver información</Button>
              )}
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
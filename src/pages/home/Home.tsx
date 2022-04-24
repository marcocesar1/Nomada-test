import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import { removeOnFileList, whoIs } from '../../store/slices/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { UploadFile } from 'antd/lib/upload/interface';

const { Dragger } = Upload;

const mimetypes = ['image/png', 'image/jpeg'];

const props = {
  multiple: false,
  accept: '.png,.jpeg,.jpg',
  beforeUpload: (file: File) => {
    if(!mimetypes.includes(file.type)){
      message.error(`Only images`);
      return false;
    }
    
    return true;
  }
};

function Home() {

  const dispatch = useDispatch<AppDispatch>();
  const { fileList, nomadaResp } = useSelector((state: RootState) => state.search);

  const {
    error,
    userName,
    actorName
  } = nomadaResp;

  const customRequest = (data: any) => {
    dispatch(whoIs(data.file) as any)
  };

  const onRemove = (file: UploadFile<any>) => {
    dispatch(removeOnFileList(file.uid) as any)
  }

  return (
    <div>
        Home
        <p>Actor: {actorName}</p>
        <p>Error: {error}</p>        
        <Dragger {...props} customRequest={customRequest} fileList={fileList} onRemove={onRemove}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Haz click o arrastra una imagen</p>
          <p className="ant-upload-hint">
            Selecciona la foto de un actor famoso para conocer en qué películas ha salido
          </p>          
        </Dragger>
    </div>
  )
}

export default Home;
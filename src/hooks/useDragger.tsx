import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UploadFile } from 'antd/lib/upload/interface';

import { removeOnFileList, setImage, whoIs } from '../store/slices/searchSlice';
import { AppDispatch } from '../store/store';

const mimetypes = ['image/png', 'image/jpeg'];

const draggerProps = {
    multiple: false,
    accept: '.png,.jpeg,.jpg'
};

const useDragger = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const customRequest = (data: any) => {
        dispatch(whoIs(data.file))
    };
    
    const onRemove = (file: UploadFile<any>) => {
        dispatch(removeOnFileList(file.uid));
    }
    
    const beforeUpload = (file: File) => {
        if(!mimetypes.includes(file.type)){
          message.error(`Only images`);
          return false;
        }
        const urlFile = URL.createObjectURL(file);
        dispatch(setImage(urlFile));
        return true;
    }
    
    const handleDetail = (actorName: string) => {
        navigate(`/detail?actor=${actorName}`);
    }

    return {
        draggerProps: {
            customRequest,
            onRemove,
            beforeUpload
        },
        handleDetail
    }
}

export default useDragger
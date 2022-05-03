import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { UploadFile, UploadFileStatus } from 'antd/lib/upload/interface';
import { v4 as uuidv4 } from 'uuid';

import { NomadaResp, SearchState } from '../../interfaces'
import { sendFile } from '../../services/api';

export const whoIs = (file: File) => async (dispatch: Dispatch) => {

  const newItemFile: UploadFile<any> = {
    uid: uuidv4(),
    name: file.name,
    percent: 50,
    status: 'uploading',
  };

  const formData = new FormData();
  formData.append('file', file);

  dispatch(startUpload());
  dispatch(addOnFileList(newItemFile));

  return sendFile<NomadaResp>(formData)
      .then(nomadaResp => {
        dispatch(successUpload(nomadaResp));
        dispatch(editOnFileList({ uid: newItemFile.uid, status: 'done' }));
      })
      .catch(err => {
        dispatch(editOnFileList({ uid: newItemFile.uid, status: 'error' }));
        dispatch(errorUpload(err));
      });
}

const initialState: SearchState = {
  image: '',
  nomadaResp: {
    actorName: '',
    error: '',
    userName: ''
  },
  fileList: [],
  ui: {
    isLoading: false,
    isError: false,
    errorMessage: ''
  }
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    startUpload: (state) => {
      state.ui.isLoading = true;
      state.nomadaResp = initialState.nomadaResp
    },
    addOnFileList: (state, action: PayloadAction<UploadFile<any>>) => {
      state.fileList = [...state.fileList, action.payload];
    },
    editOnFileList: (state, action: PayloadAction<{ uid: string, status: UploadFileStatus }>) => {
      state.fileList = state.fileList.map(item => 
        item.uid !== action.payload.uid ? item : ({
        ...item,
        percent: 100,
        status: action.payload.status
      }))
    },
    removeOnFileList: (state, action) => {
      state.fileList = state.fileList.filter(item => item.uid !== action.payload)
    },
    successUpload: (state, action: PayloadAction<NomadaResp>) => {
      state.ui.isLoading = false;
      state.nomadaResp = action.payload;
    },
    errorUpload: (state, action: PayloadAction<string>) => {
      state.ui.isLoading = false;
      state.ui.isError = true;
      state.ui.errorMessage = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    }
  },
});

export const { startUpload, successUpload, errorUpload, addOnFileList, editOnFileList, removeOnFileList, setImage } = searchSlice.actions

export default searchSlice.reducer;
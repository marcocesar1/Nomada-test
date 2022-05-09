import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { UploadFile, UploadFileStatus } from 'antd/lib/upload/interface';
import { NomadaResp, SearchState } from '../../interfaces'
import { sendFile } from '../../services/api';
import { RootState } from '../store';

export const whoIs = (file: File) => async (dispatch: Dispatch, getState: () => RootState) => {

  const fileList = getState().search.fileList;

  const newItemFile: UploadFile<any> = {
    uid: (fileList.length + 1).toString(),
    name: file.name,
    percent: 50,
    status: 'uploading',
  };

  const formData = new FormData();
  formData.append('file', file);

  dispatch(startUpload());
  dispatch(addOnFileList(newItemFile));

  try {
    const nomadaResp = await sendFile<NomadaResp>(formData);

    dispatch(successUpload(nomadaResp));
    dispatch(editOnFileList({ uid: newItemFile.uid, status: 'done' }));
  } catch (error) {
    dispatch(editOnFileList({ uid: newItemFile.uid, status: 'error' }));
    dispatch(errorUpload(error as string));
  }
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
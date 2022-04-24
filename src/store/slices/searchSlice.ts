import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { UploadFile } from 'antd/lib/upload/interface';
import { NomadaResp, StateSearch } from '../../interfaces'
import { sendFile } from '../../services/api';
import { RootState } from '../store';

export const whoIs = (file: File) => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(startUpload());

  const formData = new FormData();
  formData.append('file', file);

  const fileList = getState().search.fileList

  const itemFileList: UploadFile<any> = {
    uid: (fileList.length + 1).toString(),
    name: file.name,
    percent: 50,
    status: 'uploading',
  };

  dispatch(addOnFileList(itemFileList));

  return sendFile<NomadaResp>(formData)
      .then(nomadaResp => {
        dispatch(
          successUpload({
            nomadaResp,
            uid: itemFileList.uid
          })
        );
      });
}

const initialState: StateSearch = {
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
    removeOnFileList: (state, action) => {
      state.fileList = state.fileList.filter(item => item.uid !== action.payload)
    },
    successUpload: (state, action: PayloadAction<{ nomadaResp: NomadaResp, uid: string }>) => {
      state.ui.isLoading = false;
      state.nomadaResp = action.payload.nomadaResp;
      state.fileList = state.fileList.map(item => 
                        item.uid !== action.payload.uid ? item : ({
                        ...item,
                        percent: 100,
                        status: 'done'
                      }))
    },
    errorUpload: (state, action: PayloadAction<string>) => {
      state.ui.isLoading = false;
    }
  },
});

export const { startUpload, successUpload, errorUpload, addOnFileList, removeOnFileList } = searchSlice.actions

export default searchSlice.reducer;
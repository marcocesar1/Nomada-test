import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { ActorState, IActors, IActor } from '../../interfaces';
import { searchPerson } from '../../services/api';

export const searchActor = (person: string) => async (dispatch: Dispatch) => {
  dispatch(startSearch());

  try {
    const resp = await searchPerson<IActors>(person);

    const actor = resp.results.find(item => item.known_for.length);

    if(actor){
      dispatch(successActor(actor));
    }else{
      dispatch(errorActor(`No se encontraron resultados para '${person}'`));
    }
  }catch(error) {
    dispatch(errorActor(error as string));
  }
}

const initialState: ActorState = {
  actor: {
    adult: false,
    gender: 0,
    id: 0,
    known_for: [],
    known_for_department: '',
    name: '',
    popularity: 0,
    profile_path: ''
  },
  ui: {
    isLoading: false,
    isError: false,
    errorMessage: ''
  }
}

export const detailSlice = createSlice({
  name: 'actor',
  initialState,
  reducers: {
    startSearch: (state) => {
      state.ui.isLoading = true;
      state.ui.isError = false;
      state.ui.errorMessage = '';
    },
    successActor: (state, action: PayloadAction<IActor>) => {
      state.ui.isLoading = false;
      state.actor = action.payload;
    },
    errorActor: (state, action: PayloadAction<string>) => {
      state.ui.isLoading = false;
      state.ui.isError = true;
      state.ui.errorMessage = action.payload;
    }
  }
});

export const { startSearch, successActor, errorActor } = detailSlice.actions

export default detailSlice.reducer
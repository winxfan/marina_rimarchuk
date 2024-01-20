import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface GeneralState {
  breadcrumbTitle: string | undefined;
}

const initialState: GeneralState = {
  breadcrumbTitle: undefined
}

// export const fetchLogin = createAsyncThunk('admin/fetchLogin', async (params: {}) => {
//   const {body} = await fetch('/admin/login', params)
//   console.log({body})
//   return body
// })

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setBreadcrumbTitle (state, action: PayloadAction<string>) {
      state.breadcrumbTitle = action.payload
    },
  }
})

export const {setBreadcrumbTitle} = generalSlice.actions

export default generalSlice.reducer

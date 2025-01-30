import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IPerson {
   id: string;
   email: string;
   firstName: string;
   lastName: string;
   completedProfile: boolean;
}

export interface initialStateInterface {
   person: IPerson | null;
}
const ProfileReduce: CaseReducer<
   initialStateInterface,
   PayloadAction<IPerson>
> = (state, action) => {
   state.person = action.payload;
};
const initialState: initialStateInterface = {
   person: null
};

const profileSlice = createSlice({
   name: 'profileSlice',
   initialState,
   reducers: { ProfileReduce }
});

export const { ProfileReduce: profileReduce } = profileSlice.actions;

export default profileSlice.reducer;

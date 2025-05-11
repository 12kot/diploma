import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EUserRole, IUser } from 'features';
import { usersApi } from 'store/api';

type IUserSlice = IUser;

const initialState: IUserSlice = {
  id: 0,
  name: '',
  email: '',
  rating: 0,
  enabled: true,
  firstName: '',
  lastName: '',
  phoneNumber: '',
  about: '',
  transportations: null,
  payments: null,
  role: EUserRole?.Driver,
  roles: []
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    editUserInfo: (state, action: PayloadAction<Partial<IUserSlice> | null>) => {
      Object.assign(state, action.payload || initialState);
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(usersApi.endpoints.editUser.matchFulfilled, (state, action) => {
      Object.assign(state, action.payload);
    });
  },
});

export const { editUserInfo } = userSlice.actions;

export default userSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import URLManager from '../../networkLayer/URLManager';
import { Alert } from 'react-native';
import { signUpRequestType } from '../../networkLayer/Modals';


export const doLogin = createAsyncThunk(
    'login/doLogin',
    async ({ email, password }: { email: string, password: string }) => {
        try {
            let urlManager = new URLManager();
            return urlManager
                .login({ email, password })
                .then(res => {
                    console.log(JSON.stringify(res));
                    // Define the type or model in promise to get the desired response
                    return res.json() as Promise<any>;
                })
                .then(res => {
                    return res;
                    // if (res.status == 200) {
                    //   return res;
                    // } else {
                    //   Alert.alert('Error', res.message);
                    // }
                })
                .catch(e => {
                    Alert.alert(e.name, e.message);
                    return e.response;
                })
                .finally(() => { });
        } catch (error) {
            Alert.alert('Error');
        }
    },
);
export const doSignUp = createAsyncThunk(
    'login/doSignUp',
    async ({ email, password, first_name, last_name }: { email: string, password: string, first_name: string, last_name: string }) => {
        try {
            const body: signUpRequestType = {
                first_name, last_name, email, password
            }
            let urlManager = new URLManager();
            return urlManager
                .signUp(body)
                .then(res => {
                    console.log(JSON.stringify(res));
                    // Define the type or model in promise to get the desired response
                    return res.json() as Promise<any>;
                })
                .then(res => {
                    return res;
                    // if (res.status == 200) {
                    //   return res;
                    // } else {
                    //   Alert.alert('Error', res.message);
                    // }
                })
                .catch(e => {
                    Alert.alert(e.name, e.message);
                    return e.response;
                })
                .finally(() => { });
        } catch (error) {
            Alert.alert('Error');
        }
    },
);

// Define a type for the slice state
interface UserState {
    email: string;
    password: string;
    first_name: string,
    last_name: string
}

// Define the initial state using that type
const initialState: UserState = {
    email: "",
    password: "",
    first_name: "",
    last_name: ""
}

export const loginSlice = createSlice({
    name: 'login',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(doLogin.pending, (state, action) => {
            console.log('doLogin method started');
        });
        builder.addCase(doLogin.fulfilled, (state, action) => {
            if (action?.payload) {
                state.email = action?.payload.email;
                state.password = action?.payload.password;
                state.first_name = action?.payload.first_name;
                state.last_name = action?.payload.last_name;
            }
            console.log(action.payload);
        });
        builder.addCase(doLogin.rejected, (state, action) => {
            Alert.alert('Error', 'something went wrong');
        });
        builder.addCase(doSignUp.pending, (state, action) => {
            console.log('doSignUp method started');
        });
        builder.addCase(doSignUp.fulfilled, (state, action) => {
            if (action?.payload) {
                state.email = action?.payload.email;
                state.password = action?.payload.password;
                state.first_name = action?.payload.first_name;
                state.last_name = action?.payload.last_name;
            }
            console.log(action.payload);
        });
        builder.addCase(doSignUp.rejected, (state, action) => {
            Alert.alert('Error', 'something went wrong');
        });
    },
});

export const { incrementByAmount } = loginSlice.actions;

export default loginSlice.reducer;

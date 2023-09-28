import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
//createasync асинхр задача


const API = 'http://localhost:8000/users';

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async ()=>{

        //get
        const res = await axios.get(API);

        console.log(res);

        return res.data;
    }
)

export  const getOneUser = createAsyncThunk(
    'users/getOneUser',
    async (userId) =>{
        const{data}= await axios.get(`${API}/${userId}`)
        return data;
    }
)

export const createUser = createAsyncThunk(
    'users/createUser',
    async ( newUsersObj, {dispatch}) =>{
        console.log('post'+newUsersObj)
        await axios.post(API,newUsersObj);
        //useeffect
        dispatch(getUsers());
    }
)

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null,
        oneUser: null
    },
    reducers:{
        clearOneUserState: (state)=>{
            state.oneUser = null
        }
    },
    //async = pending , fullfilled, rejected
    //builder запускает цепочку событий , получает getusers и проверяет статус по цепочке
    extraReducers:(builder)=>{
        builder
        .addCase(getUsers.pending,(state,action)=>{
            console.log("Pending");
            state.loading = true;
        })
        .addCase(getUsers.fulfilled,(state,action)=>{
            console.log("fullfilled");
            state.loading = false;
            state.users = action.payload;
        }).addCase(getUsers.rejected,(state,action)=>{
            console.log("rejected");
            state.loading = false;
        }).addCase(getOneUser.pending,(state)=>{
            state.loading = true;
        }).addCase(getOneUser.fulfilled, (state,action)=>{
            state.oneUser = action.payload
            state.loading = false
        })
    }
})


export const { clearOneUserState } = usersSlice.actions;
export default usersSlice.reducer;
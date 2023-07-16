import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './massages/massagesSlice'

const store = configureStore({
    reducer: {
        message: messagesReducer,
    },
});

export default store;
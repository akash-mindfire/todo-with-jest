import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

// const rootReducer = combineReducers({
//   todos: todoReducer,
// });

// export type RootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
const store = configureStore({
  reducer: {
    todo:todoReducer
  },
});

export default store;

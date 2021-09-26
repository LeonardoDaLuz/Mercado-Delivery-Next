import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';
import { combinePathWithQuery2 } from 'utils/combinePathWithQuery';
import { nestedPropertySeletor } from '/utils/nestedPropertySelector'

const initialState = {
    isFetching: false,
    result: 'none',
    data: {} //As propriedades __thumb correspondem ao thumbnail da propriedade, que será usado na interface em alguns casos.
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        loadCategoryStart: (state) => {
            state.isFetching = true;
        },
        loadCategorySuccess: (state, action) => {
            state.data = action.payload.data;
            state.isFetching = false;
            state.result = 'ok';
        },
        loadCategoryFailure: (state, action) => {
            state.isFetching = false;
            state.result = 'error';
        },
        renameCategoryStart: (state, action) => {
            nestedPropertySeletor(state.data, action.fieldToRename).renameTo(action.newName);
        },
        renameCategorySuccess: (state, action) => {
            state.data = action.payload.data;
            state.isFetching = false;
            state.result = 'ok';
        },
        renameCategoryFailure: (state) => {
            state.isFetching = false;
            state.result = 'error';
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.categories,
            };
        },
    },
})

export const { loadCategoryStart, loadCategorySuccess, loadCategoryFailure, renameCategoryStart, renameCategorySuccess, renameCategoryFailure } = categoriesSlice.actions

export default categoriesSlice.reducer;


/* THUNKS: */



export const loadCategories = () => {
    return async (dispatch, getState) => {

        let url = `http://localhost:3001/GetCategories`;

        dispatch(loadCategoryStart({ url }));

        fetch(url)
            .then(body => body.json())
            .then(data => {
                dispatch(loadCategorySuccess({ url,  data: data.data }));
            })
            .catch(err => {
                dispatch(loadCategoryFailure({ url, error: err.message }))
            });
    }
}


export const categoryRename = (fieldToRename, newName) => {
    return async (dispatch, getState) => {

        //console.log(fieldToRename);

        let url = `http://localhost:3001/RenameCategory/${fieldToRename}/${newName}`;

        dispatch(renameCategoryStart({ url, fieldToRename, newName }));
        
        fetch(url)
            .then(body => body.json())
            .then(data => {
                dispatch(renameCategorySuccess({ url, data: data.data }));
            })
            .catch(err => {
                dispatch(renameCategoryFailure({ url, error: err.message }))
            });
    }
}

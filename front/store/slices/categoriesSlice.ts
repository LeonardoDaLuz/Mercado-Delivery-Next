import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '@store';
import { HYDRATE } from 'next-redux-wrapper';
import { combinePathWithQuery2 } from 'utils/combinePathWithQuery';
import { nestedPropertySeletor } from '@utils/nestedPropertySelector'

interface CategoriesState {
    isFetching: Boolean,
    result: string,
    data: CategoryTree
}

export interface CategoryTree {
    [key: string]: CategoryTree
}

interface PayloadType {
    fieldToRename?: string,
    newName?: string,
    data?: any,
    url?: string,
    error?: any
}
const initialState: CategoriesState = {
    isFetching: false,
    result: 'none',
    data: {} //As propriedades __thumb correspondem ao thumbnail da propriedade, que será usado na interface em alguns casos.
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        loadCategoryStart: (state, action: PayloadAction<PayloadType>) => {
            state.isFetching = true;
        },
        loadCategorySuccess: (state, action: PayloadAction<PayloadType>) => {
            state.data = action.payload.data;
            state.isFetching = false;
            state.result = 'ok';
        },
        loadCategoryFailure: (state, action: PayloadAction<PayloadType>) => {
            state.isFetching = false;
            state.result = 'error';
        },
        renameCategoryStart: (state, action: PayloadAction<PayloadType>) => {
            nestedPropertySeletor(state.data, action.payload.fieldToRename).renameTo(action.payload.newName);
        },
        renameCategorySuccess: (state, action: PayloadAction<PayloadType>) => {
            state.data = action.payload.data;
            state.isFetching = false;
            state.result = 'ok';
        },
        renameCategoryFailure: (state, action: PayloadAction<PayloadType>) => {
            state.isFetching = false;
            state.result = 'error';
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

            //return state;
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



export const loadCategories = (): AppThunk => {
    return async (dispatch, getState) => {

        let url = `http://localhost:3001/GetCategories`;

        dispatch(loadCategoryStart({ url }));

        const response = await fetch(url);

        try {
            const data = await response.json();
            dispatch(loadCategorySuccess({ url, data: data.data }));
        } catch (err: any) {
            dispatch(loadCategoryFailure({ url, error: err.message }))
        }   
    }
}


export const categoryRename = (fieldToRename: string, newName: string): AppThunk => {
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

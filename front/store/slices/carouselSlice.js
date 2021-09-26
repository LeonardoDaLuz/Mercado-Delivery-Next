import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';
import { combinePathWithQuery2 } from 'utils/combinePathWithQuery';
import { nestedPropertySeletor } from '/utils/nestedPropertySelector'

const initialState = {
    status: 'idle',
    images: [],
    waitingImageList: []
}

export const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        loadCarouselImagesStart: (state) => {
            state.status = 'loading';
        },
        loadCarouselImagesSuccess: (state, action) => {
            state.status = 'done';
            state.images = action.payload.data.images;
        },
        loadCarouselImagesFailure: (state) => {
            state.status = 'failure';
        },
        uploadCarouselImagesStart: (state) => {
            state.status = 'loading';
        },
        uploadCarouselimagesSuccess: (state, action) => {
            state.status = 'done';
            state.images = action.payload.data.images;
        },
        uploadCarouselImagesFailure: (state) => {
            state.status = 'failure';
        },
        removeCarouselImageStart: (state, action) => {
            state.status = 'deleting';
            //console.log(action);
            let deletingImage = state.images.find((image) => image._id == action.deleteImageId);
            deletingImage.status = 'deleting';
            state.deletionList = [...state.waitingImageList, action.deleteImageId];
        },
        removeCarouselImageSuccess: (state, action) => {
            state.deletionList = arrayRemove(state.deletionList, action.deleteImageId);
            state.status = state.deletionList.length === 0 ? 'done' : 'deleting';
            state.images = action.payload.images;
        },
        removeCarouselImageFailure: (state) => {
            state.status = 'failure';
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.carousel,
            };
        },
    },
})

export const {
    loadCarouselImagesStart,
    loadCarouselImagesSuccess,
    loadCarouselImagesFailure,
    uploadCarouselImagesStart,
    uploadCarouselimagesSuccess,
    uploadCarouselImagesFailure,
    removeCarouselImageStart,
    removeCarouselImageSuccess,
    removeCarouselImageFailure
} = carouselSlice.actions

export default carouselSlice.reducer;


/* THUNKS: */

export const carregarImagensCarousel = (id, quantidade) => {
    return async dispatch => {

        const url = 'http://localhost:3001/carousel/';

        dispatch(loadCarouselImagesStart({ url }));

        let response = await fetch(url, { method: 'GET' });
        if (response.ok) {
            let data = await response.json();
            dispatch(loadCarouselImagesSuccess({ data, url }));
        }
        else {
            dispatch(loadCarouselImagesFailure({ status: response.status, url }));
            console.error(response.status);
        }
    }
}

export const uploadImagensCarousel = (e) => {
    return async dispatch => {

        const url = 'http://localhost:3001/carousel/addImages';

        dispatch(uploadCarouselImagesStart({ url }));

        let files = e.target.files;

        const formData = new FormData();

        [...files].forEach((file, index) => formData.append('file' + index, file));

        const config = {
            method: 'POST',
            body: formData
        }

        let response = await fetch(url, config);
        if (response.ok) {
            let data = await response.json();
            dispatch(uploadCarouselimagesSuccess({ payload: data, url }));
        } else {
            dispatch({ type: UPLOAD_IMAGENS_CAROUSEL_FAILURE, payload: response.status, url });
            console.error(response.status);
        }
    }
}

export const removeImageCarousel = (waitingImageId) => {
    return async dispatch => {


        const url = 'http://localhost:3001/carousel/deleteImage/' + waitingImageId;

        dispatch(removeCarouselImageStart({ deleteImageId: waitingImageId, url }));

        const config = {
            method: 'DELETE',
        }

        let response = await fetch(url, config);
        if (response.ok) {
            let data = await response.json();
            dispatch(removeCarouselImageSuccess({ data, deleteImageId: waitingImageId, url }));
        } else {
            dispatch(removeCarouselImageFailure({ status: response.status, deleteImageId: waitingImageId, url }));
        }
    }
}

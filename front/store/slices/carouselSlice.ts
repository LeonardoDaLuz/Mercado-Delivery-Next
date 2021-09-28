import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '@store';
import { HYDRATE } from 'next-redux-wrapper';

interface CarouselState {
    status: 'IDLE' | 'LOADING' | 'DONE' | 'FAILURE' | 'DELETING',
    images: Image[],
    waitingImageList: any[],
    deletionList?: string[]
}

interface CarouselPayload {
    images?: Image[],
    url?: string,
    deleteImageId?: string,
    status?: number
}

interface Image {
    _id: string,
    path: string,
    status?: undefined | 'DELETING' | 'IDLE'
}

const initialState: CarouselState = {
    status: 'IDLE',
    images: [],
    waitingImageList: []
}


export const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        loadCarouselImagesStart: (state, action: PayloadAction<CarouselPayload>) => {
            state.status = 'LOADING';
        },
        loadCarouselImagesSuccess: (state, action: PayloadAction<CarouselPayload>) => {
            state.status = 'DONE';
            state.images = action.payload.images!;
        },
        loadCarouselImagesFailure: (state,action: PayloadAction<CarouselPayload>) => {
            state.status = 'FAILURE';
        },
        uploadCarouselImagesStart: (state,action: PayloadAction<CarouselPayload>) => {
            state.status = 'LOADING';
        },
        uploadCarouselimagesSuccess: (state, action: PayloadAction<CarouselPayload>) => {
            state.status = 'DONE';
            state.images = action.payload.images!;
        },
        uploadCarouselImagesFailure: (state, action: PayloadAction<CarouselPayload>) => {
            state.status = 'FAILURE';
        },
        removeCarouselImageStart: (state, action: PayloadAction<CarouselPayload>) => {
            state.status = 'DELETING';
            let deletingImage = state.images.find((image) => image._id == action.payload.deleteImageId);
            deletingImage!.status = 'DELETING';
            state.deletionList = [...state.waitingImageList, action.payload.deleteImageId];
        },
        removeCarouselImageSuccess: (state, action) => {

            state.deletionList = state.deletionList!.filter(id => id !== action.payload.deleteImageId);

            state.status = state.deletionList.length === 0 ? 'DONE' : 'DELETING';
            state.images = action.payload.images;
        },
        removeCarouselImageFailure: (state, action: PayloadAction<CarouselPayload>) => {
            state.status = 'FAILURE';
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

export const carregarImagensCarousel = (id: string, quantidade: string): AppThunk => {
    return async dispatch => {

        const url = 'http://localhost:3001/carousel/';

        dispatch(loadCarouselImagesStart({ url }));

        let response = await fetch(url, { method: 'GET' });
        if (response.ok) {
            let data = await response.json();
            dispatch(loadCarouselImagesSuccess({ images: data.images, url }));
        }
        else {
            dispatch(loadCarouselImagesFailure({ status: response.status, url }));
            console.error(response.status);
        }
    }
}

export const uploadImagensCarousel = (e: { target: { files: any}}): AppThunk => {
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
            dispatch(uploadCarouselimagesSuccess({ images: data.images, url }));
        } else {
            dispatch(uploadCarouselImagesFailure({ status: response.status, url }));
            console.error(response.status);
        }
    }
}

export const removeImageCarousel = (waitingImageId: string) : AppThunk => {
    return async dispatch => {


        const url = 'http://localhost:3001/carousel/deleteImage/' + waitingImageId;

        dispatch(removeCarouselImageStart({ deleteImageId: waitingImageId, url }));

        const config = {
            method: 'DELETE',
        }

        let response = await fetch(url, config);
        if (response.ok) {
            let data = await response.json();
            dispatch(removeCarouselImageSuccess({ images: data.images, deleteImageId: waitingImageId, url }));
        } else {
            dispatch(removeCarouselImageFailure({ status: response.status, deleteImageId: waitingImageId, url }));
        }
    }
}

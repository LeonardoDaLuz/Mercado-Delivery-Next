export const waitForSeconds = function (seconds) {
    return new Promise((resolve, reject)=> setTimeout(()=>resolve(), seconds*1000));
};

export const waitForEndOfFrame = function () {
    return new Promise((resolve, reject)=> setTimeout(()=>resolve(), 16));
};

export default waitForSeconds;
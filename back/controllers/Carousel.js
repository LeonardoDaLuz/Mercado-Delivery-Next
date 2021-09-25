const formidable = require('formidable');
const ObjectId = require("mongodb").ObjectID;
const fs = require('fs');
const path = require('path');

class CarouselController {

    static async adicionaImagem(req, res, next) {
        const filePathList = await saveFilesFromRequisitionOnDisk(req, 'public/img/uploads/carousel/', Date.now());

        console.log('filepath list', filePathList);

        await saveFilePathsOnDb(filePathList);

        const imagelistFromDb = await getCarouselImagesFromDb();
        res.json({ images: imagelistFromDb })
            

    }

    static async obterImagens(req, res) {
        let listaImagens = await getCarouselImagesFromDb();

        res.json({ images: listaImagens })
    }

    static async deletarImagens(req, res, next) {
        let _id = new ObjectId(req.params.id);
        let image = await global.conn.collection("imagens_carrossel").findOneAndDelete({ _id });
        deleteFile("public/" + image.value.path);
        const imagelistFromDb = await CarouselController.obterImagens(req, res, next);
        res.json({images: imagelistFromDb})
    }
}

async function saveFilesFromRequisitionOnDisk(req, destination, sufix = '') {
    return new Promise((resolve, reject) => {

        const form = formidable();

        form.parse(req, (err, fields, files) => {

            let fileListToReturn = [];
            const keys = Object.keys(files);

            for (let key of keys) {
                let file = files[key];
                if (file.type.includes("image")) {

                    let oldPath = file.path;
                    //console.log(file);
                    let ext = path.extname(file.name);
                    let fileNameWithoutExt = file.name.replace(ext, '');
                    const newPath = `${destination}${fileNameWithoutExt}-${sufix}${ext}`;

                    fs.renameSync(oldPath, newPath);
                    fileListToReturn.push(newPath);
                } else {

                }
            }

            resolve(fileListToReturn);
        });
    });
}

async function getCarouselImagesFromDb() {
    return await global.conn.collection('imagens_carrossel').find({}).toArray();
}
function deleteFile(path) {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path, (err) => console.log(err));
    }
}

async function saveFilePathsOnDb(paths) {
    for (let path of paths) {
        path = path.replace("public/", "");
        await global.conn.collection('imagens_carrossel').insertOne({ path });
    }
}

module.exports = CarouselController;
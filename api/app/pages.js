const express = require("express");
const multer = require("multer");
const path = require("path");
const nanoid = require("nanoid");

const config = require("../config");


const Content = require("../models/Content");


const storage = multer.diskStorage({
    destination(req, file, cd){
        cd(null, config.uploadPath)
    },
    filename(req, file, cd){
        cd(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});


const router = express.Router();

const ucFirst = (str) =>{
    // только пустая строка в логическом контексте даст false
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
};

router.get("/:page", (req, res) => {

    let routeName = ucFirst(req.params.page);
    console.log(routeName);

    try {
        Content.find({page: routeName})
            .then((responce) => res.send(responce))
            .catch((err) => res.send(err).status(500));
    }
    catch (e){
        res.send({status: 'Error', message: 'wrong router'}).status(500);
    }

});
router.get("/", (req, res) => {
    Content.find({page: 'Home'})
            .then((responce) => res.send(responce))
            .catch((err) => res.send(err).status(500));
});


router.post("/:page", upload.single("image"), (req, res) => {
    const ContentData = req.body;

    let routeName = ucFirst(req.params.page);
    console.log(routeName);

    Content.updateOne({page : routeName}, req.body)
        .then(() => res.send(ContentData))
        .catch((e) => res.send(e).status(500));


});

module.exports = router;
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/botellas')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
/*   const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){
        req.fileValidationError = "Solo imágenes";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}

const upload =  multer({
    storage,
    fileFilter
}) */


var upload = multer({ storage: storage })

module.exports = upload;
const multer = require('multer');

const extractMimeType = (mimeType) => mimeType.split('/').pop();

var storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads');
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}.${extractMimeType(file.mimetype)}`);
    },
});

var upload = multer({ storage });

module.exports = upload;
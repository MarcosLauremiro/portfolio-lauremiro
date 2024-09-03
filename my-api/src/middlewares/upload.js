const multer = require('multer');
const path = require('path');

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {fileSize: 5 * 1024 * 1024}, // 5MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mineType = filetypes.test(file.mimetype);

    if (extname && mineType) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  }
})

module.exports = upload;

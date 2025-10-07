//  import multer from 'multer';


// const upload = multer({storage: multer.diskStorage({})})

//  export default upload;

import multer from "multer";
import path from "path";

// Set storage to D:\QUICKBLOG\client\src\assets
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "D:/QUICKBLOG/client/src/assets"); // your folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique name
  },
});

const upload = multer({ storage });

export default upload;


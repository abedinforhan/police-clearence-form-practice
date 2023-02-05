const express = require('express')
const app = express()
const multer = require('multer')
const path = require('path')
const { extname } = require('path');
const fileUpload = (destination) => {
	const stroage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, destination)
		},
		filename: function (req, file, cb) {
			cb(null, Date.now() + path.extname(file.originalname))
		}
	})
	return multer({
		storage: stroage,
		limits: { fileSize: 1000000 },
		fileFilter: function (req, file, cb) {
			fileType(file, cb)
		}
	})
}
function fileType(file, cb) {
	const fileType = /jpeg|jpg|png|gif/;
	const extname = fileType.test(path.extname(file.originalname).toLowerCase());
	const mimetype = fileType.test(file.mimetype);
	if (extname && mimetype) {
		return cb(null, true)
	}
	else {
		cb('Only Image')
	}
}

module.exports = { fileUpload };










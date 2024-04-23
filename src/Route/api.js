const express = require('express')
const CrudController = require('../Controller/CrudController')

const router = express.Router();

router.post("/Create",CrudController.Create)
router.get("/Read",CrudController.Read)
router.get("/ReadById/:id",CrudController.ReadById)
router.post("/Update/:id",CrudController.Update)
router.get("/Delete/:id",CrudController.Delete)





module.exports=router;
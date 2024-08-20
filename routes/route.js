const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// schema routes
const { createSchema, updateSchema, deleteSchema, getSchema, getAllSchema } = require('../controllers/schema');
// 
router.post("/schema/create", checkAuthorizationHeaders,authorizeUser("createschema") ,createSchema);
router.put("/schema/update/:id", checkAuthorizationHeaders,authorizeUser("updateschema"), updateSchema);
router.delete("/schema/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteschema"), deleteSchema);
router.get("/schema/get/:id", checkAuthorizationHeaders, authorizeUser("readschema"), getSchema);
router.get("/schema/getAll", checkAuthorizationHeaders, authorizeUser("readschema"), getAllSchema);

  
module.exports = router;

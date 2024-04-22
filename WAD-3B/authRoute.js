import express from "express";
import { registerController, loginController, testController, forgotPasswordController, updateProfileController, getAllOrdersController, getOrdersController, orderStatusController } from "../controller/authContoller.js"
import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";
//router object
const router = express.Router()

//routing
//register || method post 
router.post('/register', registerController)
//login//post

router.post('/login', loginController)
//forgot pass
router.post('/forgot-password', forgotPasswordController)


router.get("/test", requireSignIn, isAdmin, testController);

router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});


router.put("/profile", requireSignIn, updateProfileController);


router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
);

export default router;
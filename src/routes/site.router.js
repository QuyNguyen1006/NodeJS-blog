const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteControllers');

router.use('/gioi-thieu', siteController.showIntro);
router.use('/lien-he', siteController.showContact);
// policy
router.use('/chinh-sach-ban-hang', siteController.showPolicySell);
router.use('/chinh-sach-bao-hanh', siteController.showPolicyWarranty);
router.use('/chinh-sach-hoat-dong', siteController.showPolicyOperate);
router.use('/chinh-sach-giam-gia-tri-an', siteController.showPolicyDiscount);
//

// Customer Support
router.use('/huong-dan-dat-hang', siteController.showOrderSupport);
router.use('/mua-hang-thanh-toan', siteController.showSellPayment);
router.use('/phuong-thuc-van-chuyen', siteController.showShippingMethod);
router.use('/giai-quyet-su-co', siteController.showHandleProblems);

//
router.use('/search', siteController.search);
router.use('/', siteController.index);
module.exports = router;

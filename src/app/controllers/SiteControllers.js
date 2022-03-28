const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // GET /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    title: 'Nội thất Quý Thiện',
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    //  GET / search
    search(req, res) {
        res.render('search');
    }
    showContact(req, res) {
        res.render('contact', { title: 'Liên hệ' });
    }

    showIntro(req, res) {
        res.render('intro', { title: 'Giới thiệu' });
    }

    //render policy
    showPolicySell(rep, res) {
        res.render('policy/policySell', { title: 'Chính sách bán hàng' });
    }
    showPolicyWarranty(rep, res) {
        res.render('policy/policyWarranty', { title: 'Chính sách bán hàng' });
    }
    showPolicyOperate(rep, res) {
        res.render('policy/policyOperate', { title: 'Chính sách hoạt động' });
    }
    showPolicyDiscount(rep, res) {
        res.render('policy/policyDiscount', {
            title: 'Chính sách giảm giá - tri ân',
        });
    }
    //

    // render customer support
    showSellPayment(req, res) {
        res.render('customerSupport/sellPayment', {
            title: 'Mua hàng - Thanh toán',
        });
    }
    showOrderSupport(req, res) {
        res.render('customerSupport/orderSupport', {
            title: 'Hướng dẫn đặt hàng',
        });
    }
    showHandleProblems(req, res) {
        res.render('customerSupport/handleProblems', {
            title: 'Giải quyết sự cố',
        });
    }
    showShippingMethod(req, res) {
        res.render('customerSupport/shippingMethod', {
            title: 'Phương thức vận chuyển',
        });
    }
}

module.exports = new SiteController();

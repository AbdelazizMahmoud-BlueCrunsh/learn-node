module.exports.insert = function (req) {
    console.log(req.body.firstName)
    if (!req.body.firstName) {
        return false;
    } else if (!req.body.email) {
        return false;
    } else if (!req.body.password) {
        return false;
    } else if (!req.body.lastName) {
        return false;
    }
    return true
}

module.exports.loginValidation = function (req) {
    if (!req.body.email) {
        return false;
    } else if (!req.body.password) {
        return false;
    }
    return true
}
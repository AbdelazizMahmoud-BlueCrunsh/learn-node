module.exports.insert=function (req){
    console.log(req.body.firstName)
    if (!req.body.firstName) {
        return false;
    }
    else if (!req.body.lastName) {
        return false;
    }
    return  true
}
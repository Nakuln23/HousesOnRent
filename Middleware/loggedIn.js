const loggedIn = (req,res,next) => {
    if(req.isAuthenticated()) {
        next()
    } else{
        res.send("Not Authorised")
    }
}

module.exports = loggedIn
const getIndex = (req , res) => {
    res.render ("Index");
};

const getSignupPage = (req, res) => {
    res.render ("Signup");
}

module.exports = {getIndex,getSignupPage}
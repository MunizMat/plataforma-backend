 const tokenController = {
    store: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (error) {
            console.log(error);
            const arrayErros = error.errors.map((err) =>  {return { field: err.path, message: err.message}});
            res.json(arrayErros);
        }
    }
}

module.exports = tokenController;
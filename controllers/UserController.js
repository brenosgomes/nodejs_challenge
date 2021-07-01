const User = require("../models/User.js");
const { put } = require("../routes.js");

module.exports = {
    async get(req, res){
        const users = await User.findAll();

        return res.status(200).json(users);
    },

    async delete(req, res){
        const id = req.params.id
        if(user = await User.findByPk(id))
            user.destroy();
        else
            return res.status(400).json({message: "Usuario não encontrado"});

        return res.status(204).json();
    },

    async post(req, res){
        const { name, email, localization, avatar, username, bio } = req.body;

        const user = await User.create({name, email, localization, avatar, username, bio});

        return res.status(201).json(user);
    },

    async put(req, res){
        const id = req.params.id;
        const newUser = req.body;
        await User.update(newUser, { where: { id } })

        return res.status(204).json();
    }
}
const Follower = require("../models/Follower.js");
const Following = require("../models/Following.js");
const Repositorie = require("../models/Repositorie.js");
const User = require("../models/User.js");

module.exports = {
    async get(req, res){
        try{    
            const users = await User.findAll();
            return res.status(200).json(users);
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    },

    async getById(req, res){
        const name = req.query.name; 
        try{     
            const user = await User.findOne({where: {name}},
            {
                include:[{model: Repositorie, required: true}, 
                {model: Follower, required: true}, 
                {model: Following, required: true}]
            })
            return res.status(200).json(user);
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    },

    async delete(req, res){
        const id = req.params.id

        try{    
            if(user = await User.findByPk(id))
                user.destroy();
            else
                return res.status(400).json({message: "Usuario não encontrado"});
            return res.status(204).json();
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    },

    async post(req, res){
        const { name, email, localization, avatar, username, bio } = req.body;
        try{   
            const checkUser = await User.findOne({where: {email}})
            if(checkUser) return res.status(400).json({message: "Usuario já cadastrado"});
            
            const user = await User.create({name, email, localization, avatar, username, bio});
            return res.status(201).json(user);
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    },

    async put(req, res){
        const id = req.params.id;
        const newUser = req.body;
        try{
            await User.update(newUser, { where: { id } })
            return res.status(204).json();
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    }
}
const Repositorie = require("../models/Repositorie.js");
const RepositorieStar = require("../models/RepositorieStar.js");
const User = require("../models/User.js")

module.exports = {
    async get(req, res){
        try{    
            const repositories = await Repositorie.findAll();
            return res.status(200).json(repositories);
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    },

    async getById(req, res){
        const id = req.params.id;
        try{    const repositorie = await Repositorie.findByPk(id, {include: {model: RepositorieStar}})
            return res.status(200).json(repositorie);
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    },

    async delete(req, res){
        const id = req.params.id
        try{    
            if(repositorie = await Repositorie.findByPk(id)) repositorie.destroy();
            else return res.status(400).json({message: "Repositorio não encontrado"});
            return res.status(204).json();
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    },

    async post(req, res){
        const { name, user_id, description, public } = req.body;
        try{
            const user = await User.findOne({where: {id: user_id}})
            const slug = name + '-' + user.dataValues.name;
            const repositorie = await Repositorie.create({name, user_id, description, public, slug});
            return res.status(201).json(repositorie);
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    },

    async put(req, res){
        const id = req.params.id;
        const newRepositorie = req.body;
        try{    await Repositorie.update(newRepositorie, { where: { id } })
            return res.status(204).json();
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    }
}
const RepositorieStar = require("../models/RepositorieStar.js");

module.exports = {
    async get(req, res){
        try{
            const repositorieStar = await RepositorieStar.findAll();
            return res.status(200).json(repositorieStar);
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    },

    async getById(req, res){
        const id = req.params.id;
        try{    
            const repositorieStar = await RepositorieStar.findByPk(id)
            return res.status(200).json(repositorieStar);
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    },

    async delete(req, res){
        const id = req.params.id
        try{    
            if(user = await RepositorieStar.findByPk(id))
                user.destroy();
            else
                return res.status(400).json({message: "Estrela não encontrada"});
            return res.status(204).json();
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    },

    async post(req, res){
        const { user_id, repositorie_id } = req.body;

        try{    
            const user = await RepositorieStar.create({user_id, repositorie_id});
            return res.status(201).json(user);
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    }
}
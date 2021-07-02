const Follower = require("../models/Follower.js");
const Following = require("../models/Following.js");

module.exports = {
    async get(req, res){
        try{   
            const followings = await Following.findAll();
            return res.status(200).json(followings);
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    },

    async getById(req, res){
        const id = req.params.id;
        try{    
            const following = await Following.findByPk(id);
            return res.status(200).json(following);
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    },

    async delete(req, res){
        const id = req.params.id
        try{    
            if(following = await Following.findByPk(id))
                following.destroy();
            else
                return res.status(400).json({message: "Seguidor não encontrado"});
            return res.status(204).json();
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    },

    async post(req, res){
        const { following, user_id } = req.body;
        try{
            await Follower.create({follower:user_id, user_id: following})
            const follow = await Following.create({following, user_id});
            return res.status(201).json(follow);
        }catch(msg){
            return res.status(500).json({message: msg, statusCode: 500});
        }
    }
}
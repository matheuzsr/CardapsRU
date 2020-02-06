const axios= require('axios');
const Cardapio= require('../models/Cardapio');

module.exports={


    async store(req,resp){

        const { idCardapio, entrada, pratoProteico, opcao, acompanhamento, guarnicao, sobremesa}= req.body;

        const cardapioExists = await Cardapio.findOne({idCardapio: idCardapio});

        if(cardapioExists){
            console.log(`Cardapio Existente ${idCardapio}`);
            return resp.json(cardapioExists);
        }

        
        
        const cardapio= await Cardapio.create({
            idCardapio,
            entrada, 
            pratoProteico,
            opcao,
            acompanhamento,
            guarnicao,
            sobremesa,  
        })

        return resp.json(cardapio);
    } 
};
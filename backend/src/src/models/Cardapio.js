const { Schema, model } = require('mongoose')

const CardapioSchema = new Schema({
    
    idCardapio: String,
    entrada:String, 
    pratoProteico:String,
    opcao: String,
    acompanhamento:String,
    guarnicao: String,
    sobremesa:String,  

},{
    timestamps: true
})

module.exports = model('Cardapio', CardapioSchema)
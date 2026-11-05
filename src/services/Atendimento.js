import model from "../models/Atendimento.js"
class ServiceAtendimento{
    async Buscar(){
        return model.findAll();
    }
    
    async BuscarId(id){
        if(!id || isNaN(id)){
            throw new Error("não identificado")
        }
        return model.findByPk(id);
    }

    async Criar(dia, hora, valor,concluído){

        await model.create(dia,hora,valor,concluído);
    }

    async Alterar(id,dia,hora,valor){
        if(!id || isNaN(id) || !dia){
            throw new Error("não identificado, insira os dados corretos")
        }
        const modelId= await model.findByPk(id);

        modelId.dia=dia;
        modelId.hora=hora;
        modelId.valor=valor;

        await modelId.save()
    }

    async AlterarStatus(id,concluído){
        if(!id || isNaN(id)){
            throw new Error("não identificado, insira os dados corretos")
        }
        const modelId= await model.findByPk(id);

        modelId.concluído= !concluído;

        await modelId.save()
    }

    async Deletar(id){
        if(!id || isNaN(id)){
            throw new Error("não identificado")
        }
        const modelId= await model.findByPk(id);
        await modelId.destroy()
    }
}

export default new ServiceAtendimento();
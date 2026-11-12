import model from "../models/Clientes.js"
class ServiceClientes{
    async Buscar(){
        return model.findAll();
    }
    async BuscarId(id){
        if(!id || isNaN(id)){
            throw new Error("não identificado")
        }
        return model.findByPk(id);
    }
    async Criar(nome, email, senha){

        await model.create({nome,email,senha});
    }
    async Alterar(id,nome,email,senha){
        if(!id || isNaN(id) || !nome){
            throw new Error("não identificado, insira os dados corretos")
        }
        const modelId= await model.findByPk(id);

        modelId.nome=nome;
        modelId.email=email;
        modelId.senha=senha;

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

export default new ServiceClientes();
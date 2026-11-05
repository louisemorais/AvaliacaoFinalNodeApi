import service from "../services/Clientes.js"

class ControllerClientes{
    async Buscar(req,res){
        try{
            const cliente= await service.Buscar();
            res.send({cliente})
        }catch(e){
            res.send({message: e.message})
        }
    }
    async BuscarId(req,res){
        try{
            const id= req.param.id;
            const cliente = service.BuscarId(id);
            res.send({cliente})
        }catch(e){
            res.send({message: e.message})
        }
    }
    async Criar(req,res){
        try{
            const {nome, email,senha}= req.body
            await service.Criar(nome,email,senha)
            res.send({message:"criado com sucesso"})
        }catch(e){
            res.send({message: e.message})
        }
    }
    async Alterar(req,res){
        try{
            const id= req.param.id;
            const {nome, email,senha}= req.body
            await service.Alterar(id,nome,email,senha)
            res.send({message:"alterado com sucesso"})
        }catch(e){
            res.send({message: e.message})
        }
    }
    async Deletar(req,res){
        try{
            const id= req.param.id;
            await service.Deletar(id)
            res.send({message: "deletado com sucesso"})
        }catch(e){
            res.send({message: e.message})
        }
    }
}

export default new ControllerClientes();
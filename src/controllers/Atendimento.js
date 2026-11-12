import service from "../services/Atendimento.js"

class ControllerAtendimento{
    async Buscar(req,res){
        try{
            const atendimento= await service.Buscar();
            res.send({atendimento})
        }catch(e){
            res.send({message: e.message})
        }
    }

    async BuscarId(req,res){
        try{
            const id= req.params.id;
            const atendimento = service.BuscarId(id);
            res.send({atendimento})
        }catch(e){
            res.send({message: e.message})
        }
    }

    async AlterarStatus(req,res){
        try{
            const id= req.params.id;
            await service.AlterarStatus(id);
            res.send({message: "status alterado"})
        }catch(e){
            res.send({message: e.message})
        }
    }

    async Criar(req,res){
        try{
            const {dia,hora,valor,concluido}= req.body
            await service.Criar(dia,hora,valor,concluido)
            res.send({message:"criado com sucesso"})
        }catch(e){
            res.send({message: e.message})
        }
    }

    async Alterar(req,res){
        try{
            const id= req.params.id;
            const {dia,hora,valor}= req.body
            await service.Alterar(id,dia,hora,valor)
            res.send({message:"alterado com sucesso"})
        }catch(e){
            res.send({message: e.message})
        }
    }

    async Deletar(req,res){
        try{
            const id= req.params.id;
            await service.Deletar(id)
            res.send({message: "deletado com sucesso"})
        }catch(e){
            res.send({message: e.message})
        }
    }
}

export default new ControllerAtendimento();
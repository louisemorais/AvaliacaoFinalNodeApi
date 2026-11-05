import express from "express"
import controller from "../controllers/Atendimento.js"

const router= express.Router()

router.get("/buscarAtendimento",controller.Buscar )
router.get("/buscarIdAtendimento/:id",controller.BuscarId )
router.post("/criarAtendimento",controller.Criar )
router.put("/alterarAtendimento/:id",controller.Alterar )
router.put("/alterarStatus/:id",controller.AlterarStatus)
router.delete("/deletarAtendimento/:id",controller.Deletar )

export default router;
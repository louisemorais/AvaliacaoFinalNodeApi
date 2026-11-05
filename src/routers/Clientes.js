import express from "express"
import controller from "../controllers/Clientes.js"

const router= express.Router()

router.get("/buscar",controller.Buscar )
router.get("/buscarId/:id",controller.BuscarId )
router.post("/criar",controller.Criar )
router.put("/alterar/:id",controller.Alterar )
router.delete("/deletar/:id",controller.Deletar )

export default router;
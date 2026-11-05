import express from "express"
import database from "./src/configs/database.js"
import router from "./src/routers/Clientes.js"
import routerAtendimento from "./src/routers/Atendimento.js"

const app = express();

app.use(express.json());

app.use("/api",router,routerAtendimento)

database.db.sync({force:true}).then((_)=>{
    app.listen("3000",()=>{
        console.log("servidor rodando na porta 3000")
    });
})
.catch((e)=>{
    console.log(e)
})


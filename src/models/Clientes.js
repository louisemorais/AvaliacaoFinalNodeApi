import database from "../configs/database.js";

class ModelClientes{
    constructor(){
        this.model= database.db.define("Clientes",{
            id:{
                type:database.db.Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey:true
            },
            nome:{
                type:database.db.Sequelize.STRING,
            },
            email:{
                type:database.db.Sequelize.STRING,
            },
            senha:{
                type:database.db.Sequelize.STRING,
            }
        })
    }
}

export default new ModelClientes().model;
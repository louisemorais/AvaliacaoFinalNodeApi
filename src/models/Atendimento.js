import database from "../configs/database.js";

class ModelAtendimento{
    constructor(){
        this.model= database.db.define("Atendimentos",{
            id:{
                type:database.db.Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey:true
            },
            dia:{
                type:database.db.Sequelize.STRING,
            },
            hora:{
                type:database.db.Sequelize.STRING,
            },
            valor:{
                type:database.db.Sequelize.STRING,
            },
            concluido:{
                type:database.db.Sequelize.BOOLEAN
            }
        })
    }
}

export default new ModelAtendimento().model;
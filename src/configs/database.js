import { Sequelize } from "sequelize";

class Database{
    constructor(){
        this.init()
    }

    init(){
        this.db=new Sequelize({
            dialect:'postgres',
            username:'admin',
            password:'rVHqEYmo2a6q7YIC7tQVUsUey18w5eqf',
            database:'bancorenanapi',
            host:'dpg-dblsh8p5efls73am1ljg-a.oregon-postgres.render.com',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        })
    }
}

export default new Database();
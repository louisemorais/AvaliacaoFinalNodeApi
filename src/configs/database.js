import { Sequelize } from "sequelize";

class Database{
    constructor(){
        this.init()
    }

    init(){
        this.db=new Sequelize({
            dialect:'postgres',
            username:'admin',
            password:'Upq2GcTRxymilqEJNlAnlK2fArQmrvOi',
            database:'bancorenanapi_or72',
            host:'dpg-dbqg3gajnfac738jh8f0-a.oregon-postgres.render.com',
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
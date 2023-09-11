const {Pool}=require("pg");
const pool=new Pool(
    {
        user:"postgres",
        password:"",
        host:"localhost",
        port:2002,
        database:"GSVR"
    }
)
module.exports=Pool;
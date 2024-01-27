import pg from 'pg-promise'
const pgp = pg()
const cnstr = `postgresql://postgres:admin123@localhost:5432/api_nominaciones`; 
const db = pgp(cnstr);

db.connect()
    .then( ()=>{
        console.log("Conexion Exitosa");
    } )
    .catch( (err)=>{

        console.log(`Error de conexion ${err}`)
    } )

export { db }
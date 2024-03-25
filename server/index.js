const express = require ('express'); /* para crear servidor */
const stripe = require ('stripe'); /* para comunicarme con stripe */
const cors = require ('cors'); /* para comunicar servidores frontend y backend */

const app = express (); /* aplicacion de backend */

app.listen(3001, ()=>{
    console.log('Server on port', 3001)
})
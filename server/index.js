import express from 'express'; /* para crear servidor */
import stripe from 'stripe'; /* para comunicarme con stripe */
import cors from 'cors' /* para comunicar servidores frontend y backend */

const app = express (); /* aplicacion de backend */

app.listen(3001, ()=>{
    console.log('Server on port', 3001)
})
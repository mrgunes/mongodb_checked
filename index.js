const express = require('express')
const app = express()
const port = 3000


app.set

const isAuth = require('./helpers/isAuth')
app.use('./about',isAuth);



//GET POST PUT DELETE ----------> ALL
app.get('/', (req, res) => res.send('Hello World!'))

const contact = require('./routers/contact')
app.use('/api/',contact)

const about = require('./routers/about')
app.use('/',about)

const user = require('./routers/user')
app.use('/',user)

app.use(()=>)




app.listen(port, () => console.log(`Example app listening on port port!`))

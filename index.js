  const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const frutas = ['abacate', 'uva', 'morango']

app.get('/:index', (req, res) => {
   const { index} = req.params
   return res.json(frutas[index])

})
app.get('/', (req,res) => {
    return res.json(frutas)
})
app.post("/", (req,res) => {
    const {fruta } = req.body
   frutas.push(fruta)
   return res.json(frutas)
})
app.put('/:index',(req,res) => {
    const { index } = req.params
   const {fruta} = req.body

   frutas[index] = fruta

    return res.json(frutas)
})
app.delete('/:index', (req,res) => {
    const {index} = req.params

    frutas.splice(index,1)

    return res.json({message: "fruta deletada"})

})

app.listen(port, () => console.log(`Example app listening on port port!`))
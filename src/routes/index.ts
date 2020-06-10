import { Router } from "express"

const routes = Router()

routes.get('/', (req,res) =>{
  res.json({msg:'Hello Anders...'})
})
routes.post('/users', (req,res) => {
  const { name,email } = req.body
  const user = {
    name,email
  }
  res.json(user)
})

export default routes

module.exports = {
 create: (req, res) => {

  const db = req.app.get('db');
  
  let { name, desc, price, img} = req.body.newProduct;
  db.create_product(name, desc, price, img)
  .then( ()=> res.status(200).send(req.body))
 },

 getOne: (req, res) => {
  const db = req.app.get('db');
  db.read_product(req.params.id)
  .then( ( product )=>res.status(200).send( product ))
  .catch( ()=>res.status(500).send()) // what exactly does a 500 mean?
 },
 getAll: (req, res) => {
  const db = req.app.get('db');

  db.read_products()
  .then( ( products )=>res.status(200).send( products ))
  .catch( ()=>res.status(500).send())

 },
 update: (req, res) => {
  const db = req.app.get('db');

  db.update_product(req.query.desc, req.params.id)
  .then( ()=>res.status(200).send())
  .catch( ()=>res.status(500).send())

 },

 delete: (req, res) => {
  const db = req.app.get('db');
  console.log(req.params.id)
  db.delete_product(req.params.id)
  .then( ()=>res.status(200).send())
  .catch( ()=>res.status(500).send())
 },

}
import React from 'react'
import Create from './Create'
import axios from 'axios'

export default class Home extends React.Component {
 constructor() {
  super()

  this.state = {
   products: [{}],
   newProduct: {},
   url: ''
  }
  this.createProduct = this.createProduct.bind( this );
  this.deleteProduct = this.createProduct.bind ( this );
 }
 componentDidMount() {
  axios.get('/api/products').then((res)=> {
   this.setState({ products: res.data})
  })
 }
 createProduct(newProduct) {
  console.log(Object.keys(newProduct));
  axios.post('/api/product', { newProduct }).then(res => {
   this.setState({ newProduct: res.data })
  })
 }
 deleteProduct(id) {
  axios.delete('/api/product/' + id).then(res => {
   this.setState({ products: res.data})
  })
 }
 render() {
  
 
  return (
  <div>
    <Create createProduct = {this.createProduct} 
            deleteProduct = {this.deleteProduct}
            products={this.state.products}
     />
  </div>
  )
 }
}
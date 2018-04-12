import React, {Component} from 'react'
import './create.css'

export default class Create extends Component {
constructor() {
 super()

  this.state = {
   name: '',
   desc: '',
   price: 0.00,
   img: ''

  }
}
updateName(text) {
 this.setState({name: text});
}
updateDesc(text) {
 this.setState({desc: text});
}
updatePrice(num) {
 this.setState({price: num});
}
updateImg(text) {
 this.setState({img: text});
}
showCreateProduct() {
 document.getElementById("edit").style.display = "block";
}
closeSpan() {
 document.getElementById("edit").style.display = "none";
}
addProduct() {
 let newObject = {
  name: this.state.name,
  desc: this.state.desc,
  price: this.state.price,
  img: this.state.img
 }
 console.log("About to create product with " + JSON.stringify(newObject));
 this.props.createProduct(newObject);
 this.closeSpan();
 this.setState({
   name: '',
   desc: '',
   price: 0,
   img: ''
});
}
render() {
  let display_products = this.props.products.map((item, i)=> {
    return (
     <div key={item + i}>
      Item: {item.name} <br/>
      Description: {item.description} <br/>
      Price: {item.price} <br/>
      <img height="40px" src={item.image_url} />
      <span className="close" onClick={()=>this.props.deleteProduct(item.id)}>&times;</span>
     </div>
    )
  })

 return (
  <div><button onClick={()=>this.showCreateProduct()} className="createProduct">Create Product</button>
   <div id="edit" className="createModalWrapper">
      <div className="createModalContent">
      <h6>Create Product</h6>
         <input className="inputBox" onChange={(e)=>(this.updateName(e.target.value))} placeholder="Product Name" type="text" value={this.state.name} />
         <input className="inputBox" onChange={(e)=>(this.updateDesc(e.target.value))} placeholder="Product Description" type="text" value={this.state.desc}/ >
         <input className="inputBox" onChange={(e)=>(this.updatePrice(e.target.value))} placeholder="Product Price ... "type="text" value={this.state.price}/>
         <input className="inputBox" onChange={(e)=>(this.updateImg(e.target.value))} placeholder="Product Image ... "type="text" value={this.state.img}/> 
         <button onClick={()=>this.addProduct()}>Add Product</button>
         <span onClick={()=>this.closeSpan()} className="close">&times;</span>
      
      </div>
      
   </div>
   {display_products}
  </div>
 )
}

}
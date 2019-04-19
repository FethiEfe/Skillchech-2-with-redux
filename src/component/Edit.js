import React, {Component} from "react";
import store from "../store";
import axios from "axios"
import {Link} from "react-router-dom"


class Edit extends Component{
    constructor(params){
        super(params);
        this.state = {
            products : store.getState().products,
            img: "",
            name: "",
            price: "",
           
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                products: store.getState().products,
            })
        })
    }

    editImgUrl = (e) => {
        this.setState({
            img: e.target.value
        })
    }
   
    editProductName= (e) => {
        this.setState({
            name: e.target.value
        })
    }

    editProductPrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    handleClick = () =>{
        axios
        .put(`/api/products/${this.state.products[this.props.match.params.id].id}`,{img:this.state.img, name:this.state.name, price:this.state.price })
        // .put(`/api/products/${this.state.products[this.props.match.params.id].id}`,{img:this.state.img, name:this.state.name, price:this.state.price })
       
    }

    render() {
       
        const {id} = this.props.match.params
        return(
                <div >
                    
                    <img src ={this.state.products[id].img} alt = ""/>
                    <br/>
                    <input onChange = {(e) => this.editImgUrl(e)} placeholder = "image url "></input>
                    <h3>{this.state.products[id].name}</h3>
                    <input onChange = {(e) => this.editProductName(e)} placeholder = "Product Name"></input>
                    <h3>{this.state.products[id].price}</h3>
                    <input onChange = {(e) => this.editProductPrice(e)}placeholder = "Price"></input>
                    <br />
                    <button>Cancel</button>
                    <br />
                    <Link to="/"><button onClick = {this.handleClick}>Save Changes</button></Link>
                
                </div>
            )
        
        
    }
}

export default Edit
import React,{Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
export default class addInventory extends Component{
    constructor(props){
        super(props);
        this.state = {
            image: "",
            productName: "",
            productPrice: ""
        }
    }

    imgChange = (e) => {
        e.preventDefault();
        
        this.setState({
            image: e.target.value
        })
    }

    productNameChange = (e) => {
        e.preventDefault();
        
        this.setState({
            productName: e.target.value
        })
    }
    productPriceChange = (e) => {
        e.preventDefault();
        
        this.setState({
            productPrice: e.target.value
        })
    }

    addInventory = () => {
        axios
        .post("/api/add", {name: this.state.productName, price:this.state.productPrice, img:this.state.image})  
    }

    render(){
        return(
                    <div>
                        
                        <label>Image URL:</label>
                        <input onChange = {(e) => this.imgChange(e)}></input>
                        <br />
                        <label>Product Name:</label>
                        <input onChange = {(e) => this.productNameChange(e)}></input>
                        <br />
                        <label>Price:</label>
                        <input onChange = {(e) => this.productPriceChange(e)}></input>
                        <br />
                        <button>Cancel</button>
                        <Link to = "/">
                                <button onClick = {this.addInventory}>Add to Inventory</button>
                        </Link>
                    
                    </div>
        )
    }
}


import React,{Component} from "react";
import axios from "axios"
import store from "../store";
import {GET_INVENTORY} from "../store"
import {Link} from "react-router-dom"

class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            products : store.getState().products
        }
    }
    componentDidMount(){
        axios
        .get("/api/products")
        .then(res => {
            store.dispatch({
                type: GET_INVENTORY,
                payload: res.data
            })
        })
        store.subscribe(() => {
            this.setState({
                products: store.getState().products
            })
        })
    }
    
    render(){
        const product = this.state.products.map((element,i) => {
            return(
                <div key = {i}>
                    <img src ={element.img} alt = ""/>
                    <h3>{element.name}</h3>
                    <h3>{element.price}</h3>
                    <br />
                    <button>Delete</button>
                    <br />
                    <Link to = {`/edit/${i}`} >
                        <button>Edit</button>
                    </Link>
                    <h5>----------------------------------------</h5>
                </div>
            )
        })
        return(
            <div>{product}</div>
        )
    }
}
export default Dashboard
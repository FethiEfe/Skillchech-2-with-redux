import React, {Component} from "react";
import {Link} from "react-router-dom"

class Header extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <Link to = "/">
                    <button>Dashboard</button>
                </Link>
                <Link to = "/add">
                    <button>Add Inventory</button>
                </Link>
            </div>
        )
    }
}
export default Header
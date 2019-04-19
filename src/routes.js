 import React,{Component} from "react"
 import {Switch,Route} from "react-router-dom"
 import addInventory from "./component/addInventory"
 import Dashboard from "./component/Dashboard";
import Edit from "./component/Edit";

 
         export default (
             

                <Switch>
                    <Route exact path = "/" component = {Dashboard} />
                    <Route path = "/add" component = {addInventory}/>
                    <Route path = "/edit/:id" component = {Edit}/>
                    <Route />
                </Switch>

             
             
         )
     
 
 


 

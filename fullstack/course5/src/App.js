import * as React from 'react';
import { Button } from '@mui/material';

import './App.css';
import {useState} from "react"

import Meat from "./components/Meat"
import Veg from "./components/Veg"
import Cooking from "./components/Cooking"
import Flavor from './components/Flavor';
import Carb from './components/Carb'


let iniState = {meat:[],veg:[],carb:[],cooking:[],flavor:[]}
const App = (props)=>{

    const [ingreObj, setIngreObj] = useState(iniState);
    const [recName, setRecName] = useState("")
    const [recipe,setRecipe] = useState("")
    const [clear,setClear] = useState(false)
    const addToReci =(ingreList)=>{
        let newObj = Object.assign({},ingreObj,{[ingreList.cate]:ingreList.list})
        setIngreObj(newObj)
    }
    const {meat,veg,carb,cooking,flavor} = ingreObj
    
    const handleSubmit = ()=> {
      
      let meatChoice = meat.length===2?`${meat[0]} & ${meat[1]}`:meat[0]
      setRecName(`Recipe for ${flavor} ${cooking}ed ${meatChoice} with ${veg} and ${carb}`)
      setRecipe(`
      1. Heat the pan
      2. Add oil
      3. Add {meat}
      4. Add {veg}`)
  
    }
    return (
      <div>
        <h1>Select Your Ingredients to generate a recipe</h1>
      <div className = "flex">

      <Meat addToReci={addToReci} clear = {clear}/>
      <Veg addToReci={addToReci} clear = {clear}/>
      <Cooking addToReci={addToReci} clear = {clear}/>
      <Carb addToReci={addToReci} clear = {clear}/>
      <Flavor addToReci={addToReci} clear = {clear}/>
      </div>

      <div className = "flex1">
        
        <ul>
        <li><label>Meat Max 2</label></li>
        {meat.map((ingre,ind)=><li key={`meat-${ind}`}>{ingre}</li>)}
        </ul>
        <ul>
        <li><label>Vegetable Max 1</label></li>
        {veg.map((ingre,ind)=><li key={`veg-${ind}`}>{ingre}</li>)}
        </ul>
        <ul>
        <li><label>Cooking Max 1</label></li>
        {cooking.map((ingre,ind)=><li key={`cooking-${ind}`}>{ingre}</li>)}
        </ul>
        <ul>
        <li><label>Carb Max 1</label></li>
        {carb.map((ingre,ind)=><li key={`carb-${ind}`}>{ingre}</li>)}
        </ul>
        <ul>
        <li><label>Flavor Max 1</label></li>
        {flavor.map((ingre,ind)=><li key={`flavor-${ind}`}>{ingre}</li>)}
        </ul>

      </div>
        <div className="flexButton">
       <Button variant="contained" onClick={handleSubmit} size="large">Generate Recipe</Button>
       <Button variant="contained" color = "warning" size="large" onClick = {()=> {
        setRecName("")
        setIngreObj(iniState)
        setRecipe("")
        setClear(true)
       }}>Clear All</Button>
        </div>
    <div>
      <p>{recName}</p>
      <p>{recipe}</p>
    </div>  
      </div>
    );

  
}



export default App;

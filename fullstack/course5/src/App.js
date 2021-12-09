import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
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
    const addToReci =(ingreList)=>{
        let newObj = Object.assign({},ingreObj,{[ingreList.cate]:ingreList.list})
        setIngreObj(newObj)
    }
    const {meat,veg,carb,cooking,flavor} = ingreObj
    
  
    return (
      <div>
        <h1>Select Your Ingredients to generate a recipe</h1>
      <div className = "flex">

      <Meat addToReci={addToReci}/>
      <Veg addToReci={addToReci}/>
      <Cooking addToReci={addToReci}/>
      <Carb addToReci={addToReci}/>
      <Flavor addToReci={addToReci}/>
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
       <Button variant="contained" onClick={()=>{
        let meatChoice = meat.length===2?`${meat[0]} & ${meat[1]}`:meat[0]
         setRecName(`Recipe for ${flavor} ${cooking}ed ${meatChoice} with ${veg[0]} and ${carb}`)
       }} size="large">Generate Recipe</Button>
       <Button variant="contained" color = "warning" size="large" onClick = {()=> {
        setRecName("")
        setIngreObj(iniState)


       }}>Clear All</Button>
    </div>

    <p>
    {recName}
    </p>

      </div>
    );

  
}



export default App;

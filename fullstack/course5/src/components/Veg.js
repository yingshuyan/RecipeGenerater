import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {useState,useEffect} from "react"

const veg = [{name:"broccoli"},{name:"greenpepper"},{name:"mushroom"}];

const Veg = ({addToReci,clear})=> {
  const [ingreList, setIngreList] = useState([]);
    const handleToggle = (value) => () => {
      const currentIndex = ingreList.indexOf(value);
      let newIngreList=[]
      if (currentIndex === -1) {
        newIngreList.push(value);
      } else {
        newIngreList = []
      }
      
      setIngreList(newIngreList);
      addToReci({cate:"veg",list:newIngreList})
    };

    useEffect(()=>{
      if(clear===true) {
        setIngreList([]);
        addToReci({cate:"veg",list:[]})
      }
    
    },[clear])

    return (<List>
    <label>Vegetable</label>
      {veg.map(({name:value},ind) => {
        const labelId = `checkbox-list-label-${ind}`;
        return (
          <ListItem
            key={`${value}-ind`}

            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={ingreList.indexOf(value)!==-1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>)

}
export default Veg
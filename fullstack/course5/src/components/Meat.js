import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


import {useState,useEffect} from "react"

const meat = [{name:"chicken"},{name:"beef"},{name:"pork"},{name:"shrimp"},{name:"egg"},{name:"toufu"}];

const Meat = ({addToReci,clear})=> {
  const [ingreList, setIngreList] = useState([]);

    const handleToggle = (value) => () => {
      const currentIndex = ingreList.indexOf(value);
      const newIngreList = [...ingreList];
      if (currentIndex === -1 && ingreList.length <2 ) {
        newIngreList.push(value);
      } 
      if (currentIndex!==-1) {
        newIngreList.splice(currentIndex,1)

      }
  
      setIngreList(newIngreList);
      addToReci({cate:"meat",list:newIngreList})
    };
useEffect(()=>{
  if(clear===true) {
    setIngreList([]);
    addToReci({cate:"meat",list:[]})
  }

},[clear])

    return (<List > 
      
      {/* sx={{bgcolor: 'background.paper' }} */}
    <label>Protein</label>
  
      {meat.map(({name:value},ind) => {
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

export default Meat
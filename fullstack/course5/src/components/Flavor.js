import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import {useState,useEffect} from "react"

const flavor = [{name:"spicy"},{name:"non-spicy"}];

const Flavor = ({addToReci,clear})=> {
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
      addToReci({cate:"flavor",list:newIngreList})
    };

    useEffect(()=>{
      if(clear===true) {
        setIngreList([]);
        addToReci({cate:"meat",list:[]})
      }
    
    },[clear])
    return (<List>
    <label>Flavor</label>
      {flavor.map(({name:value},ind) => {
        const labelId = `checkbox-list-label-${ind}`;
        return (
          <ListItem
            key={value}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={ingreList.indexOf(value) !== -1}
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

export default Flavor
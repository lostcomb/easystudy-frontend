import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


function Lists() {
    return (
        <List>
            <ListItem>
                <ListItemText primary="Item 1"/>
                <ListItemText primary="Item 2"/>
            </ListItem>
        </List>
    );
}

export default Lists;
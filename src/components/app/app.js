import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Button
} from "@material-ui/core";
import {Edit} from "@material-ui/icons";
import {Header, Form} from "./styles";

function getListItems() {
  return [0, 1, 2].map(value =>
      <AppListItem key={value} title={`List item ${value}`} />
  );
}

function AppListItem(props) {
  return (
    <ListItem button>
      <ListItemText primary={props.title} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit">
          <Edit />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

function App() {
  return (
    <Container>
      <Header>
        <Typography align="center" variant="h1">Easy Study</Typography>
      </Header>

      <Form>
        <TextField fullWidth placeholder="Enter list name..." variant="outlined" />
        <Button variant="outlined" color="primary">Create List</Button>
      </Form>

      <List>
        {getListItems()}
      </List>
    </Container>
  );
}

export default App;

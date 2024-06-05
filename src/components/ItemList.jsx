import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

// Component to display list of items
const ItemList = ({ items }) => {
  return (
    <Paper>
      <List>
        {items.map(item => (
          // Each list item
          <ListItem key={item.id} sx={{ borderBottom: '1px solid #ddd' }}>
          <ListItemText
            primary={item.title}
            secondary={item.body}
            primaryTypographyProps={{ variant: 'h6', color: 'primary' }}
          />
        </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ItemList;

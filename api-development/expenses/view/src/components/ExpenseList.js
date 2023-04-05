import React, { Fragment, useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteExpense } from '../utils';


const ExpenseList = ({ expenses, setExpenses, setId }) => {
  const [options, setOptions] = useState();

  const handleDelete = async (_id) => {
    await deleteExpense(_id);
    setExpenses(expenses.filter((expense) => expense.expense_id !== _id));
  };

  return (
    <List
      sx={{
        maxHeight: '60vh',
        overflow: 'auto',
      }}
    >
      {typeof expenses !== 'string' ? (
        expenses.map(({ expense_id, title, price }) => (
          <ListItem key={expense_id}>
            <ListItemButton
              variant="text"
              onClick={() =>
                setOptions(options === expense_id ? null : expense_id)
              }
            >
              <ListItemText primary={title} secondary={`$ ${price}`} />
              {options === expense_id && (
                <Fragment>
                  <IconButton
                    edge="end"
                    aria-label="update"
                    onClick={() => {
                      setId(expense_id);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(expense_id)}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </Fragment>
              )}
            </ListItemButton>
          </ListItem>
        ))
      ) : (
        <ListItem>
          <ListItemText primary={expenses} />
        </ListItem>
      )}
    </List>
  );
};

export default ExpenseList;

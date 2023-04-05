import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DatePicker from '@mui/lab/DatePicker';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputLabel, MenuItem, Select } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { createExpense, fetchExpense, fetchExpenses, formSetter, updateExpense } from '../utils';

const theme = createTheme();

const LogExpense = ({ handleClose, _id, setExpenses }) => {
  const [expense, setExpense] = useState({
    title: '',
    price: '',
    category: '',
    essential: false,
    created_at: new Date(),
  });
  const [err, setErr] = useState([]);

  const setExpenseData = async (id) => {
    const expenseById = await fetchExpense(id);
    setExpense(expenseById[0]);
  };

  useEffect(() => {
    if (_id) {
      setExpenseData(_id);
    }
  }, [_id]);

  const expenseListRefresh = async (res, date) => {
    if (res) {
      return setErr(res);
    }
    const expenseList = await fetchExpenses(date);
    setExpenses(expenseList);
    handleClose();
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('essential') === null) {
      data.set('essential', false);
    }
    if (_id) {
      formSetter(data, expense);
      const res = await updateExpense(_id, data);
      expenseListRefresh(res, expense.created_at);
    } else {
      data.set('created_at', new Date().toISOString());
      const res = await createExpense(data);
      expenseListRefresh(res);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AttachMoneyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {_id ? 'Update Expense' : 'New Expense'}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              onChange={(event) => {
                setExpense({ ...expense, title: event.target.value });
              }}
              margin="normal"
              value={expense.title}
              required
              fullWidth
              id="title"
              label="Expense Title"
              name="title"
              autoComplete="title"
              error={err.includes('title') && true}
              autoFocus
            />
            <div id="new-date">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of Expense"
                  value={expense.created_at}
                  minDate={new Date('2017-01-01')}
                  onChange={(newValue) => {
                    setExpense({ ...expense, created_at: newValue });
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>

            <TextField
              onChange={(event) => {
                setExpense({ ...expense, price: event.target.value });
              }}
              margin="normal"
              value={expense.price}
              required
              fullWidth
              name="price"
              label="Price ($)"
              type="number"
              id="price"
              autoComplete="price"
              error={err.includes('price') && true}
            />
            <InputLabel id="category">Expense Category</InputLabel>
            <Select
              fullWidth
              labelId="category"
              error={err.includes('category') && true}
              id="category"
              name="category"
              value={expense.category}
              label="Expense Category"
              onChange={(event) =>
                setExpense({ ...expense, category: event.target.value })
              }
            >
              <MenuItem value={'food/drinks'}>Food & Drinks</MenuItem>
              <MenuItem value={'shopping'}>Shopping</MenuItem>
              <MenuItem value={'housing'}>Housing</MenuItem>
              <MenuItem value={'transportation'}>Transportation</MenuItem>
              <MenuItem value={'life/entertainment'}>
                Life & Entertainment
              </MenuItem>
              <MenuItem value={'communication/pc'}>Communication / PC</MenuItem>
              <MenuItem value={'investments'}>Investments</MenuItem>
              <MenuItem value={'other'}>Other</MenuItem>
            </Select>
            <FormControlLabel
              control={
                <Checkbox
                  id="essential"
                  name="essential"
                  value={expense.essential}
                  checked={expense.essential}
                  onChange={() => {
                    setExpense({
                      ...expense,
                      essential: !expense.essential,
                    });
                  }}
                  color="primary"
                />
              }
              label="Essential"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {_id ? 'Update Expense' : 'New Expense'}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LogExpense;

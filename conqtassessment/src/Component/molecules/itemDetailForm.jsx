import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Checkbox,
  FormControlLabel,
  Card,
  CardContent,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6',
    },
  },
});

export default function ItemDetailForm() {
  const [showItem, setShowItem] = useState(true);
  const [showSupplier, setShowSupplier] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                bgcolor: 'white',
                mr: 1,
              }}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Inventory Management System
            </Typography>
            <Typography variant="body2" component="a" href="/" sx={{ color: 'white', textDecoration: 'none' }}>
              Home
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Box sx={{ mb: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showItem}
                  onChange={() => setShowItem(!showItem)}
                />
              }
              label="Item"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={showSupplier}
                  onChange={() => setShowSupplier(!showSupplier)}
                />
              }
              label="Supplier"
            />
          </Box>

          {showItem && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Item Details
              </Typography>
              <Card sx={{ bgcolor: '#F8F8FF' }}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        id="itemName"
                        label="Item Name"
                        variant="outlined"
                        placeholder="Enter item name"
                        helperText="Max 50 characters"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        id="quantity"
                        label="Quantity"
                        type="number"
                        variant="outlined"
                        placeholder="Enter quantity"
                        helperText="Numbers only"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        id="unitPrice"
                        label="Unit Price"
                        type="number"
                        variant="outlined"
                        placeholder="Enter unit price"
                        helperText="Numbers only (USD)"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        id="date"
                        label="Date of Submission"
                        type="date"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                        helperText="Format: MM/DD/YYYY"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          )}

          {showSupplier && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Supplier Details
              </Typography>
              <Card sx={{ bgcolor: '#F8F8FF' }}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        id="supplierName"
                        label="Supplier Name"
                        variant="outlined"
                        placeholder="Enter supplier name"
                        helperText="Max 50 characters"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        id="companyName"
                        label="Company Name"
                        variant="outlined"
                        placeholder="Enter Company name"
                        helperText="Max 50 characters"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel id="country-label">Country</InputLabel>
                        <Select
                          labelId="country-label"
                          id="country"
                          label="Country"
                          defaultValue="usa"
                        >
                          <MenuItem value="usa">USA</MenuItem>
                          <MenuItem value="canada">Canada</MenuItem>
                          <MenuItem value="mexico">Mexico</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel id="state-label">State</InputLabel>
                        <Select
                          labelId="state-label"
                          id="state"
                          label="State"
                          defaultValue="florida"
                        >
                          <MenuItem value="florida">Florida</MenuItem>
                          <MenuItem value="texas">Texas</MenuItem>
                          <MenuItem value="california">California</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        id="city"
                        label="City"
                        variant="outlined"
                        placeholder="Enter city"
                        helperText="Max 50 characters"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        id="email"
                        label="Email Address"
                        type="email"
                        variant="outlined"
                        placeholder="Enter email address"
                        helperText="Valid email format"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}
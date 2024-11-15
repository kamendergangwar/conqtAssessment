import React, { useState } from 'react'
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Container,
  Paper
} from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#f8f8ff',
  marginTop: theme.spacing(3)
}))

const FormField = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2)
}))

export default function Component() {
  const [formData, setFormData] = useState({
    supplierName: '',
    companyName: '',
    country: 'USA',
    state: 'Florida',
    city: '',
    emailAddress: '',
    emailAddress2: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Supplier Details
      </Typography>
      <StyledPaper elevation={1}>
        <Box component="form" noValidate>
          <Box display="grid" gridTemplateColumns="1fr 1fr" gap={3}>
            <FormField>
              <TextField
                fullWidth
                label="Supplier Name"
                name="supplierName"
                value={formData.supplierName}
                onChange={handleChange}
                placeholder="Enter supplier name"
                helperText="Max 50 characters"
              />
            </FormField>
            <FormField>
              <TextField
                fullWidth
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter Company name"
                helperText="Max 50 characters"
              />
            </FormField>
            <FormField>
              <FormControl fullWidth>
                <InputLabel>Country</InputLabel>
                <Select
                  label="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="Mexico">Mexico</MenuItem>
                </Select>
              </FormControl>
            </FormField>
            <FormField>
              <FormControl fullWidth>
                <InputLabel>State</InputLabel>
                <Select
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <MenuItem value="Florida">Florida</MenuItem>
                  <MenuItem value="California">California</MenuItem>
                  <MenuItem value="Texas">Texas</MenuItem>
                  <MenuItem value="New York">New York</MenuItem>
                </Select>
              </FormControl>
            </FormField>
            <FormField>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                helperText="Max 50 characters"
              />
            </FormField>
            <FormField>
              <TextField
                fullWidth
                label="Email Address"
                name="emailAddress"
                type="email"
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder="Enter email address"
                helperText="Valid email format"
              />
            </FormField>
            <FormField sx={{ gridColumn: '1 / -1' }}>
              <TextField
                fullWidth
                label="Email Address"
                name="emailAddress2"
                type="email"
                value={formData.emailAddress2}
                onChange={handleChange}
                placeholder="Enter email address"
                helperText="Valid email format"
              />
            </FormField>
          </Box>
        </Box>
      </StyledPaper>
    </Container>
  )
}
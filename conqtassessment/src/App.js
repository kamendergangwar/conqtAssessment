
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import './App.css';
import Header from './Component/organism/header';
import ItemDetailForm from './Component/molecules/itemDetailForm';
import SupplierDetailForm from './Component/molecules/SupplierDetailForm';

function App() {
  return (
    <div className="App">

      {/* <Header /> */}

    
      <Box>
        <ItemDetailForm />
        {/* <SupplierDetailForm /> */}

      </Box>
    </div>
  );
}

export default App;


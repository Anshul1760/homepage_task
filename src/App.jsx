import React from 'react';
import { CssBaseline, Container, Grid, Paper, Typography } from '@mui/material'; 
import Navbar from './Navbar';
import "./App.css"

const App = () => {
  const items = [
    { id: 1, price: '₹1999', description: 'Fastrack Optimus Pro', imageUrl: "/item1.webp" },
    { id: 2, price: '₹250', description: 'Happilo Premium Natural Californian Almonds', imageUrl: "/item2.webp" },
    { id: 3, price: '₹3000', description: 'NP Toys 3 FEET Sky Blue Imported Teddy Bear - 91 cm', imageUrl: "/item3.webp" },
    { id: 4, price: '₹24999', description: 'Acer 21.5 inch Full HD LED Backlit VA Panel', imageUrl: "/item4.webp" },
    { id: 5, price: '₹99', description: 'Vidhyarthiyon Ke Liye Gita ', imageUrl: "/item5.webp" },
    { id: 6, price: '₹100', description: 'Fitness Mantra Anti Skid Light Weight', imageUrl: "/item6.webp" },
    { id: 7, price: '₹249', description: 'UV Protection, Mirrored Wayfarer Sunglasses', imageUrl: "/item7.webp" },
    { id: 8, price: '₹500', description: 'HP Flash Drive USB LM 2.0', imageUrl: "/item8.webp" },
  ];

  return (
    <div className="app-container" style={{ backgroundColor: '#f1f5ff', height: '100vh' }}>
      <CssBaseline />
      <Navbar />

      <Container maxWidth="lg">

        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={3}>
              <Paper elevation={3} className="item-paper" sx={{ padding: '20px', height: '100%', backgroundColor: 'white' }}>
                <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
                <Typography variant="h5" gutterBottom>
                  {item.price}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '20px 0', marginTop: '20px' }}>
        <Container maxWidth="lg">
          <Typography variant="body2">
            &copy; 2024 shopping website by Anshul <br />
            <p>Email: anshulmanhas17@gmail.com</p>
            
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default App;

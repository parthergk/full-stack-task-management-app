import { Box, Typography, Grid, Paper, Button } from "@mui/material";
export const Cart = () => (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Cart</Typography>
      <Grid container spacing={2}>
        {/* Replace with dynamic cart items */}
        {[1, 2].map((item) => (
          <Grid item xs={12} key={item}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Cart Item {item}</Typography>
              <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography>Quantity: 1</Typography>
                <Button size="small" variant="outlined">Remove</Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box mt={3}>
        <Button variant="contained" color="primary">Checkout</Button>
      </Box>
    </Box>
  );
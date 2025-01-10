import { Box, Typography, Paper, Button } from "@mui/material";

export const Order = () => (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Order Summary</Typography>
      <Paper sx={{ p: 2, mb: 3 }}>
        {/* Replace with dynamic cart summary */}
        {[1, 2].map((item) => (
          <Box key={item} display="flex" justifyContent="space-between" mb={1}>
            <Typography>Order Item {item}</Typography>
            <Typography>$10.00</Typography>
          </Box>
        ))}
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">$20.00</Typography>
        </Box>
      </Paper>
      <Button variant="contained" color="primary" fullWidth>Place Order</Button>
  
      <Box mt={5}>
        <Typography variant="h5">Order History</Typography>
        {/* Replace with dynamic order history */}
        {[1, 2].map((order) => (
          <Paper key={order} sx={{ p: 2, my: 1 }}>
            <Typography>Order {order}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
  
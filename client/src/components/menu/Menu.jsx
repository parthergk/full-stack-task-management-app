import { Box, Typography, Grid, Paper, Button } from "@mui/material";
export const Menu = () => (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Menu</Typography>
      <Grid container spacing={2}>
        {/* Replace with dynamic menu items */}
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Menu Item {item}</Typography>
              <Box mt={2} display="flex" justifyContent="space-between">
                <Button size="small" variant="outlined">Edit</Button>
                <Button size="small" color="error" variant="outlined">Delete</Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box mt={3}>
        <Button variant="contained" color="primary">Add New Item</Button>
      </Box>
    </Box>
  );
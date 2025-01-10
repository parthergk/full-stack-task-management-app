import { Box, Typography, Paper, TextField, Button } from '@mui/material';

const Form = ({formName}) => {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>{formName}</Typography>
        <form>
          <TextField label="Username" fullWidth required margin="normal" />
          <TextField label="Password" fullWidth required type="password" margin="normal" />
          <Box mt={2}>
            <Button variant="contained" color="primary" fullWidth>{formName}</Button>
          </Box>
        </form>
      </Paper>
    </Box>
  )
}

export default Form
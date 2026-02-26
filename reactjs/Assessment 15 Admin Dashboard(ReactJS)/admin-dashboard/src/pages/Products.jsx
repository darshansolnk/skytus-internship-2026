import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box
} from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = useCallback((data) => {
    setProducts(prev => [...prev, data]);
    reset();
  }, [reset]);

  return (
    <>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" mb={2}>
          Add New Product
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          display="flex"
          gap={2}
          flexWrap="wrap"
        >
          <TextField
            label="Product Name"
            {...register("name", { required: true })}
            error={!!errors.name}
            helperText={errors.name && "Required"}
          />

          <TextField
            label="Price"
            {...register("price", { required: true })}
            error={!!errors.price}
            helperText={errors.price && "Required"}
          />

          <Button variant="contained" type="submit">
            Add
          </Button>
        </Box>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Price</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((p, index) => (
              <TableRow key={index}>
                <TableCell>{p.name}</TableCell>
                <TableCell>₹ {p.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default Products;
import { useParams } from "react-router-dom";
import type { Product } from "../../app/models/product";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Divider, Table, TableBody, TableCell, TableContainer,TableRow,TextField, Typography } from "@mui/material";


export default function ProductDetails() {
  const { id } =  useParams();
  const [product, setProduct] = useState<Product | null>();

  useEffect(() => {
    fetch(`https://localhost:5001/api/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error))
  }, [id]);

  if(!product) return <div>Loading...</div>

  const productDetails =[
    {label: 'Name', value: product.name},
    {label: 'Description', value: product.description},
    {label: 'Type', value: product.type},
    {label: 'Brand', value: product.brand},
    {label: 'Quantity in Stock', value: product.quantityInStock},
  ]

  return (
    <Grid container spacing={6} maxWidth='medium' sx={{mx: 'auto'}}>
      <Grid size={5}>
        <img src={product?.pictureUrl} alt={product.name} style={{width: '100%'}} />
      </Grid>
      <Grid size={5}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{mb: 2}} />
        <Typography variant="h4" color='secondary'>{(product.price / 100).toFixed(2)}</Typography>
        <TableContainer >
          <Table sx={{
            '& td': {fontSize: '1rem'}
          }}>
            <TableBody>
              <TableRow>
                {productDetails.map((detail, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{fontWeight: 'bold'}}>{detail.label}</TableCell>
                    <TableCell>{detail.value}</TableCell>
                  </TableRow>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={3} marginTop={4}>
          <Grid size={5}>
            <TextField
              variant="outlined"
              type="number"
              label="Quantity in basket"
              fullWidth
              defaultValue={1}
            />
          </Grid>
          <Grid size={5}>
            <Button
              sx={{height: '55px'}}
              color="primary"
              variant="contained"
              size="large"
              fullWidth
            >
              Add To Cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
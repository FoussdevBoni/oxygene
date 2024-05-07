import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';
import ResultPage from './ResultSearch';

const useStyles = makeStyles({
  root: {
    marginTop: '20px',
  },
  card: {
    marginBottom: '10px',
  },
});

const products = [
  { id: 1, name: 'Produit 1' },
  { id: 2, name: 'Produit 2' },
  { id: 3, name: 'Produit 3' },
  { id: 4, name: 'Produit 4' },
  // Ajoutez ici plus de produits pour tester
];

const SearchPage = ({user}) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <Container className={classes.root} maxWidth="md">
      <TextField
        placeholder="Rechercher produit par son nom ou par ne nom d'un établissement de vente"
        variant="outlined"
        fullWidth
        style={{marginTop: '30px', borderRadius:'100px'}}
         
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
   
      <ResultPage search={searchTerm}/>
      {searchResults.map((product) => (
        <Card key={product.id} className={classes.card}>
          <CardContent>
            <Typography variant="h6">{product.name}</Typography>
            {/* Ajoutez ici les détails supplémentaires du produit */}
            <Button variant="contained" color="secondary">
              Acheter
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default SearchPage;

import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, CircularProgress, Alert, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';
import { fetchItems } from './services/api';

// Create a custom theme for Material-UI
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#f5f5f5',
        },
    },
    typography: {
        h4: {
            fontWeight: 600,
            margin: '25px',
            textAlign: 'center'

        },
        body1: {
            fontSize: '1.1rem',
        },
    },
});

const App = () => {
    // State to hold all items
    const [items, setItems] = useState([]);


    // State to hold filtered items for displaying
    const [filteredItems, setFilteredItems] = useState([]);

    // State to handle loading state
    const [loading, setLoading] = useState(true);

    // State to handle errors
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch data from the API
        const getData = async () => {
            try {
                // Fetch items using the API service
                const data = await fetchItems();
                // Set the items and filtered items state
                setItems(data);
                setFilteredItems(data);
            } catch (err) {
                // Set the error state if fetching data fails
                setError('Failed to fetch data.');
            } finally {
                // Set loading state to false once fetching is done
                setLoading(false);
            }
        };

        // Call the getData function
        getData();
    }, []);

    // Function to handle search queries
    const handleSearch = (query) => {
        // Filter items based on the query
        const filtered = items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
        // Set the filtered items state
        setFilteredItems(filtered);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Typography variant="h4" component="h1" gutterBottom>
                    Random Lines
                </Typography>
                <SearchBar onSearch={handleSearch} />
                {loading ? (
                    <Box display="flex" justifyContent="center" mt={4}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Alert severity="error">{error}</Alert>
                ) : (
                    <ItemList items={filteredItems} />
                )}
            </Container>
        </ThemeProvider>
    );
};

export default App;

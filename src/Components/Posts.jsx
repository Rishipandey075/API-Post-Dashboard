// Posts.js
import { useEffect, useState } from 'react';
import { fetchPosts } from '../Api';
import { Container, TextField, Typography, CircularProgress, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Posts component to display the list of posts
const Posts = () => {
    // State to store the list of posts
    const [posts, setPosts] = useState([]);
    // State to store the filtered list of posts based on the search term
    const [filteredPosts, setFilteredPosts] = useState([]);
    // State to store the search term
    const [searchTerm, setSearchTerm] = useState('');
    // State to manage the loading state
    const [loading, setLoading] = useState(true);

    // Fetch posts when the component mounts
    useEffect(() => {
        const getPosts = async () => {
            try {
                // Fetch the data from the API
                const data = await fetchPosts();
                // Set the posts and filteredPosts state
                setPosts(data);
                setFilteredPosts(data);
            } catch (error) {
                // Log any errors to the console
                console.error('Error fetching posts:', error);
            } finally {
                // Set loading to false once the data is fetched
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    // Filter posts based on the search term
    useEffect(() => {
        const results = posts.filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPosts(results);
    }, [searchTerm, posts]);

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Posts
            </Typography>
            {/* Search bar to filter posts */}
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            {/* Loading indicator */}
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                    <CircularProgress />
                </Box>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Body</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredPosts.map(post => (
                                <TableRow key={post.id}>
                                    <TableCell>{post.id}</TableCell>
                                    <TableCell>{post.title}</TableCell>
                                    <TableCell>{post.body}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Container>
    );
};

export default Posts;

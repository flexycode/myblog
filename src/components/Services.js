import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/blog');
            if (response.ok) {
                const data = await response.json();
                setPosts(data);
            } else {
                setError('Failed to load blog posts');
            }
        } catch (err) {
            setError('Cannot connect to server');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="container mt-4">
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h2>📝 Blog Articles</h2>
            <p className="text-muted">Browse our latest blog posts:</p>

            {error && <div className="alert alert-danger">{error}</div>}

            {posts.length === 0 ? (
                <div className="alert alert-info">
                    No blog posts yet. Create your first post using the API!
                </div>
            ) : (
                <div className="list-group">
                    {posts.map((post) => (
                        <Link
                            key={post._id}
                            to={`/articles/${post._id}`}
                            className="list-group-item list-group-item-action"
                        >
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{post.title}</h5>
                                <small className="text-muted">
                                    {new Date(post.createdAt).toLocaleDateString()}
                                </small>
                            </div>
                            <p className="mb-1 text-muted">
                                {post.content.substring(0, 100)}...
                            </p>
                            <small>By {post.author}</small>
                        </Link>
                    ))}
                </div>
            )}

            {/* Sample static links for testing */}
            <div className="mt-4">
                <h5>Sample Articles (Static)</h5>
                <div className="list-group">
                    <Link to="/articles/sample1" className="list-group-item list-group-item-action">
                        📰 Blog Article #1 - Getting Started
                    </Link>
                    <Link to="/articles/sample2" className="list-group-item list-group-item-action">
                        📰 Blog Article #2 - Advanced Topics
                    </Link>
                    <Link to="/articles/sample3" className="list-group-item list-group-item-action">
                        📰 Blog Article #3 - Best Practices
                    </Link>
                </div>
            </div>
        </div>
    );
}
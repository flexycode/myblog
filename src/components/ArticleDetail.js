import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ArticleDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [newComment, setNewComment] = useState({ user: '', text: '' });
    const [commentMessage, setCommentMessage] = useState('');

    useEffect(() => {
        fetchPost();
        fetchComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const fetchPost = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/blog/${id}`);
            if (response.ok) {
                const data = await response.json();
                setPost(data);
            } else {
                setError('Blog post not found');
            }
        } catch (err) {
            setError('Cannot connect to server');
        } finally {
            setLoading(false);
        }
    };

    const fetchComments = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/comments/${id}`);
            if (response.ok) {
                const data = await response.json();
                setComments(data);
            }
        } catch (err) {
            console.error('Failed to fetch comments:', err);
        }
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        setCommentMessage('');

        if (!newComment.user || !newComment.text) {
            setCommentMessage('Please fill in all fields');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    postId: id,
                    user: newComment.user,
                    text: newComment.text
                })
            });

            if (response.ok) {
                setNewComment({ user: '', text: '' });
                setCommentMessage('Comment posted successfully!');
                fetchComments(); // Refresh comments
            } else {
                const data = await response.json();
                setCommentMessage(data.message || 'Failed to post comment');
            }
        } catch (err) {
            setCommentMessage('Cannot connect to server');
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

    if (error || !post) {
        return (
            <div className="container mt-4">
                <div className="alert alert-warning">
                    <h4>Article Not Found</h4>
                    <p>{error || 'This article does not exist or has been removed.'}</p>
                    <button className="btn btn-primary" onClick={() => navigate('/services')}>
                        Back to Articles
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            {/* Back button */}
            <button className="btn btn-outline-secondary mb-3" onClick={() => navigate('/services')}>
                ← Back to Articles
            </button>

            {/* Article */}
            <article className="card shadow-sm">
                <div className="card-body">
                    <h1 className="card-title">{post.title}</h1>
                    <div className="text-muted mb-3">
                        <small>
                            By <strong>{post.author}</strong> • {new Date(post.createdAt).toLocaleDateString()}
                        </small>
                    </div>
                    <hr />
                    <p className="card-text" style={{ whiteSpace: 'pre-wrap' }}>
                        {post.content}
                    </p>
                </div>
            </article>

            {/* Comments Section */}
            <section className="mt-4">
                <h4>💬 Comments ({comments.length})</h4>

                {/* Comment Form */}
                <div className="card mb-3">
                    <div className="card-body">
                        <h6>Add a Comment</h6>
                        {commentMessage && (
                            <div className={`alert ${commentMessage.includes('success') ? 'alert-success' : 'alert-danger'} py-2`}>
                                {commentMessage}
                            </div>
                        )}
                        <form onSubmit={handleCommentSubmit}>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your name"
                                    value={newComment.user}
                                    onChange={(e) => setNewComment({ ...newComment, user: e.target.value })}
                                />
                            </div>
                            <div className="mb-2">
                                <textarea
                                    className="form-control"
                                    placeholder="Your comment..."
                                    rows="3"
                                    value={newComment.text}
                                    onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm">
                                Post Comment
                            </button>
                        </form>
                    </div>
                </div>

                {/* Comments List */}
                {comments.length === 0 ? (
                    <p className="text-muted">No comments yet. Be the first to comment!</p>
                ) : (
                    <div className="list-group">
                        {comments.map((comment) => (
                            <div key={comment._id} className="list-group-item">
                                <div className="d-flex justify-content-between">
                                    <strong>{comment.user}</strong>
                                    <small className="text-muted">
                                        {new Date(comment.createdAt).toLocaleString()}
                                    </small>
                                </div>
                                <p className="mb-0 mt-1">{comment.text}</p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

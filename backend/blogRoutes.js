import express from "express";
import BlogPost from "./blogPostModel.js";

const router = express.Router();

// ===== CREATE BLOG POST =====
router.post("/", async (req, res) => {
    try {
        const { title, content, author } = req.body;

        if (!title || !content || !author) {
            return res.status(400).json({ message: "Title, content, and author are required" });
        }

        const newPost = new BlogPost({
            title: title.trim(),
            content: content.trim(),
            author: author.trim()
        });

        await newPost.save();
        res.status(201).json({ message: "Blog post created successfully", post: newPost });
    } catch (err) {
        res.status(500).json({ error: "Failed to create blog post", details: err.message });
    }
});

// ===== GET ALL POSTS =====
router.get("/", async (req, res) => {
    try {
        const posts = await BlogPost.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch blog posts", details: err.message });
    }
});

// ===== GET SINGLE POST =====
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const post = await BlogPost.findById(id);

        if (!post) {
            return res.status(404).json({ message: "Blog post not found" });
        }

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch blog post", details: err.message });
    }
});

// ===== UPDATE POST =====
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const updatedPost = await BlogPost.findByIdAndUpdate(
            id,
            { title, content },
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({ message: "Blog post not found" });
        }

        res.status(200).json({ message: "Blog post updated", post: updatedPost });
    } catch (err) {
        res.status(500).json({ error: "Failed to update blog post", details: err.message });
    }
});

// ===== DELETE POST =====
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await BlogPost.findByIdAndDelete(id);

        if (!deletedPost) {
            return res.status(404).json({ message: "Blog post not found" });
        }

        res.status(200).json({ message: "Blog post deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete blog post", details: err.message });
    }
});

export default router;

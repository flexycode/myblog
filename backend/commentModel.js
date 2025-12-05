import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'BlogPost'
        },
        user: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);

import mongoose from "mongoose";

const magazineSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issueNumber: Number,
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publisher',
        required: true
    }
});

const Magazine = mongoose.model('Magazine', magazineSchema);
export default Magazine
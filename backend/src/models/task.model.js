import mongoose, { mongo } from "mongoose";

const taskSchema = mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default:  Date.now
    }
},
{
    timestamps: true
});

export default mongoose.model('Task', taskSchema);
import mongoose, { model } from "mongoose";

//Step 1: Create a Schema
//Step 2: Create a Model of that Schema


const noteSchema = new mongoose.Schema({
    title:{
    type: String,
    required: true
    },
    content: {
        type: String,
        required: true
    },

},
{timestamps: true}
)

const Note = mongoose.model("Note" , noteSchema);

export default Note
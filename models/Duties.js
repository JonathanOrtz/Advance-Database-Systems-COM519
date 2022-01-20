const mongoose = require('mongoose');
const { Schema } = mongoose;

const dutiesSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
            minlength:4,
            trim: true,
            unique: true
        },
        detailing: {
            type: String,
            require: true,
            minlength: 4,
        },
        done: {
            type: Boolean,
            default: false
        },
        
    },{
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("Duties", dutiesSchema);

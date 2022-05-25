const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number,
            default: 1,
        }
    }],
    active: {
        type: Boolean,
        default: true
    },
    modifiedOn: {
        type: Date,
        default: Date.now
    }
},
    { timestamps: true }
);

const Cart = new mongoose.model("Cart", cartSchema);

module.exports = Cart

// const mongoose = require('mongoose');

// const cartSchema = new mongoose.Schema({
//     userId: { type: String, required: true },
//     products:[{
//         productId:{
//             type:String
//         },
//         quantity:{
//             type:Number,
//             default:1,
//         }
//     }]
// }, { timestamps: true });


// module.exports = mongoose.model("Cart" , cartSchema)
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    shippingInfo: {
        address: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },

        district: {
            type: String,
            required: true,
        },
        pinCode: {
            type: Number,
            required: true,
        },
        phoneNo: {
            type: Number,
            required: true,
        },
    },
    orderItems: [
        {
            // p_name: {
            //     type: String,
            //     // required: true,
            // },
            // price: {
            //     type: Number,
            //     // required: true,
            // },
            // quantity: {
            //     type: Number,
            //     // required: true,
            // },
            // productId: {
            //     type: mongoose.Schema.Types.ObjectId,
            //     ref: "Product",
            //     // required: true,
            // },
        },
    ],
    paymentInfo: {
        paymentId: {
            type: String,
            // required: true,
        },
        paymentStatus: {
            type: String,
            // required: true,
        },
    },
    paidAt: {
        type: Date,
        // required: true,
        default: Date.now()
    },
    itemsPrice: {
        type: Number,
        // required: true,
        default: 0,
    },
    taxPrice: {
        type: Number,
        // required: true,
        default: 0,
    },
    shippingPrice: {
        type: Number,
        // required: true,
        default: 0,
    },
    totalPrice: {
        type: Number,
        // required: true,
        default: 0,
    },
    orderStatus: {
        type: String,
        required: true,
        default: "Processing",
    },
    deliveredAt: Date,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;

const mongoose = require("mongoose")


mongoose
    .connect('mongodb+srv://pandeymridulwork:mridul891@paytm.gzqo0ig.mongodb.net/')
    .then(() => console.log("mongodb connected"))

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, //reference to user model 
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})


const TransactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    reciever: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);
const History = mongoose.model("History ", TransactionSchema);


module.exports = { User, Account, History } 
import mongoose, { Schema } from "mongoose";


mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    category: String,
    priority: Number,
    status: String,
    progress: Number,
    active: Boolean,
  },
  {
    timestamps: true,
    collection: 'ticketCollection',
  },
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
  
export default Ticket;
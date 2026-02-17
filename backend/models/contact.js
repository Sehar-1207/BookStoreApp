// import mongoose from 'mongoose';

// const contactSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true
//   },
//   phone: {
//     type: String,
//     trim: true
//   },
//   subject: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   message: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   status: {
//     type: String,
//     enum: ['new', 'read', 'replied', 'archived'],
//     default: 'new'
//   },
//   ipAddress: {
//     type: String
//   },
//   userAgent: {
//     type: String
//   }
// }, {
//   timestamps: true // Automatically adds createdAt and updatedAt
// });

// export default mongoose.model('Contact', contactSchema);
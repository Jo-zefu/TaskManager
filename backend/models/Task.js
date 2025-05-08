const mongoose = require('mongoose')

const todoScheme = new mongoose.Schema({
  text: {type: String, required: true},
  completed: {type: Boolean, default: false},
})

const taskScheme = new mongoose.Schema(
  {
    title: {type: String, required: true},
    description: {type: String},
    priority: {type: String, enum: ["Low", "Medium", "High"], default: "Medium"},
    status: {type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending'},
    dueDate: {type: Date, default: Date.now, required: true},
    assignedTo: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    attachments: [{type: String}],
    todoCheckList: [todoScheme],
    progress: {type: Number, default: 0},
  },
  {timestamps: true}
)

module.exports = mongoose.model("Task", taskScheme)
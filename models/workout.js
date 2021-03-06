const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
    totalDuration: {
    type: Number,
    default: 0
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter exercise type"

      },
      name: {
        type: String,
        trim: true,
        required: "Enter exercise name"
      },
      duration: {
        type: Number,
        required: "Enter exercise duration"
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      }
    }
  ],
  
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
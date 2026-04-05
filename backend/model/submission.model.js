const submissionSchema = new mongoose.Schema({
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assignment",
    required: true
  },

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  fileUrl: {
    type: String
  },

  grade: {
    type: Number
  }

}, { timestamps: true });

export default mongoose.model("Submission", submissionSchema);
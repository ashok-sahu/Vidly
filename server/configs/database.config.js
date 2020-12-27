const mongoose = require("mongoose");

exports.connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connected successfully!".bold.green);
    })
    .catch((err) => {
      console.log(error("error while connect to database!", err.message));
      process.exit(1);
    });
};

require("dotenv").config();
const colors = require("colors");
const app = require("./server/app");
const { connectDB } = require("./server/configs/database.config");
const assetsSetup = require("./server/configs/static.config");

const port = process.env.PORT || 2000;
connectDB();
assetsSetup();

app.listen(port, () => {
  console.log(
    `server is running on port http://localhost:${port}`.yellow.bold.underline
  );
});

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});

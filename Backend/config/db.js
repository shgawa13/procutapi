const mongoos = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoos.connect(process.env.MANGO_URI);
    console.log(`mongodb connected ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;

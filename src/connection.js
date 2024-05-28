import mongoose from 'mongoose';

const connection = async () => {
  try {

    let dbConnection = "mongodb+srv://"

    if (
      process.env.DB_USER &&
      process.env.DB_PASSWORD &&
      process.env.DB_USER.length > 0 &&
      process.env.DB_PASSWORD.length > 0
    ) {
      dbConnection += process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@"
    }
    dbConnection += process.env.DB_HOST + "/" + process.env.DB_NAME

    await mongoose.connect(
      dbConnection
    )

    console.log('Database Connected Successfully')
  } catch (error) {
    console.log(error)

    throw error
  }
}

export default connection;

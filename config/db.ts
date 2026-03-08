import mysql from "mysql2/promise"
import { connection } from "next/server"

// mysql.createConnection({})    //good for learning
export const db = mysql.createPool({
    host: "localhost",
    user: "example_user",
    password: "Standard2051",
    database: "StandardDatabase"
}) //pool of several connections, good for deployment



try {
    const connection = await db.getConnection()      // if returns true --> connceted to db

    console.log("DB connected successfully.")
    connection.release()
} catch (err) {
    console.error("DB connection failed: ", err)
    process.exit(1)
}
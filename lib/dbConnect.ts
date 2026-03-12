import mongoose from 'mongoose'

// type validation of response from mongoose
type coonnectionObject = {
    isConnected? : number
}


const connection : coonnectionObject = {}

// mongo db connection function
async function dbConnect(): Promise<void> {
    // checks if the database is already connected
    if(connection.isConnected) {
        console.log("Already connected to the database")
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "",{})
console.log("db--->\n", db)
console.log("db-connections-->\n", db.connections)

        connection.isConnected = db.connections[0].readyState

        console.log("DB connected successfully")

    } catch (error) {
        console.log("Error connecting to the database", error)
        process.exit(1)  //exit the process if connection fails without crash
    }
}


export default dbConnect;
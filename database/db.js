// postgres db connection code using drizzle-orm
import 'dotenv/config';           
import postgres from "postgres"     //mports the postgres client library.
import { drizzle } from "drizzle-orm/postgres-js"  //imports the Drizzle ORM driver used to connect database client to Drizzle.


const connStr = process.env.DATABASE_URL

export const connection = postgres(connStr)     // creates a PostgreSQL connection instance using the connection string.

export const db = drizzle(connection) //Initialize Drizzle ORM,,, Now instead of writing raw SQL everywhere, we can use Drizzle's typed query system.


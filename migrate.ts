import 'dotenv/config';
import {migrate} from "drizzle-orm/postgres-js/migrator"
import { connection, db } from "./database/db.js";



// imediately invoked function--runs everytime file is invoked
// (
//     async () => {
//         await migrate(db, {migrationsFolder: "./drizzle"})   //migrate function takes 2 arguments, first is db connection function and second is an object with migrationFolder property which specifies the folder where migration files are stored
//         await connection.end()   //closes the database connection after migration is done
//     }
// )();



// same as above using try-catch-finally
(
    async () => {
      try {
        console.log("Running migrations...");
        await migrate(db, { migrationsFolder: "./drizzle" });
        console.log("Migrations completed successfully!");

      } catch (err) {
        console.error("Migration failed:", err);
        
      } finally {
        await connection.end();
        console.log("Database connection closed.");
      }
    }
  )();
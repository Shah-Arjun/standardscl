import db, { connection } from "./database/db";
import {migrate} from "drizzle-orm/postgres-js"



// imediately invoked function--runs everytime file is invoked
(
    async () => {
        await migrate(db, {migrationsFolder: "./drizzle"})   //migrate function takes 2 arguments, first is db connection function and second is an object with migrationFolder property which specifies the folder where migration files are stored
        await connection.end()   //closes the database connection after migration is done
    }
)();
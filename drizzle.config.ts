// code related to migration

import 'dotenv/config';          
import { defineConfig } from "drizzle-kit";   //yesle migration herchha


// defineConfig takes 4 arguments
export default defineConfig({
    schema: "./database/schema.ts",     //path of schema file
    out: "./drizzle",    //output directory, where the migration files generated based on schema by drizzle-orm is stored, drizzle folder is created at the root of the project itself
    dialect: "postgresql",    //name of db we are using
    dbCredentials: {
        url: process.env.DATABASE_URL!             // db provider(supabase)connection string
    }
})
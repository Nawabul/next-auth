import { defineConfig } from "drizzle-kit";


export default defineConfig({
  dialect: 'mysql', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/db/schema/*',
  out:"./src/db/migrations",
  dbCredentials:{
		url:process.env.DATABASE_URL as string
  },
  verbose:true,
  strict:true,
})
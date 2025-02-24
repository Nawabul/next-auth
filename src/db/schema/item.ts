import data, {table} from "@/db/table"
import {user} from "@/db/schema/users"
const {int,text,varchar} =data
export const item = table('items',{
	id:int("id").primaryKey().autoincrement(),
	name:varchar({length:255}).notNull(),
	qty:int().notNull(),
	userId:int().notNull().references(()=>user.id)
})

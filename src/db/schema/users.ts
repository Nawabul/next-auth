import data, {table} from "@/db/table"
const {int,text,varchar} =data
export const user = table('users',{
	id:int("id").primaryKey().autoincrement(),
	name:varchar({length:255}).notNull(),
	email:varchar({length:255}).notNull(),
})

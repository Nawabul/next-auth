import data, {table} from "@/db/table"
const {int,text} =data
export const user = table('users',{
	id:int("id").primaryKey().autoincrement(),
	name:text("name").notNull(),
})
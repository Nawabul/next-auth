import { z } from "zod";

const itemInsertSchema = z.object({
	name: z.string(),
	qty:z.number({
		required_error:"Please provide qty"
	})
	
})

export {itemInsertSchema}
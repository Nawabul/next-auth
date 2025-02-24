


// insert item

import db from "@/db/dbConnect";
import { item } from "@/db/schema/item";
import { extractZodError } from "@/lib/error/extractZodError";
import { itemInsertSchema } from "@/schema/item";
import { apiResponse } from "@/types/api";
import { NextApiResponse } from "next";
import { z } from "zod";

export const POST = async (req:Request,res:NextApiResponse)=>{

try {
		const data:Record<string,any> = await req.json();
		const validate = itemInsertSchema.safeParse(data);
		
		if(!validate.success){
			return apiResponse(422,extractZodError(validate.error),'Item validation error');
		}
		// insert item
		data.userId = 5;
		const insertUser = await db.insert(item).values(data)
			
			return apiResponse(200,insertUser,"Item inserted successfully");
	} catch (error) {

		console.log(error)

		return apiResponse(500,[],"Server Error");
}

}

// fetch all the item

export const GET = async (req:Request)=>{


	const fetchAllUser = await db.select().from(item);

	return Response.json({
		status: true,
		data: fetchAllUser,

	},{
		status:202,
		statusText:"all"
	})
}


// delete the item

export const DELETE = async (req:Request)=>{

	// delete all ther 
	const deleteUser = await db.delete(item);

	return Response.json({
		status: true,
		data: deleteUser,

	},{
		status:203,
		statusText:"Delete"
	})

}
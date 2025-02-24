


// insert user

import db from "@/db/dbConnect";
import { user } from "@/db/schema";

export const POST = async (req:Request)=>{

	const {name, email, password}:any = await req.json();

	// insert user
	const insertUser = await db.insert(user).values({
		name,
	})

	return Response.json({
		status: true,
		data: insertUser,

	},{
		status:201,
		statusText:"Insert"
	})

}

// fetch all the user

export const GET = async (req:Request)=>{


	const fetchAllUser = await db.select().from(user);

	return Response.json({
		status: true,
		data: fetchAllUser,

	},{
		status:202,
		statusText:"all"
	})
}


// delete the user

export const DELETE = async (req:Request)=>{

	// delete all ther 
	const deleteUser = await db.delete(user);

	return Response.json({
		status: true,
		data: deleteUser,

	},{
		status:203,
		statusText:"Delete"
	})

}
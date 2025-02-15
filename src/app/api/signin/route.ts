import { signIn } from "next-auth/react";


export async function POST(request:Request) {
	
	try {
			const result = await signIn("Credentials",{
				email:"nawabul64@gmail.com",
				password:"test"
			})
			console.log("Post result")
			console.log(result)

			return Response.json({
				success:true,
				message:"Login Successfull"
			},
			{
				status:200
			}
		)
	} catch (error) {
		console.log(error)
		return Response.json({
			success:false,
			message:"Login Successfull",
			error,
		},
		{
			status:302
		}
	)
		
	}
}
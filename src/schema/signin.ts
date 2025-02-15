import { z } from "zod";


const SignInSchema = z.object({
	email:z.string().email(),
	password:z.string(),
});

export {SignInSchema}
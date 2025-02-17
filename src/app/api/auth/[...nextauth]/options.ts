import {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


export const authOptions:NextAuthOptions = {
	providers:[
		CredentialsProvider({
			id:"Credentials",
			name:"Credentials",
			credentials:{
				email: { label: "Email", type: "text", placeholder: "enter email" },
      			password: { label: "Password", type: "password" }
			},
		  async authorize(credentials:any):Promise<any>{

			const user = { id: "1", name: "J Smith", email: credentials.email }

			console.log('Auth option authorize credetials')

			console.log(credentials);

			return user
			throw new Error('Sign in error')



		  }
		}),

		// google provider
		GoogleProvider({
			id: "google",
			name: "google",
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",

		})
	],

	// pages over write

	pages:{
		signIn:'/signin'
	},

	// strategy
	session:{
		strategy:"jwt"
	},

	secret:process.env.NEXTAUTH_SECRET,

	// callback
	callbacks:{
		async session({ session, token }) {
			console.log('callback session toten')
			console.log(token)
			return session
		  },
		  async jwt({ token, user,account }) {
			console.log("callback jwt token")
			console.log(token)
			console.log('user')
			console.log(user)
			console.log('account')
			console.log(account)
			return token
		  }
	}

}
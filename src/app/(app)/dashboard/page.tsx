"use client"

import NavList from "@/components/dashbaord/navbar/navList"
import { useSession } from "next-auth/react"


const DashboardPage = ()=>{

	const {data} = useSession()

	console.log(data)

	return (
		<div>
			<NavList/>

			<p>This is Dashbaord</p>

		</div>
	)
}

export default DashboardPage
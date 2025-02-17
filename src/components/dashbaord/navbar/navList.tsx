"use client"
import { signOut } from "next-auth/react"
import NavItem from "./navItem"
import { useRouter } from "next/navigation"

interface option {
	name:string,
	link?:string,
	onClick?:()=>void
}

const NavList = ()=>{

	const router = useRouter()
	const onLogout = ()=>{
		signOut()
		router.push('/')
	}

	const option:option[] = [
		{
			name:"Dashbaord",
			link:"/dashboard"
		},
		{
			name:"Profile",
			link:"/profile",
		},
		{
			name:"Logout",
			onClick:onLogout
		}
	]


	return (
		<nav className="nav-list">
			<ul className="flex gap-10 p-4 w-full">
			{option.map((item, index)=>{
					return (
						<NavItem
						key={`nav-item-${index}`}
						name={item.name}
						link={item.link}
						onClick={item.onClick}
						/>
					)}

				)}
			</ul>
		</nav>
	)

}

export default NavList;
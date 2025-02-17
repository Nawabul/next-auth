"use client"
import Link from "next/link"

interface prop {
	name:string,
	link?:string,
	onClick?:()=>void,
}

 const NavItem = ({
	name,
	link,
	onClick
}:prop)=>{

	if(link){
		return (
			<Link href={link}>
				<li className="bg-blue-700 rounded-lg px-3 py-2 text-blue-50 hover:px-4 hover:text-xl">{name}</li>
			</Link>
		)
	}else{
		return (
			<li 
			className="bg-red-700 rounded-lg px-3 py-2 text-blue-50 hover:px-2 hover:text-sm"
			onClick={onClick}>{name}</li>
		)
	}
}

export default NavItem
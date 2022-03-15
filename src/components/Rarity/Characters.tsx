import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Card from './Card';
import { useQuery } from "react-query"; // pagination

function Characters(props):JSX.Element {
  const router = useRouter();
	const [characterEdition, setCharacterEdition] = useState(1);

	// pagination - display all characters 
	const { data, refetch } = useQuery(
		"characters",
		async () => (
			await fetch(`http://localhost:5000/api/characters/?value=${props.activeTraitsFilter}&page=${props.page}&limit=20`).then((result) =>
				result.json()
			)
		)
	);
	useEffect(() => { refetch() }, [props.page, props.activeTraitsFilter])
	useEffect(() => console.log(props.activeTraitsFilter), [props.activeTraitsFilter])

  return (
    <>
      <div className="pt-6 mx-auto ">
				{/* display all characters */}
				<div className="h-full w-full grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-rows-4 lg:grid-rows-3 md:grid-row-2 gap-12 justify-between">
				{data?.map((character,index) => {
					return (<div>
						<button className="relative" onClick={()=> {
							setCharacterEdition(index+1)
							props.setIsCharacterOpen(!props.isCharacterOpen)
						}}>
							<Image className="rounded-xl opacity-100 hover:opacity-50 duration-500" src={`/images/${character.edition}.png`} width={250} height={250} ></Image>
						</button>
					</div>)
				})}
				</div>

				{/* display selected character */}
				{ props.isCharacterOpen ? 
				(
					<div>
						<div id="mintOutput" className={`w-screen h-full bg-black fixed z-[1000] top-0 left-0 bottom-0 right-0 opacity-[70%]`}></div>
						<Card character = {data[characterEdition-1]} isCharacterOpen = {props.isCharacterOpen} setIsCharacterOpen = {props.setIsCharacterOpen}></Card> 
					</div>
				): null }
			</div>
    </>
  )
}

export default Characters;
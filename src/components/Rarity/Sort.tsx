// TODO - edit trait types name, key and label 
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

function Sort(props):JSX.Element {
  const router = useRouter();

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isActiveTraitDropdownOpen, setIsActiveTraitDropdownOpen] = useState(false);
	const [dropdownHover, setDropdownHover] = useState({
		background: false,
		clothing: false,
		ear: false,
		eyes: false,
		face: false,
		hair: false,
		headgear: false,
		mouth: false,
		neck: false,
		offhand: false,
		special: false,
		type: false
	});

	const [checkedItems, setCheckedItems] = useState({}); //plain object as state

  const handleChange = (event) => {
      // updating an object instead of a Map
      setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });

  }

  const background = [ { name: 'Trait 1', }, { name: 'Trait 2', } ];
	const clothing = [ { name: 'Trait 3', }, { name: 'Trait 4', } ];
	const ear = [ { name: 'Trait 5', }, { name: 'Trait 6', } ];
	const eyes = [ { name: 'Trait 7', }, { name: 'Trait 8', } ];
	const face = [ { name: 'Trait 9', }, { name: 'Trait 10', } ];
	const hair = [ { name: 'Trait 11', }, { name: 'Trait 12', } ];
	const headgear = [ { name: 'Trait 13', }, { name: 'Trait 14', } ];
	const mouth = [ { name: 'Joy', }, { name: 'Crazy', }, { name: 'Unsure', } ];
	const neck = [ { name: 'Trait 17', }, { name: 'Trait 18', } ];
	const offhand = [ { name: 'Trait 19', }, { name: 'Trait 20', } ];
	const special = [ { name: 'Trait 21', }, { name: 'Trait 22', } ];
	const type = [ { name: 'FemaleBase1', }, { name: 'FemaleBase2', }, { name: 'FemaleBase3', } ];

	// get active traits 
	useEffect(() => {
    console.log("checkedItems: ", checkedItems);
		const checkedArr = Object.entries(checkedItems)
		const samArr = []
		checkedArr.forEach((item) => {
			if (item[1]){
				samArr.push(item[0])
			} 
		})
		props.setActiveTraitsFilter([...samArr])
  }, [checkedItems]);  

  return (
    <>
			<div className="">
				<div className="text-white flex font-ReadexPro">
					<p className="flex justify-center items-center text-gold-500 text-[14px] font-bold">Filter&nbsp;by</p>

					{/* dropdown */} 
					<div className="relative">
						<button onClick={()=> setIsDropdownOpen(!isDropdownOpen)} id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="font-light relative ml-8 bg-gray-800 border-gray-500 border-[1px] rounded-lg w-[150px] flex items-center justify-between px-4" type="button">Trait <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
						{ isDropdownOpen ?(
							<div>
								<div id="dropdownInformation" className=" md:z-50 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
									<ul className="ml-8 py-1 text-center absolute top-8 z-[500] w-[150px] bg-white rounded-lg" aria-labelledby="dropdownInformationButton">
										<li className="relative border-b-[1px] border-gray-300">
											<button onMouseEnter={() => setDropdownHover(x => ({...x,background: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,background: false}))} className="w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-t-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Background</button>
											{/* show on hover for background */}
											{dropdownHover["background"] ? 
												<div onMouseEnter={() => setDropdownHover(x => ({...x,background: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,background: false}))} className="absolute left-[100%] top-[0] pr-4 pb-4">
													<div  className="ml-4  bg-white text-gray-700 text-sm p-4  rounded-lg">
														<ul className="w-48">
															{
																background.map(item => (
																	<li className="flex justify-start items-center">
																		<input className="" type="checkbox" name={item.name} checked={checkedItems[item.name]} onChange={handleChange}/>
																		<p className="text-black ml-3">{item.name}</p>
																	</li>
																))
															}
														</ul>
													</div> 
												</div>
											: null }
										</li>
										<li className="relative border-b-[1px] border-gray-300">
											<button onMouseEnter={() => setDropdownHover(x => ({...x,clothing: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,clothing: false}))} className="w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-t-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Clothing</button>
											{/* show on hover for clothing */}
											{dropdownHover["clothing"] ? 
												<div onMouseEnter={() => setDropdownHover(x => ({...x,clothing: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,clothing: false}))} className="absolute left-[100%] top-[0] pr-4 pb-4">
													<div  className="ml-4  bg-white text-gray-700 text-sm p-4  rounded-lg">
														<ul className="w-48">
															{
																clothing.map(item => (
																	<li className="flex justify-start items-center">
																		<input className="" type="checkbox" name={item.name} checked={checkedItems[item.name]} onChange={handleChange}/>
																		<p className="text-black ml-3">{item.name}</p>
																	</li>
																))
															}
														</ul>
													</div> 
												</div>
											: null }
										</li>
										<li className="relative border-b-[1px] border-gray-300">
											<button onMouseEnter={() => setDropdownHover(x => ({...x,ear: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,ear: false}))} className="w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-t-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Ear</button>
											{/* show on hover for ear */}
											{dropdownHover["ear"] ? 
												<div onMouseEnter={() => setDropdownHover(x => ({...x,ear: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,ear: false}))} className="absolute left-[100%] top-[0] pr-4 pb-4">
													<div  className="ml-4  bg-white text-gray-700 text-sm p-4  rounded-lg">
														<ul className="w-48">
															{
																ear.map(item => (
																	<li className="flex justify-start items-center">
																		<input className="" type="checkbox" name={item.name} checked={checkedItems[item.name]} onChange={handleChange}/>
																		<p className="text-black ml-3">{item.name}</p>
																	</li>
																))
															}
														</ul>
													</div> 
												</div>
											: null }
										</li>
										<li className="relative border-b-[1px] border-gray-300">
											<button onMouseEnter={() => setDropdownHover(x => ({...x,eyes: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,eyes: false}))} className="w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-t-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Eyes</button>
											{/* show on hover for eyes */}
											{dropdownHover["eyes"] ? 
												<div onMouseEnter={() => setDropdownHover(x => ({...x,eyes: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,eyes: false}))} className="absolute left-[100%] top-[0] pr-4 pb-4">
													<div  className="ml-4  bg-white text-gray-700 text-sm p-4  rounded-lg">
														<ul className="w-48">
															{
																eyes.map(item => (
																	<li className="flex justify-start items-center">
																		<input className="" type="checkbox" name={item.name} checked={checkedItems[item.name]} onChange={handleChange}/>
																		<p className="text-black ml-3">{item.name}</p>
																	</li>
																))
															}
														</ul>
													</div> 
												</div>
											: null }
										</li>
										<li className="relative border-b-[1px] border-gray-300">
											<button onMouseEnter={() => setDropdownHover(x => ({...x,face: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,face: false}))} className="w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-t-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Face</button>
											{/* show on hover for face */}
											{dropdownHover["face"] ? 
												<div onMouseEnter={() => setDropdownHover(x => ({...x,face: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,face: false}))} className="absolute left-[100%] top-[0] pr-4 pb-4">
													<div  className="ml-4  bg-white text-gray-700 text-sm p-4  rounded-lg">
														<ul className="w-48">
															{
																face.map(item => (
																	<li className="flex justify-start items-center">
																		<input className="" type="checkbox" name={item.name} checked={checkedItems[item.name]} onChange={handleChange}/>
																		<p className="text-black ml-3">{item.name}</p>
																	</li>
																))
															}
														</ul>
													</div> 
												</div>
											: null }
										</li>
										<li className="relative border-b-[1px] border-gray-300">
											<button onMouseEnter={() => setDropdownHover(x => ({...x,hair: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,hair: false}))} className="w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-t-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Hair</button>
											{/* show on hover for hair */}
											{dropdownHover["hair"] ? 
												<div onMouseEnter={() => setDropdownHover(x => ({...x,hair: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,hair: false}))} className="absolute left-[100%] top-[0] pr-4 pb-4">
													<div  className="ml-4  bg-white text-gray-700 text-sm p-4  rounded-lg">
														<ul className="w-48">
															{
																hair.map(item => (
																	<li className="flex justify-start items-center">
																		<input className="" type="checkbox" name={item.name} checked={checkedItems[item.name]} onChange={handleChange}/>
																		<p className="text-black ml-3">{item.name}</p>
																	</li>
																))
															}
														</ul>
													</div> 
												</div>
											: null }
										</li>
										<li className="relative border-b-[1px] border-gray-300">
											<button onMouseEnter={() => setDropdownHover(x => ({...x,headgear: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,headgear: false}))} className="w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-t-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Headgear</button>
											{/* show on hover for headgear */}
											{dropdownHover["headgear"] ? 
												<div onMouseEnter={() => setDropdownHover(x => ({...x,headgear: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,headgear: false}))} className="absolute left-[100%] top-[0] pr-4 pb-4">
													<div  className="ml-4  bg-white text-gray-700 text-sm p-4  rounded-lg">
														<ul className="w-48">
															{
																headgear.map(item => (
																	<li className="flex justify-start items-center">
																		<input className="" type="checkbox" name={item.name} checked={checkedItems[item.name]} onChange={handleChange}/>
																		<p className="text-black ml-3">{item.name}</p>
																	</li>
																))
															}
														</ul>
													</div> 
												</div>
											: null }
										</li>
										<li className="relative border-b-[1px] border-gray-300">
											<button onMouseEnter={() => setDropdownHover(x => ({...x,mouth: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,mouth: false}))} className="w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-t-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Mouth</button>
											{/* show on hover for mouth */}
											{dropdownHover["mouth"] ? 
												<div onMouseEnter={() => setDropdownHover(x => ({...x,mouth: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,mouth: false}))} className="absolute left-[100%] top-[0] pr-4 pb-4">
													<div  className="ml-4  bg-white text-gray-700 text-sm p-4  rounded-lg">
														<ul className="w-48">
															{
																mouth.map(item => (
																	<li className="flex justify-start items-center">
																		<input className="" type="checkbox" name={item.name} checked={checkedItems[item.name]} onChange={handleChange}/>
																		<p className="text-black ml-3">{item.name}</p>
																	</li>
																))
															}
														</ul>
													</div> 
												</div>
											: null }
										</li>
										<li className="relative border-b-[1px] border-gray-300">
											<button onMouseEnter={() => setDropdownHover(x => ({...x,neck: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,neck: false}))} className="w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-t-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Neck</button>
											{/* show on hover for neck */}
											{dropdownHover["neck"] ? 
												<div onMouseEnter={() => setDropdownHover(x => ({...x,neck: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,neck: false}))} className="absolute left-[100%] top-[0] pr-4 pb-4">
													<div  className="ml-4  bg-white text-gray-700 text-sm p-4  rounded-lg">
														<ul className="w-48">
															{
																neck.map(item => (
																	<li className="flex justify-start items-center">
																		<input className="" type="checkbox" name={item.name} checked={checkedItems[item.name]} onChange={handleChange}/>
																		<p className="text-black ml-3">{item.name}</p>
																	</li>
																))
															}
														</ul>
													</div> 
												</div>
											: null }
										</li>
										<li className="relative border-b-[1px] border-gray-300">
											<button onMouseEnter={() => setDropdownHover(x => ({...x,offhand: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,offhand: false}))} className="w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-t-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Offhand</button>
											{/* show on hover for offhand */}
											{dropdownHover["offhand"] ? 
												<div onMouseEnter={() => setDropdownHover(x => ({...x,offhand: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,offhand: false}))} className="absolute left-[100%] top-[0] pr-4 pb-4">
													<div  className="ml-4  bg-white text-gray-700 text-sm p-4  rounded-lg">
														<ul className="w-48">
															{
																offhand.map(item => (
																	<li className="flex justify-start items-center">
																		<input className="" type="checkbox" name={item.name} checked={checkedItems[item.name]} onChange={handleChange}/>
																		<p className="text-black ml-3">{item.name}</p>
																	</li>
																))
															}
														</ul>
													</div> 
												</div>
											: null }
										</li>
										<li className="relative border-b-[1px] border-gray-300">
											<button onMouseEnter={() => setDropdownHover(x => ({...x,special: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,special: false}))} className="w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-t-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Special</button>
											{/* show on hover for special */}
											{dropdownHover["special"] ? 
												<div onMouseEnter={() => setDropdownHover(x => ({...x,special: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,special: false}))} className="absolute left-[100%] top-[0] pr-4 pb-4">
													<div  className="ml-4  bg-white text-gray-700 text-sm p-4  rounded-lg">
														<ul className="w-48">
															{
																special.map(item => (
																	<li className="flex justify-start items-center">
																		<input className="" type="checkbox" name={item.name} checked={checkedItems[item.name]} onChange={handleChange}/>
																		<p className="text-black ml-3">{item.name}</p>
																	</li>
																))
															}
														</ul>
													</div> 
												</div>
											: null }
										</li>
										<li className="relative border-b-[1px] border-gray-300">
											<button onMouseEnter={() => setDropdownHover(x => ({...x,type: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,type: false}))} className="w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-t-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Type</button>
											{/* show on hover for type */}
											{dropdownHover["type"] ? 
												<div onMouseEnter={() => setDropdownHover(x => ({...x,type: true}))} onMouseLeave={() => setDropdownHover(x => ({...x,type: false}))} className="absolute left-[100%] top-[0] pr-4 pb-4">
													<div  className="ml-4  bg-white text-gray-700 text-sm p-4  rounded-lg">
														<ul className="w-48">
															{
																type.map(item => (
																	<li className="flex justify-start items-center">
																		<input className="" type="checkbox" name={item.name} checked={checkedItems[item.name]} onChange={handleChange}/>
																		<p className="text-black ml-3">{item.name}</p>
																	</li>
																))
															}
														</ul>
													</div> 
												</div>
											: null }
										</li>
									</ul>
								</div> 

								{/* active filters on */}
								{ props.activeTraitsFilter.length > 0 ?(
								<div className="md:hidden py-4 whitespace-nowrap w-fit px-4 bg-white absolute right-[90%] top-[130%] rounded-lg z-50">
									{props.activeTraitsFilter.map((item)=>(
										<div className=" w-fit flex">
											<p className="px-2  text-sm text-gray-700">{item}</p>
										</div>
									))}
								</div>
								): null}
							</div>
						): null }
					</div>
				</div>
			</div>
    </>
  )
}

export default Sort;

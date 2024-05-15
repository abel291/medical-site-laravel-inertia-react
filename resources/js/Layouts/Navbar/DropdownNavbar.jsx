import Dropdown from '@/Components/Dropdown'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React from 'react'

const DropdownNavbar = ({ title, links }) => {
	return (
		<Dropdown>
			<Dropdown.Trigger>
				<button className="inline-flex items-center rounded-md   hover:text-primary-600">
					{title}
					<ChevronDownIcon className="w-5 h-5 ml-1 -mr-1 text-gray-800" aria-hidden="true" />
				</button>
			</Dropdown.Trigger>
			<Dropdown.Content align="left">
				{links.map((item) => (
					<Dropdown.Link href={route('specialty', item.slug)} key={item.name} >
						<span>{item.name}</span>
					</Dropdown.Link>
				))}
			</Dropdown.Content>
		</Dropdown >
	)
}

export default DropdownNavbar

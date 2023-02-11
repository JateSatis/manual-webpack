import React from 'react'

const Ingredient = ({name, amount, measurement}) => {
	return (
		<li>{amount} {measurement} {name} </li>
	)
}

export default Ingredient
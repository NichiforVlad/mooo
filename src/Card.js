import React from'react';

const Card = ({ id, name, email }) => {
	return (
		<div>
			<img alt="robots" src={`https://robohash.org/${id}?set=set4&size=200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
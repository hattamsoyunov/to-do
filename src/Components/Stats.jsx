import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {
	let total = props.todos.length;
	let completed = props.todos.filter( todo => todo.completed ).length;
	let notCompleted = total - completed;

	return (
		<table className="stats">
			<tbody>
				<tr>
					<th>Всего задача:</th>
					<td>{total}</td>
				</tr>
				<tr>
					<th>Выволнено:</th>
					<td>{completed}</td>
				</tr>
				<tr>
					<th>Осталось:</th>
					<td>{notCompleted}</td>
				</tr>
			</tbody>
		</table>
	);
}

Stats.propTypes = {
	todos: PropTypes.array.isRequired
}

export default Stats;
import React, { useState } from "react";
import shortid from "shortid";

export function Todos() {
	const [todo, setTodo] = useState("");
	const [listaTodos, setListaTodos] = useState([]);

	let pending = listaTodos.length;

	const deleted = uniqueId => {
		let itemDelete = listaTodos.filter(item => {
			return item.id !== uniqueId;
		});
		setListaTodos(itemDelete);
	};

	const addTodo = e => {
		e.preventDefault();
		setListaTodos([
			...listaTodos,
			{
				id: shortid.generate(),
				nameTodo: "+ " + todo
			}
		]);
		setTodo("");
	};

	return (
		<div className="container bg-light">
			<div className="row vh-100 align-items-center">
				<div className="todo bg-white">
					<header>
						<h1>todos</h1>
						<form className="form-todo" onSubmit={addTodo}>
							<input
								placeholder="¿Qué necesita hacer?"
								onChange={e => setTodo(e.target.value)}
								value={todo}
							/>
						</form>
					</header>
					<section>
						{pending === 0 ? (
							<p>Sin pendientes</p>
						) : (
							listaTodos.map(item => (
								<div key={item.id}>
									<ul className="list-group">
										<li className="list-group-item lista">
											{" "}
											{item.nameTodo}{" "}
											<i
												onClick={() => {
													deleted(item.id);
												}}
												className="fas fa-trash basurero"></i>
										</li>
									</ul>
								</div>
							))
						)}
					</section>
					<footer className="footer">
						<p>{pending} Pendientes</p>
					</footer>
				</div>
			</div>
		</div>
	);
}

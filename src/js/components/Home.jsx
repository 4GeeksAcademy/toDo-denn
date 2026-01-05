import React, { useState } from "react";
import "./HomeStyles.css";


const Home = () => {
	const [task, setTask] = useState("")
	const [tasks, setTasks] = useState([])


	const handleClick = (e) => {
		e.preventDefault();
		if (task.trim() === '') {
			alert('Please enter a valid task.');
			return;
		}
		setTasks([...tasks, task])
		setTask('')
	}


	const deleteFuction = (indexToDelete) => {
		const newTasks = tasks.filter((task, index) => index !== indexToDelete)
		setTasks(newTasks)
	}


	return (
		<div>
			<h1 className="Title">What do we do today?</h1>

				<div className="d-flex justify-content-center">

					<form onSubmit={handleClick}>

						<input
							type="text"
							value={task}
							onChange={(e) => setTask(e.target.value)}
							name="task"
							placeholder="Enter your task here">
						</input>

						<button className="addButton" onClick={handleClick}> add</button>

					</form>

				</div>


			<div className="card">
				<ul>
					{
						tasks.map((task, index) =>
							<li key={index}> {task} <button className="deleteButton" onClick={() => deleteFuction(index)}>X</button></li>)
					}
				</ul>
			</div>

		</div>
	);
};

export default Home;
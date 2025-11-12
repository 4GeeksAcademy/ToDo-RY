import React, { useState } from "react";

const Home = () => {
    const [todos, setTodos] = useState([]);
    
    const [inputValue, setInputValue] = useState("");

    const handleAddTodo = (event) => {
        if (event.key === "Enter" && inputValue.trim() !== "") {
            const newTodo = {
                id: Date.now(), 
                label: inputValue.trim(),
                done: false, 
            };
            
            setTodos([newTodo, ...todos]);
            setInputValue("");
        }
    };
    const handleDeleteTodo = (idToDelete) => {
        const updatedTodos = todos.filter(todo => todo.id !== idToDelete);
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <h1 className="text-center mt-5">Todos</h1>
            <div className="card shadow-lg">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item p-0">
                        <input
                            type="text"
                            className="form-control border-0 shadow-none p-3"
                            placeholder={todos.length === 0 ? "No hay tareas, añadir tareas" : "Añadir tarea..."}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleAddTodo}
                        />
                    </li>
                    {todos.length === 0 ? (
                        <li className="list-group-item text-secondary p-3">
                            No hay tareas, añadir tareas
                        </li>
                    ) : (
                        todos.map((todo) => (
                            <li 
                                key={todo.id} 
                                className="list-group-item d-flex justify-content-between align-items-center todo-item p-3"
                            >
                                <span>{todo.label}</span>
                                <span 
                                    className="delete-icon text-danger"
                                    onClick={() => handleDeleteTodo(todo.id)}
                                >
                                    <i className="fas fa-times"></i>
                                </span>
                            </li>
                        ))
                    )}
                </ul>
                <div className="card-footer text-muted small p-2 ps-3">
                    {todos.length} item{todos.length !== 1 ? 's' : ''} left
                </div>
                <div className="extra-page extra-page-1"></div>
                <div className="extra-page extra-page-2"></div>
            </div>
        </div>
    );
};

export default Home;
import React, {useRef} from 'react';
import './NewTodo.css';


type NewTodoProps = {
    onAddTodo: (todoText: string) => void
   }

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    }
    return (
        <div>
            <form onSubmit = {todoSubmitHandler}>
                <div>
                    <label htmlFor="todo-text">Todo text</label>
                    <input type="text" id = "todo-text" ref = {textInputRef} />
                    <button type="submit" >ADD TODO</button>
                </div>
            </form>
        </div>
        
    )
}

export default NewTodo;
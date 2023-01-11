import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { TextInput, Button } from "../../components"
import { setTodo, removeTodo } from "../../rdx/slices/todo.slice";
export const TodoWidget = () => {
  const dispatch = useDispatch();
  const [todo, setTodoInput] = useState(null);
  const data = useSelector((state) => state.todos)
  console.log(data?.todos);

  const addTodo = () => {
    if(!todo) return;
    dispatch(setTodo({
      id: Math.floor(Math.random()*100000),
      value: todo
    }));
    setTodoInput("");
  }

  const remove = (id) => {
    dispatch(removeTodo(id));
  }

  return (
    <section className='max-w-5xl min-h-[50vh] mx-auto my-6 p-3 bg-white flex flex-col gap-y-3 rounded-md'>
        <div className="text-lg font-bold">Create a Marvel project</div>
        <div className="flex flex-col gap-y-2">
            <div className="text-sm font-medium">Project Name</div>
            <TextInput onChange={(event) => setTodoInput(event.target.value)} 
              className="rounded-md py-2 border-2 hover:border-blue-500"/>
        </div>
        <Button className="bg-blue-500 text-white capitalize w-28 p-2 rounded text-sm" onClick={addTodo}>
          <span className="mx-auto">Add Todo</span>
        </Button>
        <div className="flex flex-col gap-y-3">
          {data?.todos?.map((todo) => <div key={todo.id} className="bg-white p-3 rounded-md flex flex-row gap-x-2 my-2 shadow-xl border border-gray-200">
            <input type={"checkbox"} onClick={() => remove(todo.id)}/>
            <div>{todo.value}</div>
          </div>)}
        </div>
    </section>
  )
}

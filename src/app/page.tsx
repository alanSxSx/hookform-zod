import {sql} from "@vercel/postgres"
// import { DeleteForm } from "@/app/delete-form";
import { AddForm } from "./add-form";

export default async function Home() {
  let data = await sql`SELECT * FROM todos`;
  const {rows:todos} = data

  return (
    <main className="flex flex-col">
      <h1 className="sr-only">Todos</h1>
      <AddForm />
      <ul className="flex flex-col">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {/* <DeleteForm id={todo.id} todo={todo.text} /> */}
          </li>
        ))}
      </ul>
    </main>
  );
}
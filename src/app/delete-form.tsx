"use client";

import { useFormState, useFormStatus } from "react-dom";
import { deleteTodo } from "@/app/actions";

const initialState = {
  message: "",
};

type DeleteFormProps = Readonly<{
    id: number;
    todo: string;
  }>;

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className="border px-3 ml-3">
      Delete
    </button>
  );
}

export function DeleteForm({ id, todo }: DeleteFormProps) {
  const [state, formAction] = useFormState(deleteTodo, initialState);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="todo" value={todo} />
      <DeleteButton />
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
    </form>
  );
}
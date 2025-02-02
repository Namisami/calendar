"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context, FormEvent, useState } from "react"

type FormProviderProps = React.PropsWithChildren & {
  context: Context<any>;
  defaultValues: Record<string, any>;
}

export default function FormProvider({
  context,
  defaultValues,
  children,
}: FormProviderProps) {
  const [state, setState] = useState(defaultValues);
  
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state)
  }

  return (
    <context.Provider value={{state, setState}}>
      <form action="#" onSubmit={submitHandler}>
        { children }
      </form>
    </context.Provider>
  )
};

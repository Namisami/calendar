"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context, FormEvent, useState } from "react"

type FormProviderProps = React.PropsWithChildren & {
  context: Context<any>;
  defaultValues: Record<string, any>;
  onSubmit: (e: FormEvent<HTMLFormElement>, state: any) => void;
}

export default function FormProvider({
  context,
  defaultValues,
  children,
  onSubmit,
}: FormProviderProps) {
  const [state, setState] = useState(defaultValues);

  return (
    <context.Provider value={{state, setState}}>
      <form action="#" onSubmit={(e) => onSubmit(e, state)}>
        { children }
      </form>
    </context.Provider>
  )
};

import { createContext } from "react";

interface UseFormProps<T> {
  defaultValues: T
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useForm<T extends Record<string, any>>({
  defaultValues,
}: UseFormProps<T>) {
  const context = createContext<T>(defaultValues);
  
  return {context, defaultValues};
}

export type FormValues = {
  title: string;
  participiants: string[];
  day: number | null;
  time: string;
}

export const defaultValues: FormValues = {
  title: "",
  participiants: [],
  day: null,
  time: "",
};

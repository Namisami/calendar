export type FormValues = {
  title: string;
  participiants: string[];
  day: number;
  time: string;
}

export const defaultValues: FormValues = {
  title: "",
  participiants: [],
  day: -1,
  time: "",
};

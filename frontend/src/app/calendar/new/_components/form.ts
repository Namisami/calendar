export type FormValues = {
  title: string;
  participiants: string[];
  day: string;
  time: string;
}

export const defaultValues: FormValues = {
  title: "",
  participiants: [],
  day: "",
  time: "",
};

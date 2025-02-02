export type User = {
  url: string;
  username: string;
}

export type Task = {
  url: string;
  id: number;
  title: string;
  day: number;
  user_id: string[];
}

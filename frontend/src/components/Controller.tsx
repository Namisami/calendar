"use client"

import { Context, ReactNode, useContext } from "react"

type RenderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  onChange: (e: unknown) => void;
}

type ControllerProps = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: Context<any>;
  render: ({ value, onChange }: RenderProps) => ReactNode;
}

export default function Controller({
  name,
  context,
  render,
}: ControllerProps) {
  const {state, setState} = useContext(context);

  const onChange = (e: unknown) => {
    const value = getEventValue(e);
    setState({...state, [name]: value});
  }

  return render({ onChange, value: state[name] })
}

type Event = { 
  target: {
    value: string;
  }
};

function getEventValue(e: unknown) {
  if (e && typeof e === "object" && (e as Event).target) {
    return (e as Event).target.value;
  } else {
    return e;
  }
}

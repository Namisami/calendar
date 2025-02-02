"use client"

import { Context, ReactNode, useContext } from "react"

type RenderProps = {
  onChange: (e: unknown) => void;
}

type ControllerProps = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: Context<any>;
  render: ({ onChange }: RenderProps) => ReactNode;
}

export default function Controller({
  name,
  context,
  render,
}: ControllerProps) {
  const {state, setState} = useContext(context);

  const onChange = (e: unknown) => {
    setState({...state, [name]: getEventValue(e)});
  }

  return render({ onChange })
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

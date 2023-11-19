'use client'

import {Config, Data, DefaultRootProps, Puck} from "@measured/puck";
import "@measured/puck/dist/index.css";
import {Card, CardProps} from "apps/client/src/blocks/Card";
import {ReactNode} from "react";

export type RootProps = {
  children: ReactNode;
  title: string;
} & DefaultRootProps;

type Props = {
  Card: CardProps;
};

// Create puck component config
const config: Config<Props, RootProps> = {
  components: {
    Card,
  },
};

// Describe the initial data
const initialData = {
  content: [],
  root: {},
};

// Render Puck editor
export function Editor() {
  const onPublish = (data: Data) => {
    console.log(data)
  }

  return <Puck config={config} data={initialData} onPublish={onPublish} />;
}

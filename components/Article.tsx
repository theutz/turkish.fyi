import { ReactNode } from "react";
import classNames from "classnames";

type Props = {
  children: ReactNode;
  isProse?: boolean;
};

export function Article({ isProse, ...rest }: Props) {
  return <article {...rest} className={classNames({ prose: isProse })} />;
}

export default Article;

import { Heading1 } from "./Heading1";
import { Heading2 } from "./Heading2";
import { Paragraph } from "./Paragraph";
import { UnorderedList } from "./UnorderedList";
import { ListItem } from "./ListItem";
import { Default } from "../layouts/Default";

export const components = {
  h1: Heading1,
  h2: Heading2,
  p: Paragraph,
  ul: UnorderedList,
  li: ListItem,
  wrapper: Default,
};

import { useState } from "react";
import constate from "constate";

const defaultValues = {
  title: "turkish.fyi",
  description: "All the Turkish I need, and nothing more.",
};

function useSiteData() {
  const [title, setTitle] = useState(defaultValues.title);
  const [description, setDescription] = useState(defaultValues.description);

  return { title, setTitle, description, setDescription };
}

export const [SiteDataProvider, useSiteTitle, useSiteDescription] = constate(
  useSiteData,
  ({ title, setTitle }) => [title, setTitle] as const,
  ({ description, setDescription }) => [description, setDescription] as const
);

import { HTMLProps, ReactNode, useCallback, useEffect, useState } from "react";
import { Postpositions, Translation } from "../../data/postpositions";

type Props = {
  data?: Postpositions;
};

function TH({
  isVisible = true,
  ...props
}: {
  isVisible?: boolean;
} & HTMLProps<HTMLTableHeaderCellElement>) {
  return isVisible ? <th {...props} /> : null;
}

export function useFieldVisibility() {
  const defaultFields = ["word", "root", "examples", "kind", "group"];
  const [fields, setFields] = useState(defaultFields);

  const isVisible = (field: typeof defaultFields[0]) => fields.includes(field);
  const hideField = (field: typeof defaultFields[0]) => {
    setFields((prev) => prev.filter((f) => f !== field));
  };

  return { isVisible, hideField };
}

export function PostpositionsTable({ data = [] }: Props) {
  const { isVisible, hideField } = useFieldVisibility();

  if (data.length === 0) return null;

  return (
    <table className="border-collapse table-auto">
      <thead>
        <tr className="text-left border-b border-gray-400">
          <TH isVisible={isVisible("word")} onClick={() => hideField("word")}>
            Word
          </TH>
          <TH isVisible={isVisible("word")}>Definition</TH>
          <TH isVisible={isVisible("kind")}>Kind</TH>
          <TH isVisible={isVisible("group")}>Group</TH>
          <TH isVisible={isVisible("root")} colSpan={2}>
            Root
          </TH>
          <TH isVisible={isVisible("examples")} colSpan={2}>
            Examples
          </TH>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({
            word: [word, definition = []],
            kind,
            group,
            root: [root, rootDef = []] = [],
            examples = [],
          }) => {
            const longest = getLongestArray(definition, examples, rootDef);
            const makeCellComponent = makeCellComponentFactory(longest);

            return Array.from({ length: longest }, (_, i) => i).map((i) => {
              const makeTestId = makeTestIdFactory(word, kind, group, i);
              const rowId = makeTestId()();
              const Cell = makeCellComponent({ i, makeTestId });

              return (
                <tr
                  key={rowId}
                  data-testid={rowId}
                  className="border-b border-b-gray-200"
                >
                  <Cell isVisible={isVisible("word")} fieldName="word">
                    {word}
                  </Cell>
                  <Cell isVisible={isVisible("word")} fieldName="definition">
                    {definition}
                  </Cell>
                  <Cell isVisible={isVisible("kind")} fieldName="kind">
                    {kind}
                  </Cell>
                  <Cell isVisible={isVisible("group")} fieldName="group">
                    {group}
                  </Cell>
                  <Cell isVisible={isVisible("root")} fieldName="root">
                    {root}
                  </Cell>
                  <Cell isVisible={isVisible("root")} fieldName="rootDef">
                    {rootDef}
                  </Cell>
                  <Cell isVisible={isVisible("examples")} fieldName="examples">
                    {examples}
                  </Cell>
                </tr>
              );
            });
          }
        )}
      </tbody>
    </table>
  );
}

function makeCellComponentFactory(longestEntryLength: number) {
  return ({
    i,
    makeTestId,
  }: {
    i: number;
    makeTestId: ReturnType<typeof makeTestIdFactory>;
  }) => {
    return function Cell({
      children,
      fieldName,
      isVisible = true,
    }: {
      children?: string | readonly string[] | readonly Translation[];
      fieldName: string;
      isVisible?: boolean;
    }) {
      if (!isVisible) {
        return null;
      }

      const id = makeTestId(fieldName)();

      if (["string", "undefined"].includes(typeof children)) {
        if (i === 0) {
          return (
            <td data-testid={id} rowSpan={longestEntryLength}>
              {children}
            </td>
          );
        }
      }

      if (Array.isArray(children)) {
        const rowSpan =
          i === children.length - 1
            ? longestEntryLength - children.length + 1
            : 1;

        if (i <= children.length - 1) {
          const child = children[i];

          if (Array.isArray(child)) {
            return (
              <>
                {child.map((c, j) => {
                  const content = Array.isArray(c) ? c[0] : c;

                  return (
                    <td
                      key={makeTestId(fieldName)(j)}
                      data-testid={makeTestId(fieldName)(j)}
                      rowSpan={rowSpan}
                    >
                      {content}
                    </td>
                  );
                })}
              </>
            );
          }

          return (
            <td data-testid={id} rowSpan={rowSpan}>
              {child}
            </td>
          );
        }

        if (children.length === 0) {
          return <td data-testid={id} rowSpan={1} />;
        }
      }

      return null;
    };
  };
}

type makeTestIdFactory = (
  word: string,
  kind: string,
  group: string,
  i: number
) => (field?: string) => (j?: number) => string;
export const makeTestIdFactory: makeTestIdFactory =
  (word, kind, group, i) => (field) => (j) =>
    [word, kind, group, i, field, j]
      .filter((x) => (x ?? null) !== null)
      .join("-");

function sortArrayByLengthDesc(a: readonly unknown[], b: readonly unknown[]) {
  if (a.length < b.length) return 1;
  if (a.length > b.length) return -1;
  return 0;
}

export function getLongestArray(...args: (readonly unknown[])[]): number {
  return args.sort(sortArrayByLengthDesc)[0].length;
}

export default PostpositionsTable;

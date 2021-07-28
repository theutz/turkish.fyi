import { Postpositions, Translation } from "../../data/postpositions";

type Props = {
  data?: Postpositions;
};

export function PostpositionsTable({ data = [] }: Props) {
  if (data.length === 0) return null;

  return (
    <table className="border-collapse table-auto">
      <thead>
        <tr className="text-left border-b border-gray-400">
          <th>Word</th>
          <th>Definition</th>
          <th>Kind</th>
          <th>Group</th>
          <th colSpan={2}>Root</th>
          <th colSpan={2}>Examples</th>
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
                  <Cell fieldName="word">{word}</Cell>
                  <Cell fieldName="definition">{definition}</Cell>
                  <Cell fieldName="kind">{kind}</Cell>
                  <Cell fieldName="group">{group}</Cell>
                  <Cell fieldName="root">{root}</Cell>
                  <Cell fieldName="rootDef">{rootDef}</Cell>
                  <Cell fieldName="examples">{examples}</Cell>
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
    }: {
      children?: string | readonly string[] | readonly Translation[];
      fieldName: string;
    }) {
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

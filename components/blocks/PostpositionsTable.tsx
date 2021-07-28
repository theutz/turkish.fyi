import { Postpositions } from "../../data/postpositions";

type Props = {
  data?: Postpositions;
};

export function PostpositionsTable({ data = [] }: Props) {
  if (data.length === 0) return null;
  return (
    <table className="border-collapse table-auto">
      <thead>
        <tr className="border-b border-gray-400 text-left">
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
            const longest = [definition, examples, rootDef].sort((a, b) =>
              a.length < b.length ? 1 : a.length > b.length ? -1 : 0
            )[0].length;
            return Array.from({ length: longest }, (_, i) => i).map((i) => {
              const id = `${word}-${kind}-${group}-${i}`;
              return (
                <tr
                  key={id}
                  data-testid={id}
                  className="border-b border-b-gray-200"
                >
                  {i === 0 && (
                    <td data-testid={`${id}-word`} rowSpan={longest}>
                      {word}
                    </td>
                  )}
                  {i + 1 <= definition.length ? (
                    <td
                      data-testid={`${id}-definition`}
                      rowSpan={
                        i + 1 === definition.length
                          ? longest - definition.length + 1
                          : 1
                      }
                    >
                      {definition[i]}
                    </td>
                  ) : i === 0 ? (
                    <td data-testid={`${id}-definition`} rowSpan={1} />
                  ) : null}
                  {i === 0 && (
                    <td data-testid={`${id}-kind`} rowSpan={longest}>
                      {kind}
                    </td>
                  )}
                  {i === 0 && (
                    <td data-testid={`${id}-group`} rowSpan={longest}>
                      {group}
                    </td>
                  )}
                  {i === 0 && (
                    <td data-testid={`${id}-root`} rowSpan={longest}>
                      {root}
                    </td>
                  )}
                  {i + 1 <= rootDef.length ? (
                    <td
                      data-testid={`${id}-rootDef`}
                      rowSpan={
                        i + 1 === rootDef.length
                          ? longest - rootDef.length + 1
                          : 1
                      }
                    >
                      {rootDef[i]}
                    </td>
                  ) : i === 0 ? (
                    <td data-testid={`${id}-rootDef`} rowSpan={longest} />
                  ) : null}
                  {i + 1 <= examples.length ? (
                    <>
                      <td
                        data-testid={`${id}-examples-0`}
                        rowSpan={
                          i + 1 === examples.length
                            ? longest - examples.length + 1
                            : 1
                        }
                      >
                        {examples[i]?.[0]}
                      </td>
                      <td
                        data-testid={`${id}-examples-1`}
                        rowSpan={
                          i + 1 === examples.length
                            ? longest - examples.length + 1
                            : 1
                        }
                      >
                        {examples[i]?.[1]?.[0]}
                      </td>
                    </>
                  ) : i === 0 ? (
                    <>
                      <td data-testid={`${id}-examples-0`} rowSpan={longest} />
                      <td data-testid={`${id}-examples-1`} rowSpan={longest} />
                    </>
                  ) : null}
                </tr>
              );
            });
          }
        )}
      </tbody>
    </table>
  );
}

export default PostpositionsTable;

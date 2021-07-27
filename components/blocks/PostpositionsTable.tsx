import { ReactNode } from "react";
import { postpositions as data } from "../../data/postpositions";

export function PostpositionsTable() {
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
              return (
                <tr
                  key={`${word}-${kind}-${group}`}
                  className="border-b border-b-gray-200"
                >
                  {i === 0 && <td rowSpan={longest}>{word}</td>}
                  {i + 1 <= definition.length && (
                    <td
                      rowSpan={
                        i + 1 === definition.length
                          ? longest - definition.length + 1
                          : 1
                      }
                    >
                      {definition[i]}
                    </td>
                  )}
                  {i === 0 && <td rowSpan={longest}>{kind}</td>}
                  {i === 0 && <td rowSpan={longest}>{group}</td>}
                  {i === 0 && <td rowSpan={longest}>{root}</td>}
                  <td rowSpan={1}>{rootDef}</td>
                  {i + 1 <= examples.length && (
                    <>
                      <td
                        rowSpan={
                          i + 1 === examples.length
                            ? longest - examples.length + 1
                            : 1
                        }
                      >
                        {examples[i]?.[0]}
                      </td>
                      <td
                        rowSpan={
                          i + 1 === examples.length
                            ? longest - examples.length + 1
                            : 1
                        }
                      >
                        {examples[i]?.[1]?.[0]}
                      </td>
                    </>
                  )}
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

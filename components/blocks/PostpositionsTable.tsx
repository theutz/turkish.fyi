import { ReactNode } from "react";
import { postpositions as data } from "../../data/postpositions";

function Cell({ children }: { children: ReactNode }) {
  switch (typeof children) {
    case "string": {
      return <td>{children}</td>;
    }
    case "object": {
      if (Array.isArray(children)) {
        if (children.every(Array.isArray)) {
          console.log(children);
          return (
            <td>
              {children.map(([turkish, english]) => (
                <div key={english}>
                  <p>{turkish}</p>
                  <p> {english}</p>
                </div>
              ))}
            </td>
          );
        }
        return (
          <td>
            <ul>
              {children.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </td>
        );
      }

      return null;
    }
    case "undefined": {
      return <td></td>;
    }
    default: {
      throw new Error(`Unknown child: ${typeof children}`);
    }
  }
}

export function PostpositionsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Word</th>
          <th>Definition</th>
          <th>Kind</th>
          <th>Group</th>
          <th>Root</th>
          <th>Root Definition</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({
            word: [word, definition],
            kind,
            group,
            root: [root, rootDef] = [],
            examples,
          }) => {
            return (
              <tr key={word}>
                <Cell>{word}</Cell>
                <Cell>{definition}</Cell>
                <Cell>{kind}</Cell>
                <Cell>{group}</Cell>
                <Cell>{root}</Cell>
                <Cell>{rootDef}</Cell>
                <Cell>{examples}</Cell>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}

export default PostpositionsTable;
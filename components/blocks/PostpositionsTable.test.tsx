import { render, screen } from "@testing-library/react";
import {
  PostpositionsTable as Sut,
  getLongestArray,
  makeTestIdFactory,
} from "./PostpositionsTable";
import { Postpositions } from "../../data/postpositions";

test("matches the snapshot", () => {
  const { asFragment } = render(<Sut />);
  expect(asFragment()).toMatchSnapshot();
});

describe(`getLongestArray`, () => {
  test(`gets the length of the longest array`, () => {
    const definition = Array.from({ length: 20 }, (_, i) => i);
    const examples = ["1"];
    const rootDef: string[] = [];

    const result = getLongestArray(examples, definition, rootDef);

    expect(result).toBe(20);
  });
});

describe(`makeTestIdFactory`, () => {
  const word = "üstünde";
  const kind = "bare";
  const group = "dative";
  const field = "kind";

  describe.each`
    i    | j
    ${0} | ${0}
    ${1} | ${0}
    ${0} | ${1}
    ${1} | ${1}
  `("i = $i, j = $j", ({ i, j }) => {
    test(`row`, () => {
      const result = makeTestIdFactory(word, kind, group, i)()();

      expect(result).toEqual(`${word}-${kind}-${group}-${i}`);
    });

    test(`cell`, () => {
      const result = makeTestIdFactory(word, kind, group, i)(field)();

      expect(result).toEqual(`${word}-${kind}-${group}-${i}-${field}`);
    });

    test(`cell with iteration`, () => {
      const result = makeTestIdFactory(word, kind, group, i)(field)(j);

      expect(result).toEqual(`${word}-${kind}-${group}-${i}-${field}-${j}`);
    });
  });
});

describe("bare kind", () => {
  const data: Postpositions = [
    {
      word: ["word", ["def1", "def2", "def3"]],
      kind: "bare",
      group: "dative",
      examples: [["turkish", ["english"]]],
    },
  ];

  let row1: ReturnType<typeof screen.queryByTestId>;
  let row2: ReturnType<typeof screen.queryByTestId>;
  let row3: ReturnType<typeof screen.queryByTestId>;
  let word: ReturnType<typeof screen.queryByText>;
  let kind: ReturnType<typeof screen.queryByText>;
  let root: ReturnType<typeof screen.queryByText>;
  let rootDef: ReturnType<typeof screen.queryByText>;
  let group: ReturnType<typeof screen.queryByText>;
  let turkish: ReturnType<typeof screen.queryByText>;
  let english: ReturnType<typeof screen.queryByText>;

  beforeEach(() => {
    // Act
    render(<Sut data={data} />);

    word = screen.queryByText("word");
    kind = screen.queryByText("bare");
    group = screen.queryByText("dative");
    root = screen.queryByTestId("word-bare-dative-0-root");
    rootDef = screen.queryByTestId("word-bare-dative-0-rootDef");
    turkish = screen.queryByText("turkish");
    english = screen.queryByText("english");
    row1 = screen.queryByTestId("word-bare-dative-0");
    row2 = screen.queryByTestId("word-bare-dative-1");
    row3 = screen.queryByTestId("word-bare-dative-2");
  });

  describe("row 1", () => {
    it("renders the word", () => {
      expect(row1).toContainElement(word);
    });

    it("renders the kind", () => {
      expect(row1).toContainElement(kind);
    });

    it("renders the group", () => {
      expect(row1).toContainElement(group);
    });

    it("renders an empty root", () => {
      expect(row1).toContainElement(root);
      expect(root).toBeEmptyDOMElement();
    });

    it("renders an empty root def", () => {
      expect(row1).toContainElement(rootDef);
      expect(root).toBeEmptyDOMElement();
    });

    it("renders a turkish example", () => {
      expect(row1).toContainElement(turkish);
    });

    it("renders an english tranlsation", () => {
      expect(row1).toContainElement(english);
    });
  });

  describe("row 2", () => {
    it("does not contain the word", () => {
      expect(row2).not.toContainElement(word);
    });

    it("contain definition 2", () => {
      expect(row2).toContainElement(screen.getByText("def2"));
    });

    it("does not contain kind", () => {
      expect(row2).not.toContainElement(kind);
    });

    it(`does not contain group`, () => {
      expect(row2).not.toContainElement(group);
    });

    it(`does not contain a root`, () => {
      expect(row2).not.toContainElement(root);
    });

    it(`does not contain a root def`, () => {
      expect(row2).not.toContainElement(rootDef);
    });

    it(`does not contain a turkish example`, () => {
      expect(row2).not.toContainElement(turkish);
    });

    it(`does not contain an english example`, () => {
      expect(row2).not.toContainElement(english);
    });
  });

  describe("row 3", () => {
    it(`does not contain a word`, () => {
      expect(row3).not.toContainElement(word);
    });

    it(`contains definition 3`, () => {
      expect(row3).toContainElement(screen.getByText("def3"));
    });

    it(`does not contain a kind`, () => {
      expect(row3).not.toContainElement(kind);
    });

    it(`does not contain a group`, () => {
      expect(row3).not.toContainElement(group);
    });

    it(`does not contain a root`, () => {
      expect(row3).not.toContainElement(root);
    });

    it(`does not contain a root def`, () => {
      expect(row3).not.toContainElement(rootDef);
    });

    it(`does not contain a turkish example`, () => {
      expect(row3).not.toContainElement(turkish);
    });

    it(`does not contain an english example`, () => {
      expect(row3).not.toContainElement(english);
    });
  });
});

describe("posessive kind", () => {
  // Arrange
  const data: Postpositions = [
    {
      word: ["word", ["def1", "def2"]],
      kind: "posessive",
      group: "abstract",
      root: ["root", ["rootDef1"]],
      examples: [
        ["turkish1", ["english1"]],
        ["turkish2", ["english2"]],
        ["turkish3", ["english3"]],
      ],
    },
  ];

  let row1: ReturnType<typeof screen.queryByTestId>;
  let row2: ReturnType<typeof screen.queryByTestId>;
  let row3: ReturnType<typeof screen.queryByTestId>;
  let row4: ReturnType<typeof screen.queryByTestId>;
  let word: ReturnType<typeof screen.queryByText>;
  let def1: ReturnType<typeof screen.queryByText>;
  let def2: ReturnType<typeof screen.queryByText>;
  let kind: ReturnType<typeof screen.queryByText>;
  let group: ReturnType<typeof screen.queryByText>;
  let root: ReturnType<typeof screen.queryByText>;
  let rootDef: ReturnType<typeof screen.queryByText>;
  let turkish1: ReturnType<typeof screen.queryByText>;
  let turkish2: ReturnType<typeof screen.queryByText>;
  let turkish3: ReturnType<typeof screen.queryByText>;
  let english1: ReturnType<typeof screen.queryByText>;
  let english2: ReturnType<typeof screen.queryByText>;
  let english3: ReturnType<typeof screen.queryByText>;

  beforeEach(() => {
    // Act
    render(<Sut data={data} />);

    // Assert
    row1 = screen.queryByTestId("word-posessive-abstract-0");
    row2 = screen.queryByTestId("word-posessive-abstract-1");
    row3 = screen.queryByTestId("word-posessive-abstract-2");
    row4 = screen.queryByTestId("word-posessive-abstract-3");
    word = screen.queryByText("word");
    def1 = screen.queryByText("def1");
    def2 = screen.queryByText("def2");
    kind = screen.queryByText("posessive");
    group = screen.queryByText("abstract");
    root = screen.queryByText("root");
    rootDef = screen.queryByText("rootDef1");
    turkish1 = screen.queryByText("turkish1");
    turkish2 = screen.queryByText("turkish2");
    turkish3 = screen.queryByText("turkish3");
    english1 = screen.queryByText("english1");
    english2 = screen.queryByText("english2");
    english3 = screen.queryByText("english3");
  });

  describe("renders posessive kind", () => {
    describe(`row1`, () => {
      it(`contains the word`, () => {
        expect(row1).toContainElement(word);
      });

      it(`contains the definition 1`, () => {
        expect(row1).toContainElement(def1);
      });

      it(`contains the kind`, () => {
        expect(row1).toContainElement(kind);
      });

      it(`contains the group`, () => {
        expect(row1).toContainElement(group);
      });

      it(`contains the root`, () => {
        expect(row1).toContainElement(root);
      });

      it(`contains the root definition`, () => {
        expect(row1).toContainElement(rootDef);
      });

      it(`contains turkish example 1`, () => {
        expect(row1).toContainElement(turkish1);
      });

      it(`contains english example 1`, () => {
        expect(row1).toContainElement(english1);
      });

      describe(`rowspan`, () => {
        test(`word`, () => {
          expect(word).toHaveAttribute("rowspan", "3");
        });

        test(`definition 1`, () => {
          expect(def1).toHaveAttribute("rowspan", "1");
        });

        test(`kind`, () => {
          expect(kind).toHaveAttribute("rowspan", "3");
        });

        test(`group`, () => {
          expect(group).toHaveAttribute("rowspan", "3");
        });

        test(`root`, () => {
          expect(root).toHaveAttribute("rowspan", "3");
        });

        test(`root definition`, () => {
          expect(rootDef).toHaveAttribute("rowspan", "3");
        });

        test(`turkish example 1`, () => {
          expect(turkish1).toHaveAttribute("rowspan", "1");
        });

        test(`english example 1`, () => {
          expect(english1).toHaveAttribute("rowspan", "1");
        });
      });
    });

    describe(`row 2`, () => {
      it(`does not contain word`, () => {
        expect(row2).not.toContainElement(word);
      });

      it(`contains definition 2`, () => {
        expect(row2).toContainElement(def2);
      });

      it(`does not contain kind`, () => {
        expect(row2).not.toContainElement(kind);
      });

      it(`does not contain group`, () => {
        expect(row2).not.toContainElement(group);
      });

      it(`does not contain root`, () => {
        expect(row2).not.toContainElement(root);
      });

      it(`does not contain root definition`, () => {
        expect(row2).not.toContainElement(rootDef);
      });

      it(`contains turkish example 2`, () => {
        expect(row2).toContainElement(turkish2);
      });

      it(`contains english example 2`, async () => {
        expect(row2).toContainElement(english2);
      });

      describe(`rowspan`, () => {
        test(`definition 2`, () => {
          expect(def2).toHaveAttribute("rowspan", "2");
        });

        test(`turkish example 2`, () => {
          expect(turkish2).toHaveAttribute("rowspan", "1");
        });

        test(`english example 2`, () => {
          expect(english2).toHaveAttribute("rowspan", "1");
        });
      });
    });

    describe(`row 3`, () => {
      it(`does not contain word`, () => {
        expect(row3).not.toContainElement(word);
      });

      it(`does not contain kind`, () => {
        expect(row3).not.toContainElement(kind);
      });

      it(`does not contain group`, () => {
        expect(row3).not.toContainElement(group);
      });

      it(`does not contain root`, () => {
        expect(row3).not.toContainElement(root);
      });

      it(`does not contain root definition`, () => {
        expect(row3).not.toContainElement(rootDef);
      });

      it(`contains turkish example 3`, () => {
        expect(row3).toContainElement(turkish3);
      });

      it(`contains english example 3`, () => {
        expect(row3).toContainElement(english3);
      });

      describe(`rowspan`, () => {
        test(`turkish example 3`, () => {
          expect(turkish3).toHaveAttribute("rowspan", "1");
        });

        test(`english example 3`, () => {
          expect(english3).toHaveAttribute("rowspan", "1");
        });
      });
    });

    test(`row 4`, async () => {
      expect(row4).not.toBeInTheDocument();
    });
  });
});

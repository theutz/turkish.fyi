type Translation = readonly [string, string | readonly string[]];

type Kind = "bare" | "posessive";

type Postposition = {
  word: Translation;
  kind: Kind;
  group: string;
  root?: Translation;
  examples: readonly Translation[];
} & (
  | {
      kind: "bare";
      group: "none/genitive" | "dative" | "ablative";
    }
  | { kind: "posessive"; group: "spatial" | "abstract"; root: Translation }
);

type Postpositions = readonly Postposition[];

const bareNoneOrGenitive: Postpositions = [
  {
    word: ["gibi", "like"],
    kind: "bare",
    group: "none/genitive",
    examples: [["Ayşe gibi", "like Ayşe"]],
  },
  {
    word: ["için", "for"],
    kind: "bare",
    group: "none/genitive",
    examples: [["Ayşe için", "for Ayşe"]],
  },
  {
    word: ["ile", "with"],
    kind: "bare",
    group: "none/genitive",
    examples: [["Ayşe ile", "with Ayşe"]],
  },
  {
    word: ["kadar", "as ... as"],
    kind: "bare",
    group: "none/genitive",
    examples: [["Ayşe kadar ...", "as ... as Ayşe"]],
  },
];

const bareDative: Postpositions = [
  {
    word: ["doğru", "towards (time/place)"],
    kind: "bare",
    group: "dative",
    examples: [
      ["üçe doğru", "towards 3 o'clock"],
      ["eve doğru", "towards home"],
    ],
  },
  {
    word: ["göre", ["according to", "compared with", "right for"]],
    kind: "bare",
    group: "dative",
    examples: [
      ["sana göre", "according to you"],
      ["İngeltere'ye göre", "compared with England"],
      ["bize göre", "right for us"],
    ],
  },
  {
    word: ["kadar", ["until, by (time)", "as far as (place)"]],
    kind: "bare",
    group: "dative",
    examples: [
      ["sabah kadar", "until morning"],
      ["Ankara'ya kadar", "as far as Ankara"],
    ],
  },
];

const posessiveSpatial: Postpositions = [
  {
    word: ["üstünde", ["on", "on top of", "above"]],
    root: ["üst", "top"],
    kind: "posessive",
    group: "spatial",
    examples: [
      [
        "Gerekli olan her şey masanın üstünde.",
        "Everything necessary is on the table",
      ],
    ],
  },
  {
    word: ["arasında", ["between", "among"]],
    root: ["ara", ["space", "interval"]],
    kind: "posessive",
    group: "spatial",
    examples: [
      [
        `Migros'la Ulus sineması arasında başka bina yok`,
        "There is no other building between Migros and the Ulus cinema",
      ],
    ],
  },
];

export const postpositions: Postpositions = [
  ...bareNoneOrGenitive,
  ...bareDative,
  ...posessiveSpatial,
];

export type Translation = readonly [string, readonly string[]];

export type Kind = "bare" | "posessive";

export type BareGroup = "none/genitive" | "dative" | "ablative";

export type PosessiveGroup = "spatial" | "abstract";

export type Postposition = {
  word: Translation;
  kind: Kind;
  group: string;
  root?: Translation;
  examples: readonly Translation[];
} & (
  | {
      kind: "bare";
      group: BareGroup;
    }
  | { kind: "posessive"; group: PosessiveGroup; root: Translation }
);

export type Postpositions = readonly Postposition[];

const bareNoneOrGenitive: Postpositions = [
  {
    word: ["gibi", ["like"]],
    kind: "bare",
    group: "none/genitive",
    examples: [["Ayşe gibi", ["like Ayşe"]]],
  },
  {
    word: ["için", ["for"]],
    kind: "bare",
    group: "none/genitive",
    examples: [["Ayşe için", ["for Ayşe"]]],
  },
  {
    word: ["ile", ["with"]],
    kind: "bare",
    group: "none/genitive",
    examples: [["Ayşe ile", ["with Ayşe"]]],
  },
  {
    word: ["kadar", ["as ... as"]],
    kind: "bare",
    group: "none/genitive",
    examples: [["Ayşe kadar ...", ["as ... as Ayşe"]]],
  },
];

const bareDative: Postpositions = [
  {
    word: ["doğru", ["towards (time/place)"]],
    kind: "bare",
    group: "dative",
    examples: [
      ["üçe doğru", ["towards 3 o'clock"]],
      ["eve doğru", ["towards home"]],
    ],
  },
  {
    word: ["göre", ["according to", "compared with", "right for"]],
    kind: "bare",
    group: "dative",
    examples: [
      ["sana göre", ["according to you"]],
      ["İngeltere'ye göre", ["compared with England"]],
      ["bize göre", ["right for us"]],
    ],
  },
  {
    word: ["kadar", ["until, by (time)", "as far as (place)"]],
    kind: "bare",
    group: "dative",
    examples: [
      ["sabah kadar", ["until morning"]],
      ["Ankara'ya kadar", ["as far as Ankara"]],
    ],
  },
  {
    word: ["karşi", ["facing", "towards (of attitudes/feelings)", "against"]],
    kind: "bare",
    group: "dative",
    examples: [
      ["denize karşi", ["facing the sea"]],
      ["bana karşi", ["towards me"]],
      ["sigaraya karşi", ["against smoking"]],
    ],
  },
  {
    word: ["rağmen/karşin", ["in spite of"]],
    kind: "bare",
    group: "dative",
    examples: [["soğuğa rağmen", ["in spite of the cold"]]],
  },
];

const bareAblative: Postpositions = [
  {
    word: ["beri", ["since", "for (amount of time)"]],
    kind: "bare",
    group: "ablative",
    examples: [
      ["dün akşamdan beri", ["since yesterday evening"]],
      ["birkaç günden beri", ["for several days (now)"]],
    ],
  },
  {
    word: ["bu yana", ["since"]],
    kind: "bare",
    group: "ablative",
    examples: [["mayıstan bu yana", ["since May"]]],
  },
  {
    word: ["önce", ["before"]],
    kind: "bare",
    group: "ablative",
    examples: [["ondan önce", ["before that"]]],
  },
  {
    word: ["sonra", ["after"]],
    kind: "bare",
    group: "ablative",
    examples: [["dersten sonra", ["after the lesson"]]],
  },
  {
    word: ["başka", ["apart from"]],
    kind: "bare",
    group: "ablative",
    examples: [["senden başka", ["apart from you"]]],
  },
  {
    word: ["dolayı", ["because of"]],
    kind: "bare",
    group: "ablative",
    examples: [["uzmanlığından dolayı", ["because of his/her expertise"]]],
  },
];

const posessiveSpatial: Postpositions = [
  {
    root: ["ön", ["front"]],
    word: ["önünde", ["in front of"]],
    kind: "posessive",
    group: "spatial",
    examples: [["", [""]]],
  },
  {
    root: ["arka/ard", ["back"]],
    word: ["arkasında/ardında", ["behind"]],
    kind: "posessive",
    group: "spatial",
    examples: [["", [""]]],
  },
  {
    root: ["iç", ["interior"]],
    word: ["içinde", ["in", "inside"]],
    kind: "posessive",
    group: "spatial",
    examples: [
      [
        "Bahçeye ulaşmak için evin içinden geçmek gerekiyordu",
        ["In order to reach the garden, one has to go through the house."],
      ],
    ],
  },
  {
    root: ["diş", ["exterior"]],
    word: ["dışında", ["outside"]],
    kind: "posessive",
    group: "spatial",
    examples: [["", [""]]],
  },
  {
    root: ["üst", ["top"]],
    word: ["üstünde", ["on", "on top of", "above"]],
    kind: "posessive",
    group: "spatial",
    examples: [
      [
        "Gerekli olan her şey masanın üstünde.",
        ["Everything necessary is on the table"],
      ],
    ],
  },
  {
    root: ["alt", ["bottom"]],
    word: ["altında", ["under", "underneath"]],
    kind: "posessive",
    group: "spatial",
    examples: [["", [""]]],
  },
  {
    root: ["yan", ["side"]],
    word: ["yanında", ["beside", "next to"]],
    kind: "posessive",
    group: "spatial",
    examples: [["", [""]]],
  },
  {
    root: ["karşı", ["opposite side"]],
    word: ["karşısında", ["opposite"]],
    kind: "posessive",
    group: "spatial",
    examples: [["", [""]]],
  },
  {
    root: ["ara", ["space", "interval"]],
    word: ["arasında", ["between", "among"]],
    kind: "posessive",
    group: "spatial",
    examples: [
      [
        `Migros'la Ulus sineması arasında başka bina yok`,
        ["There is no other building between Migros and the Ulus cinema"],
      ],
    ],
  },
  {
    root: ["etraf/çevre", ["surroundings"]],
    word: ["etrafında/çevresinde", ["around"]],
    kind: "posessive",
    group: "spatial",
    examples: [["", [""]]],
  },
  {
    root: ["öte", ["far side"]],
    word: ["ötesinde", ["beyond"]],
    kind: "posessive",
    group: "spatial",
    examples: [["", [""]]],
  },
];

const posessiveAbstract: Postpositions = [
  {
    root: ["açı", ["angle"]],
    word: ["açısından", ["from the point of view of"]],
    kind: "posessive",
    group: "abstract",
    examples: [["", [""]]],
  },
  {
    root: ["bakım", ["view"]],
    word: ["bakımından", ["in terms of"]],
    kind: "posessive",
    group: "abstract",
    examples: [["", [""]]],
  },
];

export const postpositions: Postpositions = [
  ...bareNoneOrGenitive,
  ...bareDative,
  ...bareAblative,
  ...posessiveSpatial,
  ...posessiveAbstract,
];

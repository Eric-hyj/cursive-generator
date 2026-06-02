const basicLower = "abcdefghijklmnopqrstuvwxyz";
const basicUpper = basicLower.toUpperCase();

const scriptLower = [
  "𝒶", "𝒷", "𝒸", "𝒹", "𝑒", "𝒻", "𝑔", "𝒽", "𝒾", "𝒿", "𝓀", "𝓁", "𝓂",
  "𝓃", "𝑜", "𝓅", "𝓆", "𝓇", "𝓈", "𝓉", "𝓊", "𝓋", "𝓌", "𝓍", "𝓎", "𝓏"
];
const scriptUpper = [
  "𝒜", "ℬ", "𝒞", "𝒟", "ℰ", "ℱ", "𝒢", "ℋ", "ℐ", "𝒥", "𝒦", "ℒ", "ℳ",
  "𝒩", "𝒪", "𝒫", "𝒬", "ℛ", "𝒮", "𝒯", "𝒰", "𝒱", "𝒲", "𝒳", "𝒴", "𝒵"
];
const boldScriptLower = [
  "𝓪", "𝓫", "𝓬", "𝓭", "𝓮", "𝓯", "𝓰", "𝓱", "𝓲", "𝓳", "𝓴", "𝓵", "𝓶",
  "𝓷", "𝓸", "𝓹", "𝓺", "𝓻", "𝓼", "𝓽", "𝓾", "𝓿", "𝔀", "𝔁", "𝔂", "𝔃"
];
const boldScriptUpper = [
  "𝓐", "𝓑", "𝓒", "𝓓", "𝓔", "𝓕", "𝓖", "𝓗", "𝓘", "𝓙", "𝓚", "𝓛", "𝓜",
  "𝓝", "𝓞", "𝓟", "𝓠", "𝓡", "𝓢", "𝓣", "𝓤", "𝓥", "𝓦", "𝓧", "𝓨", "𝓩"
];
const italicLower = [
  "𝘢", "𝘣", "𝘤", "𝘥", "𝘦", "𝘧", "𝘨", "𝘩", "𝘪", "𝘫", "𝘬", "𝘭", "𝘮",
  "𝘯", "𝘰", "𝘱", "𝘲", "𝘳", "𝘴", "𝘵", "𝘶", "𝘷", "𝘸", "𝘹", "𝘺", "𝘻"
];
const italicUpper = [
  "𝘈", "𝘉", "𝘊", "𝘋", "𝘌", "𝘍", "𝘎", "𝘏", "𝘐", "𝘑", "𝘒", "𝘓", "𝘔",
  "𝘕", "𝘖", "𝘗", "𝘘", "𝘙", "𝘚", "𝘛", "𝘜", "𝘝", "𝘞", "𝘟", "𝘠", "𝘡"
];
const serifItalicLower = [
  "𝑎", "𝑏", "𝑐", "𝑑", "𝑒", "𝑓", "𝑔", "ℎ", "𝑖", "𝑗", "𝑘", "𝑙", "𝑚",
  "𝑛", "𝑜", "𝑝", "𝑞", "𝑟", "𝑠", "𝑡", "𝑢", "𝑣", "𝑤", "𝑥", "𝑦", "𝑧"
];
const serifItalicUpper = [
  "𝐴", "𝐵", "𝐶", "𝐷", "𝐸", "𝐹", "𝐺", "𝐻", "𝐼", "𝐽", "𝐾", "𝐿", "𝑀",
  "𝑁", "𝑂", "𝑃", "𝑄", "𝑅", "𝑆", "𝑇", "𝑈", "𝑉", "𝑊", "𝑋", "𝑌", "𝑍"
];

function buildMap(from: string, to: string[]) {
  return new Map(from.split("").map((char, index) => [char, to[index]]));
}

const maps = {
  scriptLower: buildMap(basicLower, scriptLower),
  scriptUpper: buildMap(basicUpper, scriptUpper),
  boldScriptLower: buildMap(basicLower, boldScriptLower),
  boldScriptUpper: buildMap(basicUpper, boldScriptUpper),
  italicLower: buildMap(basicLower, italicLower),
  italicUpper: buildMap(basicUpper, italicUpper),
  serifItalicLower: buildMap(basicLower, serifItalicLower),
  serifItalicUpper: buildMap(basicUpper, serifItalicUpper)
};

export type GeneratedStyle = {
  id: string;
  label: string;
  text: string;
};

function transformText(input: string, variant: "classic" | "formal" | "airy" | "studio") {
  return input
    .split("")
    .map((char) => {
      const isUpper = char >= "A" && char <= "Z";
      const isLower = char >= "a" && char <= "z";

      if (!isUpper && !isLower) {
        return char;
      }

      if (variant === "classic") {
        return isUpper ? maps.scriptUpper.get(char) ?? char : maps.scriptLower.get(char) ?? char;
      }

      if (variant === "formal") {
        return isUpper ? maps.boldScriptUpper.get(char) ?? char : maps.boldScriptLower.get(char) ?? char;
      }

      if (variant === "airy") {
        return isUpper ? maps.italicUpper.get(char) ?? char : maps.italicLower.get(char) ?? char;
      }

      return isUpper ? maps.serifItalicUpper.get(char) ?? char : maps.serifItalicLower.get(char) ?? char;
    })
    .join("");
}

export function generateCursiveStyles(input: string): GeneratedStyle[] {
  const source = input.trim() || "Cursive Generator";

  return [
    {
      id: "classic-script",
      label: "Classic Script",
      text: transformText(source, "classic")
    },
    {
      id: "formal-hand",
      label: "Formal Hand",
      text: transformText(source, "formal")
    },
    {
      id: "airy-italic",
      label: "Airy Cursive",
      text: transformText(source, "airy")
    },
    {
      id: "studio-line",
      label: "Studio Line",
      text: transformText(source, "studio")
    }
  ];
}

export function buildAlphabetRows() {
  return basicUpper.split("").map((upper, index) => {
    const lower = basicLower[index];
    return {
      upper,
      lower,
      classicUpper: transformText(upper, "classic"),
      classicLower: transformText(lower, "classic"),
      formalUpper: transformText(upper, "formal"),
      formalLower: transformText(lower, "formal"),
      airyUpper: transformText(upper, "airy"),
      airyLower: transformText(lower, "airy"),
      studioUpper: transformText(upper, "studio"),
      studioLower: transformText(lower, "studio"),
    };
  });
}

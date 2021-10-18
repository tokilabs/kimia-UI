import path from 'path';
import {
  IndentationText,
  InterfaceDeclaration,
  NewLineKind,
  Project,
  QuoteKind,
  ts,
  Type,
  SyntaxKind,
} from 'ts-morph';

const project = new Project({
  // these are the defaults
  manipulationSettings: {
    // TwoSpaces, FourSpaces, EightSpaces, or Tab
    indentationText: IndentationText.TwoSpaces,
    // LineFeed or CarriageReturnLineFeed
    newLineKind: NewLineKind.LineFeed,
    // Single or Double
    quoteKind: QuoteKind.Single,
    // For the next prop
    // If you are renaming a to b in...
    //   const a = 5;
    //   const x = { a };
    //   export { a };
    // When usePrefixAndSuffixTextForRename is FALSE, the result is
    //    const b = 5;
    //    const x = { b };
    //    export { b };
    // When usePrefixAndSuffixTextForRename is TRUE, the result is
    //    const b = 5;
    //    const x = { a: b };
    //    export { b as a };
    usePrefixAndSuffixTextForRename: false,
    // Whether to use trailing commas in multi-line scenarios where trailing
    // commas would be used.
    useTrailingCommas: false,
  },
});

project.addSourceFilesAtPaths(path.join(__dirname, 'code.ts'));

const p = console.log;

const file = project.getSourceFiles()[0];
const fn = file.getFunction('test');
const paramDec = fn.getParameters()[0];

p('Param dec:', paramDec.getText());

const paramType = paramDec.getType().getSymbol();

const interf = paramType
  .getDeclarations()[0]
  .asKindOrThrow(SyntaxKind.InterfaceDeclaration);

p('Param Type:', interf.getName());

const typeMembers = interf.getProperties();

p(typeMembers.map((m) => `${m.getName()}: ${m.getType().getText()}`));

interf
  .getType()
  .getProperties()
  .map((prop) => p(prop.getName()));

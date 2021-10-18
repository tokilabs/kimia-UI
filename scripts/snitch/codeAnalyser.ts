import { PropType } from '@plasmicapp/host';
import { LiteralType } from '@ts-morph/common/lib/typescript';
import debugg from 'debug';
import {
  FunctionDeclaration,
  ClassDeclaration,
  Node,
  ts,
  SyntaxKind,
  InterfaceDeclaration,
  Type,
} from 'ts-morph';

const debug = debugg('snitch:code analyser');

export interface ComponentInfo {
  path: string;
  name: string;
  props: Array<{
    name: string;
    tsType: Type;
    plasmicType: PropType;
  }>;
}

export function getTypeName(node: Node<ts.Node>) {
  return node.getType().getText();
}

function getPropsParamTypeDec(fn: FunctionDeclaration): InterfaceDeclaration {
  return fn
    .getParameters()
    .at(0)
    ?.getType()
    .getSymbol()
    .getDeclarations()
    .at(0)
    ?.asKindOrThrow(SyntaxKind.InterfaceDeclaration);
}

function mapTypeToPlasmic(tsType: Type): PropType {
  // boolean is actually a union type so we need to check it first
  if (tsType.getText() === 'boolean') {
    return 'boolean';
  }

  if (tsType.isUnion()) {
    if (tsType.getUnionTypes().every((t) => t.isStringLiteral())) {
      return {
        type: 'choice',
        options: tsType
          .getUnionTypes()
          .map((t) => t.getText().replace(/["']/g, '')),
      };
    }
  }

  switch (tsType.getText()) {
    case 'React.ReactNode':
      return 'slot';
    default:
      return 'string';
  }
}

export function readFunctionComponentInfo(
  func: FunctionDeclaration,
  options: {
    mapAllInheritedProps: boolean;
  } = { mapAllInheritedProps: false },
): ComponentInfo {
  const info: ComponentInfo = {
    path: func.getSourceFile().getFilePath(),
    name: func.getName(),
    props: [],
  };

  const propsInterface = getPropsParamTypeDec(func);

  if (!propsInterface) {
    return info;
  }

  debug(`${info.name} props:`);

  if (options.mapAllInheritedProps) {
    info.props.push(
      ...propsInterface
        .getType()
        .getProperties()
        .map((p) => {
          const tsType = p.getTypeAtLocation(propsInterface);

          return {
            name: p.getName(),
            tsType,
            plasmicType: mapTypeToPlasmic(tsType),
          };
        }),
    );
  } else {
    info.props.push(
      ...propsInterface.getProperties().map((p) => ({
        name: p.getName(),
        tsType: p.getType(),
        plasmicType: mapTypeToPlasmic(p.getType()),
      })),
    );
  }

  info.props.forEach((p) => debug(`   ${p.name}: ${p.tsType}`));
  return info;
}

export function readClassComponentInfo(klass: ClassDeclaration): ComponentInfo {
  //throw new Error();
  return null;
}

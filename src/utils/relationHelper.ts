import { FormattedTabOption } from '../interfaces/detailsTab.interface';

export type ParentNode = {
  id: string;
  title: string;
  grandParent?: ParentNode[] | null;
};

export type ChildNode = {
  id: string;
  title: string;
  grandChild?: ChildNode[] | null;
};

export type TreeItem = {
  id: string | null;
  title: string;
  relationLabel: string;
  children: TreeItem[];
};

export type RelationUI = {
  showTopTree: boolean;
  showBottomTree: boolean;
  topTree: TreeItem[];
  bottomTree: TreeItem[];
  current: TreeItem;
};

export type DatasetResponse = {
  options: FormattedTabOption[];
  hasData: string;
};

/* ---------------- ACCESSIBLE LABELS ---------------- */

function getParentLabel(level: number): string {
  if (level === 0) return 'Grand dataset';
  if (level === 1) return 'Parent dataset';
  return 'Original source dataset';
}

function getChildLabel(level: number): string {
  if (level === 0) return 'Derived dataset';
  if (level === 1) return 'Further derived dataset';
  return 'Final derived dataset';
}

/* ---------------- BUILD PARENT TREE ---------------- */

function buildParentTree(nodes: ParentNode[], level = 0): TreeItem[] {
  return nodes.map((node) => ({
    id: node.id,
    title: node.title,
    level: level,
    relationLabel: getParentLabel(level),
    children: node.grandParent ? buildParentTree(node.grandParent, level + 1) : [],
  }));
}

/* ---------------- BUILD CHILD TREE ---------------- */

function buildChildTree(nodes: ChildNode[], level = 0): TreeItem[] {
  return nodes.map((node) => ({
    id: node.id,
    title: node.title,
    level: level,
    relationLabel: getChildLabel(level),
    children: node.grandChild ? buildChildTree(node.grandChild, level + 1) : [],
  }));
}

/* ---------------- MAIN FUNCTION ---------------- */

export function buildRelationUI(data: DatasetResponse): RelationUI {
  const parents: ParentNode[] =
    (data.options.find((o) => o.label === 'Parent record(s)')?.rawValue as ParentNode[]) || [];

  const children: ChildNode[] =
    (data.options.find((o) => o.label === 'Child record(s)')?.rawValue as ChildNode[]) || [];

  const parentTree = buildParentTree(parents);
  const childTree = buildChildTree(children);

  const current: TreeItem = {
    id: null,
    title: data.hasData,
    relationLabel: 'Current dataset',
    children: [],
  };

  /* ---------- RULES ---------- */

  const parentCount = parentTree.length;
  const childCount = childTree.length;

  const showTopTree = parentCount > 0;
  const showBottomTree = childCount > 0;

  return {
    showTopTree,
    showBottomTree,
    topTree: parentTree,
    bottomTree: childTree,
    current,
  };
}

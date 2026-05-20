import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type EditableTitle = {
  before: string;
  emphasis: string;
  after: string;
};

export type MenuItemData = {
  id: string;
  title: EditableTitle;
  desc: string;
  price: string;
};

export type MenuColumnData = {
  id: string;
  heading: string;
  subheading: string;
  items: MenuItemData[];
};

export type MenuSectionData = {
  id: string;
  eyebrow: string;
  title: EditableTitle;
  intro?: string;
  columns: MenuColumnData[];
  note?: string;
};

export type MenuData = {
  sections: MenuSectionData[];
};

export type PromotionData = {
  id: string;
  tag: string;
  title: EditableTitle;
  when: string;
  desc: string;
  statLabel: string;
  statValue: string;
  featured?: boolean;
};

export type PromotionsData = {
  promotions: PromotionData[];
};

const dataDir = path.join(process.cwd(), "data");
const menuPath = path.join(dataDir, "menu.json");
const promotionsPath = path.join(dataDir, "promotions.json");

async function readJson<T>(filePath: string): Promise<T> {
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

async function writeJson<T>(filePath: string, data: T) {
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

export function makeId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function normalizeTitle(title: Partial<EditableTitle> | undefined): EditableTitle {
  return {
    before: title?.before?.trim() ?? "",
    emphasis: title?.emphasis?.trim() ?? "",
    after: title?.after?.trim() ?? "",
  };
}

export async function getMenuData() {
  return readJson<MenuData>(menuPath);
}

export async function saveMenuData(data: MenuData) {
  await writeJson(menuPath, data);
}

export async function getPromotionsData() {
  return readJson<PromotionsData>(promotionsPath);
}

export async function savePromotionsData(data: PromotionsData) {
  await writeJson(promotionsPath, data);
}

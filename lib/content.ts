import { get, put } from "@vercel/blob";
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

const BLOB_MENU_PATH = "content/menu.json";
const BLOB_PROMOTIONS_PATH = "content/promotions.json";

function useBlobStorage() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN) || process.env.VERCEL === "1";
}

async function readLocalJson<T>(filePath: string): Promise<T> {
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

async function writeLocalJson<T>(filePath: string, data: T) {
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

async function readBlobJson<T>(pathname: string): Promise<T | null> {
  const result = await get(pathname, { access: "private" });
  if (!result?.stream) return null;
  const raw = await new Response(result.stream).text();
  return JSON.parse(raw) as T;
}

async function writeBlobJson<T>(pathname: string, data: T) {
  await put(pathname, `${JSON.stringify(data, null, 2)}\n`, {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

async function readContent<T>(blobPathname: string, localPath: string): Promise<T> {
  if (!useBlobStorage()) {
    return readLocalJson<T>(localPath);
  }

  const fromBlob = await readBlobJson<T>(blobPathname);
  if (fromBlob !== null) return fromBlob;

  const seed = await readLocalJson<T>(localPath);
  await writeBlobJson(blobPathname, seed);
  return seed;
}

async function writeContent<T>(blobPathname: string, localPath: string, data: T) {
  if (!useBlobStorage()) {
    await writeLocalJson(localPath, data);
    return;
  }

  await writeBlobJson(blobPathname, data);
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
  return readContent<MenuData>(BLOB_MENU_PATH, menuPath);
}

export async function saveMenuData(data: MenuData) {
  await writeContent(BLOB_MENU_PATH, menuPath, data);
}

export async function getPromotionsData() {
  return readContent<PromotionsData>(BLOB_PROMOTIONS_PATH, promotionsPath);
}

export async function savePromotionsData(data: PromotionsData) {
  await writeContent(BLOB_PROMOTIONS_PATH, promotionsPath, data);
}

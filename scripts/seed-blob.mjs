/**
 * One-time upload of data/*.json to Vercel Blob.
 * Requires BLOB_READ_WRITE_TOKEN (vercel env pull, or Vercel dashboard).
 *
 * Usage: npm run seed:blob
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { put } from "@vercel/blob";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "data");

const files = [
  { pathname: "content/menu.json", local: "menu.json" },
  { pathname: "content/promotions.json", local: "promotions.json" },
];

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error("Missing BLOB_READ_WRITE_TOKEN. Run: vercel env pull");
  process.exit(1);
}

for (const { pathname, local } of files) {
  const body = await readFile(path.join(dataDir, local), "utf8");
  const blob = await put(pathname, body, {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
  console.log(`Uploaded ${local} → ${blob.pathname} (${blob.url})`);
}

console.log("Done. Admin edits on Vercel will use these blobs.");

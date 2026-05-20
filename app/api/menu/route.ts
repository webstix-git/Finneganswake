import { isAdminSession } from "@/lib/adminAuth";
import { getMenuData, makeId, normalizeTitle, saveMenuData, type MenuItemData } from "@/lib/content";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function cleanMenuItem(item: Partial<MenuItemData>): MenuItemData {
  return {
    id: item.id ?? makeId("menu"),
    title: normalizeTitle(item.title),
    desc: item.desc?.trim() ?? "",
    price: item.price?.trim() ?? "",
  };
}

async function requireAdmin() {
  if (await isAdminSession()) return null;
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET() {
  return NextResponse.json(await getMenuData());
}

export async function POST(req: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const body = (await req.json().catch(() => ({}))) as {
    sectionId?: string;
    columnId?: string;
    item?: Partial<MenuItemData>;
  };
  const data = await getMenuData();
  const section = data.sections.find((s) => s.id === body.sectionId);
  const column = section?.columns.find((c) => c.id === body.columnId);

  if (!column || !body.item) {
    return NextResponse.json({ error: "Menu column not found" }, { status: 400 });
  }

  column.items.push(cleanMenuItem(body.item));
  await saveMenuData(data);
  return NextResponse.json(data);
}

export async function PATCH(req: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const body = (await req.json().catch(() => ({}))) as {
    id?: string;
    item?: Partial<MenuItemData>;
  };
  if (!body.id || !body.item) {
    return NextResponse.json({ error: "Menu item is required" }, { status: 400 });
  }

  const data = await getMenuData();
  for (const section of data.sections) {
    for (const column of section.columns) {
      const index = column.items.findIndex((item) => item.id === body.id);
      if (index >= 0) {
        column.items[index] = cleanMenuItem({ ...column.items[index], ...body.item, id: body.id });
        await saveMenuData(data);
        return NextResponse.json(data);
      }
    }
  }

  return NextResponse.json({ error: "Menu item not found" }, { status: 404 });
}

export async function DELETE(req: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const { id } = (await req.json().catch(() => ({}))) as { id?: string };
  if (!id) return NextResponse.json({ error: "Menu item is required" }, { status: 400 });

  const data = await getMenuData();
  for (const section of data.sections) {
    for (const column of section.columns) {
      const nextItems = column.items.filter((item) => item.id !== id);
      if (nextItems.length !== column.items.length) {
        column.items = nextItems;
        await saveMenuData(data);
        return NextResponse.json(data);
      }
    }
  }

  return NextResponse.json({ error: "Menu item not found" }, { status: 404 });
}

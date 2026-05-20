import { isAdminSession } from "@/lib/adminAuth";
import {
  getPromotionsData,
  makeId,
  normalizeTitle,
  savePromotionsData,
  type PromotionData,
} from "@/lib/content";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function cleanPromotion(promotion: Partial<PromotionData>): PromotionData {
  return {
    id: promotion.id ?? makeId("promo"),
    tag: promotion.tag?.trim() ?? "",
    title: normalizeTitle(promotion.title),
    when: promotion.when?.trim() ?? "",
    desc: promotion.desc?.trim() ?? "",
    statLabel: promotion.statLabel?.trim() ?? "",
    statValue: promotion.statValue?.trim() ?? "",
    featured: Boolean(promotion.featured),
  };
}

async function requireAdmin() {
  if (await isAdminSession()) return null;
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET() {
  return NextResponse.json(await getPromotionsData());
}

export async function POST(req: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const body = (await req.json().catch(() => ({}))) as { promotion?: Partial<PromotionData> };
  if (!body.promotion) {
    return NextResponse.json({ error: "Promotion is required" }, { status: 400 });
  }

  const data = await getPromotionsData();
  data.promotions.push(cleanPromotion(body.promotion));
  await savePromotionsData(data);
  return NextResponse.json(data);
}

export async function PATCH(req: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const body = (await req.json().catch(() => ({}))) as {
    id?: string;
    promotion?: Partial<PromotionData>;
  };
  if (!body.id || !body.promotion) {
    return NextResponse.json({ error: "Promotion is required" }, { status: 400 });
  }

  const data = await getPromotionsData();
  const index = data.promotions.findIndex((promotion) => promotion.id === body.id);
  if (index < 0) return NextResponse.json({ error: "Promotion not found" }, { status: 404 });

  data.promotions[index] = cleanPromotion({
    ...data.promotions[index],
    ...body.promotion,
    id: body.id,
  });
  await savePromotionsData(data);
  return NextResponse.json(data);
}

export async function DELETE(req: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const { id } = (await req.json().catch(() => ({}))) as { id?: string };
  if (!id) return NextResponse.json({ error: "Promotion is required" }, { status: 400 });

  const data = await getPromotionsData();
  const nextPromotions = data.promotions.filter((promotion) => promotion.id !== id);
  if (nextPromotions.length === data.promotions.length) {
    return NextResponse.json({ error: "Promotion not found" }, { status: 404 });
  }

  data.promotions = nextPromotions;
  await savePromotionsData(data);
  return NextResponse.json(data);
}

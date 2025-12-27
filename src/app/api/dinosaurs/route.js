import { NextResponse } from "next/server";
import data from "@/data/dinos.json";

export async function GET(req) {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search") || "";
    const limitParam = searchParams.get("limit");
    let dinos = data;
    if(search) {
        const term = search.toLowerCase();
        dinos = dinos.filter((d) => d.genus.toLowerCase().includes(term));
    }


    let results = dinos;
    if(limitParam) {
        const limit = Number(limitParam);
        results = dinos.slice(0, limit);
    }

    return NextResponse.json({
        total: dinos.length,
        results,
    });
}
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// POST = Store a new shortened URL
export async function POST(req) {
  try {
    const body = await req.json();
    const { url, shorturl } = body;

    if (!url || !shorturl) {
      return NextResponse.json(
        { success: false, error: true, message: "Missing url or shorturl" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const existing = await collection.findOne({ shorturl });
    if (existing) {
      return NextResponse.json(
        { success: false, error: true, message: "Short URL already exists" },
        { status: 409 }
      );
    }

    await collection.insertOne({ url, shorturl });

    return NextResponse.json({
      success: true,
      error: false,
      message: "URL generated successfully",
      data: { url, shorturl },
    });
  } catch (err) {
    console.error("POST error:", err);
    return NextResponse.json(
      { success: false, error: true, message: "Server error" },
      { status: 500 }
    );
  }
}

// GET = Return all saved links
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const allLinks = await collection.find().sort({ _id: -1 }).toArray();

    return NextResponse.json({
      success: true,
      data: allLinks,
    });
  } catch (err) {
    console.error("GET error:", err);
    return NextResponse.json(
      { success: false, error: true, message: "Error fetching URLs" },
      { status: 500 }
    );
  }
}


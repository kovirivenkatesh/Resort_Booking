import DBConnection from "@/app/utils/config/db";
import ProductModel from "@/app/utils/models/Product";
import cloudinary from "@/app/utils/config/cloudinary";
import { NextResponse } from "next/server";

export async function POST(request) {
  await DBConnection();

  try {
    const data = await request.formData();

    const title = data.get("title");
    const price = data.get("price");
    const offer = data.get("offer");
    const amen = data.get("amen");
    const desc = data.get("desc");
    const image = data.get("image");

    if (!title || !price || !offer || !amen || !desc || !image) {
      return NextResponse.json(
        { success: false, message: "All fields required" },
        { status: 400 }
      );
    }

    // Convert image to base64
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;

    // Upload to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(base64Image, {
      folder: "products",
    });

    const newProduct = new ProductModel({
      title,
      price: Number(price),
      offer: Number(offer),
      amen,
      desc,
      image: uploadResult.secure_url, // ✅ Cloud URL
    });

    await newProduct.save();

    return NextResponse.json(
      { success: true, message: "Product added successfully" },
      { status: 201 }
    );

  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

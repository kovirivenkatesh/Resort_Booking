import DBConnection from "@/app/utils/config/db";
import { NextResponse } from "next/server";
import ProductModel from "@/app/utils/models/Product";
import cloudinary from "@/app/utils/config/cloudinary";

export async function POST(request) {
  await DBConnection();

  const data = await request.formData();

  const image = data.get("image");
  const buffer = Buffer.from(await image.arrayBuffer());

  try {
    // upload to cloudinary
    const uploadRes = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "products" },
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      ).end(buffer);
    });

    const newProduct = new ProductModel({
      title: data.get("title"),
      price: data.get("price"),
      offer: data.get("offer"),
      amen: data.get("amen"),
      desc: data.get("desc"),
      image: uploadRes.secure_url, // ✅ cloud url
    });

    await newProduct.save();

    return NextResponse.json(
      { success: true, message: "Product added successfully" },
      { status: 201 }
    );

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

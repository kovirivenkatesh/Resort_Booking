import DBConnection from "@/app/utils/config/db";
import { NextResponse } from "next/server";
import ProductModel from "@/app/utils/models/Product";
import cloudinary from "@/app/utils/config/cloudinary";

export async function GET() {
  await DBConnection();
  const records = await ProductModel.find({});
  return NextResponse.json({ data: records });
}

export async function POST(request) {
  try {
    await DBConnection();

    const data = await request.formData();
    const title = data.get("title");
    const price = data.get("price");
    const offer = data.get("offer");
    const amen = data.get("amen");
    const desc = data.get("desc");
    const image = data.get("image");

    if (!image) {
      return NextResponse.json(
        { success: false, message: "Image is required" },
        { status: 400 }
      );
    }

    // Convert image to base64
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = `data:${image.type};base64,${buffer.toString(
      "base64"
    )}`;

    // Upload to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(base64Image, {
      folder: "products",
    });

    const newProduct = new ProductModel({
      title,
      price,
      offer,
      amen,
      desc,
      image: uploadResult.secure_url,
    });

    await newProduct.save();

    return NextResponse.json(
      { success: true, message: "Successfully Uploaded" },
      { status: 201 }
    );
  } catch (error) {
    console.error("ADD PRODUCT ERROR:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

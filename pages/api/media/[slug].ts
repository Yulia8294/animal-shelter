import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  if (!slug || Array.isArray(slug)) {
    return res.status(400).json({ error: "Invalid slug" });
  }

  const folderPath = path.join(
    process.cwd(),
    "public",
    "assets",
    "media",
    slug,
  );

  try {
    const files = fs.readdirSync(folderPath);

    const imageUrls = files.map(
      (file) => `${process.env.NEXT_PUBLIC_URL}/assets/media/${slug}/${file}`,
    );

    res.status(200).json(imageUrls);
  } catch (error) {
    res.status(404).json({ error: "Folder not found" });
  }
}

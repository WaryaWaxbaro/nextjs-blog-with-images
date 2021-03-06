import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  try {
    console.log("posts ...");
    let posts = await prisma.post.findMany({
      include: { categories: true },
    });
    if (posts) {
      res.status(200).json({ message: "success", posts: posts });
    } else {
      res.status(200).json({ message: "error" });
    }
  } catch (error) {
    res.status(200).json({ message: "error" });
  }
}

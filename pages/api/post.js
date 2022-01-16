import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  try {
    let { id } = req.query;
    console.log("req ", req.query);
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });
    if (post) {
      res.status(200).json({ message: "success", post: post });
    } else {
      res.status(200).json({ message: "error" });
    }
  } catch (error) {
    res.status(200).json({ message: "error" });
  }
}

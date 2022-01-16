import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      let data = req.body;
      let { id } = data;
      const post = await prisma.post.update({
        where: { id },
        data,
      });

      if (post) {
        res.status(200).json({ message: "success", post: post });
      } else {
        res.status(200).json({ message: "error no data" });
      }
    }
  } catch (error) {
    res.status(200).json({ message: "error bad connection" });
  }
}

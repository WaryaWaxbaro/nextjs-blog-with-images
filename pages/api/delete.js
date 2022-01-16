import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  try {
    if (req.method === "DELETE") {
      let { id } = req.query;
      console.log("id ", id);
      const post = await prisma.post.delete({
        where: { id: parseInt(id, 10) },
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

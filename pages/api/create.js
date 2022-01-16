import prisma from "../../lib/prisma";

// Prisma Database query
// https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries#connect-or-create-a-record

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      let { post, category } = req.body;
      console.log("data ", { post, category });
      const newPost = await prisma.post.create({
        data: {
          ...post,
          categories: {
            connectOrCreate: {
              where: {
                name: category.name,
              },
              create: {
                name: category.name,
              },
            },
          },
        },
      });

      if (newPost) {
        res.status(200).json({ message: "success", post: newPost });
      } else {
        res.status(200).json({ message: "error no data" });
      }
    }
  } catch (error) {
    res.status(200).json({ message: "error bad connection" });
  }
}

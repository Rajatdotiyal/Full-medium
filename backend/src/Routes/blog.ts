import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { blogInput, updateBlogInput } from "@rajatdotiyal/medium-common";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("Authorization") || "";
 
  const token = header.split(" ")[1];
  
  try {
    
    const decode = await verify(token, c.env.JWT_SECRET);
      if (decode && typeof decode.id === "string") {
          c.set("userId", decode.id);

          await next();
    }
  } catch (e) {
    c.status(403);
    return c.json({
      msg: "you are not logged in",
    });
  }
});

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const {success} = blogInput.safeParse(body)
    if(!success){
      c.status(411)
      return c.json({
        msg : "enter valid title and input"
      })
    }
  const userId = c.get("userId")

  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      autherId: userId,
      published : true, 
      published_date: new Date(),
    },
  });
  return c.json({
    id: blog.id,
    
  });
});

blogRouter.put("/", async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const {success} = updateBlogInput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json({
      msg : "enter valid title and input"
    })
  }
  const updateData = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.json({
    id: updateData.id,
  });
});

blogRouter.get("/bulk",async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    

    const post = await prisma.post.findMany({
      select : {
        id  :true,
        title : true,
        content : true,
        published_date : true,
        author : {
          select : {
            name : true,
          }
        }
      }
    });

    return c.json({
      post
    });
  });

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");
  
  try {
    const postData = await prisma.post.findUnique({
      where: {
        id,
      },
      select : {
        id : true,
        title : true,
        content : true,
        published_date : true,
        author : {
          select :{
            name : true
          }
        }
      },
    });
    
    return c.json({
      postData,
    });
  } catch (e) {
    c.status(411);
    return c.json({
      msg: "no data available",
    });
  }
});



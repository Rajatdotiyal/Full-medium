import z, { string } from "zod"
// validation for signup
export const signupInput  = z.object({
    email : z.string().email(),
    password : z.string().min(6),
    name : z.string().optional(),
})

//type infer




// validation for signin
export const signinInput  = z.object({
    email : z.string().email(),
    password : z.string().min(6), 
})


// validation for blog
export const blogInput = z.object({
    title : z.string(),
    content : z.string(),
})



export const updateBlogInput = z.object({
    title : z.string(),
    content : z.string(),
    id : z.string(),
})


export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type BlogInput = z.infer<typeof blogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>



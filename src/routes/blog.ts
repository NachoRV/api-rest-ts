import { Request, Response, Router } from "express";
import { deleteBlog, getBlog, getBlogs, postBlog, updateBlog } from "../controller/blog";

const router = Router()

router.get('/', getBlogs)
router.get('/:id', getBlog)
router.post('/', postBlog)
router.put('/', updateBlog)
router.delete('/', deleteBlog)

export { router }
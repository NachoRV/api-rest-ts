import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getBlogs = (rep: Request, res: Response) => {
  try { } catch (e) {
    handleHttp(res, "ERROR_GET_BLOGS")
  }
}
const getBlog = (req: Request, res: Response) => {
  try { } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG")
  }
}
const updateBlog = (req: Request, res: Response) => {
  try { } catch (e) {
    handleHttp(res, "ERROR_UPDATE_BLOG")
  }
}
const postBlog = (req: Request, res: Response) => {
  try {
    const { body } = req
    res.send(body)
  } catch (e) {
    handleHttp(res, "ERROR_POST_BLOG")
  }
}
const deleteBlog = (rep: Request, res: Response) => {
  try { } catch (e) {
    handleHttp(res, "ERROR_DELETE_BLOG")
  }
}

export {
  getBlog,
  getBlogs,
  updateBlog,
  postBlog,
  deleteBlog
}
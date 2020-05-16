// import CrudController from "../../../../utils/crud"
import { RequestHandler } from "express"
import jsonResponse from "../../../../utils/jsonResponse"
import { APIError } from "../../Validations/messages"
import db from "../../../../database/models"

class TodosCrud {
  protected model = 'Todos'

  public createTodo: RequestHandler = async (req, res, next) => {
    try {
      const newTodo = await db[`${this.model}`].create({
        ...req.body
      })
      return jsonResponse({
        res,
        status: 200,
        [this.model]: newTodo.get(),
      })
    } catch (err) {
      next(APIError.errorResponseMessage(400, 'Oops! Something went wrong', res))
    }
  }

  public getAllTodos:  RequestHandler = async (req, res, next) => {
    try{
      const allTodos = await db.Todos.findAll()
      allTodos 
        ? jsonResponse({
          res,
          status: 200,
          todos: allTodos
        })
        : next(APIError.errorResponseMessage(400, 'No todo found', res))
    } catch (err) {
      next(APIError.errorResponseMessage(500, 'Oops! Something went wrong', res))
    }
  }
 
  // public getAlleArticles: RequestHandler = async (req, res, next) => {
  //   try {
  //     const articles = await db.Article.findAll()
  //     articles
  //       ? jsonResponse({
  //           res,
  //           status: 200,
  //           Profiles: articles,
  //         })
  //       : next(APIError.errorResponseMessage(400, 'No article found', res))
  //   } catch (err) {
  //     next(APIError.errorResponseMessage(500, 'Oops! Something went wrong', res))
  //   }
  // }
  // public editArticle: RequestHandler = async (req, res, next) => {
  //   // @ts-ignore
  //   const { id } = req.currentUser
  //   const { slug } = req.params
  //   const { body } = req
  //   const selector = {
  //     where: { userId: id, slug },
  //     returning: true,
  //     plain: true,
  //   }
  //   try {
  //     // @ts-ignore
  //     const editRelation = await db[`${this.model}`].update(body, selector)
  //     editRelation
  //       ? jsonResponse({
  //           res,
  //           status: 200,
  //           [this.model]: editRelation[1],
  //         })
  //       : next(APIError.errorResponseMessage(401, `You cannot change this ${this.model}`, res))
  //   } catch (err) {
  //     next(APIError.errorResponseMessage(500, `Ooops! An error has occured!`, res))
  //   }
  // }

  // public deleteArticle: RequestHandler = async (req, res, next) => {
  //   // @ts-ignore
  //   const { id } = req.currentUser
  //   const { slug } = req.params
  //   const selector = {
  //     where: { userId: id, slug },
  //     returning: true,
  //     plain: true,
  //   }
  //   try {
  //     // @ts-ignore
  //     const editRelation = await db[`${this.model}`].destroy(selector)
  //     editRelation
  //       ? jsonResponse({
  //           res,
  //           status: 200,
  //           message: 'Article deleted',
  //         })
  //       : next(APIError.errorResponseMessage(401, `Article not existing`, res))
  //   } catch (err) {
  //     next(APIError.errorResponseMessage(500, `Ooops! An error has occured!`, res))
  //   }
  // }
}

export default new TodosCrud()
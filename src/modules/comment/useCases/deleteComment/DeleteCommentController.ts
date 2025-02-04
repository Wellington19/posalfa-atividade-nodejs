import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { DeleteCommentUseCase } from './DeleteCommentUseCase'

export class DeleteCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deleteCommentUseCase = container.resolve(DeleteCommentUseCase)

    await deleteCommentUseCase.execute({ id })

    return response.status(204).send()
  }
}

/* eslint-disable */
import jsonResponse from '../../../utils/jsonResponse'

export class APIError extends Error {
  static errorResponseMessage(
    status: number,
    message: string,
    res: any,
    properties?: string[],
    nternalProperties?: any,
  ) {
    return jsonResponse({
      res,
      status,
      message,
      properties,
    })
  }
}

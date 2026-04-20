// helper to run middleware   --- especially for multer

// nexrjs needs helper to run middleware manually


import { NextApiRequest, NextApiResponse } from "next";   //next req, res type


//function to run middleware
export function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}


// Why this

// Next.js API routes dont natively allow Express-style middleware with req, res, next.

// Multer (and many other middlewares) are designed for Express.

// runMiddleware converts an Express middleware into a Promise-friendly function so you can await it in your API route.
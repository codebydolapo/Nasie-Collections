import type { NextApiRequest, NextApiResponse } from "next";
//import {sanityClient} from '../../sanity'
import sanityClient from "@sanity/client";

type Data = any

//skJeqNIKFV2SUJBxZt1I1tyNirhYQp6afzL9EKZCVALIKl0DjbHXDHxmG5eHDK35ar3gQWDGscUBVhuvhvsLdb1AuSodubwguLKPwypUfu8SzZ19Lf2cmhT64RnMIZPPgBaYtyAWkZWdmdpCEDby2JVhOuFJZR53znRyTVMbxMR7YS5xRKSc

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
};

const client = sanityClient(config);

export default async function postComment(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { _id, name, email, comment } = JSON.parse(req.body);

  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id
      },
      name,
      email,
      comment
    })
  }
  catch (error) {
    res.status(500).json({ message: "Comment cannot be posted", error })
  }

  res.status(200).json({ message: 'Comment posted successfully' });
};

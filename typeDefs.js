import aserver from "apollo-server";

const { gql } = aserver;

export const typeDefs = gql`
  type Posts {
    user: String!
    topic: String!
    id: String!
    body: String!
    comments: [String!]
  }

  type User {
    name: String!
    id: String!
  }

  type Comments {
    user: String!
    message: String!
    id: String!
    response: [String!]
    postid: String!
  }

  type Query {
    getPostByTopic(topic: String!): [Posts]
    getPostByID(id: String!): [Posts]
    getAllPosts: [Posts]
  }

  type Subscription {
    newPost: Posts!
  }

  type Mutation {
    createPost(user: String!, topic: String!, body: String!, comments: [String]): Posts!
    createComment(user: String!, message: String!, id: String!, response: [String!], postid: String!): Comments!
    createResponse(commentid: String!, message: String!): Comments!
  }
`;
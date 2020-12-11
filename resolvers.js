import pkg from 'graphql-subscriptions';
const { PubSub } = pkg;

import {Posts} from "./data/posts.js";
import {Users} from "./data/users.js";
import {Comments} from "./data/comments.js";


const NEW_POST = "NEW_POST";

export const resolvers = {
  Query: {
    getPostByTopic(parent, args, context, info) {
      return Posts.filter(post => 
        post.topic === args.topic);
    },

    getPostByID(parent, args, context, info) {
      return Posts.filter(post => 
        post.id === args.id);
    },
  },

  Mutation: {
    createPost: async (_, { user, topic, body, comments }, {pubsub}) => {
      const post = {
        user: user, 
        topic: topic, 
        id: Math.random().toString(36).substring(8), 
        body: body, 
        comments: comments
      }
      Posts.push(post); pubsub.publish(NEW_POST, {newPost: post})
      return post;
    },

    createComment: async (_, { user, message, id, response,  postid }) => {
      const comment = {
        user: user, 
        message: message, 
        id: Math.random().toString(36).substring(8), 
        response: response, 
        postid: postid
      }
      Comments.push(comment); 
      const querypost = Posts.find(post => post.id == postid);
      querypost.comments.push(message);   
      return comment;
    },

    createResponse: async (_, {commentid, message}) => {
      const querycomment = Comments.find(comment => comment.id == commentid)
      querycomment.response.push(message)
      return querycomment
    },
  },

  Subscription: {
    newPost: {
      subscribe: (_, __, {pubsub}) => pubsub.asyncIterator(NEW_POST)
    }
  },
};




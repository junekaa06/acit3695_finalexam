**TO START THE APPLICATION**

```sh
npm install 
node index
```

**TO SUBSCRIBE TO A POST**
You can subscribe to a post by using the subscription funtion and listening for a new post.
```
subscription {
  newPost {
    id
    topic
    user
    body
    comments
  }
}
```

**TO CREATE A POST**
You can create a post by using the createPost mutation and inputing the user, topic, body, and comments.

***USE id for NEXT STEP and input it for postid***
```
mutation {
  createPost (user: "June", topic: "Funny", body: "VeryFunny", comments: "Boring") {
  	user
    topic
    id
    body
    comments
  }
}
```

**TO COMMENT ON A POST**
You can comment on a post by using the ID of the post with the createComment mutation and inputting it into the postid with other fields inputted as well like user, message, and response (id will be auto-generated.)

***USE id FOR NEXT STEP and input it for commentid***
```
mutation {
  createComment(user: "June", message: "message", id:"", postid: "", response: []) {
    user
    id
    response
    postid
    message
  }
}
```

**TO RESPONT TO A COMMENT**
You can respond to a comment by using the createResponse mutation and using the commentid that was given from the comment on a post and inputting a message to respond to the comment.
```
mutation {
  createResponse (commentid: "", message: "Reponse to a comment") {
    message
  }
}
```

**TO GETS POST BY ID**
You can get the post by ID by using the getPostByID query and inputting the id that was given for the post.
```
query {
  getPostByID(id: ""){
    id
    user
    topic
    comments
    body
  }
}
```

**TO GETS POST BY TOPIC**
You can get the post by topic by using the getPostByTopic query and inputting the topic that wasa given for the post.
```
query {
  getPostByTopic(topic: "") {
    id
    topic
    user
    body
    comments
  }
}
```


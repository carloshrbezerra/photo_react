import { database } from "../config";

export function startAddingPost(post){
  return (dispacth) => {
    return database.ref("posts").update({[post.id]: post}).then(() => {
      dispacth(addPost(post));
    }).catch((error) => {   
      console.log(error);
    })  
  }
}

export function startLoadingPost() {
  return (dispatch) => {
    return database.ref('posts').once('value').then((snapshot) => {
      let posts = [];
      snapshot.forEach((childSnapshot) => {
        posts.push(childSnapshot.val())
       
      })
      dispatch(loadPosts(posts));
    })
  }
}


export function startAddingComment(comment,postId) {
  return (dispacth) => {
    return database.ref('comments/' + postId).push(comment).then(() => {
      dispacth(addComment(comment,postId))
    }).catch((error) => {
      console.log(error);
    })
  }
}

export function startLoadingComments() {
  return (dispacth) => {
    return database.ref('comments').once('value').then((snapshot) => {
      let comments = {}
      snapshot.forEach((childSnapshot) => {
        comments[childSnapshot.key] = Object.values(childSnapshot.val())
      })
      dispacth(loadComments(comments));
    })
  }
}

export function loadComments(comments) {
  return {
    type : 'LOAD_COMMENTS',
    comments
  }
}

export function startRemovingPost(index, id) {
 
  const updates = {
   [`posts/${id}`]: null,
   [`comments/${id}`]: null
  }
  /* this specifies the paths that we want to update to null 
  (basically delete)
  we're navigating to the post with id we clicked remove on, 
  as well as the comments belonging to that post, with 
  that same id. */ 
   
   return (dispatch) => {
   return database.ref().update(updates).then(() => {
   dispatch(removePost(index))
   }).catch((error) => {
       console.log(error)
   })
   }
  }

export function removePost(index){
  return {
    type: 'REMOVE_POST',
    index: index
  }
}

export function addPost(post) {
  return {
    type: 'ADD_POST',
    post
  }
}

export function addComment(comment, postId) {
  return {
    type: 'ADD_COMMNET',comment, postId
  }
}

export function loadPosts(posts) {
  return {
    type: 'LOAD_PHOTOS',
    posts
  }
}
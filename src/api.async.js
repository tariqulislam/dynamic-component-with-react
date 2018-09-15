export const getAllpost = async () => {
  let allPosts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
      console.log(JSON.stringify(posts, null, 2));
      return posts;
    })
    .catch(err => console.log(err));
  return allPosts;
};

export const getPostById = async id => {
  const getPost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then(res => res.json());
  return getPost;
};

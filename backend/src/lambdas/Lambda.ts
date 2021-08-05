export const send_data = async (data: { name: string }): Promise<string> => {
  // const posts = await DB_Posts.scan()
  // const sortedPosts = posts.sort((a, b) => b.date.getTime() - a.date.getTime())
  // return sortedPosts
  return 'hello world' + data.name
}

export const retrieve_data = async (data: { name: string }): Promise<string> => {
  // const posts = await DB_Posts.scan()
  // const sortedPosts = posts.sort((a, b) => b.date.getTime() - a.date.getTime())
  // return sortedPosts
  return 'hello world' + data.name
}

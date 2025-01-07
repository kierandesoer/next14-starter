// // TEMPORARY POSTS
// const users = [
//     {
//         id: 1,
//         username: "Brett"
//     },
//     {
//         id: 2,
//         username: "Jordan"
//     },
//     {
//         id: 3,
//         username: "Evan"
//     },
//     {
//         id: 4,
//         username: "Sylvia"
//     },
// ]

// const posts = [
//     {
//         id: 1,
//         title: "tomorrow",
//         body: "well harbor noun himself pride hat heart toy night tune shall act garage science label hurried discuss tide either five women safe there characteristic",
//         userId: 1
//     },
//     {
//         id: 2,
//         title: "harder",
//         body: "season replace closely pie young decide sail face bridge point coat station announced week useful obtain future respect dead review heart stove be even",
//         userId: 2
//     },    {
//         id: 3,
//         title: "its",
//         body: "every how furniture shaking map angry hold many occasionally example green detail audience ought caught baby whatever space flies surrounded had drink rubbed love",
//         userId: 3
//     },    {
//         id: 4,
//         title: "hair",
//         body: "eye rice support half helpful written hurry his instant come allow suit send atmosphere race plain ranch rain against slide stared taken strength pole",
//         userId: 4
//     },    {
//         id: 5,
//         title: "stick",
//         body: "could wait merely once aloud basket what tomorrow fog member massage settle stopped frog capital pupil surprise halfway beside riding bill up under young",
//         userId: 1
//     },
// ]
import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();  // prevents caching
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};

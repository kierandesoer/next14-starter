"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDB } from "./utils";

export const addPost = async (formData) => {
    // const title = formData.get("title");
    // const desc = formData.get("desc");
    // const slug = formData.get("slug");
    // const userId = formData.get("userId");

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        connectToDB();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });

        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog");

    } catch (err) {
        console.log(err)
        return {error: "Something went wrong!"};
    }
}

export const deletePost = async (formData) => {

    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();

        await Post.findByIdAndDelete(id);
        console.log("deleted to db");
        revalidatePath("/blog");

    } catch (err) {
        console.log(err)
        return {error: "Something went wrong!"};
    }
}
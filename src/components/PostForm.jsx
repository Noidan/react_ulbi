import React, { useState } from "react";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }


    return <form>
        {/* controlled component */}
        <MyInput
            value={post.title}
            onChange={e => setPost({ ...post, title: e.target.value })}
            type='text'
            placeholder='Post name'
        />
        <MyInput
            value={post.body}
            onChange={e => setPost({ ...post, body: e.target.value })}
            type='text'
            placeholder='Post description'
        />

        <MyButton onClick={addNewPost}> Add post</MyButton>
    </form>

}

export default PostForm
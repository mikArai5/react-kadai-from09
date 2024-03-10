import React from "react";
import { useSelector } from "react-redux";
import "./Count.css";

function Count() {
    const count = useSelector((state) => state.count);
    const posts = useSelector((state) => state.posts);
    return (
        <>
        <ul>

        </ul>
        <div className="content">
            <h1>記事一覧</h1>
            <ul className="boxes">
                {posts.map((post) => (
                    <li key={post.postId} className="box">
                        <p className="ttl">{post.postName}</p>
                        <p className="txt">{post.postDetail}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default Count;
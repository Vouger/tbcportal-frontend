import React from "react";

import PostCard from "modules/landing/components/PostCard/PostCard";

function PostsList({list}) {
    return (
        <>
            {list && list.map((item, i) => (
                <PostCard key={i} data={item} />
            ))}
        </>
    )
}

export default PostsList;
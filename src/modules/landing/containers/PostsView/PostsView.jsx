import React, {useState} from "react";

import Post from "modules/landing/components/Post/Post";
import {useQuery} from "@apollo/client";
import queries from "@queries";

export default function PostsView() {
    const [filterClass, setFilterClass] = useState('all');
    const [filterContent, setFilterContent] = useState('all');

    const { loading, data, refetch } = useQuery(queries.guides.GET_GUIDES, {
        variables: { filterClass, filterContent }
    });

    return (
        <div>
            {loading ? "Loading..." : ""}

            {!loading && data && data.guides.length === 0 ? "Nothing found" : ""}

            {!loading && data && data.guides.map((item) => (
                <Post data={item} />
            ))}
        </div>
    )
}
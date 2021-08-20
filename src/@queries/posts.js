import {gql} from "@apollo/client";

export default class Posts {
    static LIST = gql`
        query posts($take: Float, $page: Float) {
            posts (
                data: {
                    take: $take
                    page: $page
                }
            ) {
                list {
                    id
                    title
                    previewText
                    views
                    thumbnailUrl
                    user {
                        nickname
                    }
                }
                total
            }
        }
    `;

    static GET = gql`
        query post ($id: String!) {
            post (id: $id) {
                id
                title
                text
            }
        }
    `;

    static CREATE = gql`
        mutation CreatePost(
            $title: String!,
            $text: String!,
            $thumbnailUrl: String!
        ) {
            createPost (
                data: {
                    title: $title,
                    text: $text,
                    thumbnailUrl: $thumbnailUrl
                }
            ) {
                text
            }
        }
    `;

    static DELETE = gql`
        mutation DeletePost($id: String!) {
            deletePost (id: $id)
        }
    `;
}

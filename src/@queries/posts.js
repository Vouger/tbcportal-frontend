import {gql} from "@apollo/client";

export default class Posts {
    static LIST = gql`
        query posts {
            posts {
                id
                title
                views
                thumbnailUrl
                user {
                    nickname
                }
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
}
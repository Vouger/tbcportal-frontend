import {gql} from "@apollo/client";

export default class Guides {
    static GET_GUIDES = gql`
        query guides (
            $filterClass: String!, 
            $filterContent: String!, 
            $take: Float, 
            $skip: Float, 
            $orderBy: String,
            $keyword: String
        ) {
            guides (
                data: {
                    filterClass: $filterClass
                    filterContent: $filterContent
                    take: $take
                    skip: $skip
                    orderBy: $orderBy
                    keyword: $keyword
                }
            ) {
                list {
                    id
                    title
                    views
                    className
                    thumbnailUrl
                    user {
                        nickname
                    }
                }
                total
            }
        }
    `;

    static GET_GUIDE = gql`
        query guide ($id: String!) {
            guide (id: $id) {
                id
                title
                text
                className
                contentType
            }
        }
    `;

    static CREATE_GUIDE = gql`
        mutation CreateGuide(
            $title: String!, 
            $text: String!, 
            $className: String!, 
            $contentType: String!, 
            $thumbnailUrl: String!
        ) {
            createGuide (
                data: {
                    title: $title,
                    text: $text,
                    className: $className,
                    contentType: $contentType,
                    thumbnailUrl: $thumbnailUrl
                }
            ) {
                text
            }
        }
    `;

    static ADMIN = gql`
        query adminGuides (
            $take: Float, 
            $skip: Float
        ) {
            adminGuides (
                data: {
                    take: $take
                    skip: $skip
                }
            ) {
                list {
                    id
                    title
                    views
                    className
                    thumbnailUrl
                    user {
                        nickname
                    }
                }
                total
            }
        }
    `;
}
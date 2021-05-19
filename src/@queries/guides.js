import {gql} from "@apollo/client";

export default class Guides {
    static GET_GUIDES = gql`
        query guides (
            $filterClass: String!, 
            $filterContent: String!, 
            $take: Float, 
            $page: Float, 
            $orderBy: String,
            $keyword: String
        ) {
            guides (
                data: {
                    filterClass: $filterClass
                    filterContent: $filterContent
                    take: $take
                    page: $page
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
                isApproved
                views
                user {
                    nickname
                }
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
            $filterClass: String!, 
            $filterContent: String!, 
            $take: Float, 
            $page: Float, 
            $orderBy: String,
            $keyword: String
        ) {
            adminGuides (
                data: {
                    filterClass: $filterClass
                    filterContent: $filterContent
                    take: $take
                    page: $page
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

    static APPROVE = gql`
        mutation ApproveGuide($id: String!) {
            approveGuide (id: $id)
        }
    `;

    static HIDE = gql`
        mutation HideGuide($id: String!) {
            hideGuide (id: $id)
        }
    `;
}
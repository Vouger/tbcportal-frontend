import {gql} from "@apollo/client";

export default class Guides {
    static GET_GUIDES = gql`
        query guides ($filterClass: String!, $filterContent: String!) {
            guides (
                data: {
                    filterClass: $filterClass
                    filterContent: $filterContent
                }
            ) {
                id
                title
                views
                className
                thumbnailUrl
                user {
                    nickname
                }
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
}
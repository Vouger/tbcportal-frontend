import {gql} from "@apollo/client";

export default class Twitch {
    static LIST = gql`
        query twitch {
            twitch {
                name
                views
                gameName
                logo
            }
        }
    `;

    static GET_ADMIN = gql`
        query adminTwitch {
            adminTwitch {
                id
                name
                order
            }
        }
    `;

    static GET = gql`
        query GetTwitchStream ($id: String!) {
            getTwitchStream (id: $id) {
                name
                order
            }
        }
    `;

    static ADD = gql`
        mutation CreateTwitchStream($name: String!, $order: Float!) {
            createTwitchStream (
                data: {
                    name: $name,
                    order: $order
                }
            ){
                name
            }
        }
    `;

    static UPDATE = gql`
        mutation UpdateTwitchStream($id: String!, $name: String!, $order: Float!) {
            updateTwitchStream (
                data: {
                    id: $id,
                    name: $name,
                    order: $order
                }
            ){
                name
            }
        }
    `;

    static REMOVE = gql`
        mutation RemoveTwitchStream($id: String!) {
            removeTwitchStream (id: $id)
        }
    `;
}
import {gql} from "@apollo/client";

export default class Twitch {
    static GET = gql`
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
}
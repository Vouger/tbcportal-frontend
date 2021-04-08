import {gql} from "@apollo/client";

export default class Profile {
    static PROFILE = gql`
        query profileInfo {
            profileInfo {
                nickname
            }
        }
    `;

    static UPDATE_PROFILE = gql`
        mutation UpdateProfile($nickname: String!) {
            updateProfile (
                data: {
                    nickname: $nickname
                }
            ){
                nickname
            }
        }
    `;
}
import {gql} from "@apollo/client";

export default class Settings {

    static LIST_BY_KEYS = gql`
        query Settings ($names: [String!]!) {
            settings (
                names : $names
            ) {
                name
                value
            }
        }
    `;

    static BULK_CREATE_OR_UPDATE = gql`
        mutation CreateOrUpdateSettings($values: [CreateSettingsInput!]!) {
            createOrUpdateSettings ( data: $values )
        }
    `;
}
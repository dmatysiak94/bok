import {gql} from "@apollo/client";

export const getFormById = gql`
    query form($id: ID){
        form(id: $id) {
            id,
            topic,
            comment,
            storeBranch{
              name
            },
            comments{
              id,
              content,
              created,
              formId
            }
            email,
            phoneNumber,
            consent,
            created,
            clicked,
            userAgent
        }
    }
`;

export const getForms = gql`
      query {
          forms {
            id,
            topic,
            created,
            clicked
          }
        }
    `;
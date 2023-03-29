import {gql} from '@apollo/client'

export const addThreadMutation = gql`
    mutation addForm($topic: String!, $comment: String!, $storeBranchId: ID, $email: String, $phoneNumber: String, $consent: Boolean){
        addForm(topic: $topic, comment: $comment, storeBranchId: $storeBranchId, email: $email, phoneNumber: $phoneNumber, consent: $consent) {
            id
        }
    }
`;

export const formClicked = gql`
    mutation formClicked($id: ID){
        formClicked(id: $id) {
            id
        }
    }
`;

export const addCommentMutation = gql`
    mutation addComment($content: String!, $formId: ID){
        addComment(content: $content, formId: $formId) {
            id
        }
    }`
;

export const createUserMutation = gql`
    mutation addUser($email: String!, $password: String!, $confirmPassword: String!){
        addUser(email: $email, password: $password, confirmPassword: $confirmPassword) {
            id
        }
    }`
;
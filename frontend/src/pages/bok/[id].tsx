import React from "react";
import apolloClient from "../../../lib/apollo";
import {IForm} from "@/types/IForm";
import {getFormById} from "@/graphql/Queries";
import BokContent from "@/component/bok/BokContent";

const ThreadPage : React.FC<{form: IForm}> = (props) => {
    return (
        <BokContent form={props.form}/>
    )
}

export async function getServerSideProps(context) {

    const {id} = context.query

    const { data, errors } = await apolloClient.query({
        query: getFormById,
        fetchPolicy: "no-cache",
        variables: {id}
    })

    console.log(errors)

    const formFromData : IForm = {
        id: data.form.id,
        topic: data.form.topic,
        comment: data.form.comment,
        storeBranch: data.form.storeBranch,
        comments: data.form.comments,
        email: data.form.email,
        phoneNumber: data.form.phoneNumber,
        consent: data.form.consent,
        created: data.form.created,
        clicked: data.form.clicked,
        userAgent: data.form.userAgent
    }

    console.log(formFromData)

    return {
        props : {
            form: formFromData
        }
    }
}

export default ThreadPage;
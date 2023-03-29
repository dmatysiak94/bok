import React from "react";
import {IForm} from "@/types/IForm";

import {getFormById, getForms} from "@/graphql/Queries";
import Bok from "@/component/bok/Bok";
import apolloClient from "../../../lib/apollo";

const BokPage: React.FC<{forms: IForm []}> = (props) => {
    return (
        <Bok forms={props.forms}></Bok>
    )
}

export async function getServerSideProps(context) {

    const { data } = await apolloClient.query({
        query: getForms,
        fetchPolicy: "no-cache",
    })

    const forms: IForm[] = data.forms.map(form => {return {
        id: form.id,
        topic: form.topic,
        created: form.created,
        clicked: form.clicked
    }})

    return {
        props : {
            forms: forms
        }
    }
}

export default BokPage;
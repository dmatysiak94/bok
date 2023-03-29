
import {IStoreBranch} from "@/types/IStoreBranchDict";
import React from "react";
import {gql} from '@apollo/client'

import apollo from "../../../lib/apollo";
import Form from "@/component/form/Form";

const FormPage: React.FC<{stores: IStoreBranch []}> = (props) => {

    return (
        <Form stores={props.stores}/>
    )
}

export async function getStaticProps() {

    const { data } = await apollo.query({
        query: gql`
      query {
        storeBranchDictionary {
          id,
          name
        }
      }
    `,
    });

    const stores: IStoreBranch[] = data.storeBranchDictionary.map(store => {return {id: store.id, name: store.name}})

    return {
        props : {
            stores: stores
        }
    }
}

export default FormPage
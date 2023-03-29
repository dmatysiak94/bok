import {IForm} from "@/types/IForm";
import styles from './BokContent.module.css'
import BokCaseSection from "@/component/bok/BokCaseSection";
import BokCommentSection from "@/component/bok/BokCommentSection";


const BokContent: React.FC<{ form: IForm }> = (props) => {

    return (
        <div className={styles.container}>
            <BokCaseSection form={props.form}/>
            <BokCommentSection comments={props.form.comments} formId={props.form.id}/>
        </div>
    )
}

export default BokContent;
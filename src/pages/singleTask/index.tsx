import { useParams } from "react-router";
import { SingleTask } from "../../components/organism";

export const SingleUserTask = () => {
    const { id } = useParams()
    const numericId = Number(id)
    return <SingleTask singleTaskId={numericId} />


}
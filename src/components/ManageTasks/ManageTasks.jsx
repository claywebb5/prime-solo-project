import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import EditTask from "../EditTask/EditTask";
import NewTask from "../NewTask/NewTask";

function ManageTasks() {

    return (
        <>
        <Container>
            <Card>
                <EditTask />
            </Card>
        </Container>

        <Container>
            <Card>
                <NewTask />
            </Card>
        </Container>
        </>
    );
}

export default ManageTasks;
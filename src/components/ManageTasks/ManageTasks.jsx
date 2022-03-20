import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import EditTask from "../EditTask/EditTask";
import NewTask from "../NewTask/NewTask";

function ManageTasks() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_TASKS' });
      }, [dispatch]);


    return (
        <>
        <Container>
            <Card>
                <NewTask />
            </Card>
        </Container>

        <Container>
            <Card>
                <EditTask />
            </Card>
        </Container>
        </>
    );
}

export default ManageTasks;
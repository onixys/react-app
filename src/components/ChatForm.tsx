import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(1),
        },
        role: {
            textTransform: 'capitalize',
        },
        button: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
        },
    }),
);

interface Values {
    chat: string;
}

interface Props {
    onSubmit: (values: Values) => void;
}

const Chat: React.FunctionComponent<Props> = ({ onSubmit }) => {
    const classes = useStyles();

    return (
        <div>
            <Formik
                initialValues={{ chat: '' }}
                onSubmit={(values) => {
                    onSubmit(values);
                }}
            >
                {({ values }) => (
                    <Form className={classes.root}>
                        <Field placeholder="chat here ..." name="chat" type="input" as={TextField} />
                        <Button type="submit">send</Button>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Chat;

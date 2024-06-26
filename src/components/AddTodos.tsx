import { useState } from 'react';
import { useForm } from '@mantine/form';
import { Button, Modal, Group, TextInput, Textarea } from '@mantine/core';
import { ENDPOINT, Todo } from '../App';
import { KeyedMutator } from 'swr';



function AddTodos({mutate}: { mutate: KeyedMutator<Todo[]>}) {
    const [open, setOpen] = useState(false);

    const form = useForm({
        initialValues: {
            title: '',
            body: '',
        },
    });

    async function createTodo(values: {title: string, body: string}) {
        const updated = await fetch(`${ENDPOINT}/api/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values),
        }).then((r) => r.json());

        mutate(updated)
        form.reset()
        setOpen(false)
    }

    return ( 
    <>
        <Modal opened={open} onClose={() => setOpen(false)} title="Create Todo">
            <form onSubmit={form.onSubmit(createTodo)}>
                <TextInput
                required
                mb={12}
                label="Todo"
                placeholder="Enter your todo here"
                {...form.getInputProps("title")}
                />
                <Textarea
                mb={12}
                label="Body"
                placeholder="Describe your todo"
                {...form.getInputProps("body")}
                />
                <Button type="submit">Create Todo</Button>
            </form>
        </Modal>


        <Group align="center">
            <Button fullWidth mb={12} onClick={() => setOpen(true)}>
                ADD TODO
            </Button>
        </Group>
        
    </>
    )
}

export default AddTodos
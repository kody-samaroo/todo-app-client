import { useState } from 'react';
import { useForm } from '@mantine/form';
import { Button, Modal, Group, TextInput, Textarea } from '@mantine/core';


function AddTodos() {
    const [open, setOpen] = useState(false);

    const form = useForm({
        initialValues: {
            title: '',
            body: '',
        },
    });

    function createTodo() {
        
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
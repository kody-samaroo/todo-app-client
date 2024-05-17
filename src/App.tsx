import { Box } from "@mantine/core";
import useSWR from "swr";
import '@mantine/core/styles.css';
import './App.css';
import AddTodos from "./components/AddTodos";

export const ENDPOINT = "http://localhost:4000";

const fetcher = (url: string) => 
  fetch(`${ENDPOINT}/${url}`).then((r) => r.json()); 

function App() {

  const {data, mutate} = useSWR('api/todos', fetcher)
  return (
    <Box>
      {JSON.stringify(data)}
      
      
      <AddTodos />
      
    </Box>
    
  )
}

export default App

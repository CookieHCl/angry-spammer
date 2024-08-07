import Button from "@suid/material/Button";
import { createSignal } from 'solid-js'

export default function App() {
  const [count, setCount] = createSignal(0);

  return (
    <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
      count is {count()}
    </Button>
  );
}

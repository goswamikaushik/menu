import useCouner from "../hooks/use-counter";
import Button from "../components/Button";

const CounterPage = ({ initialCount }) => {
  
  const {count, increament} = useCouner(initialCount);
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button warning onClick={increament}>
        Increament
      </Button>
    </div>
  );
};

export default CounterPage;

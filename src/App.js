import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <div>
        <Button primary>Primary</Button>
      </div>
      <div>
        <Button>Secondary</Button>
      </div>
      <div>
        <Button>Warning</Button>
      </div>
      <div>
        <Button>Success</Button>
      </div>
      <div>
        <Button>Danger</Button>
      </div>
    </div>
  );
};

export default App;

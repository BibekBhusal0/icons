import Box from "./component/box";

function App() {
  return (
    <>
      <div className="size-full p-2 overflow-auto h-screen bg-black dark text-white">
        <h1 className="text-3xl font-bold ">Hello world!</h1>
        <Box icon="material-symbols:arrow" />
      </div>
    </>
  );
}

export default App;

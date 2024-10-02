import Box from "./component/box";

function App() {
  return (
    <>
      <div className="size-full p-2 overflow-auto h-screen bg-black dark text-white">
        <Box icon="mdi-light:home" />
      </div>
    </>
  );
}

export default App;

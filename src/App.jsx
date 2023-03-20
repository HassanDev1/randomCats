import { ChakraProvider } from "@chakra-ui/react";
import DashBoard from "../components/Dashboard";

function App() {
  return (
    <ChakraProvider>
      <DashBoard />
    </ChakraProvider>
  );
}

export default App;

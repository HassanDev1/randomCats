import { VStack, Text, Heading, Button } from "@chakra-ui/react";

const BannedCats = ({ attributes }) => {
  return (
    <VStack p='2em' bgColor='#D2D2D2' h={"full"} width='20%'>
      <Heading>Ban List</Heading>
      <Text fontWeight={"bold"}>
        Select an attribute in your listing to ban it
      </Text>

      {attributes}
    </VStack>
  );
};

export default BannedCats;

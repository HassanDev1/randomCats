import { VStack, Heading } from "@chakra-ui/react";

const SeenCats = ({ data, desc }) => {
  return (
    <VStack
      p={"2em"}
      bgColor='#9C9C9C'
      h={"full"}
      width='30%'
      overflow={"scroll"}
    >
      <Heading>Who have we seen so far?</Heading>
      {desc}
    </VStack>
  );
};

export default SeenCats;

import {
  VStack,
  HStack,
  Card,
  Text,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import BannedCats from "./BannedCats";

const ACCESS_KEY = import.meta.env.VITE_API_KEY;

const Discover = ({ getBreeds, data }) => {
  const [attributes, setAttributes] = useState([]);
  const handleAttribute = (attr, id) => {
    setAttributes([<Button colorScheme='yellow'>{attr}</Button>]);
    setAttributes((prevState) => [...attributes, prevState]);
  };
  return (
    <>
      <VStack p='2em' width='60%' height='70%'>
        <Card
          bgColor='#2D2C2C'
          color='white'
          h={"full"}
          width={"full"}
          align='center'
        >
          <Heading letterSpacing='0.1em'>Trippin' on Cats</Heading>
          <br />
          <Text fontSize={"xl"}>Discover cats from your wildest dreams!</Text>
          <br />
          <Text>😺😸😹😻😼😽🙀😿😾</Text>
          <br />
          <br />
          {data && (
            <>
              <HStack>
                <Button
                  colorScheme='yellow'
                  onClick={() =>
                    handleAttribute(data.breeds[0].name, data.breeds[0].id)
                  }
                >
                  {data.breeds[0].name}
                </Button>
                <Button
                  colorScheme='yellow'
                  onClick={() => {
                    handleAttribute(data.breeds[0].weight.imperial + " lbs");
                  }}
                >
                  {data.breeds[0].weight.imperial} lbs
                </Button>
                <Button
                  colorScheme='yellow'
                  onClick={() => {
                    handleAttribute(data.breeds[0].origin);
                  }}
                >
                  {data.breeds[0].origin}
                </Button>
                <Button
                  colorScheme='yellow'
                  onClick={() =>
                    handleAttribute(data.breeds[0].life_span + " years")
                  }
                >
                  {data.breeds[0].life_span} years
                </Button>
              </HStack>
              <br />
              <Image src={data.url} boxSize='200px' objectFit='cover' />
            </>
          )}
          <Button
            colorScheme='blackAlpha'
            m={"1em"}
            shadow='dark-lg'
            onClick={getBreeds}
          >
            Discover!
          </Button>
        </Card>
      </VStack>
      <BannedCats attributes={attributes} />
    </>
  );
};

export default Discover;

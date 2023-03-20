import BannedCats from "./BannedCats";
import Discover from "./Discover";
import SeenCats from "./SeenCats";
import axios from "axios";
import { useEffect, useState } from "react";
import { Text, Image, Card, CardBody, Flex, Button } from "@chakra-ui/react";
const DashBoard = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState("");
  const [desc, setDesc] = useState([]);

  const getBreeds = async () => {
    const response = await axios.get("https://api.thecatapi.com/v1/breeds");

    let randomData = await response.data[
      Math.floor(Math.random() * response.data.length)
    ];

    setId(randomData.reference_image_id);
    const { data } = await axios.get(
      `https://api.thecatapi.com/v1/images/${id}`
    );

    setData(data);
    setDesc([
      <Card
        size={"xs"}
        align='center'
        p={"2em"}
        bgColor='#2E2D2D'
        color='white'
      >
        <CardBody align='center'>
          <Image src={data.url} boxSize='50%' objectFit='fit' m={"0.5em"} />
          <Text>
            {" "}
            {data.breeds[0].name + " cat from " + data.breeds[0].origin}
          </Text>
        </CardBody>
      </Card>,
    ]);
    setDesc((prevState) => [...desc, prevState]);
  };

  useEffect(() => {
    getBreeds();
    setData(data);
  }, []);

  return (
    <Flex
      width='100vw'
      h='100vh'
      alignItems='center'
      justifyContent='space-between'
      gap='2'
      bgColor='#313131'
      bgImage={
        "https://voluble-belekoy-49b2e6.netlify.app/assets/cat-collage.921045c8.jpeg"
      }
      backgroundBlendMode='multiply'
    >
      <SeenCats data={data} desc={desc} />
      <Discover getBreeds={getBreeds} data={data} />
    </Flex>
  );
};

export default DashBoard;

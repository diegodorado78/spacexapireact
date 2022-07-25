import { React, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { Text, Flex, Box,Tag, Spacer,Button} from "@chakra-ui/react";
import ItemDetails from './ItemDetails';

function LaunchItem(launch) {
  //tambien podria pasar el objeto completo {launch} y llamar launch.name etc
  // function LaunchItem({launch}) {
const [details, setDetails] = useState(false);
  return (
    <Box borderRadius="lg" p={4} bg="gray.100" textAlign="left" my={2}>
      <Flex direction="column" m={1}>
        <Text fontSize="xl" fontWeight="bold">
          Mission {launch.name}({launch.date_utc.slice(0, 4)})
        </Text>
        <Flex direction="row-reverse" alignlaunchs="center">
          <Tag
            fontWeight="bold"
            p={2}
            colorScheme={launch.success ? "green" : "red"}
          >
            {launch.success ? "Success" : "Failure"}
          </Tag>
          <Spacer />

          <Text ml={2} fontSize="sm" textAlign="left">
            {launch.date_utc.slice(0, 10)}
          </Text>
          <FaCalendar />
        </Flex>
      </Flex>
      {details ? <ItemDetails launch={launch} /> : null}
      {!details ? (
        <Button
          colorScheme="teal"
          size="s"
          mx={2}
          p={2}
          onClick={() => setDetails((prevState) => !prevState)}
        >
          More details
        </Button>
      ) : (
        <Button
          colorScheme="facebook"
          size="s"
          variant="ghost"
          py={2}
          onClick={() => setDetails((prevState) => !prevState)}
        >

        Hide details
        </Button>
      )}
    </Box>
  );
}

export {LaunchItem};
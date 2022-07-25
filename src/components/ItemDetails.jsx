import React from 'react'
import { Text, Flex, Box, Tag, Spacer } from "@chakra-ui/react";

function ItemDetails({launch}) {
  return <Text>{launch.details}</Text>;
}

export default ItemDetails
import React from "react";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const TextSkeleton = ({padding='6',boxShadow='lg',bg='white',size='10',mt='4',noOfLines=4,spacing='4'}) => (
  <Box padding={padding} boxShadow={boxShadow} bg={bg}>
    <SkeletonCircle size={size} />
    <SkeletonText mt={mt} noOfLines={noOfLines} spacing={spacing} />
  </Box>
);

export default TextSkeleton;

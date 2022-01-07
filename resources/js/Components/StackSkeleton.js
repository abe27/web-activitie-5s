import React from 'react';
import { Stack, Skeleton } from '@chakra-ui/react';

const StackSkeleton = ({ height = "10px" }) => (
  <Stack>
    <Skeleton height={height} />
    <Skeleton height={height} />
    <Skeleton height={height} />
  </Stack>
);

export default StackSkeleton;

import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData &&
        <Box mr="4" textAlign="right" >
          <Text>Nilton Izaguirres</Text>
          <Text color="gray.300" fontSize="small" >
            niltonizaguirres2003@gmail.com
          </Text>
        </Box>
      }

      <Avatar size="md" name="Nilton Izaguirres" src="https://www.github.com/niltonizaguirres.png" />
    </Flex>
  );
}
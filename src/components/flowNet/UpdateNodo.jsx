import { Group, Button, TextInput, Text, Dialog } from "@mantine/core";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const UpdateNodo = ({ node, open, setOpen, updateNodeMetadata }) => {
  // eslint-disable-next-line react/prop-types
  const [label, setLabel] = useState(null);

  useEffect(( ) => {
    if(node){
      // eslint-disable-next-line react/prop-types
      setLabel(node.data.label)
    }
  }, [node])

  return (
    <Dialog opened={open} onClose={() => setOpen(false)} withCloseButton>
      <Text size="sm" mb="xs" weight={500}>
        Nombre
      </Text>

      <Group align="flex-end">
        <TextInput sx={{ flex: 1 }} value={label} onChange={(event) => setLabel(event.currentTarget.value)} />
        <Button
          onClick={() => {
            setOpen(false);
            // eslint-disable-next-line react/prop-types
            updateNodeMetadata(node.id, label);
          }}
        >
          Aceptar
        </Button>
      </Group>
    </Dialog>
  );
};

export { UpdateNodo };

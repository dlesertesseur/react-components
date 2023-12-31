import { Group, Paper, Text } from "@mantine/core";
import { Draggable } from "react-beautiful-dnd";

// eslint-disable-next-line react/prop-types
const DragToolbarComponent = ({ id, index, value, icon }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Paper withBorder
        p={"xs"}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Group position="apart">
            <Text size={"sm"} weight={600}>{value}</Text>
            {icon}
          </Group>
        </Paper>
      )}
    </Draggable>
  );
};

export default DragToolbarComponent;

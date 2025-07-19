import { Box } from '@mui/material';
import { EnrolledClassCard } from './EnrolledClassCard';
import { EnrolledClass } from 'models/EnrolledClass';

interface Props {
  classes: EnrolledClass[];
}

export const EnrolledClassList = ({ classes }: Props) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {classes.map(cls => (
        <EnrolledClassCard
          key={cls.id}
          cls={cls}
        />
      ))}
    </Box>
  );
};

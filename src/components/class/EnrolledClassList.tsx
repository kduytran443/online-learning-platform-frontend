import { Box, Grid } from '@mui/material';
import { EnrolledClassCard } from './EnrolledClassCard';
import { EnrolledClass } from '@/models/EnrolledClass';

interface Props {
  classes: EnrolledClass[];
}

export const EnrolledClassList = ({ classes }: Props) => {
  return (
    <Box display="flex" flexDirection="row" flexWrap={'wrap'} gap={3}>
      {classes.map((cls) => (
        <Grid
          item
          key={cls.id}
          xs={12} // mobile: 1 per row
          sm={6} // tablet: 2 per row
          md={4} // desktop: 3 per row
        >
          <EnrolledClassCard cls={cls} />
        </Grid>
      ))}
    </Box>
  );
};

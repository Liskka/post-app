import React from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/system/Box';

const Paginate = ({ totalPages, setPage }) => {
  return (
    <Box m={2} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination
        count={totalPages}
        shape="rounded"
        color="primary"
        onChange={(e, page) => setPage(page)}
      />
    </Box>
  )
}

export default Paginate
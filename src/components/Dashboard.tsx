import * as React from 'react';

export interface Props {
  name: string;
}

function Dashboard({name}: Props) {
  return (
    <>
      Name: {name}
    </>
  );
}

export default Dashboard;
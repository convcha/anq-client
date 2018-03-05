import * as React from 'react';

export interface Props {
  name: string;
}

function Dashboard({name}: Props) {
  return (
    <>
      <h1>Dashboard</h1>
      Name: {name}
    </>
  );
}

export default Dashboard;
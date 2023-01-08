import React from 'react';

interface Props {children?:React.ReactNode}

export default function HomePage({children} : Props) {
  return (
    <>
    {children}
    </>
  );
}

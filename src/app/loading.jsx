import React from 'react';
import Image from 'next/image';

function loading() {
  return (
    <div className="flex justify-center">
      <Image src="spinner.svg" alt="spinner" width={150} height={150} />
    </div>
  );
}

export default loading;

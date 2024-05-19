import React from 'react';
import Image from 'next/image';

function loading() {
  return (
    <div className="flex justify-center">
      <Image src="spinner.svg" alt="spinner" />
    </div>
  );
}

export default loading;

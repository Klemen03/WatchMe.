import React from 'react';

function Results({ results }) {
  return (
    <div className="max-w-6xl mx-auto">
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
}

export default Results;

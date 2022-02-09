import React from "react";

const Styles = () => {
  return (
    <style>
      {`
    .text-class {
      color: var(--aha-black-800);
    }
    `}
    </style>
  );
};

aha.on("abstract", ({ record, fields, onUnmounted }, { identifier, settings }) => {
  return (
    <>
      <Styles />
      <div className='text-class'>Abstract</div>
    </>
  );
});
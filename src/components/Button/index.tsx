import React, { ReactNode } from 'react';

interface IButton {
  children: ReactNode;
}

export const Button = (props: IButton) => {
  return (
    <button className="px-5 py-2 flex place-content-center rounded-full bg-slate-500 text-black">
      {props.children}
    </button>
  );
};

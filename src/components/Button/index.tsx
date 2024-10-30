import React, { ReactNode } from 'react';

interface IButton {
  children: ReactNode;
  visual?: 'primary' | 'outline' | 'secondary';
}

export const Button = (props: IButton) => {
  return (
    <button
      className={`px-5 py-2 flex place-content-center rounded-full bg-slate-500 ${props.visual === 'primary' ? 'text-black' : 'text-red-500'}`}
    >
      {props.children}
    </button>
  );
};

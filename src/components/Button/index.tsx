interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  visual?: 'primary' | 'outline' | 'secondary';
}

export const Button = ({ visual = 'primary', ...props }: IButton) => {
  return (
    <button
      {...props}
      className={`px-5 py-2 flex place-content-center rounded-full bg-slate-500 ${visual === 'primary' ? 'text-black' : 'text-red-500'}`}
    >
      {props.children}
    </button>
  );
};

interface ButtonProps {
  onClick?: () => void;
};

const Button = ({
  onClick = undefined
}: ButtonProps) => {
  return (
    <button onClick={onClick}>

    </button>
  );
};

export default Button;
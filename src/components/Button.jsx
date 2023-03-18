

const Button = ({value, style}) => {
  return <button className={`border-none bg-Blue p-[15px] text-center w-[250px] mx-auto mt-6 text-white rounded-full block font-bold font-heading ${style}`}>{value}</button>;
};

export default Button;

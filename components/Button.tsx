import Image from "next/image";

type ButtonProps = {
  title: string;
  type: "button" | "submit";
  icon?: string;
  variant: string;
};

const Button = ({ title, type, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-2 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className='bold-16 whitespace-nowrap'>{title}</label>
    </button>
  );
};

export default Button;

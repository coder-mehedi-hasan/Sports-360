import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/logo.png" width={50} height={50} />
    </div>
  );
};

export default Logo;

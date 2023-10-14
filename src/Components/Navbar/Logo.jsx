import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/logo.png" width={70} height={70} />
    </div>
  );
};

export default Logo;

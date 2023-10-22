import cardImage from "@/assart/CardImage.jpeg";
import Image from "next/image";

const NewsCard = () => {
  return (
    <div className="rounded-xl bg-white shadow-xl mb-10 border border-gray-300 ">
      <div>
        <Image src={cardImage} height={300} width={350} className="rounded-t-xl w-full " />
      </div>
      <div className="p-4 space-y-4 ">
        <button type="button" className="bg-gradient-to-t from-cyan-500 to-blue-500 text-white rounded-full font-semibold px-4">
          Category
        </button>
        <h3 className="text-2xl font-semibold">This Is News Title</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae cupiditate vel corporis dolorem in neque nobis eligendi facilis inventore quis?</p>
        <div className="flex items-center gap-2">
          <Image src={cardImage} height={100} width={100} className="w-12 h-12 rounded-full" />
          <div>
            <p className="text-lg font-semibold">Repoter Name</p>
            <p className="text-sm text-gray-600">published Date</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

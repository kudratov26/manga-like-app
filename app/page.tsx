import Image from "next/image";
import Table from "../components/table";

export default function Home() {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-center">
        <Image src={"/hero.svg"} alt="Hero" width={500} height={500}/>
      </div>
      <div>
        <Image src={"/calligraphy.svg"} alt="Calligraphy" width={500} height={500}/>
      </div>
      <div>
        <Image src={"/books.png"} alt="Books" width={500} height={500}/>
      </div>
      <Table/>
    </div>
  );
}

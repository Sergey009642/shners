import Image from "next/image";
import Link from "next/link";

export interface DogCartProps {
    url:string;
    id:string;
}


function DogCart({url,id}:DogCartProps) {
  return (
    <div className=" flex flex-wrap">
      <img src={url} className="w-80" alt="" />
      <Link href={`dogs/${id}`}>dogsingle</Link>
    </div>
  )
}

export default DogCart

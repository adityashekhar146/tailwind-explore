import Image from "next/image";
import React from "react";

interface UserTileProps {
  displayName: string;
  imageUrl: string;
  title: string;
}

const UserTile: React.FC<UserTileProps> = (props: UserTileProps) => {
  const {displayName, imageUrl, title} = props;

  return (
    <div className="flex flex-col md:flex-row items-center bg-slate-100 mx-1 my-2 p-3 rounded ">
      <div className="mx-3 my-1">
        <Image src={imageUrl} height={128} width={128} alt={displayName.charAt(0)} 
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col items-center content-center">
        <h2 className="text-2xl font-bold mb-2">{displayName}</h2>
        <p className="text-md text-gray-400">{title}</p>
      </div>
    </div>
  );
}

export default UserTile;
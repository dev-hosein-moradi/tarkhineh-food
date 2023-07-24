import React from "react";

const CommentCard = ({ name, message, date, avatar, rate }) => {
  return (
    <div className="w-[310px] min-w-[310px] h-36 py-5 px-2 rounded border-[1px] border-gray-4 flex flex-row items-center justify-between">
      <div className="pr-5">
        <p className="text-xs font-normal text-right leading-5">{message}</p>
        <span>
          <p>{rate}</p>
        </span>
      </div>

      <div className="flex flex-col items-center justify-end min-w-24">
        <img
          className="w-14 h-14 object-fill rounded-full"
          alt={name}
          src={avatar}
        />
        <p className="text-xs text-right w-full">{name}</p>
        <p className="text-xs">{date}</p>
      </div>
    </div>
  );
};

export default CommentCard;

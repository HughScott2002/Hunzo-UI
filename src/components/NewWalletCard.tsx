import React from "react";

const NewWalletCard = ({ color }: { color: string }) => {
  var col;
  switch (color) {
    case "black":
      {
        col = " backdrop-blur-[6px] bg-[url('/card/black_card_slate.svg')] ";
      }
      break;
    case "blue":
      {
        col = " backdrop-blur-[6px] bg-[url('/card/blue_card_slate.svg')] ";
      }
      break;
    case "pink":
      {
        col = " backdrop-blur-[6px] bg-[url('/card/pink_card_slate.svg')] ";
      }
      break;
    case "white":
      {
        col = "  backdrop-blur-[6px] bg-[url('/card/white_card_slate.svg')] ";
      }
      break;

    case "yellow":
      {
        col = "  backdrop-blur-[6px] bg-[url('/card/yellow_card_slate.svg')] ";
      }
      break;

    case "orange":
      {
        col = " backdrop-blur-[6px] bg-[url('/card/orange_card_slate.svg')] ";
      }
      break;
    default: {
      col = "bg-[url('/card/white_card_slate.svg')] ";
    }
  }

  return (
    <div
      className={`relative flex h-[202px] w-full max-w-[320px] justify-between rounded-[20px] ${col} bg-contain w-[20rem] bg-no-repeat`}
    >
      <div className="w-full h-full flex justify-center items-center">
        {color === "black" ? (
          <div className="text-white">
            {color.toLocaleUpperCase()} Card In Development
          </div>
        ) : (
          <div className="">
            {color.toLocaleUpperCase()} Card In Development
          </div>
        )}
      </div>
    </div>
  );
};

export default NewWalletCard;

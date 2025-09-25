import React from "react";
import Image from "next/image";
import { Button, Rating } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { LiaShoppingBagSolid } from "react-icons/lia";

export const ProductItemV2 = () => {
      const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="productItemV2">
      <div
        className="imgWrapper relative w-[100%]"
        style={{ borderRadius: "10px" }}
      >
        <Image
          src={"/images/burger1.jpg"}
          alt="burger"
          width={300}
          height={300}
          className="m-auto"
        />
      </div>
      <div className="info p-3 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <Rating
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          readOnly
          size="small"
        />
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          className="wishlist"
        />
      </div>
      <h3 className="text-brown text-lg">PANISH BURGER</h3>
      <p>Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula</p>
        <div className="flex items-center justify-between mt-3"> 
            <span
            className="price flex items-center justify-normal px-3 py-1 text-y font-weight-bold bg-brown"
            style={{ borderRadius: "10px" }}
          >
            $10.4
          </span>
      <Button className="btn-y"><LiaShoppingBagSolid/> Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { LiaShoppingBagSolid } from "react-icons/lia";

export const ProductItemV1 = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="product_item_v1">
      <div className="imgWrapper relative p-4">
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          style={{ position: "absolute" }}
          className="wishlist top-[5px] right-[5px] z-[99]"
        />
        <Image src={"/images/img1.png"} alt="img1" width={100} height={100} />
        <div className="flex items-center justify-between mt-3">
          <span
            className="price flex items-center justify-normal px-3 py-1 text-y font-weight-bold bg-brown"
            style={{ borderRadius: "10px" }}
          >
            $10.4
          </span>
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            readOnly
            size="small"
          />
        </div>
      </div>
      <div className="info mt-2 p-4 text-center">
        <h6 className="font-weight-bold">BIGTI BURGER</h6>
        <p className="text-black mt-2 mb-3">Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula</p>
        <Button><LiaShoppingBagSolid/> Add to Cart</Button>
      </div>
    </div>
  );
};

import { InnerBanner } from '@/components/InnerBanner';
import { ProductItemV2 } from '@/components/Product_Item_V2';
import React from 'react'

const Shop = () => {
  return (
    <>
       <InnerBanner title="SHOP" bg="/images/shop.jpg"/>
         <section className="py-5">
                <div className="container">
                  <p>Showing <b>1–12</b> of <b>30</b> results</p>
                  <div
                    className="productList grid grid-cols-4 mt-4"
                    style={{ gap: "20px" }}
                  >
                    <ProductItemV2 />
                    <ProductItemV2 />
                    <ProductItemV2 />
                    <ProductItemV2 />
                    <ProductItemV2 />
                    <ProductItemV2 />
                    <ProductItemV2 />
                    <ProductItemV2 />
                  </div>
                </div>
              </section>
        </>
  )
}
export default Shop;
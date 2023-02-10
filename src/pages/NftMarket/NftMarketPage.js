import React, { useEffect, useState } from "react";
import "swiper/css";
import CategoryItem from "./CategoryItem";
import "./nftMarket.css";
import { BsSearch } from "react-icons/bs";
import { HiOutlineAdjustments } from "react-icons/hi";
import category from "./data/category";
import NftCard from "./NftCard";
import lineBg from '../../assets/Images/roadmapbg.png';
const NftMarketPage = () => {
  const [nft, setNft] = useState([]);

  useEffect(() => {
    fetch('nft.json')
      .then(res => res.json())
      .then(data => setNft(data));
  }, []);

  return (
    <section className="artworks-area">
      <div className="lg:max-w-screen-xl w-full mx-auto p-4">
        <div className="category">
          <CategoryItem></CategoryItem>
        </div>

        <div className="search_filter mt-6">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div className="lg:col-span-2">
              <form action="" className="form">
                <div className="filter-by-search">
                  <select className="select item-category-select max-w-xs w-full">
                    <option disabled selected>
                      Select Category
                    </option>
                    {
                      category.map(item => <option>{item.name}</option>)
                    }

                  </select>

                  <div class="filter-search-input">
                    <input type="text" placeholder="Search keyword" className="input" />
                    <button type="submit">
                      <BsSearch />
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div class="filter-by-sale flex items-center">
              <div class="select-category-title flex items-center">
                <HiOutlineAdjustments size={25} color="#fff" /> <span className="ml-2 text-base-100 text-lg">Filters by</span>
              </div>
              <select class="sale-category-select">
                <option value="1">Auction</option>
                <option value="2">Fixed</option>
                <option value="3">On Sale</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-6 mt-12 relative">
          <img src={lineBg} alt="" className='mark-img-line' />
          {
            nft.map(item => <NftCard
              key={item._id}
              seller={item.seller}
              name={item.name}
              price={item.price}
              image={item.image}
            ></NftCard>)
          }

        </div>
      </div>
    </section>
  );
};

export default NftMarketPage;

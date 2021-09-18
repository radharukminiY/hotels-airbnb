import React from 'react';
import Banner from './Banner';
import './Home.css';
import Card from './Card';

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card
                    src="https://www.exploregeorgia.org/sites/default/files/styles/slideshow_large/public/2020-09/state-botanical-garden-athens-credit-meganlogden.jpg"
                    title="Outdoor getaways"
                    description="Dive in to the nature with local guides"
                />
                <Card
                    src="https://greenglobaltravel.com/wp-content/uploads/2019/05/Unique-stays-in-Guatemala-Hobbitenango.jpg"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep"
                />
                <Card
                    src="https://cdn.realtorinturkey.com/lib/img/rentals/entire-homes.jpg"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
            </div>

            <div className="home__section">
                <Card
                    src="https://www.parisdiscoveryguide.com/image-files/hotel-pullman-eiffel-tower-view.jpeg"
                    title="Paris centre flat WITH parking"
                    description="Entire condominium hosted by locals"
                    price="30$/Night"
                />
                <Card
                    src="https://ibuku.com/wp-content/uploads/2017/06/Hornblow_Hardy_Bali_SKJ_AD_09-800x533.jpg"
                    title="Mountain Villa - Bamboo Cottage"
                    description="Earth house inside the nature gems"
                    price="45$/Night"
                />
                <Card
                    src="https://d3e1myplzh87vt.cloudfront.net/var/self_catering_site/storage/images/canopy-and-stars/norway/southern-norway/vest-agder/treetop-fiddan/treetop-fiddan/treetop-fiddan-gallery/view-from-the-wooden-walkway-across-the-river-to-treetop-fiddan-tree-house-in-southern-norway/190009270-1-eng-GB/view-from-the-wooden-walkway-across-the-river-to-treetop-fiddan-tree-house-in-southern-norway_cs_large_gallery_preview.jpg"
                    title="Treetop Island"
                    description="Treehouse near the lake with amazing sky view"
                    price="78$/Night"
                />
            </div>
        </div>
    )
}

export default Home

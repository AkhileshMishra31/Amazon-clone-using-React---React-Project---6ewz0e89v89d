import React, { useState } from 'react'
import Productcard from '../Productcards/Productcard'
import "./ProductAdvertisement.css"


// const images = [
// 1: ["https://cdn.shopify.com/s/files/1/0121/8376/5088/files/five_1024x1024.jpg?v=1577339820", "http://cdn.shopify.com/s/files/1/0121/8376/5088/articles/one.jpg?v=1577337592", "https://www.boldsky.com/img/2020/07/1-sherwani-1593751098.jpeg", "https://m.media-amazon.com/images/I/71PN7SbSUXL._SY606._SX._UX._SY._UY_.jpg"],
// 2: ["https://n4.sdlcdn.com/imgs/j/q/c/Sports-Era-Plastic-bat-full-SDL074335854-1-fcf05.jpeg", "https://img.freepik.com/free-vector/soccer-volleyball-baseball-rugby-equipment_1441-4026.jpg", "https://5.imimg.com/data5/JY/QP/MY-66774100/avenger-toy-1000x1000.jpeg", "https://m.media-amazon.com/images/I/41BmenFIwaS.jpg"],
// 3: ["", "", "", ""],
// 4: ["", "", "", ""]
// ]

const imagess = [
    {
        title: "Starting ₹87 | Amazon Brands",
        source: [
            { title: "weddings", imgsrc: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile2-kitchen_186x116_in-en._SY116_CB612501062_.jpg" },
            { title: "weddings", imgsrc: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile3-home_186x116_in-en._SY116_CB612501076_.jpg" },
            { title: "weddings", imgsrc: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile4-home_186x116_in-en._SY116_CB612501080_.jpg" },
            { title: "weddings", imgsrc: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile1-kitchen_186x116_in-en._SY116_CB612501057_.jpg" },
        ]
    },
    {
        title: "Most trending searches",
        source: [
            { title: "Lord krishna amazing", imgsrc: "https://m.media-amazon.com/images/I/51m49weZpEL.jpg" },
            { title: "Lord Shiva murti", imgsrc: "https://m.media-amazon.com/images/I/510idM-MBSL.jpg" },
            { title: "Exterior door", imgsrc: "https://m.media-amazon.com/images/I/51ZHkiwnvFL.jpg" },
            { title: "wwe 2k23", imgsrc: "https://m.media-amazon.com/images/I/51YInfPusJL.jpg" },
        ]
    },
    {
        title: "Collect your rewards",
        source: [
            { title: "Claim your scratch cards", imgsrc: "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg" },
            { title: "Redeem your collected", imgsrc: "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg" },
            { title: "Pay & Win scratch cards", imgsrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay/GWQC/PC_Pay__Win0.5x._SY116_CB616103432_.jpg" },
            { title: "Shop & Collect Rewards ", imgsrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay/GWQC/PC_Shop__collect0.5x._SY116_CB616103432_.jpg" },
        ]
    },
    {
        title: "Grow your Business",
        source: [
            { title: "Start up", imgsrc: "https://m.media-amazon.com/images/I/81luu9cp+xS._AC_UY218_.jpg" },
            { title: "busniess world", imgsrc: "https://m.media-amazon.com/images/I/81kAuBin8BL._AC_UY218_.jpg" },
            { title: "business mind", imgsrc: "https://m.media-amazon.com/images/I/71ko-bYQh1L._AC_UY218_.jpg" },
            { title: "Fund your startup", imgsrc: "https://m.media-amazon.com/images/I/61m7Wt-trHL._AC_UY218_.jpg" },
        ]
    },

]




const ProductAdvertisement = () => {
    const [images, setimages] = useState(imagess)
    return (
        <div className='product_advertisement'>
            <div className='disclaimer'>
                <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.</p>
            </div>
            <div className='product_cards'>
                {
                    images.map((item) => {
                        return (
                            <>
                                <Productcard title={item.title} image={item.source} />
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ProductAdvertisement
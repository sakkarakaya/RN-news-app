import React from 'react';
import { View, SafeAreaView, Text, ScrollView, FlatList, Image, StyleSheet, Dimensions, ScrollViewComponent } from 'react-native';
import { Card, Banner } from './components'


const articles = [
    {
        "author": "James Morris, Contributor, \n James Morris, Contributor\n https://www.forbes.com/sites/jamesmorris/",
        "title": "Volkswagen ID. 4 Could Be The Most Important EV In Europe Yet",
        "description": "The Volkswagen ID. 4 is an electric SUV with plenty of range and loads of passenger and cargo space. It’s going to take the European market by storm.",
        "url": "https://www.forbes.com/sites/jamesmorris/2021/04/10/volkswagen-id-4-could-be-the-most-important-ev-in-europe-yet/",
        "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F606f4583367774b52d0f79b9%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D1083%26cropY1%3D114%26cropY2%3D723",
        "publishedAt": "2021-04-10T09:00:00Z",
        "content": "Volkswagen used to be the mass market carmaker everyone loved for its mainstream vehicles that anyone could afford, like the Beetle, Golf and split-screen camper van. But then Dieselgate tarnished it… [+6424 chars]"
    },
    {

        "author": "Trends Desk",
        "title": "Elon Musk shares video of monkey playing games with its mind, leaves netizens impressed",
        "description": "In the experiment, the monkey is not only playing the game with its mind, but is also able to adapt to it when the difficulty level is increased.",
        "url": "https://indianexpress.com/article/trending/trending-globally/elon-musk-shares-video-of-monkey-playing-games-with-its-mind-7267349/",
        "urlToImage": "https://images.indianexpress.com/2021/04/monkey_1200_twt.jpg",
        "publishedAt": "2021-04-10T06:45:01Z",
        "content": "Elon Musk’s latest tweet showing a monkey playing a game using his mind has triggered a plethora of reactions on social media.\r\nTaking to the microblogging website, the Tesla CEO retweeted a post by … [+1867 chars]"
    },
    {

        "author": "Reuters",
        "title": "Elon Musk’s Neuralink shows monkey with brain-chip playing videogame by thinking",
        "description": "Billionaire entrepreneur Elon Musk’s brain-chip startup released footage on Friday appearing to show a monkey playing a simple videogame after getting implants of the new technology.",
        "url": "https://indianexpress.com/article/technology/tech-news-technology/elon-musks-neuralink-shows-monkey-with-brain-chip-playing-videogame-by-thinking-7267383/",
        "urlToImage": "https://images.indianexpress.com/2021/03/elon-musk.jpeg",
        "publishedAt": "2021-04-10T05:59:59Z",
        "content": "Billionaire entrepreneur Elon Musks brain-chip startup released footage on Friday appearing to show a monkey playing a simple videogame after getting implants of the new technology.\r\nThe 3-minute vid… [+1876 chars]"
    },
    {

        "author": "blythest",
        "title": "Surely We Can Do Better Than Elon Musk ❧ Current Affairs",
        "description": "<p>Getting past the cult of Genius and the bleakness of capitalist futurism.</p>",
        "url": "https://www.currentaffairs.org/2021/04/surely-we-can-do-better-than-elon-musk",
        "urlToImage": "https://images.currentaffairs.org/2021/04/elon-scaled.jpg",
        "publishedAt": "2021-04-10T05:47:01Z",
        "content": "There are two facts that I have sometimes found it difficult to reconcile. The first is that Tesla, Inc. makes innovative and genuinely impressive electric vehicles that can hold their own against th… [+32248 chars]"
    },
    {

        "author": "S Murlidharan",
        "title": "How Ethanol Mix Can Be A Good Fuel For The Economy, Ecology And Endocrine Health",
        "description": "How Ethanol Mix Can Be A Good Fuel For The Economy, Ecology And Endocrine Health swarajyamag.com",
        "url": "https://swarajyamag.com/economy/how-ethanol-mix-can-be-a-good-fuel-for-the-economy-ecology-and-endocrine-health",
        "urlToImage": "https://images.assettype.com/swarajya%2F2021-04%2F8ef5071b-a1de-4264-bda7-fafaa61743b1%2Fbiofuel1.png?w=1200&auto=format%2Ccompress&ogImage=true",
        "publishedAt": "2021-04-10T04:52:11Z",
        "content": "According to the US Energy Information Administration (EIA), nearly all of the gasoline now sold in the United States is about 10 per cent ethanol by volume. Any gasoline-powered engine in the United… [+3865 chars]"
    },
    {

        "author": "Reuters",
        "title": "Elon Musk's Neuralink shows monkey with brain-chip playing videogame by thinking",
        "description": "The 3-minute video by Neuralink shows Pager, a male macaque with chips embedded on each side of its brain, playing 'Mind Pong'. He controls the paddle simply by thinking about moving his hand up or down.",
        "url": "https://economictimes.indiatimes.com/tech/technology/elon-musks-neuralink-shows-monkey-with-brain-chip-playing-videogame-by-thinking/articleshow/82000047.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-82000068,width-1070,height-580,imgsize-21136,overlay-ettech/photo.jpg",
        "publishedAt": "2021-04-10T04:28:44Z",
        "content": "Billionaire entrepreneur Elon Musk's brain-chip startup released footage on Friday appearing to show a monkey playing a simple videogame after getting implants of the new technology.\r\nThe 3-minute vi… [+1810 chars]"
    },
    {

        "author": "Mitul Makadia",
        "title": "Artificial Intelligence in Logistics – Maximizing Operational Efficiency",
        "description": "With growing complexity and interconnectivity in the supply chain industry, technology like artificial intelligence and machine learning has become central to logistics management. Firms across the globe are increasingly implementing AI to streamline and opti…",
        "url": "https://customerthink.com/artificial-intelligence-in-logistics-maximizing-operational-efficiency/",
        "urlToImage": "https://customerthink.com/wp-content/uploads/businessman-2606506_1920-pixabay-sales-process-technology.jpg",
        "publishedAt": "2021-04-10T04:09:55Z",
        "content": "With growing complexity and interconnectivity in the supply chain industry, technology like artificial intelligence and machine learning has become central to logistics management. Firms across the g… [+11975 chars]"
    },
    {

        "author": "Zachary Shahan",
        "title": "Next Tesla Models: 2, 4, & “My Shirt”",
        "description": "There’s been a lot of debate about what the more affordable model Tesla is developing should or will be named. I thought it was time to discuss this matter a little further and to reveal something. First of all, to clarify, the more affordable model is a smal…",
        "url": "https://cleantechnica.com/2021/04/09/next-tesla-models-2-4-my-shirt/",
        "urlToImage": "https://cleantechnica.com/files/2021/04/Tesla-Model-3-CleanTechnica-Front-Glass-Watermark-e1618035375791.jpeg",
        "publishedAt": "2021-04-10T03:30:14Z",
        "content": "There’s been a lot of debate about what the more affordable model Tesla is developing should or will be named. I thought it was time to discuss this matter a little further and to reveal something.\r\n… [+2267 chars]"
    },
    {

        "author": "Bloomberg",
        "title": "Elon Musk’s Las Vegas tunnel is like a Tesla amusement park ride - Mint",
        "description": "Boring Co.’s 1.7-mile loop, nicknamed the Rainbow Road, could one day extend to the city’s airport",
        "url": "https://www.livemint.com/auto-news/elon-musk-s-las-vegas-tunnel-is-like-a-tesla-amusement-park-ride-11618023141851.html",
        "urlToImage": "https://images.livemint.com/img/2021/04/10/600x338/1311709587_1618023236283_1618023250866.jpg",
        "publishedAt": "2021-04-10T02:55:55Z",
        "content": "Nate Calabrese almost skipped right over the ``driver wanted'' ad on job-search website Indeed.com because it offered so few details. Turned out the posting was for the Boring Co., the tunneling busi… [+3449 chars]"
    },
    {

        "author": "Johnna Crider",
        "title": "Tesla FSD Beta V9.0 Is Almost Ready: “Pure Vision, No Radar”",
        "description": "Tesla’s Full Self Driving (FSD) Beta V9.0 is soon going live. Being a .0 update, that means it’s a major one. This update will switch to pure vision, and Elon Musk just shared on Twitter that it will indeed come with “massive” improvements. This update from E…",
        "url": "https://cleantechnica.com/2021/04/09/tesla-fsd-beta-v9-0-is-almost-ready-pure-vision-no-radar/",
        "urlToImage": "https://cleantechnica.com/files/2021/04/o3n7u9erpmc.jpg",
        "publishedAt": "2021-04-10T02:51:15Z",
        "content": "Tesla’s Full Self Driving (FSD) Beta V9.0 is soon going live. Being a .0 update, that means it’s a major one. This update will switch to pure vision, and Elon Musk just shared on Twitter that it will… [+3692 chars]"
    },
    {

        "author": "Zachary Shahan",
        "title": "328,000 Estimated US Accidents A Year From Sleepy Drivers — How Many Lives Will Tesla Full Self Driving Save?",
        "description": "Like some other automobiles, the Tesla Model 3 I drive will automatically fake rumble if I start to go out of the lane. It’s a nifty little safety feature. There are times when the car will also beep loudly at me — if it thinks I’m driving into a dangerous si…",
        "url": "https://cleantechnica.com/2021/04/09/328000-estimated-us-accidents-a-year-from-sleepy-drivers-how-many-lives-will-tesla-full-self-driving-save/",
        "urlToImage": "https://cleantechnica.com/files/2019/09/201908-tesla-autopilot-sunlight-camera-safety-blind-KYLE-e1607147520556.jpg",
        "publishedAt": "2021-04-10T02:19:15Z",
        "content": "Like some other automobiles, the Tesla Model 3 I drive will automatically fake rumble if I start to go out of the lane. It’s a nifty little safety feature. There are times when the car will also beep… [+4905 chars]"
    },
    {

        "author": "Naomi Kresge",
        "title": "CureVac Could Win Covid Shot Approval in May, Augsburger Says",
        "description": "CureVac NV could win European Union approval for its Covid-19 vaccine as early as May, sooner than expected, a German newspaper cited a company spokesman as saying.",
        "url": "https://www.bloomberg.com/news/articles/2021-04-10/curevac-could-win-covid-shot-approval-in-may-augsburger-says",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/izqWjLYdysyA/v0/1200x800.jpg",
        "publishedAt": "2021-04-10T02:00:00Z",
        "content": "CureVac NV could win \r\nEuropean Union approval for its Covid-19 vaccine as early as May, sooner than expected, a German newspaper cited a company spokesman as saying.\r\nWere already very far advanced … [+1270 chars]"
    },
    {

        "author": "Isaiah Alonzo",
        "title": "Overwatch's 'Fearless' Speaks Out About Asian Racism in America—Who Is the Twitch Streamer from Dallas Fuel?",
        "description": "This eSports player speaks out against Asian racism, get to know \"Fearless.\"",
        "url": "https://www.techtimes.com/articles/258933/20210409/overwatchs-fearless-speaks-out-asian-racism-america-twitch-streamer-dallas-fuel.htm",
        "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/383329/eui-sook-fearless-lee.jpg",
        "publishedAt": "2021-04-10T01:36:12Z",
        "content": "Eui-Sook Lee, also known as \"Fearless,\" spoke out about his experience with Asian racism in the United States despite being an honorary member of the Dallas Fuels for \"Overwatch.\" Several reports of … [+3468 chars]"
    },
    {

        "author": "USA TODAY, Bob Nightengale, USA TODAY",
        "title": "Opinion: It's a Hollywood story for the Los Angeles Dodgers as they receive their World Series rings",
        "description": "The Dodgers enjoyed a ceremony 32 years in the making as the team received their World Series rings with fans in attendance at Dodger Stadium.",
        "url": "https://www.usatoday.com/story/sports/mlb/columnist/bob-nightengale/2021/04/09/los-angeles-dodgers-receive-world-series-rings-pregame-spectacle/7167407002/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2021/04/10/USAT/c694a4a2-90f8-46fa-a1b2-48afe686eb5c-USATSI_15870620.jpg?crop=1709,961,x0,y172&width=1600&height=800&fit=bounds",
        "publishedAt": "2021-04-10T01:34:37Z",
        "content": "SportsPulse: Mackenzie Salmon connected with Dodgers pitcher Walker Buehler to get his perspective on his new teammate Trevor Bauer and if the L.A. has to prove anything after winning the title in a … [+9177 chars]"
    },
    {

        "author": "Tom Bowley",
        "title": "A Downtrending Stock Poised To Explode Higher - Get In Early",
        "description": "When I see a long-term winning stock sell off for a period of weeks, or even months, I always question the motive. If institutions want to buy a large position in a company, it takes time to do so. They don't simply put a market order in for 1 million shares.…",
        "url": "https://stockcharts.com/articles/chartwatchers/2021/04/a-downtrending-stock-poised-to-474.html",
        "urlToImage": "https://stockcharts.com/img/articles/2021/04/09/41192587-9c21-4561-bb4f-5c94ee1369bc.jpg",
        "publishedAt": "2021-04-10T01:01:03Z",
        "content": "When I see a long-term winning stock sell off for a period of weeks, or even months, I always question the motive. If institutions want to buy a large position in a company, it takes time to do so. T… [+3378 chars]"
    },
    {

        "author": "Tony Spilotro",
        "title": "LA Real Estate Mogul Buys Bitcoin, Accepts BTC For Rent",
        "description": "A massive LA-based luxury real estate firm has begun accepting Bitcoin for rent payments. In addition to loading up on BTC for its corporate reserves, the company has also tapped popular exchange Gemini to help build a crypto centric ecosystem for its retail,…",
        "url": "https://www.newsbtc.com/news/bitcoin/real-estate-buy-bitcoin-accept-btc/",
        "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2019/01/crypto-stocks-real-estate-shutterstock_716335063.jpg",
        "publishedAt": "2021-04-10T01:00:23Z",
        "content": "A massive LA-based luxury real estate firm has begun accepting Bitcoin for rent payments.\r\nIn addition to loading up on BTC for its corporate reserves, the company has also tapped popular exchange Ge… [+2722 chars]"
    },
    {

        "author": "Anthony Garreffa",
        "title": "NVIDIA CEO will host GTC 2021 keynote from his personal kitchen",
        "description": "NVIDIA CEO Jensen Huang will host GTC 2021 keynote from his kitchen, expect some big GPU reveals and hopefully some surprises. Continue reading at TweakTown >",
        "url": "https://www.tweaktown.com/news/78664/nvidia-ceo-will-host-gtc-2021-keynote-from-his-personal-kitchen/index.html",
        "urlToImage": "https://static.tweaktown.com/news/7/8/78664_01_nvidia-ceo-will-host-gtc-2021-keynote-from-his-personal-kitchen_full.jpg",
        "publishedAt": "2021-04-10T00:52:02Z",
        "content": "It's not the first time it has happened, and it might not be the last time it'll happen -- but NVIDIA CEO Jensen Huang will be hosting the GPU Technology Conference 2021 keynote from his personal kit… [+612 chars]"
    },
    {

        "author": "Isaiah Alonzo",
        "title": "'Sonic Colors' Remaster from SEGA is Coming Thanks to Leak by German Dubbing Studio, French Retailer",
        "description": "The blue speedster hedgehog to return to modern gaming consoles.",
        "url": "https://www.techtimes.com/articles/258929/20210409/sonic-colors-remaster-sega-coming-thanks-leak-german-dubbing-studio.htm",
        "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/383321/sonic-colors.jpg",
        "publishedAt": "2021-04-10T00:44:56Z",
        "content": "\"Sonic Colors\" may be a game released long ago, but it is not forgotten by SEGA, especially as leaks have emerged about the company developing its remaster from tthe original Nintendo Wii platform. T… [+2904 chars]"
    },
    {

        "author": "Billy Bambrough, Contributor, \n Billy Bambrough, Contributor\n https://www.forbes.com/sites/billybambrough/",
        "title": "‘Moon Very Soon’—Cryptic Elon Musk Spurs Bitcoin On As Price Suddenly Blasts Past $60,000 And Ethereum Hits Fresh High",
        "description": "The precise cause of the early Saturday morning bitcoin price surge was not immediately clear, however, a cryptic tweet from Tesla﻿ billionaire and bitcoin buyer Elon Musk has spurred the market higher...",
        "url": "https://www.forbes.com/sites/billybambrough/2021/04/10/moon-very-soon-cryptic-elon-musk-spurs-bitcoin-on-as-price-suddenly-blasts-past-60000-and-ethereum-hits-fresh-high/",
        "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F607161dad0b86f14d29ba693%2F0x0.jpg",
        "publishedAt": "2021-04-10T08:50:00Z",
        "content": "Bitcoin has suddenly surged higher, climbing firmly above the psychological $60,000 per bitcoin for the first time since mid-March. \r\nThe bitcoin price hit highs of $61,240 on the Luxembourg-based Bi… [+1502 chars]"
    },
    {

        "author": "247chrislange",
        "title": "Cathie Wood’s ARK Invest Buys and Sells 4/9",
        "description": "Here's a look at the ARK Invest trades for April 9, 2021.",
        "url": "https://247wallst.com/investing/2021/04/09/cathie-woods-ark-invest-buys-and-sells-4-9/",
        "urlToImage": "https://247wallst.com/wp-content/uploads/2019/01/gettyimages-933052786.jpg",
        "publishedAt": "2021-04-10T00:33:00Z",
        "content": "ARK Invest has been the talk of Wall Street over the last couple of years, outperforming the market and solidifying its place among the big players in the investments world. Cathie Wood is the founde… [+4782 chars]"
    }
]

// const mapItem = articles.map((item) => {
//     return <Card data={item} />
// })

const News = () => {

    const myBanner = () => {
        return <Banner />
        
    }

    const renderItem = ({ item }) => (
        <Card data={item} />
    );
    return (
        <SafeAreaView style={{ flex: 1 }}>



            <FlatList
                data={articles}
                renderItem={renderItem}
                ListHeaderComponent={myBanner}

            />



        </SafeAreaView>
    )
}



export default News

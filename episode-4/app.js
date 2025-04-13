import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <nav className="nav">
        <img className="img-logo"
            src="data:image/png;base64,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"
            alt="logo"
          />
          <h1 className="title">Foodiezz</h1>
      <ul className="items">
        
        <li className="item">Home</li>
        <li className="item">Cart</li>
        <li className="item">AboutUs</li>
      </ul>
    </nav>
  );
};


const resList= [
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "86952",
                                            "name": "Viceroy Biryani Point",
                                            "cloudinaryImageId": "g0xlzkudrmfdlfub6yg4",
                                            "locality": "Arundelpet",
                                            "areaName": "Brodipet",
                                            "costForTwo": "₹500 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Chinese"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "14588",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "28K+",
                                            "sla": {
                                                "deliveryTime": 31,
                                                "lastMileTravel": 3.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-04-02 16:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "10% OFF",
                                                "subHeader": "ABOVE ₹1499",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-184caae3-98f4-40bb-86b4-4cec90adc896"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/guntur/viceroy-biryani-point-arundelpet-brodipet-rest86952",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "343512",
                                            "name": "Navya Grand",
                                            "cloudinaryImageId": "gwsv73b4gujodkgsswe6",
                                            "locality": "Vinayak Nagar",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "South Indian",
                                                "Chinese",
                                                "North Indian"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "144917",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "12K+",
                                            "sla": {
                                                "deliveryTime": 31,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-04-02 22:45:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-184caae3-98f4-40bb-86b4-4cec90adc896"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/guntur/navya-grand-vinayak-nagar-lakshmipuram-rest343512",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "86587",
                                            "name": "Sri Mayura Family Garden Restaurant",
                                            "cloudinaryImageId": "esef7mxtw84fyvvknvly",
                                            "locality": "Lakshmipuram",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "South Indian",
                                                "Tandoor",
                                                "Chinese"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "14576",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "14K+",
                                            "sla": {
                                                "deliveryTime": 35,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-04-02 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "subHeader": "UPTO ₹100"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-184caae3-98f4-40bb-86b4-4cec90adc896"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/guntur/sri-mayura-family-garden-restaurant-lakshmipuram-rest86587",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "860480",
                                            "name": "Hoskote Four Am Biryani",
                                            "cloudinaryImageId": "f594f4f63d3e00e93203f02d40e38d24",
                                            "locality": "Koritepadu",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Biryani"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "434374",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "2.2K+",
                                            "sla": {
                                                "deliveryTime": 30,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-04-02 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹129"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-184caae3-98f4-40bb-86b4-4cec90adc896"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/guntur/hoskote-four-am-biryani-koritepadu-lakshmipuram-rest860480",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "584769",
                                            "name": "Hyderabadi biryani chef",
                                            "cloudinaryImageId": "rd2l7whlbxy2bl8hm9jc",
                                            "locality": "Arundelpet",
                                            "areaName": "Brodipet & Arundalpet",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Biryani"
                                            ],
                                            "avgRating": 3.8,
                                            "parentId": "350127",
                                            "avgRatingString": "3.8",
                                            "totalRatingsString": "947",
                                            "sla": {
                                                "deliveryTime": 30,
                                                "lastMileTravel": 3.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-04-03 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹99"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-184caae3-98f4-40bb-86b4-4cec90adc896"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/guntur/hyderabadi-biryani-chef-arundelpet-brodipet-and-arundalpet-rest584769",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "537469",
                                            "name": "Swagruha Foods",
                                            "cloudinaryImageId": "yvevffcljboufleszmji",
                                            "locality": "Railpet",
                                            "areaName": "Brodipet & Arundalpet",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Sweets",
                                                "Bengali"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "315190",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "791",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 3.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "3.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-04-02 20:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-184caae3-98f4-40bb-86b4-4cec90adc896"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/guntur/swagruha-foods-railpet-brodipet-and-arundalpet-rest537469",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "116692",
                                            "name": "AL Ajaib Restaurant",
                                            "cloudinaryImageId": "p95thhejfehv7ewnkhkt",
                                            "locality": "Arundelpet",
                                            "areaName": "Brodipet & Arundalpet",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Lebanese"
                                            ],
                                            "avgRating": 3.8,
                                            "parentId": "14468",
                                            "avgRatingString": "3.8",
                                            "totalRatingsString": "15K+",
                                            "sla": {
                                                "deliveryTime": 30,
                                                "lastMileTravel": 3.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-04-03 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹99"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-184caae3-98f4-40bb-86b4-4cec90adc896"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/guntur/al-ajaib-restaurant-arundelpet-brodipet-and-arundalpet-rest116692",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "119283",
                                            "name": "Mourya Biryani Point-Arundelpet",
                                            "cloudinaryImageId": "jwnekq7za3xcamhw5s9x",
                                            "locality": "Arundelpet",
                                            "areaName": "Arundelpet",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Chinese"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "14443",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 32,
                                                "lastMileTravel": 3.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-04-02 16:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "40% OFF",
                                                "subHeader": "UPTO ₹80"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-184caae3-98f4-40bb-86b4-4cec90adc896"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/guntur/mourya-biryani-point-arundelpet-arundelpet-rest119283",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "86972",
                                            "name": "Iceberg",
                                            "cloudinaryImageId": "mbsvdaqqyfjbrwzrha9a",
                                            "locality": "Arundelpet",
                                            "areaName": "Brodipet",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Italian",
                                                "Chinese",
                                                "Juices",
                                                "Burgers"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "20225",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "8.1K+",
                                            "sla": {
                                                "deliveryTime": 46,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "45-50 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-04-02 22:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-184caae3-98f4-40bb-86b4-4cec90adc896"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/guntur/iceberg-arundelpet-brodipet-rest86972",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "410988",
                                            "name": "Leelavathi Deluxe Mess",
                                            "cloudinaryImageId": "snlzu4qejuxi28ljjjzn",
                                            "locality": "Arundelpet",
                                            "areaName": "Brodipet & Arundalpet",
                                            "costForTwo": "₹140 for two",
                                            "cuisines": [
                                                "South Indian"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "6494",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "3.2K+",
                                            "sla": {
                                                "deliveryTime": 33,
                                                "lastMileTravel": 3.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-04-02 18:45:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "20% OFF",
                                                "subHeader": "ABOVE ₹1199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-184caae3-98f4-40bb-86b4-4cec90adc896"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/guntur/leelavathi-deluxe-mess-arundelpet-brodipet-and-arundalpet-rest410988",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "86974",
                                            "name": "Hotel Jaya Grand",
                                            "cloudinaryImageId": "nx7tslgizu51jl94shpi",
                                            "locality": "Donka Road",
                                            "areaName": "Amaravathi Road",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "South Indian",
                                                "Chinese"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "14592",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "6.4K+",
                                            "sla": {
                                                "deliveryTime": 33,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-04-02 23:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "subHeader": "UPTO ₹100"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-184caae3-98f4-40bb-86b4-4cec90adc896"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/guntur/hotel-jaya-grand-donka-road-amaravathi-road-rest86974",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "119282",
                                            "name": "Sri Mayura",
                                            "cloudinaryImageId": "ri7n6ljinxzuuoafobjf",
                                            "locality": "Kothapeta",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "South Indian",
                                                "Tandoor",
                                                "Chinese"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "14451",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 35,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "35-40 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-04-02 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹125 OFF",
                                                "subHeader": "ABOVE ₹249",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-184caae3-98f4-40bb-86b4-4cec90adc896"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/guntur/sri-mayura-kothapeta-lakshmipuram-rest119282",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "88099",
                                            "name": "Sri Teneega Restaurant",
                                            "cloudinaryImageId": "kdqa7maoxjmbshzarda4",
                                            "locality": "Brindavan Gardens",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "South Indian",
                                                "Chinese",
                                                "Tandoor"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "14601",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "9.6K+",
                                            "sla": {
                                                "deliveryTime": 36,
                                                "lastMileTravel": 4.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "35-40 mins",
                                                "lastMileTravelString": "4.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-04-02 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹99"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-184caae3-98f4-40bb-86b4-4cec90adc896"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/guntur/sri-teneega-restaurant-brindavan-gardens-lakshmipuram-rest88099",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "450272",
                                            "name": "NIC Ice Creams",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/84d164d7-5f32-49b4-a1c8-73981956378d_450272.jpg",
                                            "locality": "Ashok Nagar",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "₹120 for two",
                                            "cuisines": [
                                                "Ice Cream",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.6,
                                            "veg": true,
                                            "parentId": "6249",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "6.9K+",
                                            "sla": {
                                                "deliveryTime": 33,
                                                "lastMileTravel": 4.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "4.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-04-02 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "60% OFF",
                                                "subHeader": "UPTO ₹120"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-184caae3-98f4-40bb-86b4-4cec90adc896"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/guntur/nic-ice-creams-ashok-nagar-lakshmipuram-rest450272",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "393268",
                                            "name": "Mehfil E Biryani",
                                            "cloudinaryImageId": "yx4ldngp2npx780vptii",
                                            "locality": "Arundelpet",
                                            "areaName": "Brodipet",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Lebanese",
                                                "Biryani"
                                            ],
                                            "avgRating": 3.8,
                                            "parentId": "391972",
                                            "avgRatingString": "3.8",
                                            "totalRatingsString": "1.3K+",
                                            "sla": {
                                                "deliveryTime": 26,
                                                "lastMileTravel": 3.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "3.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-04-03 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹99"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-184caae3-98f4-40bb-86b4-4cec90adc896"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/guntur/mehfil-e-biryani-arundelpet-brodipet-rest393268",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    }
                                ]


const RestaurantCard=(props)=>{
   
   const{resData}=props;
   const{name,avgRating,cloudinaryImageId}=resData.info;
    return (
        <div className="box">
       <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId}/>
         <h3>{name}</h3>
         <h3>{avgRating}</h3>
         <h3>{resData.info.cuisines.join(', ')}</h3>
        </div>
    )
}



const Body=()=>{
    return (
        <div className="container">
            <div className="searchbar">
       Search <input type="search" ></input>
       </div>
       <div className="boxes">
       {
      resList.map(rest =>
        ( <RestaurantCard key={rest.info.id} resData={rest}/>)
       )
    }
    </div>
        </div>
    )
}



const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body/>
    </div>
  );
};

root.render(<AppLayout />);

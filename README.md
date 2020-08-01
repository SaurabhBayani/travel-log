# travel-log
App to add travelling related logs

# Steps to run:
1. brew services start mongodb-community
2. cd server
3. npm run dev

# API's
(GET) /logs/list -> List all travel logs
(POST) /logs -> Add new travel log to db

# Sample required obj:
{
    "title": "Golden Temple",
    "description": "Sikh religious place",
    "comments": "Nice place to visit",
    "image": "https://cdn1.goibibo.com/t_tg_fs/amritsar-golden-temple-148316524113-orijgp.jpg",
    "rating": 7,
    "laltitude": 31.6284,
    "longitude": 74.877,
    "visitDate": "2020-08-01T18:14:14.397Z"
}




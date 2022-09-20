const SHOP_DATA = [
    {
        title: 'Tables',
        items: [
            {
                id: 1,
                name: 'Kitchen Table',
                imageUrl: 'https://images.unsplash.com/photo-1565791380713-1756b9a05343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                price: 150,
            },
            {
                id: 2,
                name: 'White dream',
                imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                price: 278,
            },
            {
                id: 3,
                name: 'Simplicity',
                imageUrl: 'https://images.unsplash.com/photo-1559912963-0656cce47c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=393&q=80',
                price: 110,
            },
            {
                id: 4,
                name: 'Mini',
                imageUrl: 'https://images.unsplash.com/photo-1510877073473-6d4545e9c2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
                price: 699,
            },
            {
                id: 5,
                name: 'Dreams',
                imageUrl: 'https://images.unsplash.com/photo-1615920606214-6428b3324c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
                price: 199,
            },
            {
                id: 6,
                name: 'Povoc',
                imageUrl: 'https://images.unsplash.com/photo-1604061986761-d9d0cc41b0d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
          price: 399,
            },
            {
                id: 7,
                name: 'Royalty',
                imageUrl: 'https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80',
                price: 500,
            },
            {
                id: 8,
                name: 'Loyalty 2',
                imageUrl: 'https://images.unsplash.com/photo-1596079890687-58c51d24889a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                price: 350,
            },
            {
                id: 9,
                name: 'Piper',
                imageUrl: 'https://images.unsplash.com/photo-1526887593587-a307ea5d46b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fHRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                price: 660,
            },            
        ],
    },
    {
        title: 'Sofas',
        items: [
            {
                id: 10,
                name: 'Green skies',
                imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                price: 760,
            },
            {
                id: 11,
                name: 'Simplifice',
                imageUrl: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                price: 880,
            },
            {
                id: 12,
                name: 'Ocean',
                imageUrl: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
                price: 610,
            },
            {
                id: 13,
                name: 'Lily',
                imageUrl: 'https://images.unsplash.com/photo-1519961655809-34fa156820ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                price: 460,
            },
            {
                id: 14,
                name: 'Queen',
                imageUrl: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                price: 560,
            },
            {
                id: 15,
                name: 'Bee Queen',
                imageUrl: 'https://images.unsplash.com/photo-1565374395542-0ce18882c857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNvZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 760,
            },
            {
                id: 16,
                name: 'Remember',
                imageUrl: 'https://images.unsplash.com/photo-1634497885778-152eb6fd543d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNvZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 890,
            },
            {
                id: 17,
                name: 'Green Tides',
                imageUrl: 'https://images.unsplash.com/photo-1630585308572-f53438fc684f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNvZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 900,
            },
        ],
    },
    {
        title: 'Chairs',
        items: [
            {
                id: 18,
                name: 'Silver Night',
                imageUrl: 'https://images.unsplash.com/photo-1611967164521-abae8fba4668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 325,
            },
            {
                id: 19,
                name: 'Phanton',
                imageUrl: 'https://images.unsplash.com/photo-1506898667547-42e22a46e125?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNvZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 290,
            },
            {
                id: 20,
                name: 'Love me',
                imageUrl: 'https://images.unsplash.com/photo-1636651430146-00b72284bfbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNvZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 190,
            },
            {
                id: 21,
                name: 'Empress',
                imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNvZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 165,
            },
            {
                id: 22,
                name: 'Princess',
                imageUrl: 'https://images.unsplash.com/photo-1586158291800-2665f07bba79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNvZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 385,
            },
            {
                id: 23,
                name: 'Wisdom',
                imageUrl: 'https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNvZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 485,
            },
            {
                id: 24,
                name: 'Simple',
                imageUrl: 'https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHNvZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 385,
            },
        ],
    },
    {
        title: 'Lamps',
        items: [
            {
                id: 25,
                name: 'Silver Line',
                imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFtcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                price: 225,
            },
            {
                id: 26,
                name: 'Golden Princess',
                imageUrl: 'https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFtcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                price: 320,
            },
            {
                id: 27,
                name: 'Sweet Dream',
                imageUrl: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFtcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                price: 280,
            },
            {
                id: 28,
                name: 'Dark Sky',
                imageUrl: 'https://images.unsplash.com/photo-1567459045800-4d77c81fc3f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 180,
            },
            {
                id: 29,
                name: 'Somewhere',
                imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 145,
            },
            {
                id: 30,
                name: 'Silver Queen',
                imageUrl: 'https://images.unsplash.com/photo-1600421684846-e7ebc943403b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 335,
            },
            {
                id: 31,
                name: 'Free Field',
                imageUrl: 'https://images.unsplash.com/photo-1614635824409-75be312e41e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 120,
            },
            {
                id: 32,
                name: 'Transparency',
                imageUrl: 'https://images.unsplash.com/photo-1579888028917-47462bb03ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 320,
            },
            {
                id: 33,
                name: 'Industrial',
                imageUrl: 'https://images.unsplash.com/photo-1602145461313-26c587cc0ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 330,
            },
        ],
    },
    {
        title: 'Beds',
        items: [
            {
                id: 34,
                name: 'She',
                imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                price: 925,
            },
            {
                id: 35,
                name: 'Tiss',
                imageUrl: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                price: 820,
            },
            {
                id: 36,
                name: 'Omega',
                imageUrl: 'https://images.unsplash.com/flagged/photo-1575517111839-3a3843ee7f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                price: 1025,
            },
            {
                id: 37,
                name: 'Old Timer',
                imageUrl: 'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                price: 925,
            },
            {
                id: 38,
                name: 'Foss',
                imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                price: 940,
            },
            {
                id: 39,
                name: 'Beauty',
                imageUrl: 'https://images.unsplash.com/photo-1613252067198-cc29a8368d09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                price: 1075,
            },
            {
                id: 40,
                name: 'Snow',
                imageUrl: 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                price: 775,
            },
            {
                id: 41,
                name: 'Dark night',
                imageUrl: 'https://images.unsplash.com/photo-1595526051245-4506e0005bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                price: 1095,
            },
        ],
    },
 {
        title: 'Wardrobes',
        items: [
            {
                id: 42,
                name: 'White simplicity',
                imageUrl: 'https://images.unsplash.com/photo-1614631446501-abcf76949eca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FyZHJvYmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 950,
            },
            {
                id: 43,
                name: 'Old dream',
                imageUrl: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FyZHJvYmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 778,
            },
            {
                id: 44,
                name: 'Power',
                imageUrl: 'https://images.unsplash.com/photo-1631889993877-71e193bf79b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2FyZHJvYmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 1110,
            },
            {
                id: 45,
                name: 'Luxury',
                imageUrl: 'https://images.unsplash.com/photo-1611048268330-53de574cae3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2FyZHJvYmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 1699,
            },
            {
                id: 46,
                name: 'Easy-peasy',
                imageUrl: 'https://images.unsplash.com/photo-1594883422096-c7f0b81e0133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhcmRyb2JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                price: 299,
            },
            {
                id: 47,
                name: 'Openess',
                imageUrl: 'https://images.unsplash.com/photo-1530411554903-7e745b9f1f6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhcmRyb2JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          price: 899,
            },
            {
                id: 48,
                name: 'Happiness',
                imageUrl: 'https://images.unsplash.com/photo-1633605016074-9ea5617128a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHdhcmRyb2JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                price: 800,
            },
            {
                id: 49,
                name: 'Old times',
                imageUrl: 'https://images.unsplash.com/photo-1628843359126-8cd868ba4ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHdhcmRyb2JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                price: 750,
            },
            {
                id: 50,
                name: 'School',
                imageUrl: 'https://images.unsplash.com/photo-1532437121297-dc8302290c84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHdhcmRyb2JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                price: 560,
            },            
        ],
    },
	{
        title: 'Decorations',
        items: [
            {
                id: 51,
                name: 'Flowers',
                imageUrl: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVjb3JhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                price: 150,
            },
            {
                id: 52,
                name: 'Dryness',
                imageUrl: 'https://images.unsplash.com/photo-1604306354505-8bab3239b009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGVjb3JhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                price: 60,
            },
            {
                id: 53,
                name: 'Vase',
                imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlY29yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 110,
            },
            {
                id: 54,
                name: 'Fur',
                imageUrl: 'https://images.unsplash.com/photo-1505015981034-6c23000c260c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGRlY29yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 199,
            },
            {
                id: 55,
                name: 'Pictures - set',
                imageUrl: 'https://images.unsplash.com/photo-1452457005517-a0dd81caca2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 299,
            },
            {
                id: 56,
                name: 'Candles',
                imageUrl: 'https://images.unsplash.com/photo-1603905179139-db12ab535ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNhbmRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          price: 39,
            },
            {
                id: 57,
                name: 'Candle',
                imageUrl: 'https://images.unsplash.com/photo-1557308917-ef00c7059bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbmRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                price: 20,
            },
            {
                id: 58,
                name: 'Rug',
                imageUrl: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cnVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                price: 350,
            },
            {
                id: 59,
                name: 'Rug 2',
                imageUrl: 'https://images.unsplash.com/photo-1519643225200-94e79e383724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHJ1Z3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                price: 460,
            },   
            {
                id: 60,
                name: 'Rug 3',
                imageUrl: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHJ1Z3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                price: 360,
            }, 
            {
                id: 61,
                name: 'Mirror',
                imageUrl: 'https://images.unsplash.com/photo-1560828343-a0b3d8864d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWlycm9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                price: 560,
            }, 
            {
                id: 62,
                name: 'Mirror 2',
                imageUrl: 'https://images.unsplash.com/photo-1612392549386-b6969764af6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWlycm9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                price: 360,
            },          
        ],
    },

];


export default SHOP_DATA;
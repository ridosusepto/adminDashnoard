export const menu = [
    {
        id: 1,
        title: "Main",
        listItems: [
            {
                id: 1,
                title: "HomePage",
                url: "/",
                icon: "home.svg",
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "profile.svg",
            },
        ],

    },
    {
        id: 2,
        title: "Lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: "user.svg",
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "product.svg",
            },
            {
                id: 3,
                title: "Orders",
                url: "/orders",
                icon: "order.svg",
            },
            {
                id: 4,
                title: "Posts",
                url: "/posts",
                icon: "post2.svg",
            },
        ],

    },
    {
        id: 3,
        title: "General",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "element.svg",
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "note.svg",
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "form.svg",
            },
            {
                id: 4,
                title: "Calendar",
                url: "/",
                icon: "calendar.svg",
            },
        ],

    },
    {
        id: 4,
        title: "Maintenance",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: "setting.svg",
            },
            {
                id: 2,
                title: "backup",
                url: "/",
                icon: "backup.svg",
            },

        ],

    },
    {
        id: 5,
        title: "Analytics",
        listItems: [
            {
                id: 1,
                title: "charts",
                url: "/",
                icon: "chart.svg",
            },
            {
                id: 2,
                title: "logs",
                url: "/",
                icon: "log.svg",
            },

        ],

    },
];

export const topDealUsers = [
    {
        id: 1,
        img: "noavatar.png",
        username: "unknow",
        email: "unknow@gmail.com",
        amount: "2.999",
    },
    {
        id: 2,
        img: "noavatar.png",
        username: "unknow",
        email: "unknow@gmail.com",
        amount: "2.999",
    },
    {
        id: 3,
        img: "noavatar.png",
        username: "unknow",
        email: "unknow@gmail.com",
        amount: "2.999",
    }
    ,
    {
        id: 4,
        img: "noavatar.png",
        username: "unknow",
        email: "unknow@gmail.com",
        amount: "2.999",
    },
    {
        id: 5,
        img: "noavatar.png",
        username: "unknow",
        email: "unknow@gmail.com",
        amount: "2.999",
    },
    {
        id: 6,
        img: "noavatar.png",
        username: "unknow",
        email: "unknow@gmail.com",
        amount: "2.999",
    },
    {
        id: 7,
        img: "noavatar.png",
        username: "unknow",
        email: "unknow@gmail.com",
        amount: "2.999",
    },
];

export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "12.329",
    dataKey: "users",
    percentage: 45,
    chartData: [
        { name: "Sun", users: 400 },
        { name: "Mon", users: 600 },
        { name: "Tue", users: 500 },
        { name: "Wed", users: 700 },
        { name: "Thu", users: 400 },
        { name: "fri", users: 500 },
        { name: "Sat", users: 450 },
    ],
};

export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "432",
    dataKey: "products",
    percentage: 21,
    chartData: [
        { name: "Sun", products: 400 },
        { name: "Mon", products: 600 },
        { name: "Tue", products: 500 },
        { name: "Wed", products: 700 },
        { name: "Thu", products: 400 },
        { name: "fri", products: 500 },
        { name: "Sat", products: 450 },
    ],
};
export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$5.1213",
    dataKey: "revenue",
    percentage: -9,
    chartData: [
        { name: "Sun", revenue: 400 },
        { name: "Mon", revenue: 600 },
        { name: "Tue", revenue: 500 },
        { name: "Wed", revenue: 700 },
        { name: "Thu", revenue: 400 },
        { name: "fri", revenue: 500 },
        { name: "Sat", revenue: 450 },
    ],
};
export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total ratio",
    number: "3.7",
    dataKey: "ratio",
    percentage: 11,
    chartData: [
        { name: "Sun", ratio: 400 },
        { name: "Mon", ratio: 600 },
        { name: "Tue", ratio: 500 },
        { name: "Wed", ratio: 700 },
        { name: "Thu", ratio: 400 },
        { name: "fri", ratio: 500 },
        { name: "Sat", ratio: 450 },
    ],
};

export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        { name: "Sun", profit: 4000 },
        { name: "Mon", profit: 3000 },
        { name: "Tue", profit: 4500 },
        { name: "Wed", profit: 2000 },
        { name: "Thu", profit: 2500 },
        { name: "fri", profit: 5000 },
        { name: "Sat", profit: 4500 },
    ],
};


export const barChartBoxVisit = {
    title: "Title Visit",
    color: "#ff8042",
    dataKey: "visit",
    chartData: [
        { name: "Sun", visit: 4000 },
        { name: "Mon", visit: 3000 },
        { name: "Tue", visit: 4500 },
        { name: "Wed", visit: 2000 },
        { name: "Thu", visit: 2500 },
        { name: "fri", visit: 5000 },
        { name: "Sat", visit: 4500 },
    ],
};

export const UserRows = [
    {
        id: 1,
        img: "noavatar.png",
        lastName: "username",
        firstName: "username",
        email: "unknow@gmail.com",
        phone: "0863 1234 5678",
        createdAt: "2.12.2023",
        verified: true,

    },
    {
        id: 2,
        img: "noavatar.png",
        lastName: "username",
        firstName: "username",
        email: "unknow@gmail.com",
        phone: "0863 1234 5678",
        createdAt: "2.12.2023",
        verified: true,

    },
    {
        id: 3,
        img: "noavatar.png",
        lastName: "username",
        firstName: "username",
        email: "unknow@gmail.com",
        phone: "0863 1234 5678",
        createdAt: "2.12.2023",
        verified: true,

    },
    {
        id: 4,
        img: "noavatar.png",
        lastName: "username",
        firstName: "username",
        email: "unknow@gmail.com",
        phone: "0863 1234 5678",
        createdAt: "2.12.2023",
        verified: true,

    },
    {
        id: 5,
        img: "noavatar.png",
        lastName: "username",
        firstName: "username",
        email: "unknow@gmail.com",
        phone: "0863 1234 5678",
        createdAt: "2.12.2023",
        verified: true,

    },
    {
        id: 6,
        img: "noavatar.png",
        lastName: "username",
        firstName: "username",
        email: "unknow@gmail.com",
        phone: "0863 1234 5678",
        createdAt: "2.12.2023",
        verified: true,

    },
    {
        id: 7,
        img: "noavatar.png",
        lastName: "username",
        firstName: "username",
        email: "unknow@gmail.com",
        phone: "0863 1234 5678",
        createdAt: "2.12.2023",
        verified: true,

    },
    {
        id: 8,
        img: "noavatar.png",
        lastName: "username",
        firstName: "username",
        email: "unknow@gmail.com",
        phone: "0863 1234 5678",
        createdAt: "2.12.2023",
        verified: true,

    },
    {
        id: 9,
        img: "noavatar.png",
        lastName: "username",
        firstName: "username",
        email: "unknow@gmail.com",
        phone: "0863 1234 5678",
        createdAt: "2.12.2023",
        verified: true,

    },
    {
        id: 10,
        img: "noavatar.png",
        lastName: "username",
        firstName: "username",
        email: "unknow@gmail.com",
        phone: "0863 1234 5678",
        createdAt: "2.12.2023",
        verified: true,

    },
    {
        id: 11,
        img: "noavatar.png",
        lastName: "username",
        firstName: "username",
        email: "unknow@gmail.com",
        phone: "0863 1234 5678",
        createdAt: "2.12.2023",
        verified: true,

    },
    {
        id: 12,
        img: "noavatar.png",
        lastName: "username",
        firstName: "username",
        email: "unknow@gmail.com",
        phone: "0863 1234 5678",
        createdAt: "2.12.2023",
        verified: true,

    },
    {
        id: 13,
        img: "noavatar.png",
        lastName: "username",
        firstName: "username",
        email: "unknow@gmail.com",
        phone: "0863 1234 5678",
        createdAt: "2.12.2023",
        verified: true,

    },
    {
        id: 14,
        img: "noavatar.png",
        lastName: "username",
        firstName: "username",
        email: "unknow@gmail.com",
        phone: "0863 1234 5678",
        createdAt: "2.12.2023",
        verified: true,

    },
    {
        id: 15,
        img: "noavatar.png",
        lastName: "username",
        firstName: "username",
        email: "unknow@gmail.com",
        phone: "0863 1234 5678",
        createdAt: "2.12.2023",
        verified: true,

    },
];

export const products = [
    {
        id: 1,
        img: "https://img.freepik.com/free-photo/light-motor-drone-control-helicopter_1172-169.jpg?size=626&ext=jpg&uid=R69186235&ga=GA1.1.356670075.1697095146&semt=sph",
        title: "Dron V2.0 Edition",
        color: "white",
        producer: "sharp",
        price: "$112.99",
        createdAt: "12-2-2018",
        inStock: true,
    },
    {
        id: 2,
        img: "https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?size=626&ext=jpg&uid=R69186235&ga=GA1.1.356670075.1697095146&semt=sph",
        title: "Camera Sony Edition",
        color: "black",
        producer: "sony",
        price: "$677.99",
        createdAt: "1-4-2013",
        inStock: true,
    },
    {
        id: 3,
        img: "https://img.freepik.com/free-vector/headphones-wireless-realistic-composition-with-isolated-image-phones-with-power-bank-dock-station-with-reflections-vector-illustration_1284-73201.jpg?size=626&ext=jpg&uid=R69186235&ga=GA1.1.356670075.1697095146&semt=sph",
        title: "TWS Smart Bluetooth 2.0",
        color: "white",
        producer: "advance",
        price: "$33.99",
        createdAt: "4-9-2023",
        inStock: true,
    },
    {
        id: 4,
        img: "https://img.freepik.com/free-photo/red-computer-mouse_1260-13.jpg?size=626&ext=jpg&uid=R69186235&ga=GA1.1.356670075.1697095146&semt=sph",
        title: "Mouse red and black Bluetooth",
        color: "red",
        producer: "lenovo",
        price: "$32.99",
        createdAt: "22-4-2022",
        inStock: false,
    },
    {
        id: 5,
        img: "https://img.freepik.com/free-photo/white-keyboard-plant_23-2148708005.jpg?size=626&ext=jpg&uid=R69186235&ga=GA1.1.356670075.1697095146&semt=ais",
        title: "keyborord",
        color: "white",
        producer: "lenovo",
        price: "$49.99",
        createdAt: "12-2-2022",
        inStock: false,
    },
    {
        id: 6,
        img: "https://img.freepik.com/premium-psd/gaming-console-mockup_47987-2870.jpg?w=740",
        title: "play Stasion 5",
        color: "white",
        producer: "sony",
        price: "$149.99",
        createdAt: "12-2-2023",
        inStock: true,
    },
    {
        id: 7,
        img: "https://img.freepik.com/free-photo/light-motor-drone-control-helicopter_1172-169.jpg?size=626&ext=jpg&uid=R69186235&ga=GA1.1.356670075.1697095146&semt=sph",
        title: "Dron V2.0 Edition",
        color: "white",
        producer: "sharp",
        price: "$112.99",
        createdAt: "12-2-2018",
        inStock: true,
    },
    {
        id: 8,
        img: "https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?size=626&ext=jpg&uid=R69186235&ga=GA1.1.356670075.1697095146&semt=sph",
        title: "Camera Sony Edition",
        color: "black",
        producer: "sony",
        price: "$677.99",
        createdAt: "1-4-2013",
        inStock: true,
    },
    {
        id: 9,
        img: "https://img.freepik.com/free-vector/headphones-wireless-realistic-composition-with-isolated-image-phones-with-power-bank-dock-station-with-reflections-vector-illustration_1284-73201.jpg?size=626&ext=jpg&uid=R69186235&ga=GA1.1.356670075.1697095146&semt=sph",
        title: "TWS Smart Bluetooth 2.0",
        color: "white",
        producer: "advance",
        price: "$33.99",
        createdAt: "4-9-2023",
        inStock: true,
    },
    {
        id: 10,
        img: "https://img.freepik.com/free-photo/red-computer-mouse_1260-13.jpg?size=626&ext=jpg&uid=R69186235&ga=GA1.1.356670075.1697095146&semt=sph",
        title: "Mouse red and black Bluetooth",
        color: "red",
        producer: "lenovo",
        price: "$32.99",
        createdAt: "22-4-2022",
        inStock: false,
    },
    {
        id: 11,
        img: "https://img.freepik.com/free-photo/white-keyboard-plant_23-2148708005.jpg?size=626&ext=jpg&uid=R69186235&ga=GA1.1.356670075.1697095146&semt=ais",
        title: "keyborord",
        color: "white",
        producer: "lenovo",
        price: "$49.99",
        createdAt: "12-2-2022",
        inStock: false,
    },
    {
        id: 12,
        img: "https://img.freepik.com/premium-psd/gaming-console-mockup_47987-2870.jpg?w=740",
        title: "play Stasion 5",
        color: "white",
        producer: "sony",
        price: "$149.99",
        createdAt: "12-2-2023",
        inStock: true,
    },
    {
        id: 13,
        img: "https://img.freepik.com/free-photo/red-computer-mouse_1260-13.jpg?size=626&ext=jpg&uid=R69186235&ga=GA1.1.356670075.1697095146&semt=sph",
        title: "Mouse red and black Bluetooth",
        color: "red",
        producer: "lenovo",
        price: "$32.99",
        createdAt: "22-4-2022",
        inStock: false,
    },
    {
        id: 14,
        img: "https://img.freepik.com/free-photo/white-keyboard-plant_23-2148708005.jpg?size=626&ext=jpg&uid=R69186235&ga=GA1.1.356670075.1697095146&semt=ais",
        title: "keyborord",
        color: "white",
        producer: "lenovo",
        price: "$49.99",
        createdAt: "12-2-2022",
        inStock: false,
    },
    {
        id: 15,
        img: "https://img.freepik.com/premium-psd/gaming-console-mockup_47987-2870.jpg?w=740",
        title: "play Stasion 5",
        color: "white",
        producer: "sony",
        price: "$149.99",
        createdAt: "12-2-2023",
        inStock: true,
    },
];

export const singleProduct = {
    id: 1,
    title: "Playstation 5 Digital Edition",
    img: "https://img.freepik.com/premium-psd/gaming-console-mockup_47987-2870.jpg?w=740",
    info: {
        productId: "Ps5SDF1156d",
        color: "white",
        producer: "sony",
        price: "$149.99",
        export: "Japan",
    },
    chart: {
        dataKeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "orders", color: "#8884d8" },
        ],
        data: [
            { name: "Sun", visits: 4000, orders: 2400 },
            { name: "Mon", visits: 3000, orders: 2000 },
            { name: "Tue", visits: 4500, orders: 1400 },
            { name: "Wed", visits: 2000, orders: 3500 },
            { name: "Thu", visits: 2500, orders: 3000 },
            { name: "fri", visits: 5000, orders: 2400 },
            { name: "Sat", visits: 4500, orders: 2000 },
        ],
    },

    activities: [
        {
            text: "Roy Eldos purchesed Playstation 5 Digital Edition",
            time: "3 day ago",
        },
        {
            text: "Roy Eldos added Playstaton 5 Digital Edition into their wishlist",
            time: "1 week ago",
        },
        {
            text: "Mike Done purchesrd Playstation % Digital Edition",
            time: "2 week ago",
        },
        {
            text: "Anna Doe reviewed the product",
            time: "1 month ago",
        },
        {
            text: "Anna Doe reviewed the product",
            time: "3 month ago",
        },
       

    ]
};



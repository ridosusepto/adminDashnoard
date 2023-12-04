

// ...

import Single from "../../components/single/single";

const User = () => {
    const userData = {
        id: 1,
        title: "Username",
        img: "/noavatar.png",
        info: {
            username: "john_doe",
            fullname: "John Doe",
            email: "john@example.com",
            phone: "123-456-7890",
            status: "Active",
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
                // Add more data as needed
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
        ],
    };

    return <Single {...userData} />;
};

export default User;

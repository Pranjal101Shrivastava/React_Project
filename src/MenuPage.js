const menuItems = [
    { name: 'Menu', description1: 'Pizza', price1: '$10',description2:"Burger", price2:"$5", description3:"Sandwich", price3:"$2" },
    // More items...
];

function MenuPage() {
    return (
        <div className="menu">
            {menuItems.map(item => (
                <div key={item.name}>
                    <h2>{item.name}</h2>
                    <img src={require('./pizza2.jpg')} height={100} width={100}/>
                    <p>{item.description1} {item.price1}</p>
                    <p></p>
                    <img src={require('./burger.jpg')} height={100} width={100}/>
                    <p>{item.description2} {item.price2}</p>
                    <img src={require('./sandwich.jpg')} height={100} width={100}/>
                    <p>{item.description3} {item.price3}</p>
                </div>
            ))}
        </div>
    );
}

export default MenuPage;

const menuItems = [
    { name: 'Pizza', description: 'Delicious cheese pizza', price: '$10' },
    // More items...
];

function MenuPage() {
    return (
        <div className="menu">
            {menuItems.map(item => (
                <div key={item.name}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default MenuPage;

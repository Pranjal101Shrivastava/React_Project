import classes from "./HomePage.css"
function HomePage() {

    const styles = {
        container: {
          backgroundColor: '#f5f5f5',
          padding: '20px',
        },
        title: {
          fontSize: '100px',
          color: '#333',
         
        },

        footer: {
            backgroundColor:' #333',
            color: '#fff',
            padding: '20px',
            
          },
      };

      
    return (
        <div style={{textAlign: 'center'}}>
            <div style={styles.container}>
            <h1 style={styles.title}>Welcome to Eat-in Restaurant!</h1>
            </div>
            <h1 style={{color: '#212F3D',padding: '2px', margin: '100px', fontSize: '50px'}}>Enjoy the taste of some of the most iconic dishes from all around the World</h1>
            <p style={{fontSize: '25px', margin: '100px'}}>A complete family restaurant where every dish is prepared using quality ingredients, and we regularly take necessary cleanliness steps.</p>
            <img src={require('./res.jpg')} height={600} width={1000}/>
            <h4 style={{color: '#212F3C',padding: '2px', margin: '100px', fontSize: '50px'}}>Successfully serving 5k+ customers every year </h4>
            <footer style={styles.footer}>
                &copy; 2023 Restaurant Name. All rights reserved.
            </footer>
        </div>
    );

}

export default HomePage;

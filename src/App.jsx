import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("Kochi");

  

  const trending = new Array(8).fill({
    price: "₹50 Lac",
    type: "3BHK House",
    location: "Kakkanad, Kochi",
    rating: 4.8,
    img: "https://via.placeholder.com/300x200",
  });

  const rentData = new Array(4).fill({
    price: "₹10,000 / Month",
    type: "3BHK House",
    location: "Kakkanad, Kochi",
    rating: 4.8,
    img: "https://via.placeholder.com/300x200",
  });

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#e8ecf1ff" }}>
      
      {/* Navbar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 30px", backgroundColor: "#fff", borderBottom: "1px solid #eee" }}>
    
    {/* Left Logo */}
    <div style={{  alignItems: "center" }}>
      <h1 style={{ fontFamily: "'Orbitron', sans-serif",fontSize: "30px", fontWeight: "800PX" , color:"#0db2af"}}>POKAK</h1>

            <p style={{fontSize:"10px",color:"#0db2af"}}>TECHNOLOGIES PVT LTD</p>
    </div>

    {/* Center Menu */}
    <div style={{ display: "flex", gap: "25px", fontSize: "14px", fontWeight: "500", color: "#666" }}>
      <span style={{ display: "flex", alignItems: "center", cursor: "pointer", color: "#000" }}>
         <i className="fa-solid fa-house" style={{ marginRight: "6px" }}></i>  Home
      </span>
      <span style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <i class="fa-solid fa-money-check-dollar" style={{ marginRight: "6px" }}></i>Rent
      </span>
      <span style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <i class="fa-regular fa-chart-bar" style={{ marginRight: "6px" }}></i> Buy
      </span>
      <span style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <i class="fa-solid fa-bed-pulse" style={{ marginRight: "6px" }}></i> Paying Guest
      </span>
    </div>

    {/* Right Section */}
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      
      {/* Location */}
      <span style={{ display: "flex", alignItems: "center", fontSize: "14px", cursor: "pointer" }}>
        <i class="fa-solid fa-location-dot" style={{ marginRight: "6px" }}></i> Kochi <i className="bi bi-caret-down-fill" style={{ fontSize: "10px", marginLeft: "5px" }}></i>
      </span>

      {/* Search Bar */}
      <input 
        type="text" 
        placeholder="Search" 
        style={{ padding: "6px 10px", border: "1px solid #0db2af", borderRadius: "5px", outline: "none", width: "200px" }} 
      />

      {/* Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#0db2af", padding: "6px 10px", borderRadius: "6px", color: "#fff", cursor: "pointer" }}>
       <i class="fa-solid fa-grip-lines" style={{ fontSize: "18px" }}></i> 
        <i class="fa-solid fa-address-book" style={{ fontSize: "18px" }}></i>
      </div>
    </div>
  </div>

      {/* Banner */}
      <section style={{ margin: "20px",justifyContent:"center", padding: "20px", backgroundColor: "#78e4e1ff", borderRadius: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>10% off</h2>
          <p>On first-month rent for bookings</p>
          <button style={{ backgroundColor: "black", color: "white", padding: "10px 20px", borderRadius: "8px", marginTop: "10px", cursor: "pointer" }}>Explore</button>
        </div>
        <img src="https://img.freepik.com/premium-photo/man-hold-low-polygon-real-estate-concept-businessman-holding-house-icon-house-hand-property-insurance-security-concept-protecting-gesture-man-symbol-house_150455-13633.jpg" alt="offer" style={{ borderRadius: "10px" ,width:"400px"}} />
      </section>

      {/* PG Section */}
       <div style={{ padding: "40px", backgroundColor: "#e5e8ecff" }}>
    
    {/* Header */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
      <h5 style={{ margin: 0 }}>Find Your Ideal Pay Guest Stay</h5>
      <button style={{ border: "1px solid #ccc", background: "#fff", padding: "3px 7px", borderRadius: "4px", cursor: "pointer",color:"#78e4e1ff" }}>
        View all
      </button>
    </div> <br />

    {/* Cards Row */}
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap",justifyContent:"space-between" }}>

      {[
        "https://photos2.spareroom.co.uk/images/flatshare/listings/unmodified/97/68/97682060.jpg?width=648&fit=bounds&auto=webp&optimize=medium",
        "https://m.media-amazon.com/images/I/71Sl1s0x1sL._UF894,1000_QL80_.jpg",
        "https://www.thegrandviewhotel.com/wp-content/uploads/2022/06/GVH-Single-Room-Shared-Bathroom-1170x780.jpg",
        "https://www.decorpot.com/images/171874419315-best-single-bed-design-ideas.jpg"
      ].map((img, index) => (
        <div key={index} style={{ 
          width: "280px", 
          border: "1px solid #ddd", 
          borderRadius: "10px", 
          overflow: "hidden", 
          background: "#fff", 
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)" 
        }}>
          
          {/* Image with icons */}
          <div style={{ position: "relative" }}>
            <img 
              src={img} 
              alt="room" 
              style={{ width: "100%", height: "200px", objectFit: "cover" }} 
            />
            <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "8px" }}>
              <button style={{ background: "#e9e7e7ff", borderRadius: "50%", border: "none", padding: "6px", cursor: "pointer" }}><i className="fa-solid fa-share-nodes" style={{ color: "#0db2af" }}></i>

</button>
              <button style={{ background: "#e9e7e7ff", borderRadius: "50%", border: "none", padding: "6px", cursor: "pointer" }}><i className="fa-solid fa-heart" style={{ color: "#0db2af" }}></i></button>
            </div>
          </div>

          {/* Card Content */}
          <div style={{ padding: "15px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ margin: 0, fontWeight: "bold", fontSize: "15px" }}>₹4,000 <span style={{ fontWeight: "normal" , color: "#d6e0dfff",fontSize: "13px" }}>/ Single Share</span></p>
              <span style={{ background: "#007bff", color: "#fff", fontSize: "12px", padding: "2px 6px", borderRadius: "5px" }}>For Men</span>
            </div>
           <p style={{ margin: "5px 0",color: "#d6e0dfff",fontSize: "13px" }}>Kakkand, Kochi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i className="fa-solid fa-star" style={{ color: "#f39c12", marginRight: "5px",fontSize:"10px" }} ></i><span style={{fontSize:"11px",fontWeight:"bold",color:"darkblue"}}>4.8</span> <span style={{color: "#d6e0dfff",fontSize:"11px"}}>(73)</span></p>
 
              
              <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            </div>

            <div style={{ display: "flex", gap: "15px", fontSize: "13px", color: "#555" }}>
              <span style={{color: "#d6e0dfff",fontSize: "13px",}}><i class="fa-solid fa-wifi"style={{backgroundColor:"#555",padding:"3px 5px",fontSize:"10px",borderRadius:"5px"}} ></i> Free Wifi</span>
              <span style={{color: "#d6e0dfff",fontSize: "13px"}}><i class="fa-solid fa-utensils"style={{backgroundColor:"#555",padding:"3px 5px",fontSize:"10px",borderRadius:"5px"}}></i> Food Included</span>
            </div>
          </div>

        </div>
      ))}

    </div>
  </div>  

      {/* Trending Properties */}
      <section style={{ margin: "20px", padding: "20px", backgroundColor: "#e6fffa", borderRadius: "15px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
      <h5 style={{ margin: 0 }}>Trending Properties Near You
</h5>
      <button style={{ border: "1px solid #ccc", background: "#0db2af", padding: "1px 5px", borderRadius: "4px", cursor: "pointer",color:"#e7eeeeff" }}>
        View all
      </button>
    </div> <br />

    {/* Cards Row */}
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap",justifyContent:"space-between" }}>

      {[
        "https://housing-images.n7net.in/01c16c28/7675ccc5bfb95f303c5f6a2b03948272/v0/medium/2_bhk_independent_house-for-sale-kovilpalayam-Coimbatore-others.jpg",
        "https://lscdn.blob.core.windows.net/property/realestatead/15_12_2024_18_10_35_1_a.png",
        "https://housing-images.n7net.in/01c16c28/e89a5f4ce355176f9015351347af6d2b/v0/medium/2_bhk_independent_house-for-sale-rudraram_1-Hyderabad-others.jpg",
        "https://imagecdn.99acres.com/media1/31676/14/633534407M-1755244789107.webp"
      ].map((img, index) => (
        <div key={index} style={{ 
          width: "280px", 
          border: "1px solid #ddd", 
          borderRadius: "10px", 
          overflow: "hidden", 
          background: "#fff", 
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)" 
        }}>
          
          {/* Image with icons */}
          <div style={{ position: "relative" }}>
            <img 
              src={img} 
              alt="room" 
              style={{ width: "100%", height: "200px", objectFit: "cover" }} 
            />
            <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "8px" }}>
              <button style={{ background: "#e9e7e7ff", borderRadius: "50%", border: "none", padding: "6px", cursor: "pointer" }}><i className="fa-solid fa-share-nodes" style={{ color: "#0db2af" }}></i>

</button>
              <button style={{ background: "#e9e7e7ff", borderRadius: "50%", border: "none", padding: "6px", cursor: "pointer" }}><i className="fa-solid fa-heart" style={{ color: "#0db2af" }}></i></button>
            </div>
          </div>

          {/* Card Content */}
          <div style={{ padding: "15px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ margin: 0, fontWeight: "bold", fontSize: "15px" }}>₹50 Lac </p>
              
            </div>

            <p style={{ margin: 0, fontWeight: "bold", fontSize: "12px" }}>3BHK House </p>
              
            <p style={{ margin: "5px 0",color: "#d6e0dfff",fontSize: "13px" }}>Kakkand, Kochi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i className="fa-solid fa-star" style={{ color: "#f39c12", marginRight: "5px",fontSize:"10px" }} ></i><span style={{fontSize:"11px",fontWeight:"bold",color:"darkblue"}}>4.8</span> <span style={{color: "#d6e0dfff",fontSize:"11px"}}>(73)</span></p>
            
            
 
              
             
          </div>

        </div>
      ))}

    </div> <br /> <br />
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap",justifyContent:"space-between" }}>

      {[
        "https://5.imimg.com/data5/SELLER/Default/2020/12/YU/IM/KX/79898367/h3-500x500.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioPVQJeeV0JPhod77H910-JEugLmzXpNTy4OZeXi8K7a7Cz9k1eA1WH8ppD57-FnNmX1uZRQIoqGs_JduY-t4uNxfcBtJN6f0WgDE8geyjrYaK1fLdvS98J71sLCgj3t6QRd78tP-_sqE/s1600/box-type-house.jpg",
        "https://is1-2.housingcdn.com/01c16c28/223ee9386ee0ce163c499daf3829f2f7/v0/medium/2_bhk_independent_house-for-sale-north_parvur-Kedamangalam-others.jpg",
        "https://img.staticmb.com/mbphoto/property/cropped_images/2025/Mar/26/Photo_h180_w240/78581333_1_PropertyImage601-2808894931796_180_240.jpg"
      ].map((img, index) => (
        <div key={index} style={{ 
          width: "280px", 
          border: "1px solid #ddd", 
          borderRadius: "10px", 
          overflow: "hidden", 
          background: "#fff", 
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)" 
        }}>
          
          {/* Image with icons */}
          <div style={{ position: "relative" }}>
            <img 
              src={img} 
              alt="room" 
              style={{ width: "100%", height: "200px", objectFit: "cover" }} 
            />
            <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "8px" }}>
              <button style={{ background: "#e9e7e7ff", borderRadius: "50%", border: "none", padding: "6px", cursor: "pointer" }}><i className="fa-solid fa-share-nodes" style={{ color: "#0db2af" }}></i>

</button>
              <button style={{ background: "#e9e7e7ff", borderRadius: "50%", border: "none", padding: "6px", cursor: "pointer" }}><i className="fa-solid fa-heart" style={{ color: "#0db2af" }}></i></button>
            </div>
          </div>

          {/* Card Content */}
          <div style={{ padding: "15px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ margin: 0, fontWeight: "bold", fontSize: "15px" }}>₹4,000 </p>
            
            </div>
              <p style={{ margin: 0, fontWeight: "bold", fontSize: "12px" }}>3BHK House </p>
            <p style={{ margin: "5px 0",color: "#d6e0dfff",fontSize: "13px" }}>Kakkand, Kochi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i className="fa-solid fa-star" style={{ color: "#f39c12", marginRight: "5px",fontSize:"10px" }} ></i><span style={{fontSize:"11px",fontWeight:"bold",color:"darkblue"}}>4.8</span> <span style={{color: "#d6e0dfff",fontSize:"11px"}}>(73)</span></p>
            
            
 
              
             
          </div>

        </div>
      ))}

    </div>
      </section>

      {/* Rent Section */}
      <section style={{ margin: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
      <h5 style={{ margin: 0 }}>Best Properties For Rent

</h5>
      <button style={{ border: "1px solid #ccc", background: "#0db2af", padding: "1px 5px", borderRadius: "4px", cursor: "pointer",color:"#e7eeeeff" }}>
        View all
      </button>
    </div> <br />
         <div style={{ display: "flex", gap: "20px", flexWrap: "wrap",justifyContent:"space-between" }}>

      {[
        "https://cdn11.bigcommerce.com/s-g95xg0y1db/images/stencil/640w/products/17137/134285/modern-victorian-style-home-plan-30348-alice-front-exterior.0c9cc81a-b4fd-4c42-99d3-7959fec472cf__18365.1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS04ukveQ7jpKLwbhxMlq7mEL4NPOTy4tDUB-xcBFVxUYHfowoYzz9VNXbihlohSQrpAEg&usqp=CAU",
        "https://i.pinimg.com/736x/e2/09/b8/e209b83edd53b51f81d514149bb29a1f.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjfwgim9ZubGugYC6vFrbBaH1yYEwEF56OQ&s"
      ].map((img, index) => (
        <div key={index} style={{ 
          width: "280px", 
          border: "1px solid #ddd", 
          borderRadius: "10px", 
          overflow: "hidden", 
          background: "#fff", 
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)" 
        }}>
          
          {/* Image with icons */}
          <div style={{ position: "relative" }}>
            <img 
              src={img} 
              alt="room" 
              style={{ width: "100%", height: "200px", objectFit: "cover" }} 
            />
            <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "8px" }}>
              <button style={{ background: "#e9e7e7ff", borderRadius: "50%", border: "none", padding: "6px", cursor: "pointer" }}><i className="fa-solid fa-share-nodes" style={{ color: "#0db2af" }}></i>

</button>
              <button style={{ background: "#e9e7e7ff", borderRadius: "50%", border: "none", padding: "6px", cursor: "pointer" }}><i className="fa-solid fa-heart" style={{ color: "#0db2af" }}></i></button>
            </div>
          </div>

          {/* Card Content */}
          <div style={{ padding: "15px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ margin: 0, fontWeight: "bold", fontSize: "13px" }}>₹10,000 <span style={{ fontWeight: "normal" , color: "#d6e0dfff",fontSize: "12px" }}>/Month</span> </p>
            
            </div>
              <p style={{ margin: 0, fontWeight: "bold", fontSize: "12px" }}>3BHK House </p>
            <p style={{ margin: "5px 0",color: "#d6e0dfff",fontSize: "13px" }}>Kakkand, Kochi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i className="fa-solid fa-star" style={{ color: "#f39c12", marginRight: "5px",fontSize:"10px" }} ></i><span style={{fontSize:"11px",fontWeight:"bold",color:"darkblue"}}>4.8</span> <span style={{color: "#d6e0dfff",fontSize:"11px"}}>(73)</span></p>
            
            
 
              
             
          </div>

        </div>
      ))}

    </div>
      </section>

      {/* Offers */}
  
        <div style={{ display: "flex", gap: "40px", padding: "40px", backgroundColor: "#f5f5f5" }}>
      
      {/* Card 1 */}
      <div style={{
        flex: 1,
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        color: "#fff"
      }}>
        <img
          src="https://archipro.com.au/images/cdn-images/width%3D3840%2Cquality%3D80/images/s1/article/misc/eyJlZGl0cyI6W3sidHlwZSI6InpwY2YiLCJvcHRpb25zIjp7ImJveFdpZHRoIjoxNjc2LCJib3hIZWlnaHQiOjE2NzYsInpvb21XaWR0aCI6MTY3Niwic2Nyb2xsUG9zWCI6NDgsInNjcm9sbFBvc1kiOjgxLCJiYWNrZ3JvdW5kIjo.jpeg/eyJlZGl0cyI6W3sidHlwZSI6InpwY2YiLCJvcHRpb25zIjp7ImJveFdpZHRoIjoxOTIwLCJib3hIZWlnaHQiOjE1NTgsImNvdmVyIjp0cnVlLCJ6b29tV2lkdGgiOjE5MjAsInNjcm9sbFBvc1giOjUwLCJzY3JvbGxQb3NZIjo1MCwiYmFja2dyb3VuZCI6InJnYig4MCwxMjQsMTg1KSIsImZpbHRlciI6MH19XSwicXVhbGl0eSI6ODd9"
          alt="Affordable PG"
          style={{ width: "100%", height: "50%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute",
          top: "15%",
          left: "30px",
          transform: "translateY(-20%)"
        }}>
          <h2 style={{ margin: "0 0 8px", fontSize: "28px", fontWeight: "bold" }}>Affordable PG</h2>
          <p style={{ margin: "0 0 12px", fontSize: "25px", fontWeight: "600" }}>Extra <br /> 10% off</p>
          <button style={{
            backgroundColor: "#00a99d",
            color: "#fff",
            border: "none",
            padding: "1px 5px",
            borderRadius: "20px",
            cursor: "pointer"
          }}>
            View Details
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div style={{
        flex: 1,
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        
        justifyContent: "center",
        
        
      }}>
        <img
          src="https://img.freepik.com/premium-photo/happy-cheerful-young-man-holding-credit-card-make-thumbs-up-gesture_171337-41323.jpg"
          alt="Save offer"
          style={{ width: "100%", height: "50%", objectFit: "cover", }}
        />
        <div style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-20%)",
          textAlign: "left",
          color: "#333",
          top: "15%",
        }}>
          <h2 style={{ margin: "0 0 8px", fontSize: "30px", fontWeight: "bold", color: "#00a99d" }}>
            Save $200
          </h2>
          <p style={{ margin: "0 0 12px", fontSize: "13px", color: "#555" }}>
            On Booking Via Credit Card
          </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button style={{
            backgroundColor: "#00a99d",
            color: "#fff",
            border: "none",
            padding: "2px 9px",
            borderRadius: "20px",
            cursor: "pointer",

          }}>
            View More
          </button>
        </div>
      </div>

    </div>
      

      {/* Footer */}
      <footer style={{ backgroundColor: "#0d9488", color: "white", padding: "30px", marginTop: "30px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "20px" }}>
          <div>
            
            <h1 style={{ fontFamily: "'Orbitron', sans-serif",fontSize: "50px", fontWeight: "100PX" }}>POKAK</h1>

            <p style={{fontSize:"16px"}}>TECHNOLOGIES PVT LTD</p>
            <div style={{justifyItems:"space-evenly",fontSize:"20px"}}><i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-brands fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-brands fa-x-twitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-brands fa-linkedin-in"></i></div>
          </div>
          <div>
            <h4 style={{ fontWeight: "bold" }}>Quick Links</h4>
            <p>Home</p>
            <p>Rental</p>
            <p>Paying Guest</p>
            <p>Buying</p>
            <p>Offers</p>
            <p>Bookings</p>
          </div>
          <div>
            <h4 style={{ fontWeight: "bold" }}>Customer Care</h4>
            <p>Help Center</p>
            <p>FAQ</p>
            <p>Contact Support</p>
            <p>Cancellation & Refund Policies</p>
            <p>Terms & Conditions</p>
            <p>Privacy & Policies</p>
          </div>
          <div>
            <h4 style={{ fontWeight: "bold" }}>Stay Connected</h4>
            <input type="email" placeholder="Enter Your Email" style={{ padding: "8px", borderRadius: "5px", width: "70%", marginTop: "5px", border: "non", color: "#e4ededff",backgroundColor:"#086b63ff" }} /> <br />
            <button style={{ backgroundColor: "white", color: "#0d9488", padding: "8px 15px", borderRadius: "5px", marginTop: "10px",width: "70%" }}>Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

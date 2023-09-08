import { Link } from "react-router-dom";
import { menu } from "../../data";
import "./menu.scss"
const Menu = () => {
  return (
    // <div className="menu">
    //   {/* Main */}
    //   <div className="item">
    //     <span className="title">Main</span>
    //     <Link to="/">
    //       <img src="/home.svg" alt="" />
    //       <span className="listItemTitle">Home</span>
    //     </Link>
    //   </div>
    //   {/*  */}
    //   <div className="item">
    //     <span className="title">Main</span>
    //     <Link to="/">
    //       <img src="/profile.svg" alt="" />
    //       <span className="listItemTitle">Profile</span>
    //     </Link>
    //   </div>
    //   {/* End of Main */}

    //   {/*  */}
    //   <div className="item">
    //     <span className="title">Main</span>
    //     <Link to="/">
    //       <img src="/home.svg" alt="" />
    //       <span className="listItemTitle">Home</span>
    //     </Link>
    //   </div>
    //   {/*  */}
    //   <div className="item">
    //     <span className="title">Main</span>
    //     <Link to="/">
    //       <img src="/profile.svg" alt="" />
    //       <span className="listItemTitle">Profile</span>
    //     </Link>
    //   </div>
    // </div>

    //!! instead of writing the code above, we can just store all the menu items and their data in a seperate file and map over them for clean code
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
          <Link className="listItem" key={listItem.id} to={listItem.url}>
            <img src={listItem.icon} alt="" />
            <span className="listItemTitle">{listItem.title}</span>
          </Link>
            
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../firebase/firebase";

const Profile = ({ user, logout }) => {
  const [image, setImage] = useState("default-avatar.png");
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    get(ref(db, `users/${user.uid}`)).then((snapshot) => {
      setUserData(snapshot.val());
    });
  }, [user]);

  const handleNavigate = () => {
    return navigate("/todos");
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  if (!user) return <p className="bg-red-700 mt-10 mb-10 rounded font-bold" >This is an app for people who want to organize their time and tasks !</p>;
  return (
    <div>
      <div className="max-w-xl mx-auto p-4 bg-green-800 rounded shadow">

  <div className="flex justify-between items-center">

    {/* LEFT SIDE */}
    <div className="flex flex-col gap-1">
      <h1 className="mb-11 ml-5 text-2xl font-bold text-black-800">
        {user.email}
      </h1>

      <p className="mr-11  text-xl font-bold text-black-600">first name: {userData?.firstName}</p>
      <p className="mr-10  text-xl font-bold text-black-600">last name: {userData?.lastName}</p>
      <p className="mr-16  text-xl font-bold text-black-600">handle: {userData?.handle}</p>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex flex-col items-center gap-2">
      <img
        src={image}
        alt="Picture here"
        className=" w-24 h-24 rounded-full object-cover"
      />

      <input type="file" onChange={handleImageChange} />

      <button
        onClick={handleNavigate}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Todos
      </button>

      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>

  </div>
</div>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    uid: PropTypes.string,
  }),
  logout: PropTypes.func.isRequired,
};

// const ProfileImage = () => {
//   const [image, setImage] = useState('default-avatar.png');

//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       let reader = new FileReader();
//       reader.onload = (ev) => setImage(ev.target.result);
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   return (
//     <div>
//       <img src={image} alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />
//       <input type="file" onChange={handleImageChange} />
//     </div>
//   );
// };

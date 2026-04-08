import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


const Profile = ({ user, logout }) => {

  const navigate = useNavigate();
  if (!user) return <p>Loading...</p>;

  const handleNavigate = () => {
    return navigate("/todos");
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">{user.email}</h1>
        <img
          className="w32 h-32 rounded"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1OtM7dKWRBrkYKSSnldgGFOYJicEf-PpieXLBgTepd2TYEGWFViCaGKBv4Ei1BbvNiq7Fcr61tCbd26Exzgl0O0rsq2J6wE9KMSuNBU&s=10"
          alt="Picture"
        />

        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
        <div>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => handleNavigate()}
          >
            Open todos
          </button>
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
  }).isRequired,
  logout: PropTypes.func.isRequired,
};
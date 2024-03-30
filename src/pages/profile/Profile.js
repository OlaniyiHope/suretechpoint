import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import { SpinnerImg } from "../../components/loader/Loader";
import { SET_NAME, SET_USER } from "../../redux/features/auth/authSlice";
import { getUser } from "../../services/authService";
import axios from "axios";
import "./Profile.scss";

const Profile = () => {
  const [data, setData] = useState([]);
  const [list, setList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const id = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/users`);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return (
    <div className="profile --my2">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            data.map((item, index) => (
              <Card cardClass={"card --flex-dir-column"} key={index}>
                <span className="profile-photo"></span>
                <span className="profile-data">
                  <p>
                    <b>Name : </b> {item.name}
                  </p>
                  <p>
                    <b>Email : </b> {item.email}
                  </p>
                  <p>
                    <b>Phone : </b> {item.phone}
                  </p>
                  <p>
                    <b>Bio : </b> {item.bio}
                  </p>
                  <div>
                    <Link to={`edit-profile/${id}`}>
                      <button className="--btn --btn-primary">
                        Edit Profile
                      </button>
                    </Link>
                  </div>
                </span>
              </Card>
            ))}
        </>
      )}
    </div>
  );
};

export default Profile;

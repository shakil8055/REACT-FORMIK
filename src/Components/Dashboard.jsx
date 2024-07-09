import React, { useEffect, useState } from "react";
import Card from "./Card";
import { axiosService } from "../Utilities/Apiservices";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  const getData = async () => {
    try {
      const res = await axiosService.get("/users");
      if (res.status === 200) {
        setUser(res.data);
        setLoading(false);
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row py-10 mx-10 justify-content-center">
      {(
        user.map((data) => <Card key={data.id} data={data} getData={getData} />)
      )}
    </div>
  );
};

export default Dashboard;
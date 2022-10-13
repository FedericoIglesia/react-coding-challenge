import React, { useEffect } from "react";
import Drawer from "../Drawer/Drawer";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getTalent } from "../../redux/actions";

function Home() {
  const dispatch = useDispatch();
  const talent = useSelector((state) => state.talent);

  useEffect(() => {
    dispatch(getTalent());
  }, []);

  return (
    <div>
      <Drawer />
    </div>
  );
}

export default Home;

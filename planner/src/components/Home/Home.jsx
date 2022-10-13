import React, { useEffect } from "react";
import Drawer from "../Drawer/Drawer";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getTalent } from "../../redux/actions";
import h from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();
  const talent = useSelector((state) => state.talent);
  const drawer = useSelector((state) => state.drawer);

  useEffect(() => {
    dispatch(getTalent());
  }, []);

  return (
    <>
      <div>
        <Drawer />
        <div className={drawer ? h["drawer-open"] : h["drawer-closed"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            laborum laboriosam, aliquam eos ipsa odio unde perferendis libero
            ex, nemo nisi, possimus maxime doloremque earum esse veniam sunt
            corrupti aspernatur dolor nam laudantium quidem quisquam voluptatum
            ab. Cum, aliquid perferendis reiciendis ut maiores exercitationem!
            Sequi hic ipsum id! Illo voluptatibus tempora enim quia corrupti
            reiciendis voluptates ad laboriosam, architecto tenetur fugit. Quam
            velit ex dignissimos quaerat odio vel sequi nulla qui cum, nam
            blanditiis deleniti hic ipsa nesciunt optio praesentium accusamus
            rerum ipsam illum modi voluptas quia architecto! Velit minima
            debitis quidem, iusto excepturi cum pariatur rem sit doloribus
            distinctio.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;

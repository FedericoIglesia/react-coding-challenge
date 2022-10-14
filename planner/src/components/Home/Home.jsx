import React, { useEffect, useState } from "react";
import Drawer from "../Drawer/Drawer";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  currentCity,
  filterBySkills,
  getTalent,
  cleanSearch,
} from "../../redux/actions";
import h from "./Home.module.css";
import City from "../Card/City";
import Industry from "../Card/Industry";
import Skills from "../Card/Skills";
import Pagination from "../Pagination/Pagination";
import { useHistory } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const talent = useSelector((state) => state.talent);
  const drawer = useSelector((state) => state.drawer);
  const person = useSelector((state) => state.person);
  // console.log("person " + person[0].talentName);
  const history = useHistory();
  let counts = {};

  const cities = [...new Set(talent.map((c) => c.officeCity))].sort();
  const skills = [
    ...new Set(talent.map((c) => c.requiredSkills.map((n) => n.name))),
  ]
    .flat()
    .sort();

  const industries = [...new Set(talent.map((i) => i.industry))];

  // const [currentPage, setCurrentPage] = useState(1);
  // // eslint-disable-next-line
  // const [talentsPerPage, setTalentsPerPage] = useState(9);
  // // eslint-disable-next-line
  // // const [order, setOrder] = useState("");

  // const indexOfLastTalent = currentPage * talentsPerPage;
  // const indexOfFirstTalent = indexOfLastTalent - talentsPerPage;
  // //getting the recipes from the global state by slicing the state array by the index. Since i'm slicing up to the 9th index(not included) i'm getting 9 recipes per page

  // const currentTalent = talent.slice(indexOfFirstTalent, indexOfLastTalent);

  // const pages = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  useEffect(() => {
    dispatch(getTalent());
  }, []);

  function handleCityClick(name) {
    dispatch(currentCity(name));
    console.log(name);
    history.push("/city");
  }

  function handleReset() {
    history.push("/home");
  }

  return (
    <>
      <div>
        {drawer && (
          <button
            onClick={handleReset()}
            style={{
              position: "absolute",
              top: "4rem",
              left: "21%",
              background: "#fff",
              border: "1px solid #ff7500",
              color: "#ff7500",
              height: "1.5rem",
              width: "7rem",
              borderRadius: "3px",
            }}
          >
            Reset Filters
          </button>
        )}
        <Drawer />
        <div className={drawer ? h["drawer-open"] : h["drawer-closed"]}>
          {person.length ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "30% 30% 30%",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              {person.map((p) => {
                return (
                  <div
                    style={{
                      backgroundColor: "#fff",
                      color: "#666",
                      boxShadow: "-1px -1px 5px #272626",
                      height: "10rem",
                    }}
                    className={h["person-card"]}
                  >
                    <h2>{p.talentName}</h2>
                    <h6>
                      City: <span>{p.officeCity}</span>
                    </h6>
                    <h6>
                      Grade: <span>{p.talentGrade}</span>
                    </h6>
                    <h6>
                      Industry: <span>{p.industry}</span>
                    </h6>
                    <h6>
                      Is Unassigned ? <span>{p.isUnassigned.toString()}</span>
                    </h6>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={h["talent-container"]}>
              <h2>City</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  overflowX: "scroll",
                }}
                className={h["cards-container"]}
              >
                {cities.map((c) => {
                  let counts = {};

                  return (
                    <div className={h.cards} onClick={() => handleCityClick(c)}>
                      <h3 className={h["card-title"]}>{c}</h3>
                      <div style={{ width: "20rem" }}>
                        <h4 className={h["card-talent"]}>
                          Talent available:{" "}
                          {
                            talent.filter(
                              (t) => t.officeCity == c && t.talentName !== ""
                            ).length
                          }
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* <h2>Skill</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                overflowX: "scroll",
              }}
              className={h["cards-container"]}
            >
              {[...new Set(skills)].map((c) => {
                return (
                  <>
                    <h2>{c}</h2>
                    <div className={h.cards}>
                      <h4>
                        Talent available:{" "}
                        {
                          talent.filter(
                            (t) =>
                              t.requiredSkills.map((n) => n.name == c) &&
                              t.talentName !== ""
                          ).length
                        }
                      </h4>
                    </div>
                  </>
                );
              })}
            </div> */}
              <h2>Industry</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  overflowX: "scroll",
                }}
                className={h["cards-container"]}
              >
                {industries.map((c) => {
                  return (
                    <div className={h.cards}>
                      <h3 className={h["card-title"]}>{c}</h3>
                      <div style={{ width: "20rem" }}>
                        <h4 className={h["card-talent"]}>
                          Talent available:{" "}
                          {
                            talent.filter(
                              (t) => t.industry == c && t.talentName !== ""
                            ).length
                          }
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;

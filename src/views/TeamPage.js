import React from "react";
import TeamCard from "../components/TeamCard";
import configData from "../utils/data.json";

function TeamPage() {
  return (
    <div>
      <div className="d-flex flex-row  p-4">
        {configData?.map((data, index) => {
          return (
            <div >
              <TeamCard image={data?.image}  title={data?.title} info={data?.info} courseStart={data?.courseStart} price={data?.price} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamPage;

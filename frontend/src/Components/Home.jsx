import React, { useContext } from "react";
import { AppContext } from "../context/App_context";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  const { recipe } = useContext(AppContext);
  return;
  <>
    <div className=" text-ceenter mx-auto" style={{ width: "1200px" }}>
      <div className="row d-flex justify-content-center align-item-center">
        {recipe.map((data) => (
          <div key={data._id} className="col-md-3 my-3 gap-1">
            <div className="card bg-dark text-light" style={{ width: "18rem" }}>
              <div className="d-flex justify-content-center align-item-center p-3">
                <img
                  src={data.imgurl}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "10px",
                    border: "2px solid yellow",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <div className="my-3">
                  <div className="btn btn-primary mx-3">Save</div>
                  <div className="btn btn-success" onClick={()=>navigate(`/${data._id}`)}>View More</div>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>;
}

export default Home;

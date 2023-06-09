import React, { useState } from "react";
import closebutton from "../../assets/images/closebutton.jpeg";
import "./addproject.css";
const AddProject = (props) => {
  const [imgFile, uploadImage] = useState([]);
  const Imgpreview = (e) => {
    if (e.target.files.length !== 0) {
      uploadImage((imgFile) => [
        ...imgFile,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };
  return props.trigger ? (
    <div className="addprojectclose">
      <div className="addprojectmain">
        <form>
          <h2>Add Project</h2>
          <input type="text" placeholder="Project title" />
          <textarea placeholder="Project description" rows={10}></textarea>
        </form>
        <form>
          <h3>Preview</h3>
          {imgFile.map((elem) => {
            return (
              <span key={elem}>
                <img src={elem} alt="image" />
              </span>
            );
          })}
          <input type="file" onChange={Imgpreview} />
          <input type="submit"/>
        </form>
      </div>
      <button onClick={() => props.setTrigger(false)}>
        <img src={closebutton} alt="close" />
      </button>
    </div>
  ) : (
    ""
  );
};
export default AddProject;

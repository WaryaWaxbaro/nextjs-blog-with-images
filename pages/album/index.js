import { useState } from "react";
import Modal from "../../components/Modal";

function Album(props) {
  const [photos, setPhotos] = useState([]);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between mb-5">
        <h1>Available Photos</h1>
        <div>
          <button
            className="btn btn-primary rounded-0"
            data-bs-toggle="modal"
            data-bs-target="#photosModal"
          >
            Add New Photo
          </button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div key={i} className="col">
            <div className="w-100 bg-danger" style={{ height: "250px" }}></div>
          </div>
        ))}
      </div>
      <Modal photos={photos} setPhotos={setPhotos} />
    </div>
  );
}

export default Album;

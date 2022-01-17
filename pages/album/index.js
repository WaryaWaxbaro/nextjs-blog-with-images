import { useState } from "react";
import Modal from "../../components/Modal";
import { server } from "../../config";
import Image from "next/image";

function Album(props) {
  const [photos, setPhotos] = useState([]);
  const [newPhotos, setNewPhotos] = useState([]);

  const handleSubmit = async () => {
    const body = new FormData();
    photos.map((photo, index) => {
      body.append(`photo`, photo);
    });
    const response = await fetch(`${server}/api/file-upload/photos`, {
      method: "POST",
      body,
    });
    const result = await response.json();
    const { message, photo: newPhoto } = result;
    if (message == "success") {
    }

    console.log("result ", result);
  };

  const handleGetPhotos = async () => {
    console.log("handleGetPhotos ");
    const response = await fetch(`${server}/api/file-upload/get-photos`);
    const result = await response.json();

    console.log("result ", result);
  };

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
        <div>
          <button
            onClick={handleGetPhotos}
            className="btn btn-warning rounded-0"
          >
            Get photos
          </button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
        {newPhotos.map((p, i) => (
          <div key={i} className="col">
            <div className="w-100 bg-danger" style={{ height: "250px" }}>
              <Image src={p} layout="fill" />
            </div>
          </div>
        ))}
      </div>
      <Modal
        photos={photos}
        setPhotos={setPhotos}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Album;

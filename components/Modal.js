import { useState, useRef } from "react";
import Image from "next/image";

function Modal(props) {
  const { photos, setPhotos, handleSubmit } = props;
  const photoFile = useRef();
  const handleChange = (e) => {
    let files = e.target.files;
    setPhotos([...files]);
    console.log("file ", e.target.files);
    console.log("files ", files);
  };

  const handleRemovePhoto = (selectedFile) => {
    const filteredPhotos = photos.filter(
      (file) => file.name !== selectedFile.name
    );
    console.log("filtered ", filteredPhotos);
    setPhotos(filteredPhotos);
  };

  const handleReset = () => {
    setPhotos([]);
    photoFile.current.value = null;
  };

  return (
    <div
      className="modal fade"
      id="photosModal"
      tabIndex="-1"
      aria-labelledby="photosModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Adding New Photo
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="photo" className="form-label">
                Select photo(s)
              </label>
              <input
                ref={photoFile}
                onChange={handleChange}
                className="form-control"
                type="file"
                id="photo"
                accept="image/*"
                multiple
              />
            </div>
            <div className="w-100 py-4">
              <h5 className="fs-6 fw-light">Preview</h5>
              <div className="row row-cols-2 g-4">
                {photos.map((photo, index) => (
                  <div key={index} className="col">
                    <div
                      className="position-relative w-100"
                      style={{ height: "150px" }}
                    >
                      <button
                        onClick={() => handleRemovePhoto(photo)}
                        className="position-absolute top-0 end-0 btn bg-danger text-white rounde-0 bg-opacity-75 py-1"
                      >
                        x
                      </button>
                      <img
                        src={URL.createObjectURL(photo)}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => handleReset()}
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              type="button"
              className="btn btn-primary"
            >
              Add Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

import axios from "axios";
import { useState } from "react";
import Image from "./Image.jsx";

export default function PhotosUploader({ addedPhotos, onChange }) {
  const [photoLink, setPhotoLink] = useState("");

  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", { link: photoLink });
    onChange((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios.post("/upload", data, {
      headers: { "Content-type": "multipart/form-data" },
    }).then((response) => {
      const { data: filenames } = response;
      onChange((prev) => {
        return [...prev, ...filenames];
      });
    });
  }

  function removePhoto(ev, filename) {
    ev.preventDefault();
    onChange([...addedPhotos.filter((photo) => photo !== filename)]);
  }

  function selectAsMainPhoto(ev, filename) {
    ev.preventDefault();
    onChange([filename, ...addedPhotos.filter((photo) => photo !== filename)]);
  }

  const styles = {
    container: {
      display: 'flex',
      gap: '8px',
    },
    input: {
      flex: '1',
      padding: '8px',
      borderRadius: '8px',
      border: '1px solid #ccc',
    },
    button: {
      backgroundColor: '#e5e7eb',
      padding: '8px 16px',
      borderRadius: '16px',
      cursor: 'pointer',
    },
    photoGrid: {
      marginTop: '8px',
      display: 'grid',
      gap: '8px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    },
    photoContainer: {
      position: 'relative',
      height: '128px',
      display: 'flex',
    },
    image: {
      borderRadius: '16px',
      width: '100%',
      objectFit: 'cover',
    },
    iconButton: {
      position: 'absolute',
      bottom: '4px',
      padding: '4px 8px',
      borderRadius: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: '#fff',
    },
    removeButton: {
      right: '4px',
    },
    selectButton: {
      left: '4px',
    },
    uploadLabel: {
      height: '128px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px dashed #ccc',
      borderRadius: '16px',
      cursor: 'pointer',
      textAlign: 'center',
      fontSize: '24px',
      color: '#666',
    },
    hiddenInput: {
      display: 'none',
    },
    uploadPhoto: {
      width: '48px',
      height: '48px',
      fill: '#666',
    },
  };

  return (
    <>
      <div style={styles.container}>
        <input
          value={photoLink}
          onChange={(ev) => setPhotoLink(ev.target.value)}
          type="text"
          placeholder="Add using a link ....jpg"
          style={styles.input}
        />
        <button onClick={addPhotoByLink} style={styles.button}>
          Add&nbsp;photo
        </button>
      </div>
      <div style={styles.photoGrid}>
        {addedPhotos.length > 0 && addedPhotos.map((link) => (
          <div style={styles.photoContainer} key={link}>
            <Image style={styles.image} src={link} alt="" />
            <button
              onClick={(ev) => removePhoto(ev, link)}
              style={{ ...styles.iconButton, ...styles.removeButton }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
            <button
              onClick={(ev) => selectAsMainPhoto(ev, link)}
              style={{ ...styles.iconButton, ...styles.selectButton }}
            >
              {link === addedPhotos[0] && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              )}
              {link !== addedPhotos[0] && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              )}
            </button>
          </div>
        ))}
        <label style={styles.uploadLabel}>
          <input type="file" multiple style={styles.hiddenInput} onChange={uploadPhoto} />
          <svg xmlns="http://www.w3.org/2000/svg" style={styles.uploadPhoto}><path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
          </svg>
          Upload
        </label>
        </div>
    </>
    );
}
    

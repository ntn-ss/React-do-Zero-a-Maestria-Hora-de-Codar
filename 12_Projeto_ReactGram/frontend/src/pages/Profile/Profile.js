import './Profile.css';

import { uploads } from '../../utils/config';

// components
import Message from '../../components/Message';
import { Link } from 'react-router-dom';
import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs';

// hooks
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useResetMessageComponent } from '../../hooks/useResetMessageComponent';

// redux
import { getUserDetails } from '../../slices/userSlice';
import { publishPhoto, getUserPhotos, deletePhoto, updatePhoto } from '../../slices/photoSlice';

const Profile = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const resetMessageComponent = useResetMessageComponent(dispatch)

  const { user, loading } = useSelector((state) => state.user);
  const { user: userAuth } = useSelector((state) => state.auth);
  const {
    photos,
    loading: loadingPhoto,
    message: messagePhoto,
    error: errorPhoto,
  } = useSelector((state) => state.photo);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const [editId, setEditId] = useState('')
  const [editImage, setEditImage] = useState('')
  const [editTitle, setEditTitle] = useState('')

  // new form and edit form refs
  const newPhotoForm = useRef();
  const editPhotoForm = useRef();

  // load user data
  useEffect(() => {
    dispatch(getUserDetails(id));
    dispatch(getUserPhotos(id))
  }, [dispatch, id]);

  const handleFile = (e) => {
    const image = e.target.files[0];
    setImage(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const photoData = {
      title,
      image,
    };

    // build form data
    const photoFormData = Object.keys(photoData).reduce((formData, key) => {
      formData.append(key, photoData[key]);
      return formData;
    }, new FormData());

    dispatch(publishPhoto(photoFormData));

    setTitle('');

    resetMessageComponent()
  };
  
  // delete a photo
  const handleDelete = (id) => {
    dispatch(deletePhoto(id))
    resetMessageComponent()
  }

  // hide or show forms
  const hideOrShowForms = () => {
    newPhotoForm.current.classList.toggle("hide")
    editPhotoForm.current.classList.toggle("hide")
  }

  // update a photo
  const handleUpdate = (e) => {
    e.preventDefault()

    const photoData = {
      title: editTitle,
      id: editId
    }

    dispatch(updatePhoto(photoData))

    resetMessageComponent()
  }

  // open edit form
  const handleEdit = (photo) => {
    if (editPhotoForm.current.classList.contains("hide")) {
      hideOrShowForms()
    }

    setEditId(photo._id)
    setEditTitle(photo.title)
    setEditImage(photo.image)
  }

  const handleCancelEdit = (e) => {
    hideOrShowForms()
  }

  if (loading) {
    return (
      <p>Carregando...</p>
    )
  }

  return (
    <div id="profile">
      <div className="profile-header">
        {user.profileImage && (
          <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
        )}
        <div className="profile-description">
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      </div>
      {id === userAuth._id && (
        <>
          <div className="new-photo" ref={newPhotoForm}>
            <h3>Compartilhe algum momento seu.</h3>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Título para a foto:</span>
                <input
                  type="text"
                  name="titulo"
                  id="titulo"
                  placeholder="Insira um título"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title || ''}
                />
              </label>
              <label>
                <span>Imagem</span>
                <input type="file" onChange={handleFile} />
              </label>
              {!loadingPhoto ? (
                <input type="submit" value="Publicar" />
              ) : (
                <input type="submit" value="Aguarde..." disabled />
              )}
            </form>
          </div>

          <div className="edit-photo hide" ref={editPhotoForm}>
            <p>Editando a foto "{editTitle}"</p>
            {editImage && (
              <img src={`${uploads}/photos/${editImage}`} alt={editTitle} />
            )}

            <form onSubmit={handleUpdate}>
                <input
                  type="text"
                  name="titulo"
                  id="titulo"
                  placeholder="Insira um título"
                  onChange={(e) => setEditTitle(e.target.value)}
                  value={editTitle || ''}
                />
              {!loadingPhoto ? (
                <input type="submit" value="Atualizar" />
              ) : (
                <input type="submit" value="Aguarde..." disabled />
              )}
              <button className="cancel-btn" onClick={handleCancelEdit}>Cancelar edição</button>
            </form>
          </div>

          {errorPhoto && <Message msg={errorPhoto} type="error" />}
          {messagePhoto && <Message msg={messagePhoto} type="success" />}
        </>
      )}
      <div className="user-photos">
        <h2>Fotos publicadas:</h2>
            <div className="photos-container">
                {photos && photos.map((photo)=>(
                    <div className="photo" key={photo._id}>
                        {photo.image && (<img src={`${uploads}/photos/${photo.image}`} alt={photo.title}/>)}
                        
                        {id === userAuth._id ? (
                            <div className="actions">
                                <Link to={`/photos/${photo._id}`}>
                                    <BsFillEyeFill />
                                </Link>
                                <BsPencilFill onClick={()=>handleEdit(photo)}/>
                                <BsXLg onClick={()=>handleDelete(photo._id)}/>
                            </div>
                        ) : (<Link className="btn" to={`/photos/${photo._id}`}>Ver</Link>)}
                    </div>
                ))}
                {photos.length===0 && <p>Ainda não há fotos publicadas.</p>}
            </div>
      </div>
    </div>
  );
};

export default Profile;

import React, { useState, useRef, useEffect } from 'react';
import { Container, ImgUser } from './style';

export function ImgUp() {
  const [image, setImage] = useState({
    src: '../../../imagens/Foto user.png', // Initial image source
    file: null, // Store selected file for validation
  });
  const imgRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return; // Handle no file selection gracefully
    }

    // Client-side validation (example)
    if (file.size > 2097152) { // 2MB
      alert('O arquivo é muito grande. O limite máximo é 2MB.');
      return;
    }

    // Validate file type (optional)
    if (!validateFileType(file)) {
      alert('Tipo de arquivo Invalido. Por favor selecione a imagem.');
      return;
    }

    setImage((prevState) => ({ ...prevState, file }));

    const reader = new FileReader();

    reader.onload = (e) => {
      setImage((prevState) => ({ ...prevState, src: e.target.result }));
    };

    reader.readAsDataURL(file);
  };

  // Optional file type validation function (add as needed)
  const validateFileType = (file) => {
    const allowedExtensions = ['jpg', 'jpeg', 'png'];
    const extension = file.name.split('.').pop().toLowerCase();
    return allowedExtensions.includes(extension);
  };

  // Lazy loading (example with IntersectionObserver)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Simulate image loading (replace with actual image loading logic)
        console.log('Imagem carregada');
      }
    });
    observer.observe(imgRef.current);
  }, []);

  return (
    <Container>
      <ImgUser>
        
        <label htmlFor="InputId">
          <img ref={imgRef} src={image.src} alt="Imagem do usuario" id="imgUserID" />
          <input
            type="file"
            name="Input"
            id="InputId"
            onChange={handleImageChange}
          />
        
        </label>
      </ImgUser>
    </Container>
  );
}

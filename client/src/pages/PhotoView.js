import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import { fetchCurrentPhoto } from '../utils/PhotoData';

const PhotoView = () => {
    const [photo, setPhoto] = useState({});

    const loadPhoto = async () => {
        try {
            const response = await fetchCurrentPhoto();

            if (!response.ok) {
                throw Error('Someting went wrong!');
            }

            const { photoData } = await response.json();

            setPhoto(photoData)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        return () => loadPhoto();
    });

    return (
        <>
            <Card className="bg-dark text-white">
                <Card.Img src={photo.url} alt="Card Image" />
                <Card.ImgOverlay>
                    <Card.Title>{photo.title}</Card.Title>
                </Card.ImgOverlay>
                <Card.Body>
                    <Card.Text>
                        {photo.explanation}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default PhotoView;
import React, { useEffect,  useState } from 'react'
 
import { Box  } from '@chakra-ui/react'
 
export const ImageBackground = ({ imageUrl }) => {
 
    const [dominantColor, setDominantColor] = useState('');

    useEffect(() => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';

        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, img.width, img.height);

            const imageData = ctx.getImageData(0, 0, img.width, img.height).data;
            const colorCounts = {};
            let maxCount = 0;
            let dominantColor = '';

 
            for (let i = 0; i < imageData.length; i += 4) {
                const color = `${imageData[i]}, ${imageData[i + 1]}, ${imageData[i + 2]}`;
                colorCounts[color] = (colorCounts[color] || 0) + 1;
                if (colorCounts[color] > maxCount) {
                    maxCount = colorCounts[color];
                    dominantColor = `rgb(${color},.2)`;
                }
            }

            setDominantColor(dominantColor);
        };

        img.src = imageUrl;
    }, [imageUrl]);

 

    return (
        <Box   backgroundColor={dominantColor} w="fit-content" borderRadius="10px"  padding="23px"    >
             <img width="80px" height="80px" src={imageUrl} alt="Logo" />
           
        </Box>

    );
};
import { useCallback, useState } from 'react';
import { FaStar } from 'react-icons/fa'

const desmarkAllStars = () => Array(5).fill(false);

export const Rate = () => {

  const [stars, setStars] = useState(desmarkAllStars());
  const [isStarsSeted, setIsStarsSeted] = useState(false);

  const handleMouseOver = useCallback((starIndex: number) => {
    setStars(stars => {
      const newStars = [...stars];

      newStars.map((_, index) => {
        if (starIndex >= index) {
          newStars[index] = true;
        } else {
          newStars[index] = false;
        }
      })

      return newStars;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isStarsSeted) {
      setStars(desmarkAllStars());
    }
  }, [isStarsSeted]);


  const handleClick = useCallback(() => {
    setIsStarsSeted(true)
  }, []);

  return (
    <div>
      {stars.map((star, index) => (
        <div
          key={index}
          style={(star ? { color: 'yellow' } : { color: 'black' })}
          onMouseEnter={() => handleMouseOver(index)}
          onMouseLeave={() => handleMouseLeave()}
          onClick={() => handleClick()}
        >
          <FaStar />
        </div>
      ))}
    </div>
  );
};
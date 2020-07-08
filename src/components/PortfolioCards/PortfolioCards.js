import React from 'react';
import { useSpring, animated } from 'react-spring';

function PortfolioCards({ image, title, link, link2, code, description }) {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [spring, setSpring] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 2, tension: 150, friction: 100 }
  }));
  return (
    <animated.div
      class='card'
      onMouseMove={({ clientX: x, clientY: y }) =>
        setSpring({ xys: calc(x, y) })
      }
      onMouseLeave={() => setSpring({ xys: [0, 0, 1] })}
      style={{
        transform: spring.xys.interpolate(trans),
        backgroundImage: `url(${image})`
      }}
    >
      <div className='container justify-content-center'>
        <div>
          <br />
          <h2 className='text-center'>{title}</h2>
          <h3>{code}</h3>
          <p>{description}</p>
          <div>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='ui inverted button'
            >
              Deployed Project
            </a>
            <a
              href={link2}
              target='_blank'
              rel='noopener noreferrer'
              className='ui inverted button'
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default PortfolioCards;

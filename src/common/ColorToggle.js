/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";

export default () => {
  const [mode, setMode] = useColorMode();
  return (
    <label sx={{
        position: 'relative',
        display: 'inline-block',
        maxWidth: '45px',
        minWidth: '45px',
        width: '45px',
        height: '19px',
    }}>
      <input
        sx={{
          opacity: '0',
          width: '0',
          height: '0',
          ':checked + .slider .track': {
              left: '26px',
              transition: '.2s',
          },
        }}
        type="checkbox"
        onClick={e => {
            const next = mode === 'dark' ? 'light' : 'dark'
            setMode(next)
          }}
      />
      <span className="slider" sx={{
          position: 'absolute',
          cursor: 'pointer',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'background',
          transition: '.2s',
          borderRadius: '20px',
      }}>
          <span className="track" sx={{
              position: 'absolute',
              top:'1px',
              left: '2px',
              height: '17px',
              width: '17px',
              backgroundColor: 'primary',
              borderRadius: '20px',
              transition: '.4s',
              zIndex: '1',
          }} />
          <span className="dark" sx={{
              position: 'absolute',
              top: '1px',
              left: '6px',
              fontSize: '10px',
              zIndex: '0',
          }} role="img" aria-label="moon">🌙</span>
          <span className="light" sx={{
              position: 'absolute',
              top: '1px',
              right: '2px',
              fontSize: '10px',
          }} role="img" aria-label="sun">☀️</span>
      </span>

    </label>
  );
};

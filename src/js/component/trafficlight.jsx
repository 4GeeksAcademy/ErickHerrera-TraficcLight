import React,{ useState } from "react";
    function Semaforo() {
        const [color, setColor] = useState('');

        const alternarLuz = () => {
            setColor(prevLuz => {
              if (prevLuz === 'rojo') return 'amarillo';
              if (prevLuz === 'amarillo') return 'verde';
              return 'rojo';
            });
          };
      
        return (
            <>
              <button
                onClick={() => setColor('rojo')}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'red',
                  border: '2px solid black',
                  boxShadow: color === 'rojo' ? '0 0 20px 10px rgba(255, 0, 0, 0.5)' : 'none',
                }}
              ></button>
              
              <button
                onClick={() => setColor('amarillo')}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'yellow',
                  border: '2px solid black',
                  boxShadow: color === 'amarillo' ? '0 0 20px 10px rgba(255, 255, 0, 0.5)' : 'none',
                }}
              ></button>
              
              <button
                onClick={() => setColor('verde')}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'green',
                  border: '2px solid black',
                  boxShadow: color === 'verde' ? '0 0 20px 10px rgba(0, 255, 0, 0.5)' : 'none',
                }}
              ></button>
              <button
      onClick={alternarLuz}
      style={{
        marginTop: '30px',
        padding: '10px 25px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'white',
        background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
        border: 'none',
        borderRadius: '12px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseDown={(e) => (e.target.style.transform = 'scale(0.95)')}
      onMouseUp={(e) => (e.target.style.transform = 'scale(1)')}
      onMouseEnter={(e) => (e.target.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.35)')}
      onMouseLeave={(e) => (e.target.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)')}
    >
      Cambiar Luz
    </button>

            </>
        );
      }
      
      export default Semaforo;
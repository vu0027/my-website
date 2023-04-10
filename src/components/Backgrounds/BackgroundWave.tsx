import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

const BackgroundWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      let frameCount = 0;
      let animationFrameId: number;

      const drawWave = () => {
        if (context) {
          // Set the canvas resolution to twice the actual size
          canvas.width = canvas.clientWidth*2;
          canvas.height = canvas.clientHeight*2;


          context.clearRect(0, 0, canvas.width, canvas.height);

          const waveHeight = 100;
          const waveLength = 300;
          const xOffset = frameCount;
          const yOffset = canvas.height / 1.3;

          const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
          gradient.addColorStop(0, "#b2d8d8");
          gradient.addColorStop(1, "#99c9c9");

          context.moveTo(canvas.width, yOffset);

          for (let x = 0; x < canvas.width; x += 1000) {
            const y = waveHeight * Math.sin((x + xOffset) / (waveLength));
            context.lineTo(x, yOffset + y);
          }

          context.fillStyle = gradient;
          context.fill();


					// Draw bottom wave
					const gradient2 = context.createLinearGradient(0, 0, canvas.width, canvas.height);
					gradient2.addColorStop(0, "#95c8d8");
					gradient2.addColorStop(1, "#89b8c9");

					context.beginPath();
					context.moveTo(canvas.width, yOffset);

					for (let x = 0; x < canvas.width; x += 10) {
            const y = waveHeight * Math.sin((x + xOffset) / (waveLength));
						context.lineTo(x, yOffset + y);
					}

					context.fillStyle = gradient2;
					context.fill();

          frameCount++;
        }

        animationFrameId = requestAnimationFrame(drawWave);
      };

      drawWave();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);


	const Canvas = styled.canvas`
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 0;

	`
  return <Canvas className="wave-background" ref={canvasRef} />;
};

export default BackgroundWave;

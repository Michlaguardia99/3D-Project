import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress(); // Retrieve loading progress

  return (
    <Html>
      <div className="canvas-load"></div> {/* Changed from span to div for better styling */}
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress} % {/* Display the loading progress */}
      </p>
    </Html>
  );
};

export default Loader;

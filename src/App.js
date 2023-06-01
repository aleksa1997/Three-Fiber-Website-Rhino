import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Environment,
  Sparkles,
  ScrollControls,
  Scroll,
} from "@react-three/drei";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Galaxy } from "./models/Galaxy";
import { Jupiter } from "./models/Jupiter";
import { Earth } from "./models/Earth";
import { Sun } from "./models/Sun";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Vignette,
} from "@react-three/postprocessing";

function App() {
  return (
    <>
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.1}
          bokehScale={5}
          height={480}
        />
        <Bloom
          intensity={2}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          height={1000}
        />
        <Vignette eskil={false} offset={0.1} darkness={1.5} />
      </EffectComposer>

      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.2} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <Environment preset="warehouse" />

      <ScrollControls pages={6} damping={0.25}>
        <Scroll>
          <Jupiter scale={2} position={[0, -2, -8]} />

          <Galaxy scale={0.03} position={[0, -1, -10]} />

          <Earth scale={2} position={[0, -16, -8]} />

          <Galaxy scale={0.03} position={[-1, -12.5, 0]} />

          <Sun scale={0.3} position={[0, -32, -8]} />

          <Galaxy scale={0.03} position={[-3, -23.5, 2]} />

          <Galaxy scale={0.03} position={[-3, -34.5, 2]} />

          <Sparkles
            noise={0}
            count={500}
            speed={0.01}
            size={0.6}
            color={"#FFD2BE"}
            opacity={10}
            scale={[20, 100, 20]}
          ></Sparkles>
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
          <Container style={{ height: "100px", position: "relative" }}>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "400px", color: "lightgray" }}>
                    Rhino is the premier source of space exploration.
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "200vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px", color: "lightgray" }}>
                    We transport our visitors across the solar system and
                    beyond.
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "400vh",
              }}
            >
              <Col xs={8}>
                <div>
                  <h1 style={{ marginBottom: "400px", color: "lightgray" }}>
                    For us, exploring space is as much about the journey as it
                    is the destination.
                  </h1>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "500vh",
                marginTop: "150px",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "20px", color: "lightgray" }}>
                    At Rhino you'll find something amazing every day.
                  </h1>
                  <Button variant="outline-light" size="lg">
                    Join Now
                  </Button>{" "}
                </div>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;

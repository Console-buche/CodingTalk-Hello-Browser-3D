// vertexShader.js

export const vertexShader = `
uniform float time;
attribute vec3 instancePosition;

void main() {
  vec3 pos = position + instancePosition;
  vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * modelViewPosition;
}
`

// fragmentShader.js
export const fragmentShader = `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Set the color to red
  }
`

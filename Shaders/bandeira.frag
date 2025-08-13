#version 330 core
out vec4 FragColor;
in vec2 gl_FragCoord;
uniform float iTime;
uniform vec2 iResolution;

void main()
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = gl_FragCoord.xy/iResolution.xy;
    float prop = iResolution.x/iResolution.y;
    float x = length(vec2(uv.x*prop, uv.y) - vec2(prop/2.0,0.5));

    if(x > 0.3)
    {
        FragColor = vec4(1, 1, 1, 1);
    }

    else{ FragColor = vec4(1, 0, 0, 1); }
}

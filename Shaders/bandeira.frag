#version 330 core
out vec4 FragColor;
uniform float iTime;
uniform vec2 iResolution;
in vec2 TexCoord;
void main()
{
    //vec2 uv = gl_FragCoord.xy / iResolution.xy;
    vec2 uv = TexCoord;
    float wave = (cos ( (iTime + uv.x) * 2) * 0.1)/4 + 0.25;
FragColor = vec4(0.0, 0.0, 0.0, 0.0);

    if (uv.y < wave) 
    {
     FragColor = vec4(1.0, 0.0, 0.0, 0.0);
    }
     if (uv.y < wave + 0.1) 
    {
     FragColor = vec4(1.0, 1.0, 0.0, 0.0);
    }
    else if (uv.y < wave + 0.4)
    {
     FragColor = vec4(1.0, 0.0, 0.0, 0.0);
    }
 
}
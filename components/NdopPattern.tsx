// Ndop-inspired resist-dye pattern: irregular hand-drawn white strokes on
// indigo, echoing the Cameroonian Grassfields cloth. Generated deterministically
// so server and client render identical markup.

function rng(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

export default function NdopPattern({ width = 160, height = 900, seed = 7, opacity = 0.9 }: { width?: number; height?: number; seed?: number; opacity?: number }) {
  const r = rng(seed)
  const paths: string[] = []
  const dots: { x: number; y: number; r: number }[] = []
  const colGap = 22
  for (let x = 12; x < width; x += colGap + (r() * 8 - 4)) {
    let y = r() * 30
    while (y < height) {
      const len = 30 + r() * 120
      const wobble = 3 + r() * 5
      const x0 = x + (r() * 6 - 3)
      const y1 = Math.min(y + len, height)
      const cx1 = x0 + (r() * 2 - 1) * wobble
      const cx2 = x0 + (r() * 2 - 1) * wobble
      const x1 = x0 + (r() * 2 - 1) * 2
      paths.push(`M${x0.toFixed(1)} ${y.toFixed(1)} C${cx1.toFixed(1)} ${(y + len / 3).toFixed(1)} ${cx2.toFixed(1)} ${(y + (2 * len) / 3).toFixed(1)} ${x1.toFixed(1)} ${y1.toFixed(1)}`)
      y = y1 + 10 + r() * 26
      if (r() > 0.86) dots.push({ x: x0 + colGap / 2, y: y - 6, r: 1.8 + r() * 1.8 })
    }
  }
  return (
    <svg aria-hidden viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid slice" width="100%" height="100%" style={{ display: 'block', opacity }}>
      <g stroke="#e9ecf3" strokeLinecap="round" fill="none">
        {paths.map((d, i) => (
          <path key={i} d={d} strokeWidth={3 + ((i * 37) % 5) * 0.6} />
        ))}
      </g>
      <g fill="#e9ecf3">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} />
        ))}
      </g>
    </svg>
  )
}

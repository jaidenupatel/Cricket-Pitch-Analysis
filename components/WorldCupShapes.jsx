export function StarFour({ color = '#e91e8c', size = 60, opacity = 1, rotate = 0 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
    >
      <path
        fill={color}
        d="M50 0 C50 0 55 40 100 50 C100 50 55 55 50 100 C50 100 45 55 0 50 C0 50 45 45 50 0Z"
      />
    </svg>
  )
}

export function StarSix({ color = '#f5c518', size = 60, opacity = 1, rotate = 0 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
    >
      <path
        fill={color}
        d="M50 5 L54 40 L85 25 L65 52 L95 62 L62 62 L68 95 L50 72 L32 95 L38 62 L5 62 L35 52 L15 25 L46 40 Z"
      />
    </svg>
  )
}

export function Droplet({ color = '#00b4d8', size = 60, opacity = 1, rotate = 0 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
    >
      <path
        fill={color}
        d="M50 10 C50 10 20 45 20 65 C20 82 34 95 50 95 C66 95 80 82 80 65 C80 45 50 10 50 10Z"
      />
    </svg>
  )
}

export function Diamond({ color = '#e91e8c', size = 40, opacity = 1, rotate = 0 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
    >
      <rect x="15" y="15" width="70" height="70" fill={color} transform="rotate(45 50 50)" />
    </svg>
  )
}

export function FlowerCross({ color = '#e91e8c', size = 60, opacity = 1, rotate = 0 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
    >
      <circle cx="50" cy="20" r="15" fill={color} />
      <circle cx="50" cy="80" r="15" fill={color} />
      <circle cx="20" cy="50" r="15" fill={color} />
      <circle cx="80" cy="50" r="15" fill={color} />
      <circle cx="50" cy="50" r="18" fill={color} />
    </svg>
  )
}
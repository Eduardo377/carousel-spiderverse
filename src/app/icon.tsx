import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <link rel="shortcut icon" href="/public/assets/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/public/assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/public/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/public/assets/favicon-16x16.png" />
        <link rel="mask-icon" href="/public/assets/safari-pinned-tab.svg" color="#5bbad5" />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}
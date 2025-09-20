import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 12,
          background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 700,
          borderRadius: 6,
        }}
      >
        SE
      </div>
    ),
    {
      ...size,
    }
  );
}
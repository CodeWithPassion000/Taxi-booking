import { NextResponse } from 'next/server';

const BASE_URL = 'https://api.mapbox.com/search/searchbox/v1/suggest';
const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiY29kZXdpdGhwYXNzaW9uMDAwIiwiYSI6ImNsdHNwMzE3aTB3cTYycXFtM3l1cnVsYzUifQ.q362IhUsHmCfLirKDp8z_A';

interface Request {
  url: string;
}

export async function GET(request: string) {
  // const { searchParams } = new URL(request.url);

  // const searchText = searchParams.get('q');

  const response = await fetch(
    `${BASE_URL}?q=${request}?language=en&limit=8&session_token=[GENERATED-UUID]&proximity=-83.748708,42.265837&country=IN&access_token=${MAPBOX_ACCESS_TOKEN}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const searchResult = await response.json();

  return NextResponse.json(searchResult);
}

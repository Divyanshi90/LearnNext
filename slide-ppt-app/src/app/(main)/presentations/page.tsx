
import React from 'react'
import "./style.scss";
import PresentationsClientContainer from '@/components/ClientComponents/PresentationsClientContainer';


async function fetchPresentations(page: number) {
  try {
    const response = await fetch("https://dev.keynoteslides.com/ppt/v1/ppt/list", {
      method: "POST",
      body: JSON.stringify({ page: page, pageSize: 100 }),
      headers: {
        'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcl9pZCI6IjYzNDA5NjMiLCJleHAiOjE3MjcyNjUzMjZ9.aWS7makU9qLcERCgGFCzQcx_azg2d5WvbKZ54nO_AgM",
        'Content-Type': 'application/json'  // Add Content-Type header
      }
    });
    const data = await response.json();
    return data.data || {};
  } catch (error) {
    console.error('Error fetching presentations:', error);
    return {};
  }
}

export default async function PresentationContainer() {
  const page = 0; // initial page
  const data = await fetchPresentations(page);

  console.log(data);
  return (
    <div className="width-100 height-100 ppt-presentation-wrapper ppt-flex ppt-flex-wrap">
    <PresentationsClientContainer initialPresentations={data?.records || []} totalPages={data?.paginationInfo?.totalPages || 0} />
  </div>
  )
}

// export default PresentationContainer
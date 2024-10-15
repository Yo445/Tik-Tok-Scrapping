import React from 'react'

export default function grid() {
  return (
    <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-1 lg:grid-cols-1">
  {/* <!-- Section 1 --> */}
  <div class="bg-gray-100 p-6 rounded shadow">
    <h2 class="text-xl font-bold mb-4">Section 1</h2>
    <p>This is the first section content.</p>
  </div>
  
  {/* <!-- Section 2 --> */}
  <div class="bg-gray-100 p-6 rounded shadow">
    <h2 class="text-xl font-bold mb-4">Section 2</h2>
    <p>This is the second section content.</p>
  </div>
  
  {/* <!-- Section 3 --> */}
  <div class="bg-gray-100 p-6 rounded shadow">
    <h2 class="text-xl font-bold mb-4">Section 3</h2>
    <p>This is the third section content.</p>
  </div>
</div>

  )
}

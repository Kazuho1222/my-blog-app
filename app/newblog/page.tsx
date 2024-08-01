
function page() {
  return (
    <div className='container mx-auto p-4'>
      <div>
        <input className="hover:outline border-2 rounded-md mb-4 p-2" type='text' placeholder='タイトル'>
        </input>
      </div>
      <div>
        <input className="hover:outline border-2 rounded-md mb-4 p-2" type='content' placeholder='本文'>
        </input>
      </div>
    </div>
  )
}

export default page
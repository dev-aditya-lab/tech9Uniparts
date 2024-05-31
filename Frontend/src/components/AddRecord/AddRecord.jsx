import React from 'react'

export const AddRecord = () => {
  return (
    <>
        <div>
            <form className='flex flex-wrap gap-5 w-full'>
                <input type="text" placeholder="Item Name" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Rate" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Qty" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Year1" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Year2" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Year3" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Year4" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Year5" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="submit" value="Add Record" className="btn btn-primary w-full max-w-xs" />
            </form>
        </div>
    </>
  )
}

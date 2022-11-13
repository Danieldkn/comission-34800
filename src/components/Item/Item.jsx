import React from 'react'

const Item = () => {
  return (
    <div>
      <div key={obj.id} className='card w-50 mt-2'>
                                                <Link to={`/detail/${obj.id}`}>
                                                    <div className='card-header'>
                                                        {obj.name}
                                                    </div>
                                                    <div className='card-body'>
                                                        <center>
                                                            <img src={obj.foto} className="w-50" />
                                                        </center>
                                                    </div>
                                                    <div className='card-footer'>
                                                        categoria: {obj.categoria}
                                                        {/* precio : {obj.price} */}
                                                    </div>
                                                </Link>
                                            </div>
    </div>
  )
}

export default Itemlist

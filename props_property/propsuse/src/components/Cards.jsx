import { Bookmark } from 'lucide-react'

// We receive the data object as 'company' (prop)
function Cards({ company }) {
  return (
    <div className='cards'>
      <div className='top'>
        <img src={company.brandLogo} alt={company.companyName} />
        <button>save <Bookmark /></button>
      </div>

      <div className='center'>
        <h3>{company.companyName} <span>{company.datePosted}</span></h3>
        <h2>{company.post}</h2>
        <div>
          <h4>{company.tag1}</h4>
          <h4>{company.tag2}</h4>
        </div>
      </div>

      <div className='bottom'>
        <div>
          <div>
            <h3>{company.pay}</h3>
            <p>{company.location}</p>
          </div>
          <span>
            <button>Apply Now</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Cards
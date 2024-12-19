import React from 'react'

const HashtagItem = ({company, setSelectedCompany,}:{
    company:string;
    setSelectedCompany:(_:string)=>void;
}) => {
  return (
    <div>
        <li key={company}>
            <button value={company} onClick={(e)=>{
              setSelectedCompany(e.currentTarget.value);
            }}>#{company.toLowerCase()}</button>
          </li>
    </div>
  )
}

export default HashtagItem